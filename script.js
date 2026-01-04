// Main Application Script
document.addEventListener('DOMContentLoaded', function() {
    // Load external scripts
    const translationsScript = document.createElement('script');
    translationsScript.src = 'translations.js';
    document.head.appendChild(translationsScript);
    
    const formulasScript = document.createElement('script');
    formulasScript.src = 'formulas.js';
    document.head.appendChild(formulasScript);
    
    // Wait for scripts to load
    setTimeout(initializeApp, 100);
});

function initializeApp() {
    // State
    let currentLanguage = localStorage.getItem('language') || 'en';
    let currentClass = localStorage.getItem('selectedClass') || null;
    let currentTopic = 'all';
    
    // DOM Elements
    const languageLabel = document.querySelector('.language-label');
    const languageDropdown = document.querySelector('.language-dropdown');
    const selectedLanguage = document.querySelector('.selected-language');
    const dropdownIcon = document.querySelector('.dropdown-icon');
    const classOptions = document.querySelectorAll('.class-option');
    const topicFilters = document.querySelectorAll('.topic-filter');
    const formulaContainer = document.getElementById('formula-container');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const feedbackForm = document.getElementById('feedback-form');
    const showResourcesBtn = document.getElementById('show-resources-btn');
    const resourcesContainer = document.getElementById('resources-container');
    
    // Initialize language
    updateLanguage(currentLanguage);
    
    // Language Selector
    selectedLanguage.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('show');
        if (languageDropdown.classList.contains('show')) {
            dropdownIcon.style.transform = 'rotate(180deg)';
        } else {
            dropdownIcon.style.transform = 'rotate(0deg)';
        }
    });
    
    document.addEventListener('click', function(event) {
        if (!selectedLanguage.contains(event.target)) {
            languageDropdown.classList.remove('show');
            dropdownIcon.style.transform = 'rotate(0deg)';
        }
    });
    
    document.querySelectorAll('.language-dropdown li').forEach(option => {
        option.addEventListener('click', function() {
            const langCode = this.getAttribute('data-lang');
            const langName = this.getAttribute('data-name');
            currentLanguage = langCode;
            localStorage.setItem('language', langCode);
            languageLabel.textContent = langName;
            
            document.querySelectorAll('.language-dropdown li').forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            languageDropdown.classList.remove('show');
            dropdownIcon.style.transform = 'rotate(0deg)';
            
            updateLanguage(langCode);
            if (currentClass) {
                loadFormulas(currentClass, currentTopic);
            }
        });
    });
    
    // Class Selection
    classOptions.forEach(option => {
        option.addEventListener('click', function() {
            classOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            currentClass = this.getAttribute('data-class');
            localStorage.setItem('selectedClass', currentClass);
            
            loadFormulas(currentClass, currentTopic);
            
            // Scroll to formulas
            document.getElementById('topic-section').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Topic Filtering
    topicFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            topicFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            currentTopic = this.getAttribute('data-topic');
            
            if (currentClass) {
                loadFormulas(currentClass, currentTopic);
            }
        });
    });
    
    // Search Functionality
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        if (!query) return;
        
        const searchResultsSection = document.getElementById('search-results-section');
        const searchResults = document.getElementById('search-results');
        
        let results = [];
        
        // Search through all formulas
        if (typeof mathFormulas !== 'undefined') {
            Object.keys(mathFormulas).forEach(grade => {
                mathFormulas[grade].forEach(formula => {
                    const title = formula.title[currentLanguage] || formula.title.en;
                    const explanation = formula.explanation[currentLanguage] || formula.explanation.en;
                    
                    if (title.toLowerCase().includes(query) || 
                        explanation.toLowerCase().includes(query) ||
                        formula.correctFormula.toLowerCase().includes(query) ||
                        formula.topic.toLowerCase().includes(query)) {
                        results.push({ ...formula, grade });
                    }
                });
            });
        }
        
        searchResultsSection.classList.remove('hidden');
        
        if (results.length === 0) {
            searchResults.innerHTML = `<p>${translate('searchPrompt')}</p>`;
        } else {
            let html = `<h3>${results.length} ${translate('searchResults')}</h3>`;
            results.forEach(result => {
                const title = result.title[currentLanguage] || result.title.en;
                const explanation = result.explanation[currentLanguage] || result.explanation.en;
                html += `
                    <div class="formula-card" style="margin-bottom: 1rem;">
                        <div class="formula-header">
                            <div class="formula-topic-badge ${result.topic}">${result.topic}</div>
                            <h3>${title}</h3>
                        </div>
                        <p>${explanation}</p>
                        <div class="formula-box">
                            <p class="formula-math">${result.correctFormula}</p>
                        </div>
                        <small>Grade ${result.grade}</small>
                    </div>
                `;
            });
            searchResults.innerHTML = html;
        }
        
        searchResultsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Feedback Form
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const feedbackInput = document.getElementById('feedback-input');
        const feedbackDisplay = document.getElementById('feedback-display');
        const submittedFeedback = document.getElementById('submitted-feedback');
        
        const feedback = feedbackInput.value.trim();
        if (!feedback) return;
        
        submittedFeedback.textContent = feedback;
        feedbackDisplay.classList.remove('hidden');
        feedbackInput.value = '';
        
        // Store feedback
        const feedbackList = JSON.parse(localStorage.getItem('feedback') || '[]');
        feedbackList.push({ text: feedback, date: new Date().toISOString() });
        localStorage.setItem('feedback', JSON.stringify(feedbackList));
        
        setTimeout(() => {
            feedbackDisplay.classList.add('hidden');
        }, 5000);
    });
    
    // Show Resources
    if (showResourcesBtn) {
        showResourcesBtn.addEventListener('click', function() {
            resourcesContainer.classList.toggle('hidden');
        });
    }
    
    // Load Formulas Function
    function loadFormulas(classNumber, topic = 'all') {
        if (typeof mathFormulas === 'undefined') {
            formulaContainer.innerHTML = '<p>Loading formulas...</p>';
            return;
        }
        
        const formulas = mathFormulas[classNumber] || [];
        const filteredFormulas = topic === 'all' 
            ? formulas 
            : formulas.filter(f => f.topic === topic);
        
        if (filteredFormulas.length === 0) {
            formulaContainer.innerHTML = `<p>${translate('formulasIntro')}</p>`;
            return;
        }
        
        formulaContainer.innerHTML = '';
        
        filteredFormulas.forEach((formula, index) => {
            const card = createFormulaCard(formula, classNumber, index);
            formulaContainer.appendChild(card);
        });
    }
    
    // Create Formula Card
    function createFormulaCard(formula, classNumber, index) {
        const card = document.createElement('div');
        card.className = 'formula-card';
        
        const title = formula.title[currentLanguage] || formula.title.en;
        const explanation = formula.explanation[currentLanguage] || formula.explanation.en;
        const helpTip = formula.helpTip[currentLanguage] || formula.helpTip.en;
        
        card.innerHTML = `
            <div class="formula-header">
                <div class="formula-topic-badge ${formula.topic}">${formula.topic}</div>
                <h3 class="formula-title">${title}</h3>
            </div>
            <div class="formula-body">
                <div class="formula-explanation">
                    <p class="explanation-text">${explanation}</p>
                </div>
                <div class="formula-display">
                    <div class="formula-box">
                        <p class="formula-math">${formula.correctFormula}</p>
                    </div>
                </div>
                <div class="formula-variables">
                    <h4>${translate('whereLabel')}</h4>
                    <ul class="variables-list">
                        ${Object.entries(formula.variables).map(([key, value]) => 
                            `<li><strong>${key}</strong>: ${value}</li>`
                        ).join('')}
                    </ul>
                </div>
                ${formula.example ? `
                <div class="formula-example">
                    <h4>📝 ${translate('exampleLabel')}</h4>
                    <pre class="example-content">${formula.example[currentLanguage] || formula.example.en}</pre>
                </div>
                ` : ''}
            </div>
            ${formula.practiceTask ? `
            <div class="formula-practice-task">
                <h4>✏️ ${translate('practiceTaskLabel')}</h4>
                <p class="practice-question">${formula.practiceTask.question[currentLanguage] || formula.practiceTask.question.en}</p>
                <div class="practice-input-group">
                    <input type="number" class="practice-answer-input" placeholder="${translate('yourAnswer')}" step="0.01">
                    <button class="check-practice-btn">${translate('checkAnswer')}</button>
                </div>
                <div class="practice-feedback hidden"></div>
            </div>
            ` : ''}
            <div class="formula-practice">
                <h4>${translate('practiceLabel')}</h4>
                <textarea class="formula-input" placeholder="${translate('practiceInputPlaceholder')}"></textarea>
                <button class="check-answer-btn">${translate('checkAnswer')}</button>
                <div class="answer-feedback hidden"></div>
            </div>
            <div class="formula-help">
                <button class="help-toggle-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    <span>${translate('needHelp')}</span>
                </button>
                <div class="help-content hidden">
                    <p class="help-tip">${helpTip}</p>
                </div>
            </div>
        `;
        
        // Add event listeners
        const checkBtn = card.querySelector('.check-answer-btn');
        const input = card.querySelector('.formula-input');
        const feedback = card.querySelector('.answer-feedback');
        const helpBtn = card.querySelector('.help-toggle-btn');
        const helpContent = card.querySelector('.help-content');
        
        checkBtn.addEventListener('click', function() {
            const userAnswer = input.value.trim();
            if (!userAnswer) return;
            
            const isCorrect = checkFormula(userAnswer, formula.correctFormula);
            
            feedback.classList.remove('hidden', 'correct', 'incorrect');
            if (isCorrect) {
                feedback.classList.add('correct');
                feedback.textContent = translate('correctAnswer');
            } else {
                feedback.classList.add('incorrect');
                feedback.textContent = translate('incorrectAnswer');
            }
        });
        
        helpBtn.addEventListener('click', function() {
            helpContent.classList.toggle('hidden');
        });
        
        // Practice task answer checking
        if (formula.practiceTask) {
            const practiceInput = card.querySelector('.practice-answer-input');
            const practiceBtn = card.querySelector('.check-practice-btn');
            const practiceFeedback = card.querySelector('.practice-feedback');
            
            practiceBtn.addEventListener('click', function() {
                const userAnswer = practiceInput.value.trim();
                if (!userAnswer) return;
                
                const correctAnswer = parseFloat(formula.practiceTask.answer);
                const userValue = parseFloat(userAnswer);
                const tolerance = 0.01; // Allow small rounding differences
                
                const isCorrect = Math.abs(userValue - correctAnswer) < tolerance;
                
                practiceFeedback.classList.remove('hidden', 'correct', 'incorrect');
                if (isCorrect) {
                    practiceFeedback.classList.add('correct');
                    practiceFeedback.innerHTML = `✅ ${translate('correctAnswer')} ${translate('theAnswerIs')} ${correctAnswer}`;
                } else {
                    practiceFeedback.classList.add('incorrect');
                    practiceFeedback.innerHTML = `❌ ${translate('incorrectAnswer')} ${translate('tryAgain')}`;
                }
            });
            
            // Allow Enter key to check answer
            practiceInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    practiceBtn.click();
                }
            });
        }
        
        return card;
    }
    
    // Check Formula
    function checkFormula(userFormula, correctFormula) {
        const normalize = (str) => str.toLowerCase()
            .replace(/\s+/g, '')
            .replace(/\*/g, '×')
            .replace(/x/g, '×')
            .replace(/\^2/g, '²')
            .replace(/\^3/g, '³')
            .replace(/pi/g, 'π');
        
        return normalize(userFormula) === normalize(correctFormula);
    }
    
    // Update Language
    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = translate(key, lang);
        });
        
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = translate(key, lang);
        });
    }
    
    // Translate Function
    function translate(key, lang = currentLanguage) {
        if (typeof translations === 'undefined') return key;
        return translations[lang]?.[key] || translations.en?.[key] || key;
    }
    
    // Auto-load if class was previously selected
    if (currentClass) {
        const classOption = document.querySelector(`.class-option[data-class="${currentClass}"]`);
        if (classOption) {
            classOption.classList.add('active');
            loadFormulas(currentClass, currentTopic);
        }
    }
}
