// Comprehensive Math Formulas Database
const mathFormulas = {
    '7': [
        {
            title: { en: "Area of Rectangle", es: "Área del Rectángulo", fr: "Aire du Rectangle", de: "Fläche des Rechtecks", it: "Area del Rettangolo", pt: "Área do Retângulo", ru: "Площадь Прямоугольника", ar: "مساحة المستطيل", zh: "矩形面积", ja: "長方形の面積", hi: "आयत का क्षेत्रफल", tr: "Dikdörtgen Alanı" },
            explanation: { en: "The area of a rectangle is calculated by multiplying its length by its width.", es: "El área de un rectángulo se calcula multiplicando su largo por su ancho.", fr: "L'aire d'un rectangle se calcule en multipliant sa longueur par sa largeur.", de: "Die Fläche eines Rechtecks wird berechnet, indem man seine Länge mit seiner Breite multipliziert.", it: "L'area di un rettangolo si calcola moltiplicando la sua lunghezza per la sua larghezza.", pt: "A área de um retângulo é calculada multiplicando seu comprimento por sua largura.", ru: "Площадь прямоугольника вычисляется путем умножения его длины на ширину.", ar: "تُحسب مساحة المستطيل بضرب طوله في عرضه.", zh: "矩形的面积通过将其长度乘以宽度来计算。", ja: "長方形の面積は、その長さに幅を掛けて計算されます。", hi: "आयत का क्षेत्रफल उसकी लंबाई को चौड़ाई से गुणा करके निकाला जाता है।", tr: "Bir dikdörtgenin alanı, uzunluğu ile genişliği çarpılarak hesaplanır." },
            correctFormula: 'A = l × w',
            topic: 'geometry',
            variables: { 'A': 'area', 'l': 'length', 'w': 'width' },
            example: {
                en: "If l = 8 and w = 5, find A:\nA = 8 × 5\nA = 40 square units",
                es: "Si l = 8 y w = 5, encuentra A:\nA = 8 × 5\nA = 40 unidades cuadradas",
                fr: "Si l = 8 et w = 5, trouvez A:\nA = 8 × 5\nA = 40 unités carrées",
                de: "Wenn l = 8 und w = 5, finde A:\nA = 8 × 5\nA = 40 Quadrateinheiten",
                it: "Se l = 8 e w = 5, trova A:\nA = 8 × 5\nA = 40 unità quadrate",
                pt: "Se l = 8 e w = 5, encontre A:\nA = 8 × 5\nA = 40 unidades quadradas",
                ru: "Если l = 8 и w = 5, найдите A:\nA = 8 × 5\nA = 40 квадратных единиц",
                ar: "إذا كان l = 8 و w = 5، أوجد A:\nA = 8 × 5\nA = 40 وحدة مربعة",
                zh: "如果 l = 8 且 w = 5，求 A：\nA = 8 × 5\nA = 40 平方单位",
                ja: "l = 8、w = 5 のとき、A を求めよ：\nA = 8 × 5\nA = 40 平方単位",
                hi: "यदि l = 8 और w = 5, तो A ढूंढें:\nA = 8 × 5\nA = 40 वर्ग इकाइयाँ",
                tr: "Eğer l = 8 ve w = 5 ise, A'yı bulun:\nA = 8 × 5\nA = 40 kare birim"
            },
            practiceTask: {
                question: {
                    en: "A rectangle has length = 12 and width = 7. Find the area.",
                    es: "Un rectángulo tiene largo = 12 y ancho = 7. Encuentra el área.",
                    fr: "Un rectangle a longueur = 12 et largeur = 7. Trouvez l'aire.",
                    de: "Ein Rechteck hat Länge = 12 und Breite = 7. Finde die Fläche.",
                    it: "Un rettangolo ha lunghezza = 12 e larghezza = 7. Trova l'area.",
                    pt: "Um retângulo tem comprimento = 12 e largura = 7. Encontre a área.",
                    ru: "Прямоугольник имеет длину = 12 и ширину = 7. Найдите площадь.",
                    ar: "مستطيل له طول = 12 وعرض = 7. أوجد المساحة.",
                    zh: "一个矩形的长 = 12，宽 = 7。求面积。",
                    ja: "長方形の長さ = 12、幅 = 7。面積を求めよ。",
                    hi: "एक आयत की लंबाई = 12 और चौड़ाई = 7। क्षेत्रफल ढूंढें।",
                    tr: "Bir dikdörtgenin uzunluğu = 12 ve genişliği = 7. Alanı bulun."
                },
                answer: "84",
                unit: "square units"
            },
            helpTip: { en: "Remember: Area is always in square units!", es: "Recuerda: ¡El área siempre está en unidades cuadradas!", fr: "Rappelez-vous: L'aire est toujours en unités carrées!", de: "Denken Sie daran: Die Fläche ist immer in Quadrateinheiten!", it: "Ricorda: L'area è sempre in unità quadrate!", pt: "Lembre-se: A área está sempre em unidades quadradas!", ru: "Помните: Площадь всегда в квадратных единицах!", ar: "تذكر: المساحة دائمًا بالوحدات المربعة!", zh: "记住：面积总是以平方单位表示！", ja: "覚えておいてください：面積は常に平方単位です！", hi: "याद रखें: क्षेत्रफल हमेशा वर्ग इकाइयों में होता है!", tr: "Unutmayın: Alan her zaman kare birimlerindedir!" }
        },
        {
            title: { en: "Perimeter of Rectangle", es: "Perímetro del Rectángulo", fr: "Périmètre du Rectangle", de: "Umfang des Rechtecks", it: "Perimetro del Rettangolo", pt: "Perímetro do Retângulo", ru: "Периметр Прямоугольника", ar: "محيط المستطيل", zh: "矩形周长", ja: "長方形の周囲", hi: "आयत की परिधि", tr: "Dikdörtgen Çevresi" },
            explanation: { en: "The perimeter is the total distance around the rectangle, calculated by adding all four sides.", es: "El perímetro es la distancia total alrededor del rectángulo, calculada sumando los cuatro lados.", fr: "Le périmètre est la distance totale autour du rectangle, calculée en additionnant les quatre côtés.", de: "Der Umfang ist der Gesamtabstand um das Rechteck, berechnet durch Addition aller vier Seiten.", it: "Il perimetro è la distanza totale attorno al rettangolo, calcolata sommando tutti e quattro i lati.", pt: "O perímetro é a distância total ao redor do retângulo, calculada somando todos os quatro lados.", ru: "Периметр - это общее расстояние вокруг прямоугольника, вычисляемое путем сложения всех четырех сторон.", ar: "المحيط هو المسافة الإجمالية حول المستطيل، ويُحسب بجمع جميع الجوانب الأربعة.", zh: "周长是矩形周围的总距离，通过将所有四条边相加来计算。", ja: "周囲は長方形の周りの総距離で、4つの辺すべてを足して計算されます。", hi: "परिधि आयत के चारों ओर की कुल दूरी है, जो सभी चार भुजाओं को जोड़कर निकाली जाती है।", tr: "Çevre, dikdörtgenin etrafındaki toplam mesafedir ve dört kenarın tümü toplanarak hesaplanır." },
            correctFormula: 'P = 2(l + w)',
            topic: 'geometry',
            variables: { 'P': 'perimeter', 'l': 'length', 'w': 'width' },
            example: {
                en: "If l = 6 and w = 3, find P:\nP = 2(6 + 3)\nP = 2(9)\nP = 18 units",
                es: "Si l = 6 y w = 3, encuentra P:\nP = 2(6 + 3)\nP = 2(9)\nP = 18 unidades",
                fr: "Si l = 6 et w = 3, trouvez P:\nP = 2(6 + 3)\nP = 2(9)\nP = 18 unités",
                de: "Wenn l = 6 und w = 3, finde P:\nP = 2(6 + 3)\nP = 2(9)\nP = 18 Einheiten",
                it: "Se l = 6 e w = 3, trova P:\nP = 2(6 + 3)\nP = 2(9)\nP = 18 unità",
                pt: "Se l = 6 e w = 3, encontre P:\nP = 2(6 + 3)\nP = 2(9)\nP = 18 unidades",
                ru: "Если l = 6 и w = 3, найдите P:\nP = 2(6 + 3)\nP = 2(9)\nP = 18 единиц",
                ar: "إذا كان l = 6 و w = 3، أوجد P:\nP = 2(6 + 3)\nP = 2(9)\nP = 18 وحدة",
                zh: "如果 l = 6 且 w = 3，求 P：\nP = 2(6 + 3)\nP = 2(9)\nP = 18 单位",
                ja: "l = 6、w = 3 のとき、P を求めよ：\nP = 2(6 + 3)\nP = 2(9)\nP = 18 単位",
                hi: "यदि l = 6 और w = 3, तो P ढूंढें:\nP = 2(6 + 3)\nP = 2(9)\nP = 18 इकाइयाँ",
                tr: "Eğer l = 6 ve w = 3 ise, P'yi bulun:\nP = 2(6 + 3)\nP = 2(9)\nP = 18 birim"
            },
            practiceTask: {
                question: {
                    en: "A rectangle has length = 9 and width = 4. Find the perimeter.",
                    es: "Un rectángulo tiene largo = 9 y ancho = 4. Encuentra el perímetro.",
                    fr: "Un rectangle a longueur = 9 et largeur = 4. Trouvez le périmètre.",
                    de: "Ein Rechteck hat Länge = 9 und Breite = 4. Finde den Umfang.",
                    it: "Un rettangolo ha lunghezza = 9 e larghezza = 4. Trova il perimetro.",
                    pt: "Um retângulo tem comprimento = 9 e largura = 4. Encontre o perímetro.",
                    ru: "Прямоугольник имеет длину = 9 и ширину = 4. Найдите периметр.",
                    ar: "مستطيل له طول = 9 وعرض = 4. أوجد المحيط.",
                    zh: "一个矩形的长 = 9，宽 = 4。求周长。",
                    ja: "長方形の長さ = 9、幅 = 4。周囲を求めよ。",
                    hi: "एक आयत की लंबाई = 9 और चौड़ाई = 4। परिधि ढूंढें।",
                    tr: "Bir dikdörtgenin uzunluğu = 9 ve genişliği = 4. Çevreyi bulun."
                },
                answer: "26",
                unit: "units"
            },
            helpTip: { en: "You can also write it as P = 2l + 2w", es: "También puedes escribirlo como P = 2l + 2w", fr: "Vous pouvez aussi l'écrire comme P = 2l + 2w", de: "Sie können es auch als P = 2l + 2w schreiben", it: "Puoi anche scriverlo come P = 2l + 2w", pt: "Você também pode escrever como P = 2l + 2w", ru: "Вы также можете записать это как P = 2l + 2w", ar: "يمكنك أيضًا كتابتها كـ P = 2l + 2w", zh: "你也可以写成 P = 2l + 2w", ja: "P = 2l + 2w とも書けます", hi: "आप इसे P = 2l + 2w के रूप में भी लिख सकते हैं", tr: "Bunu P = 2l + 2w olarak da yazabilirsiniz" }
        },
        {
            title: { en: "Area of Triangle", es: "Área del Triángulo", fr: "Aire du Triangle", de: "Fläche des Dreiecks", it: "Area del Triangolo", pt: "Área do Triângulo", ru: "Площадь Треугольника", ar: "مساحة المثلث", zh: "三角形面积", ja: "三角形の面積", hi: "त्रिभुज का क्षेत्रफल", tr: "Üçgen Alanı" },
            explanation: { en: "The area of a triangle is half the product of its base and height.", es: "El área de un triángulo es la mitad del producto de su base y altura.", fr: "L'aire d'un triangle est la moitié du produit de sa base et de sa hauteur.", de: "Die Fläche eines Dreiecks ist die Hälfte des Produkts aus Basis und Höhe.", it: "L'area di un triangolo è la metà del prodotto della sua base e altezza.", pt: "A área de um triângulo é metade do produto de sua base e altura.", ru: "Площадь треугольника равна половине произведения его основания и высоты.", ar: "مساحة المثلث هي نصف حاصل ضرب قاعدته وارتفاعه.", zh: "三角形的面积是其底边和高的乘积的一半。", ja: "三角形の面積は、その底辺と高さの積の半分です。", hi: "त्रिभुज का क्षेत्रफल उसके आधार और ऊंचाई के गुणनफल का आधा होता है।", tr: "Bir üçgenin alanı, tabanı ile yüksekliğinin çarpımının yarısıdır." },
            correctFormula: 'A = (1/2) × b × h',
            topic: 'geometry',
            variables: { 'A': 'area', 'b': 'base', 'h': 'height' },
            example: {
                en: "If b = 10 and h = 6, find A:\nA = (1/2) × 10 × 6\nA = (1/2) × 60\nA = 30 square units",
                es: "Si b = 10 y h = 6, encuentra A:\nA = (1/2) × 10 × 6\nA = (1/2) × 60\nA = 30 unidades cuadradas",
                fr: "Si b = 10 et h = 6, trouvez A:\nA = (1/2) × 10 × 6\nA = (1/2) × 60\nA = 30 unités carrées",
                de: "Wenn b = 10 und h = 6, finde A:\nA = (1/2) × 10 × 6\nA = (1/2) × 60\nA = 40 Quadrateinheiten",
                it: "Se b = 10 e h = 6, trova A:\nA = (1/2) × 10 × 6\nA = (1/2) × 60\nA = 30 unità quadrate",
                pt: "Se b = 10 e h = 6, encontre A:\nA = (1/2) × 10 × 6\nA = (1/2) × 60\nA = 30 unidades quadradas",
                ru: "Если b = 10 и h = 6, найдите A:\nA = (1/2) × 10 × 6\nA = (1/2) × 60\nA = 30 квадратных единиц",
                ar: "إذا كان b = 10 و h = 6، أوجد A:\nA = (1/2) × 10 × 6\nA = (1/2) × 60\nA = 30 وحدة مربعة",
                zh: "如果 b = 10 且 h = 6，求 A：\nA = (1/2) × 10 × 6\nA = (1/2) × 60\nA = 30 平方单位",
                ja: "b = 10、h = 6 のとき、A を求めよ：\nA = (1/2) × 10 × 6\nA = (1/2) × 60\nA = 30 平方単位",
                hi: "यदि b = 10 और h = 6, तो A ढूंढें:\nA = (1/2) × 10 × 6\nA = (1/2) × 60\nA = 30 वर्ग इकाइयाँ",
                tr: "Eğer b = 10 ve h = 6 ise, A'yı bulun:\nA = (1/2) × 10 × 6\nA = (1/2) × 60\nA = 30 kare birim"
            },
            practiceTask: {
                question: {
                    en: "A triangle has base = 14 and height = 8. Find the area.",
                    es: "Un triángulo tiene base = 14 y altura = 8. Encuentra el área.",
                    fr: "Un triangle a base = 14 et hauteur = 8. Trouvez l'aire.",
                    de: "Ein Dreieck hat Basis = 14 und Höhe = 8. Finde die Fläche.",
                    it: "Un triangolo ha base = 14 e altezza = 8. Trova l'area.",
                    pt: "Um triângulo tem base = 14 e altura = 8. Encontre a área.",
                    ru: "Треугольник имеет основание = 14 и высоту = 8. Найдите площадь.",
                    ar: "مثلث له قاعدة = 14 وارتفاع = 8. أوجد المساحة.",
                    zh: "一个三角形的底 = 14，高 = 8。求面积。",
                    ja: "三角形の底辺 = 14、高さ = 8。面積を求めよ。",
                    hi: "एक त्रिभुज का आधार = 14 और ऊंचाई = 8। क्षेत्रफल ढूंढें।",
                    tr: "Bir üçgenin tabanı = 14 ve yüksekliği = 8. Alanı bulun."
                },
                answer: "56",
                unit: "square units"
            },
            helpTip: { en: "The height must be perpendicular to the base!", es: "¡La altura debe ser perpendicular a la base!", fr: "La hauteur doit être perpendiculaire à la base!", de: "Die Höhe muss senkrecht zur Basis sein!", it: "L'altezza deve essere perpendicolare alla base!", pt: "A altura deve ser perpendicular à base!", ru: "Высота должна быть перпендикулярна основанию!", ar: "يجب أن يكون الارتفاع عموديًا على القاعدة!", zh: "高度必须垂直于底边！", ja: "高さは底辺に対して垂直でなければなりません！", hi: "ऊंचाई आधार के लंबवत होनी चाहिए!", tr: "Yükseklik tabana dik olmalıdır!" }
        },
        {
            title: { en: "Circumference of Circle", es: "Circunferencia del Círculo", fr: "Circonférence du Cercle", de: "Umfang des Kreises", it: "Circonferenza del Cerchio", pt: "Circunferência do Círculo", ru: "Длина Окружности", ar: "محيط الدائرة", zh: "圆周长", ja: "円の円周", hi: "वृत्त की परिधि", tr: "Çember Çevresi" },
            explanation: { en: "The circumference is the distance around a circle, calculated using pi and the radius.", es: "La circunferencia es la distancia alrededor de un círculo, calculada usando pi y el radio.", fr: "La circonférence est la distance autour d'un cercle, calculée en utilisant pi et le rayon.", de: "Der Umfang ist der Abstand um einen Kreis, berechnet mit Pi und dem Radius.", it: "La circonferenza è la distanza attorno a un cerchio, calcolata usando pi e il raggio.", pt: "A circunferência é a distância ao redor de um círculo, calculada usando pi e o raio.", ru: "Длина окружности - это расстояние вокруг круга, вычисляемое с использованием числа пи и радиуса.", ar: "المحيط هو المسافة حول الدائرة، ويُحسب باستخدام باي ونصف القطر.", zh: "周长是圆周围的距离，使用圆周率和半径计算。", ja: "円周は円の周りの距離で、円周率と半径を使って計算されます。", hi: "परिधि वृत्त के चारों ओर की दूरी है, जो पाई और त्रिज्या का उपयोग करके निकाली जाती है।", tr: "Çevre, bir çemberin etrafındaki mesafedir ve pi ile yarıçap kullanılarak hesaplanır." },
            correctFormula: 'C = 2πr',
            topic: 'geometry',
            variables: { 'C': 'circumference', 'π': 'pi (≈3.14159)', 'r': 'radius' },
            example: {
                en: "If r = 7, find C:\nC = 2π(7)\nC = 14π\nC ≈ 43.98 units",
                es: "Si r = 7, encuentra C:\nC = 2π(7)\nC = 14π\nC ≈ 43.98 unidades",
                fr: "Si r = 7, trouvez C:\nC = 2π(7)\nC = 14π\nC ≈ 43.98 unités",
                de: "Wenn r = 7, finde C:\nC = 2π(7)\nC = 14π\nC ≈ 43.98 Einheiten",
                it: "Se r = 7, trova C:\nC = 2π(7)\nC = 14π\nC ≈ 43.98 unità",
                pt: "Se r = 7, encontre C:\nC = 2π(7)\nC = 14π\nC ≈ 43.98 unidades",
                ru: "Если r = 7, найдите C:\nC = 2π(7)\nC = 14π\nC ≈ 43.98 единиц",
                ar: "إذا كان r = 7، أوجد C:\nC = 2π(7)\nC = 14π\nC ≈ 43.98 وحدة",
                zh: "如果 r = 7，求 C：\nC = 2π(7)\nC = 14π\nC ≈ 43.98 单位",
                ja: "r = 7 のとき、C を求めよ：\nC = 2π(7)\nC = 14π\nC ≈ 43.98 単位",
                hi: "यदि r = 7, तो C ढूंढें:\nC = 2π(7)\nC = 14π\nC ≈ 43.98 इकाइयाँ",
                tr: "Eğer r = 7 ise, C'yi bulun:\nC = 2π(7)\nC = 14π\nC ≈ 43.98 birim"
            },
            practiceTask: {
                question: {
                    en: "A circle has radius = 4. Find the circumference. (Use π ≈ 3.14)",
                    es: "Un círculo tiene radio = 4. Encuentra la circunferencia. (Usa π ≈ 3.14)",
                    fr: "Un cercle a rayon = 4. Trouvez la circonférence. (Utilisez π ≈ 3.14)",
                    de: "Ein Kreis hat Radius = 4. Finde den Umfang. (Verwende π ≈ 3.14)",
                    it: "Un cerchio ha raggio = 4. Trova la circonferenza. (Usa π ≈ 3.14)",
                    pt: "Um círculo tem raio = 4. Encontre a circunferência. (Use π ≈ 3.14)",
                    ru: "Круг имеет радиус = 4. Найдите длину окружности. (Используйте π ≈ 3.14)",
                    ar: "دائرة لها نصف قطر = 4. أوجد المحيط. (استخدم π ≈ 3.14)",
                    zh: "一个圆的半径 = 4。求周长。(使用 π ≈ 3.14)",
                    ja: "円の半径 = 4。円周を求めよ。(π ≈ 3.14 を使用)",
                    hi: "एक वृत्त की त्रिज्या = 4। परिधि ढूंढें। (π ≈ 3.14 का उपयोग करें)",
                    tr: "Bir çemberin yarıçapı = 4. Çevreyi bulun. (π ≈ 3.14 kullanın)"
                },
                answer: "25.12",
                unit: "units"
            },
            helpTip: { en: "You can also use C = πd where d is diameter", es: "También puedes usar C = πd donde d es el diámetro", fr: "Vous pouvez aussi utiliser C = πd où d est le diamètre", de: "Sie können auch C = πd verwenden, wobei d der Durchmesser ist", it: "Puoi anche usare C = πd dove d è il diametro", pt: "Você também pode usar C = πd onde d é o diâmetro", ru: "Вы также можете использовать C = πd, где d - диаметр", ar: "يمكنك أيضًا استخدام C = πd حيث d هو القطر", zh: "你也可以使用 C = πd，其中 d 是直径", ja: "C = πd も使えます（d は直径）", hi: "आप C = πd का भी उपयोग कर सकते हैं जहां d व्यास है", tr: "C = πd de kullanabilirsiniz, burada d çaptır" }
        },
        {
            title: { en: "Area of Circle", es: "Área del Círculo", fr: "Aire du Cercle", de: "Fläche des Kreises", it: "Area del Cerchio", pt: "Área do Círculo", ru: "Площадь Круга", ar: "مساحة الدائرة", zh: "圆面积", ja: "円の面積", hi: "वृत्त का क्षेत्रफल", tr: "Çember Alanı" },
            explanation: { en: "The area of a circle is calculated using pi times the radius squared.", es: "El área de un círculo se calcula usando pi por el radio al cuadrado.", fr: "L'aire d'un cercle se calcule en utilisant pi fois le rayon au carré.", de: "Die Fläche eines Kreises wird mit Pi mal dem Radius zum Quadrat berechnet.", it: "L'area di un cerchio si calcola usando pi per il raggio al quadrato.", pt: "A área de um círculo é calculada usando pi vezes o raio ao quadrado.", ru: "Площадь круга вычисляется как произведение числа пи на квадрат радиуса.", ar: "تُحسب مساحة الدائرة باستخدام باي مضروبًا في مربع نصف القطر.", zh: "圆的面积使用圆周率乘以半径的平方来计算。", ja: "円の面積は、円周率に半径の2乗を掛けて計算されます。", hi: "वृत्त का क्षेत्रफल पाई को त्रिज्या के वर्ग से गुणा करके निकाला जाता है।", tr: "Bir çemberin alanı, pi ile yarıçapın karesi çarpılarak hesaplanır." },
            correctFormula: 'A = πr²',
            topic: 'geometry',
            variables: { 'A': 'area', 'π': 'pi (≈3.14159)', 'r': 'radius' },
            example: {
                en: "If r = 5, find A:\nA = π(5)²\nA = 25π\nA ≈ 78.54 square units",
                es: "Si r = 5, encuentra A:\nA = π(5)²\nA = 25π\nA ≈ 78.54 unidades cuadradas",
                fr: "Si r = 5, trouvez A:\nA = π(5)²\nA = 25π\nA ≈ 78.54 unités carrées",
                de: "Wenn r = 5, finde A:\nA = π(5)²\nA = 25π\nA ≈ 78.54 Quadrateinheiten",
                it: "Se r = 5, trova A:\nA = π(5)²\nA = 25π\nA ≈ 78.54 unità quadrate",
                pt: "Se r = 5, encontre A:\nA = π(5)²\nA = 25π\nA ≈ 78.54 unidades quadradas",
                ru: "Если r = 5, найдите A:\nA = π(5)²\nA = 25π\nA ≈ 78.54 квадратных единиц",
                ar: "إذا كان r = 5، أوجد A:\nA = π(5)²\nA = 25π\nA ≈ 78.54 وحدة مربعة",
                zh: "如果 r = 5，求 A：\nA = π(5)²\nA = 25π\nA ≈ 78.54 平方单位",
                ja: "r = 5 のとき、A を求めよ：\nA = π(5)²\nA = 25π\nA ≈ 78.54 平方単位",
                hi: "यदि r = 5, तो A ढूंढें:\nA = π(5)²\nA = 25π\nA ≈ 78.54 वर्ग इकाइयाँ",
                tr: "Eğer r = 5 ise, A'yı bulun:\nA = π(5)²\nA = 25π\nA ≈ 78.54 kare birim"
            },
            practiceTask: {
                question: {
                    en: "A circle has radius = 6. Find the area. (Use π ≈ 3.14)",
                    es: "Un círculo tiene radio = 6. Encuentra el área. (Usa π ≈ 3.14)",
                    fr: "Un cercle a rayon = 6. Trouvez l'aire. (Utilisez π ≈ 3.14)",
                    de: "Ein Kreis hat Radius = 6. Finde die Fläche. (Verwende π ≈ 3.14)",
                    it: "Un cerchio ha raggio = 6. Trova l'area. (Usa π ≈ 3.14)",
                    pt: "Um círculo tem raio = 6. Encontre a área. (Use π ≈ 3.14)",
                    ru: "Круг имеет радиус = 6. Найдите площадь. (Используйте π ≈ 3.14)",
                    ar: "دائرة لها نصف قطر = 6. أوجد المساحة. (استخدم π ≈ 3.14)",
                    zh: "一个圆的半径 = 6。求面积。(使用 π ≈ 3.14)",
                    ja: "円の半径 = 6。面積を求めよ。(π ≈ 3.14 を使用)",
                    hi: "एक वृत्त की त्रिज्या = 6। क्षेत्रफल ढूंढें। (π ≈ 3.14 का उपयोग करें)",
                    tr: "Bir çemberin yarıçapı = 6. Alanı bulun. (π ≈ 3.14 kullanın)"
                },
                answer: "113.04",
                unit: "square units"
            },
            helpTip: { en: "Remember to square the radius, not multiply by 2!", es: "¡Recuerda elevar el radio al cuadrado, no multiplicar por 2!", fr: "N'oubliez pas de mettre le rayon au carré, pas de multiplier par 2!", de: "Denken Sie daran, den Radius zu quadrieren, nicht mit 2 zu multiplizieren!", it: "Ricorda di elevare il raggio al quadrato, non moltiplicare per 2!", pt: "Lembre-se de elevar o raio ao quadrado, não multiplicar por 2!", ru: "Помните, нужно возвести радиус в квадрат, а не умножить на 2!", ar: "تذكر أن تربع نصف القطر، وليس الضرب في 2!", zh: "记住要将半径平方，而不是乘以2！", ja: "半径を2乗することを忘れないでください、2倍ではありません！", hi: "याद रखें त्रिज्या का वर्ग करें, 2 से गुणा नहीं!", tr: "Yarıçapı kare almayı unutmayın, 2 ile çarpmayın!" }
        },
        {
            title: { en: "Sum of Angles in Triangle", es: "Suma de Ángulos en un Triángulo", fr: "Somme des Angles dans un Triangle", de: "Winkelsumme im Dreieck", it: "Somma degli Angoli in un Triangolo", pt: "Soma dos Ângulos em um Triângulo", ru: "Сумма Углов в Треугольнике", ar: "مجموع الزوايا في المثلث", zh: "三角形内角和", ja: "三角形の内角の和", hi: "त्रिभुज में कोणों का योग", tr: "Üçgende Açılar Toplamı" },
            explanation: { en: "The sum of all three interior angles in any triangle always equals 180 degrees.", es: "La suma de los tres ángulos interiores en cualquier triángulo siempre es igual a 180 grados.", fr: "La somme des trois angles intérieurs dans n'importe quel triangle est toujours égale à 180 degrés.", de: "Die Summe aller drei Innenwinkel in jedem Dreieck beträgt immer 180 Grad.", it: "La somma di tutti e tre gli angoli interni in qualsiasi triangolo è sempre uguale a 180 gradi.", pt: "A soma de todos os três ângulos internos em qualquer triângulo sempre é igual a 180 graus.", ru: "Сумма всех трех внутренних углов в любом треугольнике всегда равна 180 градусам.", ar: "مجموع جميع الزوايا الداخلية الثلاث في أي مثلث يساوي دائمًا 180 درجة.", zh: "任何三角形的三个内角之和总是等于180度。", ja: "どんな三角形でも、3つの内角の和は常に180度です。", hi: "किसी भी त्रिभुज में तीनों आंतरिक कोणों का योग हमेशा 180 डिग्री होता है।", tr: "Herhangi bir üçgende üç iç açının toplamı her zaman 180 dereceye eşittir." },
            correctFormula: 'A + B + C = 180°',
            topic: 'geometry',
            variables: { 'A, B, C': 'three angles of triangle' },
            example: {
                en: "If A = 60° and B = 80°, find C:\n60° + 80° + C = 180°\n140° + C = 180°\nC = 40°",
                es: "Si A = 60° y B = 80°, encuentra C:\n60° + 80° + C = 180°\n140° + C = 180°\nC = 40°",
                fr: "Si A = 60° et B = 80°, trouvez C:\n60° + 80° + C = 180°\n140° + C = 180°\nC = 40°",
                de: "Wenn A = 60° und B = 80°, finde C:\n60° + 80° + C = 180°\n140° + C = 180°\nC = 40°",
                it: "Se A = 60° e B = 80°, trova C:\n60° + 80° + C = 180°\n140° + C = 180°\nC = 40°",
                pt: "Se A = 60° e B = 80°, encontre C:\n60° + 80° + C = 180°\n140° + C = 180°\nC = 40°",
                ru: "Если A = 60° и B = 80°, найдите C:\n60° + 80° + C = 180°\n140° + C = 180°\nC = 40°",
                ar: "إذا كان A = 60° و B = 80°، أوجد C:\n60° + 80° + C = 180°\n140° + C = 180°\nC = 40°",
                zh: "如果 A = 60° 且 B = 80°，求 C：\n60° + 80° + C = 180°\n140° + C = 180°\nC = 40°",
                ja: "A = 60°、B = 80° のとき、C を求めよ：\n60° + 80° + C = 180°\n140° + C = 180°\nC = 40°",
                hi: "यदि A = 60° और B = 80°, तो C ढूंढें:\n60° + 80° + C = 180°\n140° + C = 180°\nC = 40°",
                tr: "Eğer A = 60° ve B = 80° ise, C'yi bulun:\n60° + 80° + C = 180°\n140° + C = 180°\nC = 40°"
            },
            practiceTask: {
                question: {
                    en: "In a triangle, angle A = 50° and angle B = 70°. Find angle C.",
                    es: "En un triángulo, el ángulo A = 50° y el ángulo B = 70°. Encuentra el ángulo C.",
                    fr: "Dans un triangle, l'angle A = 50° et l'angle B = 70°. Trouvez l'angle C.",
                    de: "In einem Dreieck ist Winkel A = 50° und Winkel B = 70°. Finde Winkel C.",
                    it: "In un triangolo, l'angolo A = 50° e l'angolo B = 70°. Trova l'angolo C.",
                    pt: "Em um triângulo, o ângulo A = 50° e o ângulo B = 70°. Encontre o ângulo C.",
                    ru: "В треугольнике угол A = 50° и угол B = 70°. Найдите угол C.",
                    ar: "في مثلث، الزاوية A = 50° والزاوية B = 70°. أوجد الزاوية C.",
                    zh: "在一个三角形中，角 A = 50°，角 B = 70°。求角 C。",
                    ja: "三角形で、角 A = 50°、角 B = 70°。角 C を求めよ。",
                    hi: "एक त्रिभुज में, कोण A = 50° और कोण B = 70°। कोण C ढूंढें।",
                    tr: "Bir üçgende, açı A = 50° ve açı B = 70°. Açı C'yi bulun."
                },
                answer: "60",
                unit: "degrees"
            },
            helpTip: { en: "This works for ALL triangles - right, acute, and obtuse!", es: "¡Esto funciona para TODOS los triángulos: rectángulos, agudos y obtusos!", fr: "Cela fonctionne pour TOUS les triangles - rectangles, aigus et obtus!", de: "Dies gilt für ALLE Dreiecke - rechtwinklig, spitzwinklig und stumpfwinklig!", it: "Questo vale per TUTTI i triangoli - rettangoli, acuti e ottusi!", pt: "Isso funciona para TODOS os triângulos - retângulos, agudos e obtusos!", ru: "Это работает для ВСЕХ треугольников - прямоугольных, остроугольных и тупоугольных!", ar: "هذا يعمل لجميع المثلثات - القائمة والحادة والمنفرجة!", zh: "这适用于所有三角形 - 直角、锐角和钝角！", ja: "これはすべての三角形に当てはまります - 直角、鋭角、鈍角！", hi: "यह सभी त्रिभुजों के लिए काम करता है - समकोण, न्यूनकोण और अधिककोण!", tr: "Bu TÜM üçgenler için geçerlidir - dik, dar ve geniş açılı!" }
        },
        {
            title: { en: "Simple Addition", es: "Suma Simple", fr: "Addition Simple", de: "Einfache Addition", it: "Addizione Semplice", pt: "Adição Simples", ru: "Простое Сложение", ar: "الجمع البسيط", zh: "简单加法", ja: "簡単な足し算", hi: "सरल जोड़", tr: "Basit Toplama" },
            explanation: { en: "Adding two or more numbers together to find their total.", es: "Sumar dos o más números para encontrar su total.", fr: "Additionner deux nombres ou plus pour trouver leur total.", de: "Zwei oder mehr Zahlen addieren, um ihre Summe zu finden.", it: "Sommare due o più numeri per trovare il loro totale.", pt: "Somar dois ou mais números para encontrar seu total.", ru: "Сложение двух или более чисел для нахождения их суммы.", ar: "جمع رقمين أو أكثر معًا لإيجاد مجموعهم.", zh: "将两个或多个数字相加以找到它们的总和。", ja: "2つ以上の数を足して合計を求めます。", hi: "दो या अधिक संख्याओं को जोड़कर उनका योग निकालना।", tr: "Toplamlarını bulmak için iki veya daha fazla sayıyı toplamak." },
            correctFormula: 'a + b = c',
            topic: 'algebra',
            variables: { 'a, b': 'numbers to add', 'c': 'sum' },
            example: {
                en: "If a = 15 and b = 23, find c:\nc = 15 + 23\nc = 38",
                es: "Si a = 15 y b = 23, encuentra c:\nc = 15 + 23\nc = 38",
                fr: "Si a = 15 et b = 23, trouvez c:\nc = 15 + 23\nc = 38",
                de: "Wenn a = 15 und b = 23, finde c:\nc = 15 + 23\nc = 38",
                it: "Se a = 15 e b = 23, trova c:\nc = 15 + 23\nc = 38",
                pt: "Se a = 15 e b = 23, encontre c:\nc = 15 + 23\nc = 38",
                ru: "Если a = 15 и b = 23, найдите c:\nc = 15 + 23\nc = 38",
                ar: "إذا كان a = 15 و b = 23، أوجد c:\nc = 15 + 23\nc = 38",
                zh: "如果 a = 15 且 b = 23，求 c：\nc = 15 + 23\nc = 38",
                ja: "a = 15、b = 23 のとき、c を求めよ：\nc = 15 + 23\nc = 38",
                hi: "यदि a = 15 और b = 23, तो c ढूंढें:\nc = 15 + 23\nc = 38",
                tr: "Eğer a = 15 ve b = 23 ise, c'yi bulun:\nc = 15 + 23\nc = 38"
            },
            practiceTask: {
                question: {
                    en: "Add 25 + 37. What is the sum?",
                    es: "Suma 25 + 37. ¿Cuál es la suma?",
                    fr: "Additionnez 25 + 37. Quelle est la somme?",
                    de: "Addiere 25 + 37. Was ist die Summe?",
                    it: "Somma 25 + 37. Qual è la somma?",
                    pt: "Some 25 + 37. Qual é a soma?",
                    ru: "Сложите 25 + 37. Какова сумма?",
                    ar: "اجمع 25 + 37. ما هو المجموع؟",
                    zh: "计算 25 + 37。总和是多少？",
                    ja: "25 + 37 を計算せよ。和は？",
                    hi: "25 + 37 जोड़ें। योग क्या है?",
                    tr: "25 + 37 toplayın. Toplam nedir?"
                },
                answer: "62",
                unit: ""
            },
            helpTip: { en: "Addition is commutative: a + b = b + a", es: "La suma es conmutativa: a + b = b + a", fr: "L'addition est commutative: a + b = b + a", de: "Addition ist kommutativ: a + b = b + a", it: "L'addizione è commutativa: a + b = b + a", pt: "A adição é comutativa: a + b = b + a", ru: "Сложение коммутативно: a + b = b + a", ar: "الجمع تبديلي: a + b = b + a", zh: "加法是可交换的：a + b = b + a", ja: "加法は可換です：a + b = b + a", hi: "जोड़ क्रमविनिमेय है: a + b = b + a", tr: "Toplama değişmeli: a + b = b + a" }
        },
        {
            title: { en: "Simple Subtraction", es: "Resta Simple", fr: "Soustraction Simple", de: "Einfache Subtraktion", it: "Sottrazione Semplice", pt: "Subtração Simples", ru: "Простое Вычитание", ar: "الطرح البسيط", zh: "简单减法", ja: "簡単な引き算", hi: "सरल घटाव", tr: "Basit Çıkarma" },
            explanation: { en: "Finding the difference between two numbers by taking one away from the other.", es: "Encontrar la diferencia entre dos números restando uno del otro.", fr: "Trouver la différence entre deux nombres en soustrayant l'un de l'autre.", de: "Den Unterschied zwischen zwei Zahlen finden, indem man eine von der anderen abzieht.", it: "Trovare la differenza tra due numeri sottraendo uno dall'altro.", pt: "Encontrar a diferença entre dois números subtraindo um do outro.", ru: "Нахождение разности между двумя числами путем вычитания одного из другого.", ar: "إيجاد الفرق بين رقمين بطرح أحدهما من الآخر.", zh: "通过从一个数中减去另一个数来找到两个数之间的差。", ja: "一方から他方を引いて2つの数の差を求めます。", hi: "एक संख्या को दूसरी से घटाकर दो संख्याओं के बीच का अंतर निकालना।", tr: "Birini diğerinden çıkararak iki sayı arasındaki farkı bulmak." },
            correctFormula: 'a - b = c',
            topic: 'algebra',
            variables: { 'a': 'minuend', 'b': 'subtrahend', 'c': 'difference' },
            example: {
                en: "If a = 50 and b = 18, find c:\nc = 50 - 18\nc = 32",
                es: "Si a = 50 y b = 18, encuentra c:\nc = 50 - 18\nc = 32",
                fr: "Si a = 50 et b = 18, trouvez c:\nc = 50 - 18\nc = 32",
                de: "Wenn a = 50 und b = 18, finde c:\nc = 50 - 18\nc = 32",
                it: "Se a = 50 e b = 18, trova c:\nc = 50 - 18\nc = 32",
                pt: "Se a = 50 e b = 18, encontre c:\nc = 50 - 18\nc = 32",
                ru: "Если a = 50 и b = 18, найдите c:\nc = 50 - 18\nc = 32",
                ar: "إذا كان a = 50 و b = 18، أوجد c:\nc = 50 - 18\nc = 32",
                zh: "如果 a = 50 且 b = 18，求 c：\nc = 50 - 18\nc = 32",
                ja: "a = 50、b = 18 のとき、c を求めよ：\nc = 50 - 18\nc = 32",
                hi: "यदि a = 50 और b = 18, तो c ढूंढें:\nc = 50 - 18\nc = 32",
                tr: "Eğer a = 50 ve b = 18 ise, c'yi bulun:\nc = 50 - 18\nc = 32"
            },
            practiceTask: {
                question: {
                    en: "Subtract 82 - 35. What is the difference?",
                    es: "Resta 82 - 35. ¿Cuál es la diferencia?",
                    fr: "Soustrayez 82 - 35. Quelle est la différence?",
                    de: "Subtrahiere 82 - 35. Was ist die Differenz?",
                    it: "Sottrai 82 - 35. Qual è la differenza?",
                    pt: "Subtraia 82 - 35. Qual é a diferença?",
                    ru: "Вычтите 82 - 35. Какова разность?",
                    ar: "اطرح 82 - 35. ما هو الفرق؟",
                    zh: "计算 82 - 35。差是多少？",
                    ja: "82 - 35 を計算せよ。差は？",
                    hi: "82 - 35 घटाएं। अंतर क्या है?",
                    tr: "82 - 35 çıkarın. Fark nedir?"
                },
                answer: "47",
                unit: ""
            },
            helpTip: { en: "Subtraction is NOT commutative: a - b ≠ b - a", es: "La resta NO es conmutativa: a - b ≠ b - a", fr: "La soustraction n'est PAS commutative: a - b ≠ b - a", de: "Subtraktion ist NICHT kommutativ: a - b ≠ b - a", it: "La sottrazione NON è commutativa: a - b ≠ b - a", pt: "A subtração NÃO é comutativa: a - b ≠ b - a", ru: "Вычитание НЕ коммутативно: a - b ≠ b - a", ar: "الطرح ليس تبديليًا: a - b ≠ b - a", zh: "减法不可交换：a - b ≠ b - a", ja: "引き算は可換ではありません：a - b ≠ b - a", hi: "घटाव क्रमविनिमेय नहीं है: a - b ≠ b - a", tr: "Çıkarma değişmeli DEĞİLDİR: a - b ≠ b - a" }
        },
        {
            title: { en: "Simple Multiplication", es: "Multiplicación Simple", fr: "Multiplication Simple", de: "Einfache Multiplikation", it: "Moltiplicazione Semplice", pt: "Multiplicação Simples", ru: "Простое Умножение", ar: "الضرب البسيط", zh: "简单乘法", ja: "簡単な掛け算", hi: "सरल गुणा", tr: "Basit Çarpma" },
            explanation: { en: "Multiplying two numbers means adding one number to itself a certain number of times.", es: "Multiplicar dos números significa sumar un número a sí mismo un cierto número de veces.", fr: "Multiplier deux nombres signifie ajouter un nombre à lui-même un certain nombre de fois.", de: "Zwei Zahlen multiplizieren bedeutet, eine Zahl eine bestimmte Anzahl von Malen zu sich selbst zu addieren.", it: "Moltiplicare due numeri significa aggiungere un numero a se stesso un certo numero di volte.", pt: "Multiplicar dois números significa adicionar um número a si mesmo um certo número de vezes.", ru: "Умножение двух чисел означает сложение одного числа с самим собой определенное количество раз.", ar: "ضرب رقمين يعني إضافة رقم إلى نفسه عددًا معينًا من المرات.", zh: "将两个数相乘意味着将一个数加到自身一定次数。", ja: "2つの数を掛けることは、ある数を一定回数自分自身に足すことを意味します。", hi: "दो संख्याओं को गुणा करने का अर्थ है एक संख्या को निश्चित बार स्वयं में जोड़ना।", tr: "İki sayıyı çarpmak, bir sayıyı belirli sayıda kendine eklemek anlamına gelir." },
            correctFormula: 'a × b = c',
            topic: 'algebra',
            variables: { 'a, b': 'factors', 'c': 'product' },
            example: {
                en: "If a = 7 and b = 9, find c:\nc = 7 × 9\nc = 63",
                es: "Si a = 7 y b = 9, encuentra c:\nc = 7 × 9\nc = 63",
                fr: "Si a = 7 et b = 9, trouvez c:\nc = 7 × 9\nc = 63",
                de: "Wenn a = 7 und b = 9, finde c:\nc = 7 × 9\nc = 63",
                it: "Se a = 7 e b = 9, trova c:\nc = 7 × 9\nc = 63",
                pt: "Se a = 7 e b = 9, encontre c:\nc = 7 × 9\nc = 63",
                ru: "Если a = 7 и b = 9, найдите c:\nc = 7 × 9\nc = 63",
                ar: "إذا كان a = 7 و b = 9، أوجد c:\nc = 7 × 9\nc = 63",
                zh: "如果 a = 7 且 b = 9，求 c：\nc = 7 × 9\nc = 63",
                ja: "a = 7、b = 9 のとき、c を求めよ：\nc = 7 × 9\nc = 63",
                hi: "यदि a = 7 और b = 9, तो c ढूंढें:\nc = 7 × 9\nc = 63",
                tr: "Eğer a = 7 ve b = 9 ise, c'yi bulun:\nc = 7 × 9\nc = 63"
            },
            practiceTask: {
                question: {
                    en: "Multiply 13 × 8. What is the product?",
                    es: "Multiplica 13 × 8. ¿Cuál es el producto?",
                    fr: "Multipliez 13 × 8. Quel est le produit?",
                    de: "Multipliziere 13 × 8. Was ist das Produkt?",
                    it: "Moltiplica 13 × 8. Qual è il prodotto?",
                    pt: "Multiplique 13 × 8. Qual é o produto?",
                    ru: "Умножьте 13 × 8. Каково произведение?",
                    ar: "اضرب 13 × 8. ما هو الناتج؟",
                    zh: "计算 13 × 8。积是多少？",
                    ja: "13 × 8 を計算せよ。積は？",
                    hi: "13 × 8 गुणा करें। गुणनफल क्या है?",
                    tr: "13 × 8 çarpın. Çarpım nedir?"
                },
                answer: "104",
                unit: ""
            },
            helpTip: { en: "Multiplication is commutative: a × b = b × a", es: "La multiplicación es conmutativa: a × b = b × a", fr: "La multiplication est commutative: a × b = b × a", de: "Multiplikation ist kommutativ: a × b = b × a", it: "La moltiplicazione è commutativa: a × b = b × a", pt: "A multiplicação é comutativa: a × b = b × a", ru: "Умножение коммутативно: a × b = b × a", ar: "الضرب تبديلي: a × b = b × a", zh: "乘法是可交换的：a × b = b × a", ja: "掛け算は可換です：a × b = b × a", hi: "गुणा क्रमविनिमेय है: a × b = b × a", tr: "Çarpma değişmeli: a × b = b × a" }
        },
        {
            title: { en: "Simple Division", es: "División Simple", fr: "Division Simple", de: "Einfache Division", it: "Divisione Semplice", pt: "Divisão Simples", ru: "Простое Деление", ar: "القسمة البسيطة", zh: "简单除法", ja: "簡単な割り算", hi: "सरल भाग", tr: "Basit Bölme" },
            explanation: { en: "Division splits a number into equal parts or groups.", es: "La división divide un número en partes o grupos iguales.", fr: "La division divise un nombre en parties ou groupes égaux.", de: "Division teilt eine Zahl in gleiche Teile oder Gruppen auf.", it: "La divisione divide un numero in parti o gruppi uguali.", pt: "A divisão divide um número em partes ou grupos iguais.", ru: "Деление разбивает число на равные части или группы.", ar: "القسمة تقسم الرقم إلى أجزاء أو مجموعات متساوية.", zh: "除法将一个数分成相等的部分或组。", ja: "割り算は数を等しい部分やグループに分けます。", hi: "भाग एक संख्या को बराबर भागों या समूहों में विभाजित करता है।", tr: "Bölme, bir sayıyı eşit parçalara veya gruplara böler." },
            correctFormula: 'a ÷ b = c',
            topic: 'algebra',
            variables: { 'a': 'dividend', 'b': 'divisor', 'c': 'quotient' },
            example: {
                en: "If a = 72 and b = 9, find c:\nc = 72 ÷ 9\nc = 8",
                es: "Si a = 72 y b = 9, encuentra c:\nc = 72 ÷ 9\nc = 8",
                fr: "Si a = 72 et b = 9, trouvez c:\nc = 72 ÷ 9\nc = 8",
                de: "Wenn a = 72 und b = 9, finde c:\nc = 72 ÷ 9\nc = 8",
                it: "Se a = 72 e b = 9, trova c:\nc = 72 ÷ 9\nc = 8",
                pt: "Se a = 72 e b = 9, encontre c:\nc = 72 ÷ 9\nc = 8",
                ru: "Если a = 72 и b = 9, найдите c:\nc = 72 ÷ 9\nc = 8",
                ar: "إذا كان a = 72 و b = 9، أوجد c:\nc = 72 ÷ 9\nc = 8",
                zh: "如果 a = 72 且 b = 9，求 c：\nc = 72 ÷ 9\nc = 8",
                ja: "a = 72、b = 9 のとき、c を求めよ：\nc = 72 ÷ 9\nc = 8",
                hi: "यदि a = 72 और b = 9, तो c ढूंढें:\nc = 72 ÷ 9\nc = 8",
                tr: "Eğer a = 72 ve b = 9 ise, c'yi bulun:\nc = 72 ÷ 9\nc = 8"
            },
            practiceTask: {
                question: {
                    en: "Divide 96 ÷ 8. What is the quotient?",
                    es: "Divide 96 ÷ 8. ¿Cuál es el cociente?",
                    fr: "Divisez 96 ÷ 8. Quel est le quotient?",
                    de: "Dividiere 96 ÷ 8. Was ist der Quotient?",
                    it: "Dividi 96 ÷ 8. Qual è il quoziente?",
                    pt: "Divida 96 ÷ 8. Qual é o quociente?",
                    ru: "Разделите 96 ÷ 8. Каково частное?",
                    ar: "اقسم 96 ÷ 8. ما هو الناتج؟",
                    zh: "计算 96 ÷ 8。商是多少？",
                    ja: "96 ÷ 8 を計算せよ。商は？",
                    hi: "96 ÷ 8 भाग दें। भागफल क्या है?",
                    tr: "96 ÷ 8 bölün. Bölüm nedir?"
                },
                answer: "12",
                unit: ""
            },
            helpTip: { en: "Division by zero is undefined!", es: "¡La división por cero no está definida!", fr: "La division par zéro n'est pas définie!", de: "Division durch Null ist undefiniert!", it: "La divisione per zero non è definita!", pt: "A divisão por zero não é definida!", ru: "Деление на ноль не определено!", ar: "القسمة على صفر غير معرفة!", zh: "除以零是未定义的！", ja: "ゼロによる除算は未定義です！", hi: "शून्य से भाग अपरिभाषित है!", tr: "Sıfıra bölme tanımsızdır!" }
        }
    ],
    '8': [
        {
            title: { en: "Pythagorean Theorem", es: "Teorema de Pitágoras", fr: "Théorème de Pythagore", de: "Satz des Pythagoras", it: "Teorema di Pitagora", pt: "Teorema de Pitágoras", ru: "Теорема Пифагора", ar: "نظرية فيثاغورس", zh: "勾股定理", ja: "ピタゴラスの定理", hi: "पाइथागोरस प्रमेय", tr: "Pisagor Teoremi" },
            explanation: { en: "In a right triangle, the square of the hypotenuse equals the sum of squares of the other two sides.", es: "En un triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los otros dos lados.", fr: "Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.", de: "In einem rechtwinkligen Dreieck ist das Quadrat der Hypotenuse gleich der Summe der Quadrate der beiden anderen Seiten.", it: "In un triangolo rettangolo, il quadrato dell'ipotenusa è uguale alla somma dei quadrati degli altri due lati.", pt: "Em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos outros dois lados.", ru: "В прямоугольном треугольнике квадрат гипотенузы равен сумме квадратов двух других сторон.", ar: "في المثلث القائم، مربع الوتر يساوي مجموع مربعي الضلعين الآخرين.", zh: "在直角三角形中，斜边的平方等于其他两边的平方和。", ja: "直角三角形では、斜辺の2乗は他の2辺の2乗の和に等しい。", hi: "समकोण त्रिभुज में, कर्ण का वर्ग अन्य दो भुजाओं के वर्गों के योग के बराबर होता है।", tr: "Dik üçgende, hipotenüsün karesi diğer iki kenarın karelerinin toplamına eşittir." },
            correctFormula: 'a² + b² = c²',
            topic: 'geometry',
            variables: { 'a, b': 'legs of right triangle', 'c': 'hypotenuse' },
            example: { 
                en: "If a = 3 and b = 4, find c:\n3² + 4² = c²\n9 + 16 = c²\n25 = c²\nc = 5",
                es: "Si a = 3 y b = 4, encuentra c:\n3² + 4² = c²\n9 + 16 = c²\n25 = c²\nc = 5",
                fr: "Si a = 3 et b = 4, trouvez c:\n3² + 4² = c²\n9 + 16 = c²\n25 = c²\nc = 5",
                de: "Wenn a = 3 und b = 4, finde c:\n3² + 4² = c²\n9 + 16 = c²\n25 = c²\nc = 5",
                it: "Se a = 3 e b = 4, trova c:\n3² + 4² = c²\n9 + 16 = c²\n25 = c²\nc = 5",
                pt: "Se a = 3 e b = 4, encontre c:\n3² + 4² = c²\n9 + 16 = c²\n25 = c²\nc = 5",
                ru: "Если a = 3 и b = 4, найдите c:\n3² + 4² = c²\n9 + 16 = c²\n25 = c²\nc = 5",
                ar: "إذا كان a = 3 و b = 4، أوجد c:\n3² + 4² = c²\n9 + 16 = c²\n25 = c²\nc = 5",
                zh: "如果 a = 3 且 b = 4，求 c：\n3² + 4² = c²\n9 + 16 = c²\n25 = c²\nc = 5",
                ja: "a = 3、b = 4 のとき、c を求めよ：\n3² + 4² = c²\n9 + 16 = c²\n25 = c²\nc = 5",
                hi: "यदि a = 3 और b = 4, तो c ढूंढें:\n3² + 4² = c²\n9 + 16 = c²\n25 = c²\nc = 5",
                tr: "Eğer a = 3 ve b = 4 ise, c'yi bulun:\n3² + 4² = c²\n9 + 16 = c²\n25 = c²\nc = 5"
            },
            practiceTask: {
                question: {
                    en: "A right triangle has legs a = 5 and b = 12. Find the hypotenuse c.",
                    es: "Un triángulo rectángulo tiene catetos a = 5 y b = 12. Encuentra la hipotenusa c.",
                    fr: "Un triangle rectangle a des côtés a = 5 et b = 12. Trouvez l'hypoténuse c.",
                    de: "Ein rechtwinkliges Dreieck hat Katheten a = 5 und b = 12. Finde die Hypotenuse c.",
                    it: "Un triangolo rettangolo ha cateti a = 5 e b = 12. Trova l'ipotenusa c.",
                    pt: "Um triângulo retângulo tem catetos a = 5 e b = 12. Encontre a hipotenusa c.",
                    ru: "Прямоугольный треугольник имеет катеты a = 5 и b = 12. Найдите гипотенузу c.",
                    ar: "مثلث قائم له ضلعان a = 5 و b = 12. أوجد الوتر c.",
                    zh: "一个直角三角形的直角边 a = 5 和 b = 12。求斜边 c。",
                    ja: "直角三角形の直角をはさむ辺が a = 5 と b = 12。斜辺 c を求めよ。",
                    hi: "एक समकोण त्रिभुज की भुजाएं a = 5 और b = 12। कर्ण c ढूंढें।",
                    tr: "Bir dik üçgenin dik kenarları a = 5 ve b = 12. Hipotenüs c'yi bulun."
                },
                answer: "13",
                unit: "units"
            },
            helpTip: { en: "Only works for RIGHT triangles!", es: "¡Solo funciona para triángulos RECTÁNGULOS!", fr: "Ne fonctionne que pour les triangles RECTANGLES!", de: "Funktioniert nur für RECHTWINKLIGE Dreiecke!", it: "Funziona solo per i triangoli RETTANGOLI!", pt: "Funciona apenas para triângulos RETÂNGULOS!", ru: "Работает только для ПРЯМОУГОЛЬНЫХ треугольников!", ar: "يعمل فقط للمثلثات القائمة!", zh: "仅适用于直角三角形！", ja: "直角三角形にのみ有効です！", hi: "केवल समकोण त्रिभुजों के लिए काम करता है!", tr: "Sadece DİK üçgenler için geçerlidir!" }
        },
        {
            title: { en: "Volume of Cube", es: "Volumen del Cubo", fr: "Volume du Cube", de: "Volumen des Würfels", it: "Volume del Cubo", pt: "Volume do Cubo", ru: "Объем Куба", ar: "حجم المكعب", zh: "立方体体积", ja: "立方体の体積", hi: "घन का आयतन", tr: "Küp Hacmi" },
            explanation: { en: "The volume of a cube is found by cubing the length of one side.", es: "El volumen de un cubo se encuentra elevando al cubo la longitud de un lado.", fr: "Le volume d'un cube se trouve en mettant au cube la longueur d'un côté.", de: "Das Volumen eines Würfels wird gefunden, indem man die Länge einer Seite hoch drei nimmt.", it: "Il volume di un cubo si trova elevando al cubo la lunghezza di un lato.", pt: "O volume de um cubo é encontrado elevando ao cubo o comprimento de um lado.", ru: "Объем куба находится путем возведения в куб длины одной стороны.", ar: "يُوجد حجم المكعب بتكعيب طول أحد الأضلاع.", zh: "立方体的体积通过将一边的长度立方来求得。", ja: "立方体の体積は、一辺の長さを3乗して求めます。", hi: "घन का आयतन एक भुजा की लंबाई को घन करके निकाला जाता है।", tr: "Bir küpün hacmi, bir kenarın uzunluğunun küpü alınarak bulunur." },
            correctFormula: 'V = s³',
            topic: 'geometry',
            variables: { 'V': 'volume', 's': 'side length' },
            example: {
                en: "If s = 4, find V:\nV = 4³\nV = 4 × 4 × 4\nV = 64 cubic units",
                es: "Si s = 4, encuentra V:\nV = 4³\nV = 4 × 4 × 4\nV = 64 unidades cúbicas",
                fr: "Si s = 4, trouvez V:\nV = 4³\nV = 4 × 4 × 4\nV = 64 unités cubes",
                de: "Wenn s = 4, finde V:\nV = 4³\nV = 4 × 4 × 4\nV = 64 Kubikeinheiten",
                it: "Se s = 4, trova V:\nV = 4³\nV = 4 × 4 × 4\nV = 64 unità cubiche",
                pt: "Se s = 4, encontre V:\nV = 4³\nV = 4 × 4 × 4\nV = 64 unidades cúbicas",
                ru: "Если s = 4, найдите V:\nV = 4³\nV = 4 × 4 × 4\nV = 64 кубических единиц",
                ar: "إذا كان s = 4، أوجد V:\nV = 4³\nV = 4 × 4 × 4\nV = 64 وحدة مكعبة",
                zh: "如果 s = 4，求 V：\nV = 4³\nV = 4 × 4 × 4\nV = 64 立方单位",
                ja: "s = 4 のとき、V を求めよ：\nV = 4³\nV = 4 × 4 × 4\nV = 64 立方単位",
                hi: "यदि s = 4, तो V ढूंढें:\nV = 4³\nV = 4 × 4 × 4\nV = 64 घन इकाइयाँ",
                tr: "Eğer s = 4 ise, V'yi bulun:\nV = 4³\nV = 4 × 4 × 4\nV = 64 küp birim"
            },
            practiceTask: {
                question: {
                    en: "A cube has side length = 5. Find the volume.",
                    es: "Un cubo tiene longitud de lado = 5. Encuentra el volumen.",
                    fr: "Un cube a longueur de côté = 5. Trouvez le volume.",
                    de: "Ein Würfel hat Seitenlänge = 5. Finde das Volumen.",
                    it: "Un cubo ha lunghezza del lato = 5. Trova il volume.",
                    pt: "Um cubo tem comprimento de lado = 5. Encontre o volume.",
                    ru: "Куб имеет длину стороны = 5. Найдите объем.",
                    ar: "مكعب له طول ضلع = 5. أوجد الحجم.",
                    zh: "一个立方体的边长 = 5。求体积。",
                    ja: "立方体の一辺の長さ = 5。体積を求めよ。",
                    hi: "एक घन की भुजा की लंबाई = 5। आयतन ढूंढें।",
                    tr: "Bir küpün kenar uzunluğu = 5. Hacmi bulun."
                },
                answer: "125",
                unit: "cubic units"
            },
            helpTip: { en: "All sides of a cube are equal!", es: "¡Todos los lados de un cubo son iguales!", fr: "Tous les côtés d'un cube sont égaux!", de: "Alle Seiten eines Würfels sind gleich!", it: "Tutti i lati di un cubo sono uguali!", pt: "Todos os lados de um cubo são iguais!", ru: "Все стороны куба равны!", ar: "جميع أضلاع المكعب متساوية!", zh: "立方体的所有边都相等！", ja: "立方体のすべての辺は等しい！", hi: "घन की सभी भुजाएं बराबर होती हैं!", tr: "Bir küpün tüm kenarları eşittir!" }
        },
        {
            title: { en: "Volume of Rectangular Prism", es: "Volumen del Prisma Rectangular", fr: "Volume du Prisme Rectangulaire", de: "Volumen des Quaders", it: "Volume del Prisma Rettangolare", pt: "Volume do Prisma Retangular", ru: "Объем Прямоугольного Параллелепипеда", ar: "حجم المنشور المستطيل", zh: "长方体体积", ja: "直方体の体積", hi: "आयताकार प्रिज्म का आयतन", tr: "Dikdörtgen Prizma Hacmi" },
            explanation: { en: "The volume is calculated by multiplying length, width, and height.", es: "El volumen se calcula multiplicando largo, ancho y alto.", fr: "Le volume se calcule en multipliant longueur, largeur et hauteur.", de: "Das Volumen wird berechnet, indem man Länge, Breite und Höhe multipliziert.", it: "Il volume si calcola moltiplicando lunghezza, larghezza e altezza.", pt: "O volume é calculado multiplicando comprimento, largura e altura.", ru: "Объем вычисляется путем умножения длины, ширины и высоты.", ar: "يُحسب الحجم بضرب الطول والعرض والارتفاع.", zh: "体积通过将长度、宽度和高度相乘来计算。", ja: "体積は長さ、幅、高さを掛けて計算されます。", hi: "आयतन लंबाई, चौड़ाई और ऊंचाई को गुणा करके निकाला जाता है।", tr: "Hacim, uzunluk, genişlik ve yükseklik çarpılarak hesaplanır." },
            correctFormula: 'V = l × w × h',
            topic: 'geometry',
            variables: { 'V': 'volume', 'l': 'length', 'w': 'width', 'h': 'height' },
            example: {
                en: "If l = 5, w = 3, and h = 2, find V:\nV = 5 × 3 × 2\nV = 30 cubic units",
                es: "Si l = 5, w = 3 y h = 2, encuentra V:\nV = 5 × 3 × 2\nV = 30 unidades cúbicas",
                fr: "Si l = 5, w = 3 et h = 2, trouvez V:\nV = 5 × 3 × 2\nV = 30 unités cubes",
                de: "Wenn l = 5, w = 3 und h = 2, finde V:\nV = 5 × 3 × 2\nV = 30 Kubikeinheiten",
                it: "Se l = 5, w = 3 e h = 2, trova V:\nV = 5 × 3 × 2\nV = 30 unità cubiche",
                pt: "Se l = 5, w = 3 e h = 2, encontre V:\nV = 5 × 3 × 2\nV = 30 unidades cúbicas",
                ru: "Если l = 5, w = 3 и h = 2, найдите V:\nV = 5 × 3 × 2\nV = 30 кубических единиц",
                ar: "إذا كان l = 5، w = 3، h = 2، أوجد V:\nV = 5 × 3 × 2\nV = 30 وحدة مكعبة",
                zh: "如果 l = 5，w = 3，h = 2，求 V：\nV = 5 × 3 × 2\nV = 30 立方单位",
                ja: "l = 5、w = 3、h = 2 のとき、V を求めよ：\nV = 5 × 3 × 2\nV = 30 立方単位",
                hi: "यदि l = 5, w = 3, और h = 2, तो V ढूंढें:\nV = 5 × 3 × 2\nV = 30 घन इकाइयाँ",
                tr: "Eğer l = 5, w = 3 ve h = 2 ise, V'yi bulun:\nV = 5 × 3 × 2\nV = 30 küp birim"
            },
            practiceTask: {
                question: {
                    en: "A box has length = 6, width = 4, and height = 3. Find the volume.",
                    es: "Una caja tiene largo = 6, ancho = 4 y alto = 3. Encuentra el volumen.",
                    fr: "Une boîte a longueur = 6, largeur = 4 et hauteur = 3. Trouvez le volume.",
                    de: "Eine Box hat Länge = 6, Breite = 4 und Höhe = 3. Finde das Volumen.",
                    it: "Una scatola ha lunghezza = 6, larghezza = 4 e altezza = 3. Trova il volume.",
                    pt: "Uma caixa tem comprimento = 6, largura = 4 e altura = 3. Encontre o volume.",
                    ru: "Коробка имеет длину = 6, ширину = 4 и высоту = 3. Найдите объем.",
                    ar: "صندوق له طول = 6 وعرض = 4 وارتفاع = 3. أوجد الحجم.",
                    zh: "一个盒子的长 = 6，宽 = 4，高 = 3。求体积。",
                    ja: "箱の長さ = 6、幅 = 4、高さ = 3。体積を求めよ。",
                    hi: "एक बॉक्स की लंबाई = 6, चौड़ाई = 4, और ऊंचाई = 3। आयतन ढूंढें।",
                    tr: "Bir kutunun uzunluğu = 6, genişliği = 4 ve yüksekliği = 3. Hacmi bulun."
                },
                answer: "72",
                unit: "cubic units"
            },
            helpTip: { en: "This is also called a cuboid!", es: "¡Esto también se llama cuboide!", fr: "Cela s'appelle aussi un cuboïde!", de: "Dies wird auch Quader genannt!", it: "Questo si chiama anche cuboide!", pt: "Isso também é chamado de cuboide!", ru: "Это также называется прямоугольным параллелепипедом!", ar: "يُسمى هذا أيضًا متوازي المستطيلات!", zh: "这也被称为长方体！", ja: "これは直方体とも呼ばれます！", hi: "इसे घनाभ भी कहा जाता है!", tr: "Buna dikdörtgenler prizması da denir!" }
        },
        {
            title: { en: "Simple Interest", es: "Interés Simple", fr: "Intérêt Simple", de: "Einfacher Zins", it: "Interesse Semplice", pt: "Juros Simples", ru: "Простой Процент", ar: "الفائدة البسيطة", zh: "单利", ja: "単利", hi: "साधारण ब्याज", tr: "Basit Faiz" },
            explanation: { en: "Simple interest is calculated by multiplying principal, rate, and time.", es: "El interés simple se calcula multiplicando el capital, la tasa y el tiempo.", fr: "L'intérêt simple se calcule en multipliant le capital, le taux et le temps.", de: "Einfacher Zins wird berechnet, indem man Kapital, Zinssatz und Zeit multipliziert.", it: "L'interesse semplice si calcola moltiplicando capitale, tasso e tempo.", pt: "Os juros simples são calculados multiplicando principal, taxa e tempo.", ru: "Простой процент вычисляется путем умножения основной суммы, ставки и времени.", ar: "تُحسب الفائدة البسيطة بضرب رأس المال والمعدل والوقت.", zh: "单利通过将本金、利率和时间相乘来计算。", ja: "単利は元金、利率、時間を掛けて計算されます。", hi: "साधारण ब्याज मूलधन, दर और समय को गुणा करके निकाला जाता है।", tr: "Basit faiz, anapara, oran ve zaman çarpılarak hesaplanır." },
            correctFormula: 'I = P × r × t',
            topic: 'algebra',
            variables: { 'I': 'interest', 'P': 'principal', 'r': 'rate', 't': 'time' },
            example: {
                en: "If P = 1000, r = 0.05, and t = 3, find I:\nI = 1000 × 0.05 × 3\nI = 150",
                es: "Si P = 1000, r = 0.05 y t = 3, encuentra I:\nI = 1000 × 0.05 × 3\nI = 150",
                fr: "Si P = 1000, r = 0.05 et t = 3, trouvez I:\nI = 1000 × 0.05 × 3\nI = 150",
                de: "Wenn P = 1000, r = 0.05 und t = 3, finde I:\nI = 1000 × 0.05 × 3\nI = 150",
                it: "Se P = 1000, r = 0.05 e t = 3, trova I:\nI = 1000 × 0.05 × 3\nI = 150",
                pt: "Se P = 1000, r = 0.05 e t = 3, encontre I:\nI = 1000 × 0.05 × 3\nI = 150",
                ru: "Если P = 1000, r = 0.05 и t = 3, найдите I:\nI = 1000 × 0.05 × 3\nI = 150",
                ar: "إذا كان P = 1000، r = 0.05، t = 3، أوجد I:\nI = 1000 × 0.05 × 3\nI = 150",
                zh: "如果 P = 1000，r = 0.05，t = 3，求 I：\nI = 1000 × 0.05 × 3\nI = 150",
                ja: "P = 1000、r = 0.05、t = 3 のとき、I を求めよ：\nI = 1000 × 0.05 × 3\nI = 150",
                hi: "यदि P = 1000, r = 0.05, और t = 3, तो I ढूंढें:\nI = 1000 × 0.05 × 3\nI = 150",
                tr: "Eğer P = 1000, r = 0.05 ve t = 3 ise, I'yı bulun:\nI = 1000 × 0.05 × 3\nI = 150"
            },
            practiceTask: {
                question: {
                    en: "Principal = 2000, rate = 0.06, time = 4 years. Find the simple interest.",
                    es: "Principal = 2000, tasa = 0.06, tiempo = 4 años. Encuentra el interés simple.",
                    fr: "Capital = 2000, taux = 0.06, temps = 4 ans. Trouvez l'intérêt simple.",
                    de: "Kapital = 2000, Zinssatz = 0.06, Zeit = 4 Jahre. Finde den einfachen Zins.",
                    it: "Capitale = 2000, tasso = 0.06, tempo = 4 anni. Trova l'interesse semplice.",
                    pt: "Principal = 2000, taxa = 0.06, tempo = 4 anos. Encontre os juros simples.",
                    ru: "Основная сумма = 2000, ставка = 0.06, время = 4 года. Найдите простой процент.",
                    ar: "رأس المال = 2000، المعدل = 0.06، الوقت = 4 سنوات. أوجد الفائدة البسيطة.",
                    zh: "本金 = 2000，利率 = 0.06，时间 = 4 年。求单利。",
                    ja: "元金 = 2000、利率 = 0.06、時間 = 4 年。単利を求めよ。",
                    hi: "मूलधन = 2000, दर = 0.06, समय = 4 वर्ष। साधारण ब्याज ढूंढें।",
                    tr: "Anapara = 2000, oran = 0.06, zaman = 4 yıl. Basit faizi bulun."
                },
                answer: "480",
                unit: ""
            },
            helpTip: { en: "Rate should be in decimal form (5% = 0.05)", es: "La tasa debe estar en forma decimal (5% = 0.05)", fr: "Le taux doit être sous forme décimale (5% = 0.05)", de: "Der Zinssatz sollte in Dezimalform sein (5% = 0.05)", it: "Il tasso dovrebbe essere in forma decimale (5% = 0.05)", pt: "A taxa deve estar em forma decimal (5% = 0.05)", ru: "Ставка должна быть в десятичной форме (5% = 0.05)", ar: "يجب أن يكون المعدل في شكل عشري (5% = 0.05)", zh: "利率应为小数形式（5% = 0.05）", ja: "利率は小数形式である必要があります（5% = 0.05）", hi: "दर दशमलव रूप में होनी चाहिए (5% = 0.05)", tr: "Oran ondalık biçimde olmalıdır (5% = 0.05)" }
        },
        {
            title: { en: "Linear Equation (Slope-Intercept)", es: "Ecuación Lineal (Pendiente-Intersección)", fr: "Équation Linéaire (Pente-Ordonnée)", de: "Lineare Gleichung (Steigung-Achsenabschnitt)", it: "Equazione Lineare (Pendenza-Intercetta)", pt: "Equação Linear (Inclinação-Intercepto)", ru: "Линейное Уравнение (Наклон-Пересечение)", ar: "المعادلة الخطية (الميل-التقاطع)", zh: "线性方程（斜率-截距）", ja: "一次方程式（傾き-切片）", hi: "रैखिक समीकरण (ढलान-अवरोधन)", tr: "Doğrusal Denklem (Eğim-Kesişim)" },
            explanation: { en: "The slope-intercept form shows the slope and y-intercept of a line.", es: "La forma pendiente-intersección muestra la pendiente y la intersección y de una línea.", fr: "La forme pente-ordonnée montre la pente et l'ordonnée à l'origine d'une droite.", de: "Die Steigung-Achsenabschnitt-Form zeigt die Steigung und den y-Achsenabschnitt einer Geraden.", it: "La forma pendenza-intercetta mostra la pendenza e l'intercetta y di una retta.", pt: "A forma inclinação-intercepto mostra a inclinação e o intercepto y de uma linha.", ru: "Форма наклон-пересечение показывает наклон и пересечение с осью y прямой.", ar: "يُظهر شكل الميل-التقاطع ميل الخط وتقاطعه مع المحور y.", zh: "斜率-截距形式显示直线的斜率和y截距。", ja: "傾き-切片形式は直線の傾きとy切片を示します。", hi: "ढलान-अवरोधन रूप एक रेखा की ढलान और y-अवरोधन दिखाता है।", tr: "Eğim-kesişim formu, bir doğrunun eğimini ve y-kesişimini gösterir." },
            correctFormula: 'y = mx + b',
            topic: 'algebra',
            variables: { 'y': 'y-coordinate', 'x': 'x-coordinate', 'm': 'slope', 'b': 'y-intercept' },
            example: {
                en: "If m = 2, b = 5, and x = 3, find y:\ny = 2(3) + 5\ny = 6 + 5\ny = 11",
                es: "Si m = 2, b = 5 y x = 3, encuentra y:\ny = 2(3) + 5\ny = 6 + 5\ny = 11",
                fr: "Si m = 2, b = 5 et x = 3, trouvez y:\ny = 2(3) + 5\ny = 6 + 5\ny = 11",
                de: "Wenn m = 2, b = 5 und x = 3, finde y:\ny = 2(3) + 5\ny = 6 + 5\ny = 11",
                it: "Se m = 2, b = 5 e x = 3, trova y:\ny = 2(3) + 5\ny = 6 + 5\ny = 11",
                pt: "Se m = 2, b = 5 e x = 3, encontre y:\ny = 2(3) + 5\ny = 6 + 5\ny = 11",
                ru: "Если m = 2, b = 5 и x = 3, найдите y:\ny = 2(3) + 5\ny = 6 + 5\ny = 11",
                ar: "إذا كان m = 2، b = 5، x = 3، أوجد y:\ny = 2(3) + 5\ny = 6 + 5\ny = 11",
                zh: "如果 m = 2，b = 5，x = 3，求 y：\ny = 2(3) + 5\ny = 6 + 5\ny = 11",
                ja: "m = 2、b = 5、x = 3 のとき、y を求めよ：\ny = 2(3) + 5\ny = 6 + 5\ny = 11",
                hi: "यदि m = 2, b = 5, और x = 3, तो y ढूंढें:\ny = 2(3) + 5\ny = 6 + 5\ny = 11",
                tr: "Eğer m = 2, b = 5 ve x = 3 ise, y'yi bulun:\ny = 2(3) + 5\ny = 6 + 5\ny = 11"
            },
            practiceTask: {
                question: {
                    en: "If m = 3, b = -2, and x = 4, find y.",
                    es: "Si m = 3, b = -2 y x = 4, encuentra y.",
                    fr: "Si m = 3, b = -2 et x = 4, trouvez y.",
                    de: "Wenn m = 3, b = -2 und x = 4, finde y.",
                    it: "Se m = 3, b = -2 e x = 4, trova y.",
                    pt: "Se m = 3, b = -2 e x = 4, encontre y.",
                    ru: "Если m = 3, b = -2 и x = 4, найдите y.",
                    ar: "إذا كان m = 3، b = -2، x = 4، أوجد y.",
                    zh: "如果 m = 3，b = -2，x = 4，求 y。",
                    ja: "m = 3、b = -2、x = 4 のとき、y を求めよ。",
                    hi: "यदि m = 3, b = -2, और x = 4, तो y ढूंढें।",
                    tr: "Eğer m = 3, b = -2 ve x = 4 ise, y'yi bulun."
                },
                answer: "10",
                unit: ""
            },
            helpTip: { en: "m is the slope (rise over run), b is where the line crosses y-axis", es: "m es la pendiente (subida sobre recorrido), b es donde la línea cruza el eje y", fr: "m est la pente (montée sur course), b est où la droite croise l'axe y", de: "m ist die Steigung (Anstieg über Lauf), b ist wo die Gerade die y-Achse schneidet", it: "m è la pendenza (salita su corsa), b è dove la retta incrocia l'asse y", pt: "m é a inclinação (subida sobre corrida), b é onde a linha cruza o eixo y", ru: "m - наклон (подъем над пробегом), b - где прямая пересекает ось y", ar: "m هو الميل (الارتفاع على المسافة)، b هو حيث يتقاطع الخط مع المحور y", zh: "m是斜率（上升/运行），b是直线与y轴的交点", ja: "mは傾き（上昇/走行）、bは直線がy軸と交わる点", hi: "m ढलान है (उठान/दौड़), b वह है जहां रेखा y-अक्ष को काटती है", tr: "m eğimdir (yükselme/yatay mesafe), b doğrunun y eksenini kestiği noktadır" }
        }
    ],
    '9': [
        {
            title: { en: "Quadratic Formula", es: "Fórmula Cuadrática", fr: "Formule Quadratique", de: "Quadratische Formel", it: "Formula Quadratica", pt: "Fórmula Quadrática", ru: "Квадратная Формула", ar: "الصيغة التربيعية", zh: "二次公式", ja: "二次方程式の解の公式", hi: "द्विघात सूत्र", tr: "İkinci Dereceden Formül" },
            explanation: { en: "Used to solve quadratic equations of the form ax² + bx + c = 0", es: "Se usa para resolver ecuaciones cuadráticas de la forma ax² + bx + c = 0", fr: "Utilisée pour résoudre les équations quadratiques de la forme ax² + bx + c = 0", de: "Wird verwendet, um quadratische Gleichungen der Form ax² + bx + c = 0 zu lösen", it: "Usata per risolvere equazioni quadratiche della forma ax² + bx + c = 0", pt: "Usada para resolver equações quadráticas da forma ax² + bx + c = 0", ru: "Используется для решения квадратных уравнений вида ax² + bx + c = 0", ar: "تُستخدم لحل المعادلات التربيعية من الشكل ax² + bx + c = 0", zh: "用于求解形式为 ax² + bx + c = 0 的二次方程", ja: "ax² + bx + c = 0 の形の二次方程式を解くために使用されます", hi: "ax² + bx + c = 0 के रूप के द्विघात समीकरणों को हल करने के लिए उपयोग किया जाता है", tr: "ax² + bx + c = 0 biçimindeki ikinci dereceden denklemleri çözmek için kullanılır" },
            correctFormula: 'x = (-b ± √(b² - 4ac)) / (2a)',
            topic: 'algebra',
            variables: { 'x': 'solution(s)', 'a': 'coefficient of x²', 'b': 'coefficient of x', 'c': 'constant term' },
            example: {
                en: "Solve x² - 5x + 6 = 0:\na = 1, b = -5, c = 6\nx = (5 ± √(25 - 24)) / 2\nx = (5 ± 1) / 2\nx = 3 or x = 2",
                es: "Resuelve x² - 5x + 6 = 0:\na = 1, b = -5, c = 6\nx = (5 ± √(25 - 24)) / 2\nx = (5 ± 1) / 2\nx = 3 o x = 2",
                fr: "Résolvez x² - 5x + 6 = 0:\na = 1, b = -5, c = 6\nx = (5 ± √(25 - 24)) / 2\nx = (5 ± 1) / 2\nx = 3 ou x = 2",
                de: "Löse x² - 5x + 6 = 0:\na = 1, b = -5, c = 6\nx = (5 ± √(25 - 24)) / 2\nx = (5 ± 1) / 2\nx = 3 oder x = 2",
                it: "Risolvi x² - 5x + 6 = 0:\na = 1, b = -5, c = 6\nx = (5 ± √(25 - 24)) / 2\nx = (5 ± 1) / 2\nx = 3 o x = 2",
                pt: "Resolva x² - 5x + 6 = 0:\na = 1, b = -5, c = 6\nx = (5 ± √(25 - 24)) / 2\nx = (5 ± 1) / 2\nx = 3 ou x = 2",
                ru: "Решите x² - 5x + 6 = 0:\na = 1, b = -5, c = 6\nx = (5 ± √(25 - 24)) / 2\nx = (5 ± 1) / 2\nx = 3 или x = 2",
                ar: "حل x² - 5x + 6 = 0:\na = 1, b = -5, c = 6\nx = (5 ± √(25 - 24)) / 2\nx = (5 ± 1) / 2\nx = 3 أو x = 2",
                zh: "求解 x² - 5x + 6 = 0：\na = 1, b = -5, c = 6\nx = (5 ± √(25 - 24)) / 2\nx = (5 ± 1) / 2\nx = 3 或 x = 2",
                ja: "x² - 5x + 6 = 0 を解け：\na = 1, b = -5, c = 6\nx = (5 ± √(25 - 24)) / 2\nx = (5 ± 1) / 2\nx = 3 または x = 2",
                hi: "x² - 5x + 6 = 0 हल करें:\na = 1, b = -5, c = 6\nx = (5 ± √(25 - 24)) / 2\nx = (5 ± 1) / 2\nx = 3 या x = 2",
                tr: "x² - 5x + 6 = 0 çözün:\na = 1, b = -5, c = 6\nx = (5 ± √(25 - 24)) / 2\nx = (5 ± 1) / 2\nx = 3 veya x = 2"
            },
            practiceTask: {
                question: {
                    en: "Solve x² - 7x + 12 = 0 using the quadratic formula. Find one solution (the larger value).",
                    es: "Resuelve x² - 7x + 12 = 0 usando la fórmula cuadrática. Encuentra una solución (el valor mayor).",
                    fr: "Résolvez x² - 7x + 12 = 0 en utilisant la formule quadratique. Trouvez une solution (la plus grande valeur).",
                    de: "Löse x² - 7x + 12 = 0 mit der quadratischen Formel. Finde eine Lösung (den größeren Wert).",
                    it: "Risolvi x² - 7x + 12 = 0 usando la formula quadratica. Trova una soluzione (il valore maggiore).",
                    pt: "Resolva x² - 7x + 12 = 0 usando a fórmula quadrática. Encontre uma solução (o valor maior).",
                    ru: "Решите x² - 7x + 12 = 0, используя квадратную формулу. Найдите одно решение (большее значение).",
                    ar: "حل x² - 7x + 12 = 0 باستخدام الصيغة التربيعية. أوجد حلاً واحداً (القيمة الأكبر).",
                    zh: "使用二次公式求解 x² - 7x + 12 = 0。找到一个解（较大的值）。",
                    ja: "二次方程式の公式を使って x² - 7x + 12 = 0 を解け。1つの解（大きい方の値）を求めよ。",
                    hi: "द्विघात सूत्र का उपयोग करके x² - 7x + 12 = 0 हल करें। एक समाधान (बड़ा मान) ढूंढें।",
                    tr: "İkinci dereceden formülü kullanarak x² - 7x + 12 = 0 çözün. Bir çözüm bulun (daha büyük değer)."
                },
                answer: "4",
                unit: ""
            },
            helpTip: { en: "The ± means there are usually two solutions!", es: "¡El ± significa que generalmente hay dos soluciones!", fr: "Le ± signifie qu'il y a généralement deux solutions!", de: "Das ± bedeutet, dass es normalerweise zwei Lösungen gibt!", it: "Il ± significa che di solito ci sono due soluzioni!", pt: "O ± significa que geralmente há duas soluções!", ru: "Знак ± означает, что обычно есть два решения!", ar: "يعني ± أن هناك عادة حلان!", zh: "± 表示通常有两个解！", ja: "± は通常2つの解があることを意味します！", hi: "± का अर्थ है कि आमतौर पर दो समाधान होते हैं!", tr: "± genellikle iki çözüm olduğu anlamına gelir!" }
        },
        {
            title: { en: "Slope Formula", es: "Fórmula de Pendiente", fr: "Formule de Pente", de: "Steigungsformel", it: "Formula della Pendenza", pt: "Fórmula da Inclinação", ru: "Формула Наклона", ar: "صيغة الميل", zh: "斜率公式", ja: "傾きの公式", hi: "ढलान सूत्र", tr: "Eğim Formülü" },
            explanation: { en: "Calculates the slope (steepness) of a line using two points", es: "Calcula la pendiente (inclinación) de una línea usando dos puntos", fr: "Calcule la pente (inclinaison) d'une droite en utilisant deux points", de: "Berechnet die Steigung (Steilheit) einer Geraden mit zwei Punkten", it: "Calcola la pendenza (inclinazione) di una retta usando due punti", pt: "Calcula a inclinação (declive) de uma linha usando dois pontos", ru: "Вычисляет наклон (крутизну) прямой, используя две точки", ar: "يحسب ميل (انحدار) الخط باستخدام نقطتين", zh: "使用两点计算直线的斜率（陡度）", ja: "2点を使用して直線の傾き（急勾配）を計算します", hi: "दो बिंदुओं का उपयोग करके एक रेखा की ढलान (खड़ापन) की गणना करता है", tr: "İki nokta kullanarak bir doğrunun eğimini (dikliğini) hesaplar" },
            correctFormula: 'm = (y₂ - y₁) / (x₂ - x₁)',
            topic: 'algebra',
            variables: { 'm': 'slope (steepness)', 'x₁, y₁': 'coordinates of first point', 'x₂, y₂': 'coordinates of second point' },
            example: {
                en: "Find slope between (2, 3) and (6, 11):\nm = (11 - 3) / (6 - 2)\nm = 8 / 4\nm = 2",
                es: "Encuentra la pendiente entre (2, 3) y (6, 11):\nm = (11 - 3) / (6 - 2)\nm = 8 / 4\nm = 2",
                fr: "Trouvez la pente entre (2, 3) et (6, 11):\nm = (11 - 3) / (6 - 2)\nm = 8 / 4\nm = 2",
                de: "Finde die Steigung zwischen (2, 3) und (6, 11):\nm = (11 - 3) / (6 - 2)\nm = 8 / 4\nm = 2",
                it: "Trova la pendenza tra (2, 3) e (6, 11):\nm = (11 - 3) / (6 - 2)\nm = 8 / 4\nm = 2",
                pt: "Encontre a inclinação entre (2, 3) e (6, 11):\nm = (11 - 3) / (6 - 2)\nm = 8 / 4\nm = 2",
                ru: "Найдите наклон между (2, 3) и (6, 11):\nm = (11 - 3) / (6 - 2)\nm = 8 / 4\nm = 2",
                ar: "أوجد الميل بين (2, 3) و (6, 11):\nm = (11 - 3) / (6 - 2)\nm = 8 / 4\nm = 2",
                zh: "求点 (2, 3) 和 (6, 11) 之间的斜率：\nm = (11 - 3) / (6 - 2)\nm = 8 / 4\nm = 2",
                ja: "点 (2, 3) と (6, 11) の間の傾きを求めよ：\nm = (11 - 3) / (6 - 2)\nm = 8 / 4\nm = 2",
                hi: "बिंदुओं (2, 3) और (6, 11) के बीच ढलान ढूंढें:\nm = (11 - 3) / (6 - 2)\nm = 8 / 4\nm = 2",
                tr: "(2, 3) ve (6, 11) noktaları arasındaki eğimi bulun:\nm = (11 - 3) / (6 - 2)\nm = 8 / 4\nm = 2"
            },
            practiceTask: {
                question: {
                    en: "Find the slope between points (1, 2) and (5, 10).",
                    es: "Encuentra la pendiente entre los puntos (1, 2) y (5, 10).",
                    fr: "Trouvez la pente entre les points (1, 2) et (5, 10).",
                    de: "Finde die Steigung zwischen den Punkten (1, 2) und (5, 10).",
                    it: "Trova la pendenza tra i punti (1, 2) e (5, 10).",
                    pt: "Encontre a inclinação entre os pontos (1, 2) e (5, 10).",
                    ru: "Найдите наклон между точками (1, 2) и (5, 10).",
                    ar: "أوجد الميل بين النقطتين (1, 2) و (5, 10).",
                    zh: "求点 (1, 2) 和 (5, 10) 之间的斜率。",
                    ja: "点 (1, 2) と (5, 10) の間の傾きを求めよ。",
                    hi: "बिंदुओं (1, 2) और (5, 10) के बीच ढलान ढूंढें।",
                    tr: "(1, 2) ve (5, 10) noktaları arasındaki eğimi bulun."
                },
                answer: "2",
                unit: ""
            },
            helpTip: { en: "Rise over run - vertical change over horizontal change", es: "Subida sobre recorrido - cambio vertical sobre cambio horizontal", fr: "Montée sur course - changement vertical sur changement horizontal", de: "Anstieg über Lauf - vertikale Änderung über horizontale Änderung", it: "Salita su corsa - cambiamento verticale su cambiamento orizzontale", pt: "Subida sobre corrida - mudança vertical sobre mudança horizontal", ru: "Подъем над пробегом - вертикальное изменение над горизонтальным изменением", ar: "الارتفاع على المسافة - التغيير الرأسي على التغيير الأفقي", zh: "上升/运行 - 垂直变化/水平变化", ja: "上昇/走行 - 垂直変化/水平変化", hi: "उठान/दौड़ - ऊर्ध्वाधर परिवर्तन/क्षैतिज परिवर्तन", tr: "Yükselme/yatay mesafe - dikey değişim/yatay değişim" }
        },
        {
            title: { en: "Area of Trapezoid", es: "Área del Trapecio", fr: "Aire du Trapèze", de: "Fläche des Trapezes", it: "Area del Trapezio", pt: "Área do Trapézio", ru: "Площадь Трапеции", ar: "مساحة شبه المنحرف", zh: "梯形面积", ja: "台形の面積", hi: "समलंब का क्षेत्रफल", tr: "Yamuk Alanı" },
            explanation: { en: "The area equals the average of the parallel sides times the height", es: "El área es igual al promedio de los lados paralelos por la altura", fr: "L'aire est égale à la moyenne des côtés parallèles fois la hauteur", de: "Die Fläche entspricht dem Durchschnitt der parallelen Seiten mal der Höhe", it: "L'area è uguale alla media dei lati paralleli per l'altezza", pt: "A área é igual à média dos lados paralelos vezes a altura", ru: "Площадь равна среднему значению параллельных сторон, умноженному на высоту", ar: "المساحة تساوي متوسط الأضلاع المتوازية مضروبًا في الارتفاع", zh: "面积等于平行边的平均值乘以高度", ja: "面積は平行な辺の平均に高さを掛けたものに等しい", hi: "क्षेत्रफल समानांतर भुजाओं के औसत को ऊंचाई से गुणा करने के बराबर है", tr: "Alan, paralel kenarların ortalamasının yükseklikle çarpımına eşittir" },
            correctFormula: 'A = ((a + b) / 2) × h',
            topic: 'geometry',
            variables: { 'A': 'area', 'a': 'length of first parallel side', 'b': 'length of second parallel side', 'h': 'perpendicular height' },
            example: {
                en: "If a = 8, b = 12, and h = 5, find A:\nA = ((8 + 12) / 2) × 5\nA = (20 / 2) × 5\nA = 10 × 5\nA = 50 square units",
                es: "Si a = 8, b = 12 y h = 5, encuentra A:\nA = ((8 + 12) / 2) × 5\nA = (20 / 2) × 5\nA = 10 × 5\nA = 50 unidades cuadradas",
                fr: "Si a = 8, b = 12 et h = 5, trouvez A:\nA = ((8 + 12) / 2) × 5\nA = (20 / 2) × 5\nA = 10 × 5\nA = 50 unités carrées",
                de: "Wenn a = 8, b = 12 und h = 5, finde A:\nA = ((8 + 12) / 2) × 5\nA = (20 / 2) × 5\nA = 10 × 5\nA = 50 Quadrateinheiten",
                it: "Se a = 8, b = 12 e h = 5, trova A:\nA = ((8 + 12) / 2) × 5\nA = (20 / 2) × 5\nA = 10 × 5\nA = 50 unità quadrate",
                pt: "Se a = 8, b = 12 e h = 5, encontre A:\nA = ((8 + 12) / 2) × 5\nA = (20 / 2) × 5\nA = 10 × 5\nA = 50 unidades quadradas",
                ru: "Если a = 8, b = 12 и h = 5, найдите A:\nA = ((8 + 12) / 2) × 5\nA = (20 / 2) × 5\nA = 10 × 5\nA = 50 квадратных единиц",
                ar: "إذا كان a = 8، b = 12، h = 5، أوجد A:\nA = ((8 + 12) / 2) × 5\nA = (20 / 2) × 5\nA = 10 × 5\nA = 50 وحدة مربعة",
                zh: "如果 a = 8，b = 12，h = 5，求 A：\nA = ((8 + 12) / 2) × 5\nA = (20 / 2) × 5\nA = 10 × 5\nA = 50 平方单位",
                ja: "a = 8、b = 12、h = 5 のとき、A を求めよ：\nA = ((8 + 12) / 2) × 5\nA = (20 / 2) × 5\nA = 10 × 5\nA = 50 平方単位",
                hi: "यदि a = 8, b = 12, और h = 5, तो A ढूंढें:\nA = ((8 + 12) / 2) × 5\nA = (20 / 2) × 5\nA = 10 × 5\nA = 50 वर्ग इकाइयाँ",
                tr: "Eğer a = 8, b = 12 ve h = 5 ise, A'yı bulun:\nA = ((8 + 12) / 2) × 5\nA = (20 / 2) × 5\nA = 10 × 5\nA = 50 kare birim"
            },
            practiceTask: {
                question: {
                    en: "A trapezoid has parallel sides a = 6 and b = 10, with height = 5. Find the area.",
                    es: "Un trapecio tiene lados paralelos a = 6 y b = 10, con altura = 5. Encuentra el área.",
                    fr: "Un trapèze a des côtés parallèles a = 6 et b = 10, avec hauteur = 5. Trouvez l'aire.",
                    de: "Ein Trapez hat parallele Seiten a = 6 und b = 10, mit Höhe = 5. Finde die Fläche.",
                    it: "Un trapezio ha lati paralleli a = 6 e b = 10, con altezza = 5. Trova l'area.",
                    pt: "Um trapézio tem lados paralelos a = 6 e b = 10, com altura = 5. Encontre a área.",
                    ru: "Трапеция имеет параллельные стороны a = 6 и b = 10, с высотой = 5. Найдите площадь.",
                    ar: "شبه منحرف له أضلاع متوازية a = 6 و b = 10، بارتفاع = 5. أوجد المساحة.",
                    zh: "一个梯形的平行边 a = 6 和 b = 10，高 = 5。求面积。",
                    ja: "台形の平行な辺が a = 6 と b = 10、高さ = 5。面積を求めよ。",
                    hi: "एक समलंब की समानांतर भुजाएं a = 6 और b = 10, ऊंचाई = 5। क्षेत्रफल ढूंढें।",
                    tr: "Bir yamuğun paralel kenarları a = 6 ve b = 10, yükseklik = 5. Alanı bulun."
                },
                answer: "40",
                unit: "square units"
            },
            helpTip: { en: "Think of it as the average base times height!", es: "¡Piénsalo como la base promedio por la altura!", fr: "Pensez-y comme la base moyenne fois la hauteur!", de: "Denken Sie daran als durchschnittliche Basis mal Höhe!", it: "Pensalo come la base media per l'altezza!", pt: "Pense nisso como a base média vezes a altura!", ru: "Думайте об этом как о средней базе, умноженной на высоту!", ar: "فكر فيها كمتوسط القاعدة مضروبًا في الارتفاع!", zh: "将其视为平均底边乘以高度！", ja: "平均底辺×高さと考えてください！", hi: "इसे औसत आधार गुणा ऊंचाई के रूप में सोचें!", tr: "Bunu ortalama taban çarpı yükseklik olarak düşünün!" }
        },
        {
            title: { en: "Sine Function (SOH)", es: "Función Seno (SOH)", fr: "Fonction Sinus (SOH)", de: "Sinusfunktion (SOH)", it: "Funzione Seno (SOH)", pt: "Função Seno (SOH)", ru: "Функция Синуса (SOH)", ar: "دالة الجيب (SOH)", zh: "正弦函数 (SOH)", ja: "正弦関数 (SOH)", hi: "साइन फ़ंक्शन (SOH)", tr: "Sinüs Fonksiyonu (SOH)" },
            explanation: { en: "In a right triangle, sine equals opposite side over hypotenuse", es: "En un triángulo rectángulo, el seno es igual al lado opuesto sobre la hipotenusa", fr: "Dans un triangle rectangle, le sinus est égal au côté opposé sur l'hypoténuse", de: "In einem rechtwinkligen Dreieck ist der Sinus gleich Gegenkathete durch Hypotenuse", it: "In un triangolo rettangolo, il seno è uguale al lato opposto sull'ipotenusa", pt: "Em um triângulo retângulo, o seno é igual ao lado oposto sobre a hipotenusa", ru: "В прямоугольном треугольнике синус равен противолежащему катету, деленному на гипотенузу", ar: "في المثلث القائم، الجيب يساوي الضلع المقابل على الوتر", zh: "在直角三角形中，正弦等于对边除以斜边", ja: "直角三角形では、正弦は対辺÷斜辺に等しい", hi: "समकोण त्रिभुज में, साइन विपरीत भुजा को कर्ण से विभाजित करने के बराबर है", tr: "Dik üçgende, sinüs karşı kenar bölü hipotenüse eşittir" },
            correctFormula: 'sin(θ) = opposite / hypotenuse',
            topic: 'trigonometry',
            variables: { 'θ': 'angle in degrees or radians', 'opposite': 'side opposite to angle θ', 'hypotenuse': 'longest side of right triangle' },
            example: {
                en: "If opposite = 3 and hypotenuse = 5, find sin(θ):\nsin(θ) = 3 / 5\nsin(θ) = 0.6",
                es: "Si opuesto = 3 e hipotenusa = 5, encuentra sin(θ):\nsin(θ) = 3 / 5\nsin(θ) = 0.6",
                fr: "Si opposé = 3 et hypoténuse = 5, trouvez sin(θ):\nsin(θ) = 3 / 5\nsin(θ) = 0.6",
                de: "Wenn Gegenkathete = 3 und Hypotenuse = 5, finde sin(θ):\nsin(θ) = 3 / 5\nsin(θ) = 0.6",
                it: "Se opposto = 3 e ipotenusa = 5, trova sin(θ):\nsin(θ) = 3 / 5\nsin(θ) = 0.6",
                pt: "Se oposto = 3 e hipotenusa = 5, encontre sin(θ):\nsin(θ) = 3 / 5\nsin(θ) = 0.6",
                ru: "Если противолежащий = 3 и гипотенуза = 5, найдите sin(θ):\nsin(θ) = 3 / 5\nsin(θ) = 0.6",
                ar: "إذا كان المقابل = 3 والوتر = 5، أوجد sin(θ):\nsin(θ) = 3 / 5\nsin(θ) = 0.6",
                zh: "如果对边 = 3，斜边 = 5，求 sin(θ)：\nsin(θ) = 3 / 5\nsin(θ) = 0.6",
                ja: "対辺 = 3、斜辺 = 5 のとき、sin(θ) を求めよ：\nsin(θ) = 3 / 5\nsin(θ) = 0.6",
                hi: "यदि विपरीत = 3 और कर्ण = 5, तो sin(θ) ढूंढें:\nsin(θ) = 3 / 5\nsin(θ) = 0.6",
                tr: "Eğer karşı = 3 ve hipotenüs = 5 ise, sin(θ)'yı bulun:\nsin(θ) = 3 / 5\nsin(θ) = 0.6"
            },
            practiceTask: {
                question: {
                    en: "In a right triangle, opposite = 8 and hypotenuse = 10. Find sin(θ). (Answer as decimal)",
                    es: "En un triángulo rectángulo, opuesto = 8 e hipotenusa = 10. Encuentra sin(θ). (Respuesta como decimal)",
                    fr: "Dans un triangle rectangle, opposé = 8 et hypoténuse = 10. Trouvez sin(θ). (Réponse en décimal)",
                    de: "In einem rechtwinkligen Dreieck, Gegenkathete = 8 und Hypotenuse = 10. Finde sin(θ). (Antwort als Dezimalzahl)",
                    it: "In un triangolo rettangolo, opposto = 8 e ipotenusa = 10. Trova sin(θ). (Risposta come decimale)",
                    pt: "Em um triângulo retângulo, oposto = 8 e hipotenusa = 10. Encontre sin(θ). (Resposta como decimal)",
                    ru: "В прямоугольном треугольнике, противолежащий = 8 и гипотенуза = 10. Найдите sin(θ). (Ответ в виде десятичной дроби)",
                    ar: "في مثلث قائم، المقابل = 8 والوتر = 10. أوجد sin(θ). (الإجابة كعدد عشري)",
                    zh: "在直角三角形中，对边 = 8，斜边 = 10。求 sin(θ)。（答案为小数）",
                    ja: "直角三角形で、対辺 = 8、斜辺 = 10。sin(θ) を求めよ。（小数で答えよ）",
                    hi: "एक समकोण त्रिभुज में, विपरीत = 8 और कर्ण = 10। sin(θ) ढूंढें। (दशमलव में उत्तर)",
                    tr: "Bir dik üçgende, karşı = 8 ve hipotenüs = 10. sin(θ)'yı bulun. (Ondalık olarak cevap)"
                },
                answer: "0.8",
                unit: ""
            },
            helpTip: { en: "Remember SOH-CAH-TOA!", es: "¡Recuerda SOH-CAH-TOA!", fr: "Rappelez-vous SOH-CAH-TOA!", de: "Denken Sie an SOH-CAH-TOA!", it: "Ricorda SOH-CAH-TOA!", pt: "Lembre-se de SOH-CAH-TOA!", ru: "Помните SOH-CAH-TOA!", ar: "تذكر SOH-CAH-TOA!", zh: "记住 SOH-CAH-TOA！", ja: "SOH-CAH-TOA を覚えてください！", hi: "SOH-CAH-TOA याद रखें!", tr: "SOH-CAH-TOA'yı hatırlayın!" }
        },
        {
            title: { en: "Cosine Function (CAH)", es: "Función Coseno (CAH)", fr: "Fonction Cosinus (CAH)", de: "Kosinusfunktion (CAH)", it: "Funzione Coseno (CAH)", pt: "Função Cosseno (CAH)", ru: "Функция Косинуса (CAH)", ar: "دالة جيب التمام (CAH)", zh: "余弦函数 (CAH)", ja: "余弦関数 (CAH)", hi: "कोसाइन फ़ंक्शन (CAH)", tr: "Kosinüs Fonksiyonu (CAH)" },
            explanation: { en: "In a right triangle, cosine equals adjacent side over hypotenuse", es: "En un triángulo rectángulo, el coseno es igual al lado adyacente sobre la hipotenusa", fr: "Dans un triangle rectangle, le cosinus est égal au côté adjacent sur l'hypoténuse", de: "In einem rechtwinkligen Dreieck ist der Kosinus gleich Ankathete durch Hypotenuse", it: "In un triangolo rettangolo, il coseno è uguale al lato adiacente sull'ipotenusa", pt: "Em um triângulo retângulo, o cosseno é igual ao lado adjacente sobre a hipotenusa", ru: "В прямоугольном треугольнике косинус равен прилежащему катету, деленному на гипотенузу", ar: "في المثلث القائم، جيب التمام يساوي الضلع المجاور على الوتر", zh: "在直角三角形中，余弦等于邻边除以斜边", ja: "直角三角形では、余弦は隣辺÷斜辺に等しい", hi: "समकोण त्रिभुज में, कोसाइन आसन्न भुजा को कर्ण से विभाजित करने के बराबर है", tr: "Dik üçgende, kosinüs komşu kenar bölü hipotenüse eşittir" },
            correctFormula: 'cos(θ) = adjacent / hypotenuse',
            topic: 'trigonometry',
            variables: { 'θ': 'angle in degrees or radians', 'adjacent': 'side next to angle θ', 'hypotenuse': 'longest side of right triangle' },
            example: {
                en: "If adjacent = 4 and hypotenuse = 5, find cos(θ):\ncos(θ) = 4 / 5\ncos(θ) = 0.8",
                es: "Si adyacente = 4 e hipotenusa = 5, encuentra cos(θ):\ncos(θ) = 4 / 5\ncos(θ) = 0.8",
                fr: "Si adjacent = 4 et hypoténuse = 5, trouvez cos(θ):\ncos(θ) = 4 / 5\ncos(θ) = 0.8",
                de: "Wenn Ankathete = 4 und Hypotenuse = 5, finde cos(θ):\ncos(θ) = 4 / 5\ncos(θ) = 0.8",
                it: "Se adiacente = 4 e ipotenusa = 5, trova cos(θ):\ncos(θ) = 4 / 5\ncos(θ) = 0.8",
                pt: "Se adjacente = 4 e hipotenusa = 5, encontre cos(θ):\ncos(θ) = 4 / 5\ncos(θ) = 0.8",
                ru: "Если прилежащий = 4 и гипотенуза = 5, найдите cos(θ):\ncos(θ) = 4 / 5\ncos(θ) = 0.8",
                ar: "إذا كان المجاور = 4 والوتر = 5، أوجد cos(θ):\ncos(θ) = 4 / 5\ncos(θ) = 0.8",
                zh: "如果邻边 = 4，斜边 = 5，求 cos(θ)：\ncos(θ) = 4 / 5\ncos(θ) = 0.8",
                ja: "隣辺 = 4、斜辺 = 5 のとき、cos(θ) を求めよ：\ncos(θ) = 4 / 5\ncos(θ) = 0.8",
                hi: "यदि आसन्न = 4 और कर्ण = 5, तो cos(θ) ढूंढें:\ncos(θ) = 4 / 5\ncos(θ) = 0.8",
                tr: "Eğer komşu = 4 ve hipotenüs = 5 ise, cos(θ)'yı bulun:\ncos(θ) = 4 / 5\ncos(θ) = 0.8"
            },
            practiceTask: {
                question: {
                    en: "In a right triangle, adjacent = 6 and hypotenuse = 10. Find cos(θ). (Answer as decimal)",
                    es: "En un triángulo rectángulo, adyacente = 6 e hipotenusa = 10. Encuentra cos(θ). (Respuesta como decimal)",
                    fr: "Dans un triangle rectangle, adjacent = 6 et hypoténuse = 10. Trouvez cos(θ). (Réponse en décimal)",
                    de: "In einem rechtwinkligen Dreieck, Ankathete = 6 und Hypotenuse = 10. Finde cos(θ). (Antwort als Dezimalzahl)",
                    it: "In un triangolo rettangolo, adiacente = 6 e ipotenusa = 10. Trova cos(θ). (Risposta come decimale)",
                    pt: "Em um triângulo retângulo, adjacente = 6 e hipotenusa = 10. Encontre cos(θ). (Resposta como decimal)",
                    ru: "В прямоугольном треугольнике, прилежащий = 6 и гипотенуза = 10. Найдите cos(θ). (Ответ в виде десятичной дроби)",
                    ar: "في مثلث قائم، المجاور = 6 والوتر = 10. أوجد cos(θ). (الإجابة كعدد عشري)",
                    zh: "在直角三角形中，邻边 = 6，斜边 = 10。求 cos(θ)。（答案为小数）",
                    ja: "直角三角形で、隣辺 = 6、斜辺 = 10。cos(θ) を求めよ。（小数で答えよ）",
                    hi: "एक समकोण त्रिभुज में, आसन्न = 6 और कर्ण = 10। cos(θ) ढूंढें। (दशमलव में उत्तर)",
                    tr: "Bir dik üçgende, komşu = 6 ve hipotenüs = 10. cos(θ)'yı bulun. (Ondalık olarak cevap)"
                },
                answer: "0.6",
                unit: ""
            },
            helpTip: { en: "CAH is the middle part of SOH-CAH-TOA", es: "CAH es la parte media de SOH-CAH-TOA", fr: "CAH est la partie centrale de SOH-CAH-TOA", de: "CAH ist der mittlere Teil von SOH-CAH-TOA", it: "CAH è la parte centrale di SOH-CAH-TOA", pt: "CAH é a parte do meio de SOH-CAH-TOA", ru: "CAH - средняя часть SOH-CAH-TOA", ar: "CAH هو الجزء الأوسط من SOH-CAH-TOA", zh: "CAH 是 SOH-CAH-TOA 的中间部分", ja: "CAH は SOH-CAH-TOA の中間部分です", hi: "CAH, SOH-CAH-TOA का मध्य भाग है", tr: "CAH, SOH-CAH-TOA'nın orta kısmıdır" }
        },
        {
            title: { en: "Tangent Function (TOA)", es: "Función Tangente (TOA)", fr: "Fonction Tangente (TOA)", de: "Tangensfunktion (TOA)", it: "Funzione Tangente (TOA)", pt: "Função Tangente (TOA)", ru: "Функция Тангенса (TOA)", ar: "دالة الظل (TOA)", zh: "正切函数 (TOA)", ja: "正接関数 (TOA)", hi: "टैंजेंट फ़ंक्शन (TOA)", tr: "Tanjant Fonksiyonu (TOA)" },
            explanation: { en: "In a right triangle, tangent equals opposite side over adjacent side", es: "En un triángulo rectángulo, la tangente es igual al lado opuesto sobre el lado adyacente", fr: "Dans un triangle rectangle, la tangente est égale au côté opposé sur le côté adjacent", de: "In einem rechtwinkligen Dreieck ist der Tangens gleich Gegenkathete durch Ankathete", it: "In un triangolo rettangolo, la tangente è uguale al lato opposto sul lato adiacente", pt: "Em um triângulo retângulo, a tangente é igual ao lado oposto sobre o lado adjacente", ru: "В прямоугольном треугольнике тангенс равен противолежащему катету, деленному на прилежащий катет", ar: "في المثلث القائم، الظل يساوي الضلع المقابل على الضلع المجاور", zh: "在直角三角形中，正切等于对边除以邻边", ja: "直角三角形では、正接は対辺÷隣辺に等しい", hi: "समकोण त्रिभुज में, टैंजेंट विपरीत भुजा को आसन्न भुजा से विभाजित करने के बराबर है", tr: "Dik üçgende, tanjant karşı kenar bölü komşu kenara eşittir" },
            correctFormula: 'tan(θ) = opposite / adjacent',
            topic: 'trigonometry',
            variables: { 'θ': 'angle in degrees or radians', 'opposite': 'side opposite to angle θ', 'adjacent': 'side next to angle θ' },
            example: {
                en: "If opposite = 3 and adjacent = 4, find tan(θ):\ntan(θ) = 3 / 4\ntan(θ) = 0.75",
                es: "Si opuesto = 3 y adyacente = 4, encuentra tan(θ):\ntan(θ) = 3 / 4\ntan(θ) = 0.75",
                fr: "Si opposé = 3 et adjacent = 4, trouvez tan(θ):\ntan(θ) = 3 / 4\ntan(θ) = 0.75",
                de: "Wenn Gegenkathete = 3 und Ankathete = 4, finde tan(θ):\ntan(θ) = 3 / 4\ntan(θ) = 0.75",
                it: "Se opposto = 3 e adiacente = 4, trova tan(θ):\ntan(θ) = 3 / 4\ntan(θ) = 0.75",
                pt: "Se oposto = 3 e adjacente = 4, encontre tan(θ):\ntan(θ) = 3 / 4\ntan(θ) = 0.75",
                ru: "Если противолежащий = 3 и прилежащий = 4, найдите tan(θ):\ntan(θ) = 3 / 4\ntan(θ) = 0.75",
                ar: "إذا كان المقابل = 3 والمجاور = 4، أوجد tan(θ):\ntan(θ) = 3 / 4\ntan(θ) = 0.75",
                zh: "如果对边 = 3，邻边 = 4，求 tan(θ)：\ntan(θ) = 3 / 4\ntan(θ) = 0.75",
                ja: "対辺 = 3、隣辺 = 4 のとき、tan(θ) を求めよ：\ntan(θ) = 3 / 4\ntan(θ) = 0.75",
                hi: "यदि विपरीत = 3 और आसन्न = 4, तो tan(θ) ढूंढें:\ntan(θ) = 3 / 4\ntan(θ) = 0.75",
                tr: "Eğer karşı = 3 ve komşu = 4 ise, tan(θ)'yı bulun:\ntan(θ) = 3 / 4\ntan(θ) = 0.75"
            },
            practiceTask: {
                question: {
                    en: "In a right triangle, opposite = 9 and adjacent = 12. Find tan(θ). (Answer as decimal)",
                    es: "En un triángulo rectángulo, opuesto = 9 y adyacente = 12. Encuentra tan(θ). (Respuesta como decimal)",
                    fr: "Dans un triangle rectangle, opposé = 9 et adjacent = 12. Trouvez tan(θ). (Réponse en décimal)",
                    de: "In einem rechtwinkligen Dreieck, Gegenkathete = 9 und Ankathete = 12. Finde tan(θ). (Antwort als Dezimalzahl)",
                    it: "In un triangolo rettangolo, opposto = 9 e adiacente = 12. Trova tan(θ). (Risposta come decimale)",
                    pt: "Em um triângulo retângulo, oposto = 9 e adjacente = 12. Encontre tan(θ). (Resposta como decimal)",
                    ru: "В прямоугольном треугольнике, противолежащий = 9 и прилежащий = 12. Найдите tan(θ). (Ответ в виде десятичной дроби)",
                    ar: "في مثلث قائم، المقابل = 9 والمجاور = 12. أوجد tan(θ). (الإجابة كعدد عشري)",
                    zh: "在直角三角形中，对边 = 9，邻边 = 12。求 tan(θ)。（答案为小数）",
                    ja: "直角三角形で、対辺 = 9、隣辺 = 12。tan(θ) を求めよ。（小数で答えよ）",
                    hi: "एक समकोण त्रिभुज में, विपरीत = 9 और आसन्न = 12। tan(θ) ढूंढें। (दशमलव में उत्तर)",
                    tr: "Bir dik üçgende, karşı = 9 ve komşu = 12. tan(θ)'yı bulun. (Ondalık olarak cevap)"
                },
                answer: "0.75",
                unit: ""
            },
            helpTip: { en: "TOA is the last part of SOH-CAH-TOA", es: "TOA es la última parte de SOH-CAH-TOA", fr: "TOA est la dernière partie de SOH-CAH-TOA", de: "TOA ist der letzte Teil von SOH-CAH-TOA", it: "TOA è l'ultima parte di SOH-CAH-TOA", pt: "TOA é a última parte de SOH-CAH-TOA", ru: "TOA - последняя часть SOH-CAH-TOA", ar: "TOA هو الجزء الأخير من SOH-CAH-TOA", zh: "TOA 是 SOH-CAH-TOA 的最后部分", ja: "TOA は SOH-CAH-TOA の最後の部分です", hi: "TOA, SOH-CAH-TOA का अंतिम भाग है", tr: "TOA, SOH-CAH-TOA'nın son kısmıdır" }
        }
    ],
    '10': [
        {
            title: { en: "Distance Formula", es: "Fórmula de Distancia", fr: "Formule de Distance", de: "Abstandsformel", it: "Formula della Distanza", pt: "Fórmula da Distância", ru: "Формула Расстояния", ar: "صيغة المسافة", zh: "距离公式", ja: "距離の公式", hi: "दूरी सूत्र", tr: "Mesafe Formülü" },
            explanation: { en: "Calculates the distance between two points in a coordinate plane", es: "Calcula la distancia entre dos puntos en un plano de coordenadas", fr: "Calcule la distance entre deux points dans un plan de coordonnées", de: "Berechnet den Abstand zwischen zwei Punkten in einer Koordinatenebene", it: "Calcola la distanza tra due punti in un piano di coordinate", pt: "Calcula a distância entre dois pontos em um plano de coordenadas", ru: "Вычисляет расстояние между двумя точками в координатной плоскости", ar: "يحسب المسافة بين نقطتين في مستوى الإحداثيات", zh: "计算坐标平面中两点之间的距离", ja: "座標平面上の2点間の距離を計算します", hi: "निर्देशांक तल में दो बिंदुओं के बीच की दूरी की गणना करता है", tr: "Koordinat düzleminde iki nokta arasındaki mesafeyi hesaplar" },
            correctFormula: 'd = √((x₂ - x₁)² + (y₂ - y₁)²)',
            topic: 'algebra',
            variables: { 'd': 'distance between points', 'x₁, y₁': 'coordinates of first point', 'x₂, y₂': 'coordinates of second point' },
            example: {
                en: "Find distance between (1, 2) and (4, 6):\nd = √((4-1)² + (6-2)²)\nd = √(3² + 4²)\nd = √(9 + 16)\nd = √25\nd = 5 units",
                es: "Encuentra la distancia entre (1, 2) y (4, 6):\nd = √((4-1)² + (6-2)²)\nd = √(3² + 4²)\nd = √(9 + 16)\nd = √25\nd = 5 unidades",
                fr: "Trouvez la distance entre (1, 2) et (4, 6):\nd = √((4-1)² + (6-2)²)\nd = √(3² + 4²)\nd = √(9 + 16)\nd = √25\nd = 5 unités",
                de: "Finde den Abstand zwischen (1, 2) und (4, 6):\nd = √((4-1)² + (6-2)²)\nd = √(3² + 4²)\nd = √(9 + 16)\nd = √25\nd = 5 Einheiten",
                it: "Trova la distanza tra (1, 2) e (4, 6):\nd = √((4-1)² + (6-2)²)\nd = √(3² + 4²)\nd = √(9 + 16)\nd = √25\nd = 5 unità",
                pt: "Encontre a distância entre (1, 2) e (4, 6):\nd = √((4-1)² + (6-2)²)\nd = √(3² + 4²)\nd = √(9 + 16)\nd = √25\nd = 5 unidades",
                ru: "Найдите расстояние между (1, 2) и (4, 6):\nd = √((4-1)² + (6-2)²)\nd = √(3² + 4²)\nd = √(9 + 16)\nd = √25\nd = 5 единиц",
                ar: "أوجد المسافة بين (1, 2) و (4, 6):\nd = √((4-1)² + (6-2)²)\nd = √(3² + 4²)\nd = √(9 + 16)\nd = √25\nd = 5 وحدات",
                zh: "求点 (1, 2) 和 (4, 6) 之间的距离：\nd = √((4-1)² + (6-2)²)\nd = √(3² + 4²)\nd = √(9 + 16)\nd = √25\nd = 5 单位",
                ja: "点 (1, 2) と (4, 6) の間の距離を求めよ：\nd = √((4-1)² + (6-2)²)\nd = √(3² + 4²)\nd = √(9 + 16)\nd = √25\nd = 5 単位",
                hi: "बिंदुओं (1, 2) और (4, 6) के बीच की दूरी ढूंढें:\nd = √((4-1)² + (6-2)²)\nd = √(3² + 4²)\nd = √(9 + 16)\nd = √25\nd = 5 इकाइयाँ",
                tr: "(1, 2) ve (4, 6) noktaları arasındaki mesafeyi bulun:\nd = √((4-1)² + (6-2)²)\nd = √(3² + 4²)\nd = √(9 + 16)\nd = √25\nd = 5 birim"
            },
            practiceTask: {
                question: {
                    en: "Find the distance between points (2, 3) and (6, 6).",
                    es: "Encuentra la distancia entre los puntos (2, 3) y (6, 6).",
                    fr: "Trouvez la distance entre les points (2, 3) et (6, 6).",
                    de: "Finde den Abstand zwischen den Punkten (2, 3) und (6, 6).",
                    it: "Trova la distanza tra i punti (2, 3) e (6, 6).",
                    pt: "Encontre a distância entre os pontos (2, 3) e (6, 6).",
                    ru: "Найдите расстояние между точками (2, 3) и (6, 6).",
                    ar: "أوجد المسافة بين النقطتين (2, 3) و (6, 6).",
                    zh: "求点 (2, 3) 和 (6, 6) 之间的距离。",
                    ja: "点 (2, 3) と (6, 6) の間の距離を求めよ。",
                    hi: "बिंदुओं (2, 3) और (6, 6) के बीच की दूरी ढूंढें।",
                    tr: "(2, 3) ve (6, 6) noktaları arasındaki mesafeyi bulun."
                },
                answer: "5",
                unit: "units"
            },
            helpTip: { en: "This comes from the Pythagorean theorem!", es: "¡Esto proviene del teorema de Pitágoras!", fr: "Cela vient du théorème de Pythagore!", de: "Dies stammt vom Satz des Pythagoras!", it: "Questo deriva dal teorema di Pitagora!", pt: "Isso vem do teorema de Pitágoras!", ru: "Это происходит из теоремы Пифагора!", ar: "هذا يأتي من نظرية فيثاغورس!", zh: "这来自勾股定理！", ja: "これはピタゴラスの定理から来ています！", hi: "यह पाइथागोरस प्रमेय से आता है!", tr: "Bu Pisagor teoreminden gelir!" }
        },
        {
            title: { en: "Compound Interest", es: "Interés Compuesto", fr: "Intérêt Composé", de: "Zinseszins", it: "Interesse Composto", pt: "Juros Compostos", ru: "Сложный Процент", ar: "الفائدة المركبة", zh: "复利", ja: "複利", hi: "चक्रवृद्धि ब्याज", tr: "Bileşik Faiz" },
            explanation: { en: "Interest calculated on initial principal and accumulated interest", es: "Interés calculado sobre el capital inicial y el interés acumulado", fr: "Intérêt calculé sur le capital initial et les intérêts accumulés", de: "Zinsen berechnet auf Anfangskapital und aufgelaufene Zinsen", it: "Interesse calcolato sul capitale iniziale e sugli interessi accumulati", pt: "Juros calculados sobre o principal inicial e juros acumulados", ru: "Проценты, рассчитанные на начальную сумму и накопленные проценты", ar: "الفائدة المحسوبة على رأس المال الأولي والفائدة المتراكمة", zh: "根据初始本金和累积利息计算的利息", ja: "元本と累積利息に対して計算される利息", hi: "प्रारंभिक मूलधन और संचित ब्याज पर गणना किया गया ब्याज", tr: "Başlangıç anaparası ve birikmiş faiz üzerinden hesaplanan faiz" },
            correctFormula: 'A = P(1 + r/n)^(nt)',
            topic: 'algebra',
            variables: { 'A': 'final amount after interest', 'P': 'initial principal (starting amount)', 'r': 'annual interest rate (as decimal)', 'n': 'number of times interest compounds per year', 't': 'time in years' },
            example: {
                en: "If P = 1000, r = 0.05, n = 4, t = 2, find A:\nA = 1000(1 + 0.05/4)^(4×2)\nA = 1000(1.0125)^8\nA ≈ 1104.49",
                es: "Si P = 1000, r = 0.05, n = 4, t = 2, encuentra A:\nA = 1000(1 + 0.05/4)^(4×2)\nA = 1000(1.0125)^8\nA ≈ 1104.49",
                fr: "Si P = 1000, r = 0.05, n = 4, t = 2, trouvez A:\nA = 1000(1 + 0.05/4)^(4×2)\nA = 1000(1.0125)^8\nA ≈ 1104.49",
                de: "Wenn P = 1000, r = 0.05, n = 4, t = 2, finde A:\nA = 1000(1 + 0.05/4)^(4×2)\nA = 1000(1.0125)^8\nA ≈ 1104.49",
                it: "Se P = 1000, r = 0.05, n = 4, t = 2, trova A:\nA = 1000(1 + 0.05/4)^(4×2)\nA = 1000(1.0125)^8\nA ≈ 1104.49",
                pt: "Se P = 1000, r = 0.05, n = 4, t = 2, encontre A:\nA = 1000(1 + 0.05/4)^(4×2)\nA = 1000(1.0125)^8\nA ≈ 1104.49",
                ru: "Если P = 1000, r = 0.05, n = 4, t = 2, найдите A:\nA = 1000(1 + 0.05/4)^(4×2)\nA = 1000(1.0125)^8\nA ≈ 1104.49",
                ar: "إذا كان P = 1000, r = 0.05, n = 4, t = 2، أوجد A:\nA = 1000(1 + 0.05/4)^(4×2)\nA = 1000(1.0125)^8\nA ≈ 1104.49",
                zh: "如果 P = 1000, r = 0.05, n = 4, t = 2，求 A：\nA = 1000(1 + 0.05/4)^(4×2)\nA = 1000(1.0125)^8\nA ≈ 1104.49",
                ja: "P = 1000, r = 0.05, n = 4, t = 2 のとき、A を求めよ：\nA = 1000(1 + 0.05/4)^(4×2)\nA = 1000(1.0125)^8\nA ≈ 1104.49",
                hi: "यदि P = 1000, r = 0.05, n = 4, t = 2, तो A ढूंढें:\nA = 1000(1 + 0.05/4)^(4×2)\nA = 1000(1.0125)^8\nA ≈ 1104.49",
                tr: "Eğer P = 1000, r = 0.05, n = 4, t = 2 ise, A'yı bulun:\nA = 1000(1 + 0.05/4)^(4×2)\nA = 1000(1.0125)^8\nA ≈ 1104.49"
            },
            practiceTask: {
                question: {
                    en: "P = 5000, r = 0.04, n = 4, t = 3. Find A (round to nearest cent).",
                    es: "P = 5000, r = 0.04, n = 4, t = 3. Encuentra A (redondea al centavo más cercano).",
                    fr: "P = 5000, r = 0.04, n = 4, t = 3. Trouvez A (arrondir au centime près).",
                    de: "P = 5000, r = 0.04, n = 4, t = 3. Finde A (auf den nächsten Cent runden).",
                    it: "P = 5000, r = 0.04, n = 4, t = 3. Trova A (arrotonda al centesimo più vicino).",
                    pt: "P = 5000, r = 0.04, n = 4, t = 3. Encontre A (arredonde para o centavo mais próximo).",
                    ru: "P = 5000, r = 0.04, n = 4, t = 3. Найдите A (округлите до ближайшего цента).",
                    ar: "P = 5000, r = 0.04, n = 4, t = 3. أوجد A (قرب إلى أقرب سنت).",
                    zh: "P = 5000, r = 0.04, n = 4, t = 3。求 A（四舍五入到最接近的分）。",
                    ja: "P = 5000, r = 0.04, n = 4, t = 3。A を求めよ（最も近いセントに四捨五入）。",
                    hi: "P = 5000, r = 0.04, n = 4, t = 3। A ढूंढें (निकटतम सेंट तक पूर्णांकित करें)।",
                    tr: "P = 5000, r = 0.04, n = 4, t = 3. A'yı bulun (en yakın sente yuvarlayın)."
                },
                answer: "5637.48",
                unit: ""
            },
            helpTip: { en: "The more frequently it compounds, the more you earn!", es: "¡Cuanto más frecuentemente se compone, más ganas!", fr: "Plus il se compose fréquemment, plus vous gagnez!", de: "Je häufiger es zusammengesetzt wird, desto mehr verdienen Sie!", it: "Più frequentemente si compone, più guadagni!", pt: "Quanto mais frequentemente compõe, mais você ganha!", ru: "Чем чаще начисляется, тем больше вы зарабатываете!", ar: "كلما زاد تكرار التركيب، زادت أرباحك!", zh: "复利频率越高，收益越多！", ja: "複利の頻度が高いほど、より多く稼げます！", hi: "जितनी बार चक्रवृद्धि होती है, उतना अधिक आप कमाते हैं!", tr: "Ne kadar sık bileşirse, o kadar çok kazanırsınız!" }
        },
        {
            title: { en: "Volume of Sphere", es: "Volumen de Esfera", fr: "Volume de Sphère", de: "Volumen der Kugel", it: "Volume della Sfera", pt: "Volume da Esfera", ru: "Объем Сферы", ar: "حجم الكرة", zh: "球体体积", ja: "球の体積", hi: "गोले का आयतन", tr: "Küre Hacmi" },
            explanation: { en: "The volume of a sphere using its radius", es: "El volumen de una esfera usando su radio", fr: "Le volume d'une sphère en utilisant son rayon", de: "Das Volumen einer Kugel mit ihrem Radius", it: "Il volume di una sfera usando il suo raggio", pt: "O volume de uma esfera usando seu raio", ru: "Объем сферы, используя ее радиус", ar: "حجم الكرة باستخدام نصف قطرها", zh: "使用半径计算球体的体积", ja: "半径を使用した球の体積", hi: "इसकी त्रिज्या का उपयोग करके गोले का आयतन", tr: "Yarıçapını kullanarak bir kürenin hacmi" },
            correctFormula: 'V = (4/3)πr³',
            topic: 'geometry',
            variables: { 'V': 'volume of sphere', 'r': 'radius of sphere' },
            example: {
                en: "If r = 3, find V:\nV = (4/3)π(3)³\nV = (4/3)π(27)\nV = 36π\nV ≈ 113.10 cubic units",
                es: "Si r = 3, encuentra V:\nV = (4/3)π(3)³\nV = (4/3)π(27)\nV = 36π\nV ≈ 113.10 unidades cúbicas",
                fr: "Si r = 3, trouvez V:\nV = (4/3)π(3)³\nV = (4/3)π(27)\nV = 36π\nV ≈ 113.10 unités cubes",
                de: "Wenn r = 3, finde V:\nV = (4/3)π(3)³\nV = (4/3)π(27)\nV = 36π\nV ≈ 113.10 Kubikeinheiten",
                it: "Se r = 3, trova V:\nV = (4/3)π(3)³\nV = (4/3)π(27)\nV = 36π\nV ≈ 113.10 unità cubiche",
                pt: "Se r = 3, encontre V:\nV = (4/3)π(3)³\nV = (4/3)π(27)\nV = 36π\nV ≈ 113.10 unidades cúbicas",
                ru: "Если r = 3, найдите V:\nV = (4/3)π(3)³\nV = (4/3)π(27)\nV = 36π\nV ≈ 113.10 кубических единиц",
                ar: "إذا كان r = 3، أوجد V:\nV = (4/3)π(3)³\nV = (4/3)π(27)\nV = 36π\nV ≈ 113.10 وحدة مكعبة",
                zh: "如果 r = 3，求 V：\nV = (4/3)π(3)³\nV = (4/3)π(27)\nV = 36π\nV ≈ 113.10 立方单位",
                ja: "r = 3 のとき、V を求めよ：\nV = (4/3)π(3)³\nV = (4/3)π(27)\nV = 36π\nV ≈ 113.10 立方単位",
                hi: "यदि r = 3, तो V ढूंढें:\nV = (4/3)π(3)³\nV = (4/3)π(27)\nV = 36π\nV ≈ 113.10 घन इकाइयाँ",
                tr: "Eğer r = 3 ise, V'yi bulun:\nV = (4/3)π(3)³\nV = (4/3)π(27)\nV = 36π\nV ≈ 113.10 küp birim"
            },
            practiceTask: {
                question: {
                    en: "A sphere has radius = 4. Find the volume. (Use π ≈ 3.14)",
                    es: "Una esfera tiene radio = 4. Encuentra el volumen. (Usa π ≈ 3.14)",
                    fr: "Une sphère a rayon = 4. Trouvez le volume. (Utilisez π ≈ 3.14)",
                    de: "Eine Kugel hat Radius = 4. Finde das Volumen. (Verwende π ≈ 3.14)",
                    it: "Una sfera ha raggio = 4. Trova il volume. (Usa π ≈ 3.14)",
                    pt: "Uma esfera tem raio = 4. Encontre o volume. (Use π ≈ 3.14)",
                    ru: "Сфера имеет радиус = 4. Найдите объем. (Используйте π ≈ 3.14)",
                    ar: "كرة لها نصف قطر = 4. أوجد الحجم. (استخدم π ≈ 3.14)",
                    zh: "一个球的半径 = 4。求体积。（使用 π ≈ 3.14）",
                    ja: "球の半径 = 4。体積を求めよ。（π ≈ 3.14 を使用）",
                    hi: "एक गोले की त्रिज्या = 4। आयतन ढूंढें। (π ≈ 3.14 का उपयोग करें)",
                    tr: "Bir kürenin yarıçapı = 4. Hacmi bulun. (π ≈ 3.14 kullanın)"
                },
                answer: "268.08",
                unit: "cubic units"
            },
            helpTip: { en: "Don't forget to cube the radius!", es: "¡No olvides elevar el radio al cubo!", fr: "N'oubliez pas de mettre le rayon au cube!", de: "Vergessen Sie nicht, den Radius zu kubieren!", it: "Non dimenticare di elevare il raggio al cubo!", pt: "Não esqueça de elevar o raio ao cubo!", ru: "Не забудьте возвести радиус в куб!", ar: "لا تنسَ تكعيب نصف القطر!", zh: "别忘了将半径立方！", ja: "半径を3乗することを忘れないでください！", hi: "त्रिज्या को घन करना न भूलें!", tr: "Yarıçapı küp almayı unutmayın!" }
        },
        {
            title: { en: "Surface Area of Sphere", es: "Área Superficial de Esfera", fr: "Aire de Surface de Sphère", de: "Oberfläche der Kugel", it: "Area Superficiale della Sfera", pt: "Área de Superfície da Esfera", ru: "Площадь Поверхности Сферы", ar: "مساحة سطح الكرة", zh: "球体表面积", ja: "球の表面積", hi: "गोले का पृष्ठीय क्षेत्रफल", tr: "Küre Yüzey Alanı" },
            explanation: { en: "The total surface area of a sphere", es: "El área superficial total de una esfera", fr: "L'aire de surface totale d'une sphère", de: "Die gesamte Oberfläche einer Kugel", it: "L'area superficiale totale di una sfera", pt: "A área de superfície total de uma esfera", ru: "Общая площадь поверхности сферы", ar: "مساحة السطح الإجمالية للكرة", zh: "球体的总表面积", ja: "球の全表面積", hi: "गोले का कुल पृष्ठीय क्षेत्रफल", tr: "Bir kürenin toplam yüzey alanı" },
            correctFormula: 'SA = 4πr²',
            topic: 'geometry',
            variables: { 'SA': 'total surface area', 'r': 'radius of sphere' },
            example: {
                en: "If r = 5, find SA:\nSA = 4π(5)²\nSA = 4π(25)\nSA = 100π\nSA ≈ 314.16 square units",
                es: "Si r = 5, encuentra SA:\nSA = 4π(5)²\nSA = 4π(25)\nSA = 100π\nSA ≈ 314.16 unidades cuadradas",
                fr: "Si r = 5, trouvez SA:\nSA = 4π(5)²\nSA = 4π(25)\nSA = 100π\nSA ≈ 314.16 unités carrées",
                de: "Wenn r = 5, finde SA:\nSA = 4π(5)²\nSA = 4π(25)\nSA = 100π\nSA ≈ 314.16 Quadrateinheiten",
                it: "Se r = 5, trova SA:\nSA = 4π(5)²\nSA = 4π(25)\nSA = 100π\nSA ≈ 314.16 unità quadrate",
                pt: "Se r = 5, encontre SA:\nSA = 4π(5)²\nSA = 4π(25)\nSA = 100π\nSA ≈ 314.16 unidades quadradas",
                ru: "Если r = 5, найдите SA:\nSA = 4π(5)²\nSA = 4π(25)\nSA = 100π\nSA ≈ 314.16 квадратных единиц",
                ar: "إذا كان r = 5، أوجد SA:\nSA = 4π(5)²\nSA = 4π(25)\nSA = 100π\nSA ≈ 314.16 وحدة مربعة",
                zh: "如果 r = 5，求 SA：\nSA = 4π(5)²\nSA = 4π(25)\nSA = 100π\nSA ≈ 314.16 平方单位",
                ja: "r = 5 のとき、SA を求めよ：\nSA = 4π(5)²\nSA = 4π(25)\nSA = 100π\nSA ≈ 314.16 平方単位",
                hi: "यदि r = 5, तो SA ढूंढें:\nSA = 4π(5)²\nSA = 4π(25)\nSA = 100π\nSA ≈ 314.16 वर्ग इकाइयाँ",
                tr: "Eğer r = 5 ise, SA'yı bulun:\nSA = 4π(5)²\nSA = 4π(25)\nSA = 100π\nSA ≈ 314.16 kare birim"
            },
            practiceTask: {
                question: {
                    en: "A sphere has radius = 3. Find the surface area. (Use π ≈ 3.14)",
                    es: "Una esfera tiene radio = 3. Encuentra el área superficial. (Usa π ≈ 3.14)",
                    fr: "Une sphère a rayon = 3. Trouvez l'aire de surface. (Utilisez π ≈ 3.14)",
                    de: "Eine Kugel hat Radius = 3. Finde die Oberfläche. (Verwende π ≈ 3.14)",
                    it: "Una sfera ha raggio = 3. Trova l'area superficiale. (Usa π ≈ 3.14)",
                    pt: "Uma esfera tem raio = 3. Encontre a área de superfície. (Use π ≈ 3.14)",
                    ru: "Сфера имеет радиус = 3. Найдите площадь поверхности. (Используйте π ≈ 3.14)",
                    ar: "كرة لها نصف قطر = 3. أوجد مساحة السطح. (استخدم π ≈ 3.14)",
                    zh: "一个球的半径 = 3。求表面积。（使用 π ≈ 3.14）",
                    ja: "球の半径 = 3。表面積を求めよ。（π ≈ 3.14 を使用）",
                    hi: "एक गोले की त्रिज्या = 3। पृष्ठीय क्षेत्रफल ढूंढें। (π ≈ 3.14 का उपयोग करें)",
                    tr: "Bir kürenin yarıçapı = 3. Yüzey alanını bulun. (π ≈ 3.14 kullanın)"
                },
                answer: "113.04",
                unit: "square units"
            },
            helpTip: { en: "It's exactly 4 times the area of a circle with the same radius!", es: "¡Es exactamente 4 veces el área de un círculo con el mismo radio!", fr: "C'est exactement 4 fois l'aire d'un cercle avec le même rayon!", de: "Es ist genau 4-mal die Fläche eines Kreises mit demselben Radius!", it: "È esattamente 4 volte l'area di un cerchio con lo stesso raggio!", pt: "É exatamente 4 vezes a área de um círculo com o mesmo raio!", ru: "Это ровно в 4 раза больше площади круга с тем же радиусом!", ar: "إنها بالضبط 4 أضعاف مساحة دائرة بنفس نصف القطر!", zh: "正好是相同半径圆面积的4倍！", ja: "同じ半径の円の面積のちょうど4倍です！", hi: "यह समान त्रिज्या वाले वृत्त के क्षेत्रफल का ठीक 4 गुना है!", tr: "Aynı yarıçapa sahip bir dairenin alanının tam 4 katıdır!" }
        },
        {
            title: { en: "Midpoint Formula", es: "Fórmula del Punto Medio", fr: "Formule du Point Milieu", de: "Mittelpunktformel", it: "Formula del Punto Medio", pt: "Fórmula do Ponto Médio", ru: "Формула Средней Точки", ar: "صيغة نقطة المنتصف", zh: "中点公式", ja: "中点の公式", hi: "मध्य बिंदु सूत्र", tr: "Orta Nokta Formülü" },
            explanation: { en: "Finds the point exactly halfway between two points", es: "Encuentra el punto exactamente a mitad de camino entre dos puntos", fr: "Trouve le point exactement à mi-chemin entre deux points", de: "Findet den Punkt genau in der Mitte zwischen zwei Punkten", it: "Trova il punto esattamente a metà strada tra due punti", pt: "Encontra o ponto exatamente no meio do caminho entre dois pontos", ru: "Находит точку ровно посередине между двумя точками", ar: "يجد النقطة في منتصف المسافة بالضبط بين نقطتين", zh: "找到两点之间正中间的点", ja: "2点の間のちょうど中間の点を見つけます", hi: "दो बिंदुओं के बीच ठीक बीच में बिंदु ढूंढता है", tr: "İki nokta arasındaki tam ortadaki noktayı bulur" },
            correctFormula: 'M = ((x₁ + x₂)/2, (y₁ + y₂)/2)',
            topic: 'algebra',
            variables: { 'M': 'midpoint coordinates', 'x₁, y₁': 'coordinates of first point', 'x₂, y₂': 'coordinates of second point' },
            example: {
                en: "Find midpoint between (2, 4) and (8, 10):\nM = ((2+8)/2, (4+10)/2)\nM = (10/2, 14/2)\nM = (5, 7)",
                es: "Encuentra el punto medio entre (2, 4) y (8, 10):\nM = ((2+8)/2, (4+10)/2)\nM = (10/2, 14/2)\nM = (5, 7)",
                fr: "Trouvez le point médian entre (2, 4) et (8, 10):\nM = ((2+8)/2, (4+10)/2)\nM = (10/2, 14/2)\nM = (5, 7)",
                de: "Finde den Mittelpunkt zwischen (2, 4) und (8, 10):\nM = ((2+8)/2, (4+10)/2)\nM = (10/2, 14/2)\nM = (5, 7)",
                it: "Trova il punto medio tra (2, 4) e (8, 10):\nM = ((2+8)/2, (4+10)/2)\nM = (10/2, 14/2)\nM = (5, 7)",
                pt: "Encontre o ponto médio entre (2, 4) e (8, 10):\nM = ((2+8)/2, (4+10)/2)\nM = (10/2, 14/2)\nM = (5, 7)",
                ru: "Найдите середину между (2, 4) и (8, 10):\nM = ((2+8)/2, (4+10)/2)\nM = (10/2, 14/2)\nM = (5, 7)",
                ar: "أوجد نقطة المنتصف بين (2, 4) و (8, 10):\nM = ((2+8)/2, (4+10)/2)\nM = (10/2, 14/2)\nM = (5, 7)",
                zh: "求点 (2, 4) 和 (8, 10) 之间的中点：\nM = ((2+8)/2, (4+10)/2)\nM = (10/2, 14/2)\nM = (5, 7)",
                ja: "点 (2, 4) と (8, 10) の中点を求めよ：\nM = ((2+8)/2, (4+10)/2)\nM = (10/2, 14/2)\nM = (5, 7)",
                hi: "बिंदुओं (2, 4) और (8, 10) के बीच मध्य बिंदु ढूंढें:\nM = ((2+8)/2, (4+10)/2)\nM = (10/2, 14/2)\nM = (5, 7)",
                tr: "(2, 4) ve (8, 10) noktaları arasındaki orta noktayı bulun:\nM = ((2+8)/2, (4+10)/2)\nM = (10/2, 14/2)\nM = (5, 7)"
            },
            practiceTask: {
                question: {
                    en: "Find the x-coordinate of the midpoint between (2, 4) and (8, 10).",
                    es: "Encuentra la coordenada x del punto medio entre (2, 4) y (8, 10).",
                    fr: "Trouvez la coordonnée x du point milieu entre (2, 4) et (8, 10).",
                    de: "Finde die x-Koordinate des Mittelpunkts zwischen (2, 4) und (8, 10).",
                    it: "Trova la coordinata x del punto medio tra (2, 4) e (8, 10).",
                    pt: "Encontre a coordenada x do ponto médio entre (2, 4) e (8, 10).",
                    ru: "Найдите x-координату средней точки между (2, 4) и (8, 10).",
                    ar: "أوجد إحداثي x لنقطة المنتصف بين (2, 4) و (8, 10).",
                    zh: "求点 (2, 4) 和 (8, 10) 之间中点的 x 坐标。",
                    ja: "点 (2, 4) と (8, 10) の間の中点の x 座標を求めよ。",
                    hi: "(2, 4) और (8, 10) के बीच मध्य बिंदु का x-निर्देशांक ढूंढें।",
                    tr: "(2, 4) ve (8, 10) arasındaki orta noktanın x-koordinatını bulun."
                },
                answer: "5",
                unit: ""
            },
            helpTip: { en: "Just average the x-coordinates and y-coordinates separately!", es: "¡Solo promedia las coordenadas x e y por separado!", fr: "Il suffit de faire la moyenne des coordonnées x et y séparément!", de: "Mitteln Sie einfach die x- und y-Koordinaten separat!", it: "Basta fare la media delle coordinate x e y separatamente!", pt: "Apenas faça a média das coordenadas x e y separadamente!", ru: "Просто усредните координаты x и y отдельно!", ar: "فقط احسب متوسط إحداثيات x و y بشكل منفصل!", zh: "只需分别平均 x 坐标和 y 坐标！", ja: "x座標とy座標を別々に平均するだけです！", hi: "बस x-निर्देशांक और y-निर्देशांक को अलग-अलग औसत करें!", tr: "Sadece x-koordinatlarını ve y-koordinatlarını ayrı ayrı ortalamasını alın!" }
        },
        {
            title: { en: "Mean (Average)", es: "Media (Promedio)", fr: "Moyenne", de: "Mittelwert (Durchschnitt)", it: "Media", pt: "Média", ru: "Среднее Значение", ar: "المتوسط", zh: "平均值", ja: "平均", hi: "माध्य (औसत)", tr: "Ortalama" },
            explanation: { en: "The sum of all values divided by the number of values", es: "La suma de todos los valores dividida por el número de valores", fr: "La somme de toutes les valeurs divisée par le nombre de valeurs", de: "Die Summe aller Werte geteilt durch die Anzahl der Werte", it: "La somma di tutti i valori divisa per il numero di valori", pt: "A soma de todos os valores dividida pelo número de valores", ru: "Сумма всех значений, деленная на количество значений", ar: "مجموع جميع القيم مقسومًا على عدد القيم", zh: "所有值的总和除以值的数量", ja: "すべての値の合計を値の数で割ったもの", hi: "सभी मानों का योग मानों की संख्या से विभाजित", tr: "Tüm değerlerin toplamının değer sayısına bölümü" },
            correctFormula: 'Mean = (sum of values) / (number of values)',
            topic: 'statistics',
            variables: { 'Mean': 'average value of all numbers' },
            example: {
                en: "Find mean of 4, 8, 6, 5, 7:\nSum = 4 + 8 + 6 + 5 + 7 = 30\nCount = 5\nMean = 30 / 5 = 6",
                es: "Encuentra la media de 4, 8, 6, 5, 7:\nSuma = 4 + 8 + 6 + 5 + 7 = 30\nCantidad = 5\nMedia = 30 / 5 = 6",
                fr: "Trouvez la moyenne de 4, 8, 6, 5, 7:\nSomme = 4 + 8 + 6 + 5 + 7 = 30\nNombre = 5\nMoyenne = 30 / 5 = 6",
                de: "Finde den Mittelwert von 4, 8, 6, 5, 7:\nSumme = 4 + 8 + 6 + 5 + 7 = 30\nAnzahl = 5\nMittelwert = 30 / 5 = 6",
                it: "Trova la media di 4, 8, 6, 5, 7:\nSomma = 4 + 8 + 6 + 5 + 7 = 30\nNumero = 5\nMedia = 30 / 5 = 6",
                pt: "Encontre a média de 4, 8, 6, 5, 7:\nSoma = 4 + 8 + 6 + 5 + 7 = 30\nQuantidade = 5\nMédia = 30 / 5 = 6",
                ru: "Найдите среднее значение 4, 8, 6, 5, 7:\nСумма = 4 + 8 + 6 + 5 + 7 = 30\nКоличество = 5\nСреднее = 30 / 5 = 6",
                ar: "أوجد المتوسط لـ 4, 8, 6, 5, 7:\nالمجموع = 4 + 8 + 6 + 5 + 7 = 30\nالعدد = 5\nالمتوسط = 30 / 5 = 6",
                zh: "求 4, 8, 6, 5, 7 的平均值：\n总和 = 4 + 8 + 6 + 5 + 7 = 30\n数量 = 5\n平均值 = 30 / 5 = 6",
                ja: "4, 8, 6, 5, 7 の平均を求めよ：\n合計 = 4 + 8 + 6 + 5 + 7 = 30\n個数 = 5\n平均 = 30 / 5 = 6",
                hi: "4, 8, 6, 5, 7 का औसत ढूंढें:\nयोग = 4 + 8 + 6 + 5 + 7 = 30\nसंख्या = 5\nऔसत = 30 / 5 = 6",
                tr: "4, 8, 6, 5, 7 sayılarının ortalamasını bulun:\nToplam = 4 + 8 + 6 + 5 + 7 = 30\nAdet = 5\nOrtalama = 30 / 5 = 6"
            },
            practiceTask: {'n': 'number of values' },
            practiceTask: {
                question: {
                    en: "Find the mean of: 12, 15, 18, 20, 25",
                    es: "Encuentra la media de: 12, 15, 18, 20, 25",
                    fr: "Trouvez la moyenne de: 12, 15, 18, 20, 25",
                    de: "Finde den Mittelwert von: 12, 15, 18, 20, 25",
                    it: "Trova la media di: 12, 15, 18, 20, 25",
                    pt: "Encontre a média de: 12, 15, 18, 20, 25",
                    ru: "Найдите среднее значение: 12, 15, 18, 20, 25",
                    ar: "أوجد المتوسط لـ: 12, 15, 18, 20, 25",
                    zh: "求平均值：12, 15, 18, 20, 25",
                    ja: "平均を求めよ：12, 15, 18, 20, 25",
                    hi: "माध्य ढूंढें: 12, 15, 18, 20, 25",
                    tr: "Ortalamasını bulun: 12, 15, 18, 20, 25"
                },
                answer: "18",
                unit: ""
            },
            helpTip: { en: "Add them all up, then divide by how many there are!", es: "¡Súmalos todos y luego divide por cuántos hay!", fr: "Additionnez-les tous, puis divisez par combien il y en a!", de: "Addieren Sie sie alle und teilen Sie dann durch die Anzahl!", it: "Sommali tutti, poi dividi per quanti ce ne sono!", pt: "Some todos eles e depois divida por quantos são!", ru: "Сложите их все, затем разделите на количество!", ar: "اجمعها كلها، ثم اقسم على عددها!", zh: "将它们全部相加，然后除以数量！", ja: "すべてを足して、その数で割ります！", hi: "उन सभी को जोड़ें, फिर कितने हैं उससे विभाजित करें!", tr: "Hepsini toplayın, sonra kaç tane olduğuna bölün!" }
        }
    ]
};
