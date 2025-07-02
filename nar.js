document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // --- i18n ---
    const translations = {
        // Keys match data-translate-key attributes in HTML
        pageTitle: { en: 'Nar /nɑr/ - Personal Budget', az: 'Nar /nɑr/ - Şəxsi Büdcə', ru: 'Nar /nɑr/ - Личный бюджет', tr: 'Nar /nɑr/ - Kişisel Bütçe' },
        exportCSV: { en: 'Export CSV', az: 'CSV İxrac Et', ru: 'Экспорт CSV', tr: 'CSV Dışa Aktar' },
        importCSV: { en: 'Import CSV', az: 'CSV İdxal Et', ru: 'Импорт CSV', tr: 'CSV İçe Aktar' },
        wipeData: { en: 'Wipe Data', az: 'Məlumatları Sil', ru: 'Стереть данные', tr: 'Verileri Temizle' },
        startDate: { en: 'Start Date', az: 'Başlanğıc Tarixi', ru: 'Дата начала', tr: 'Başlangıç Tarihi' },
        endDate: { en: 'End Date', az: 'Son Tarix', ru: 'Дата окончания', tr: 'Bitiş Tarihi' },
        reset: { en: 'Reset', az: 'Sıfırla', ru: 'Сброс', tr: 'Sıfırla' },
        totalIncome: { en: 'Total Income', az: 'Ümumi Gəlir', ru: 'Общий доход', tr: 'Toplam Gelir' },
        totalExpenses: { en: 'Total Expenses', az: 'Ümumi Xərclər', ru: 'Общие расходы', tr: 'Toplam Gider' },
        netCashFlow: { en: 'Net Cash Flow', az: 'Xalis Pul Axını', ru: 'Чистый денежный поток', tr: 'Net Nakit Akışı' },
        monthlySavingsGoal: { en: 'Monthly Savings Goal', az: 'Aylıq Əmanət Məqsədi', ru: 'Цель по ежемесячным накоплениям', tr: 'Aylık Tasarruf Hedefi' },
        setGoal: { en: 'Set', az: 'Təyin et', ru: 'Установить', tr: 'Ayarla' },
        addTransaction: { en: 'Add Transaction', az: 'Əməliyyat Əlavə Et', ru: 'Добавить транзакцию', tr: 'İşlem Ekle' },
        expensePockets: { en: 'Expense Pockets', az: 'Xərc Ciblisləri', ru: 'Категории расходов', tr: 'Harcama Cepleri' },
        manageCategories: { en: 'Manage Categories', az: 'Kateqoriyalara Nəzarət', ru: 'Управление категориями', tr: 'Kategorileri Yönet' },
        spendingAnalysis: { en: 'Spending Analysis', az: 'Xərc Təhlili', ru: 'Harcama Analizi', tr: 'Harcama Analizi' },
        expenseBreakdown: { en: 'Expense Breakdown', az: 'Xərclərin Bölgüsü', ru: 'Разбивка расходов', tr: 'Gider Dağılımı' },
        budgetVsActuals: { en: 'Budget vs. Actuals', az: 'Büdcə və Faktiki Xərclər', ru: 'Бюджет и фактические расходы', tr: 'Bütçe ve Gerçekleşen' },
        trendChartTitle: { en: '6-Month Income vs. Expense Trend', az: '6 Aylıq Gəlir-Xərc Trendi', ru: 'Тренд доходов и расходов за 6 месяцев', tr: '6 Aylık Gelir ve Gider Trendi' },
        savingsChartTitle: { en: 'Savings Journey (12-Month View)', az: 'Əmanət Səyahəti (12 Aylıq Baxış)', ru: 'Динамика накоплений (обзор за 12 месяцев)', tr: 'Tasarruf Yolculuğu (12 Aylık Görünüm)' },
        // Modals & Forms
        addTransactionTitle: { en: 'Add Transaction', az: 'Əməliyyat Əlavə Et', ru: 'Добавить транзакцию', tr: 'İşlem Ekle' },
        editTransactionTitle: { en: 'Edit Transaction', az: 'Əməliyyatı Redaktə Et', ru: 'Редактировать транзакцию', tr: 'İşlemi Düzenle' },
        amount: { en: 'Amount', az: 'Məbləğ', ru: 'Сумма', tr: 'Tutar' },
        description: { en: 'Description', az: 'Təsvir', ru: 'Описание', tr: 'Açıklama' },
        date: { en: 'Date', az: 'Tarix', ru: 'Дата', tr: 'Tarih' },
        category: { en: 'Category', az: 'Kateqoriya', ru: 'Категория', tr: 'Kategori' },
        cancel: { en: 'Cancel', az: 'Ləğv Et', ru: 'Отмена', tr: 'İptal' },
        saveTransaction: { en: 'Save Transaction', az: 'Əməliyyatı Yadda Saxla', ru: 'Сохранить транзакцию', tr: 'İşlemi Kaydet' },
        addNewCategory: { en: 'Add New Category', az: 'Yeni Kateqoriya Əlavə Et', ru: 'Yeni Kategori Ekle', tr: 'Yeni Kategori Ekle' },
        addCategoryTitle: { en: 'Add Category', az: 'Kateqoriya Əlavə Et', ru: 'Добавить категорию', tr: 'Kategori Ekle' },
        editCategoryTitle: { en: 'Edit Category', az: 'Kateqoriyanı Redaktə Et', ru: 'Редактировать категорию', tr: 'Kategoriyi Düzenle' },
        categoryName: { en: 'Category Name', az: 'Kateqoriya Adı', ru: 'Название категории', tr: 'Kategori Adı' },
        type: { en: 'Type', az: 'Növ', ru: 'Тип', tr: 'Tür' },
        expense: { en: 'Expense', az: 'Xərc', ru: 'Расход', tr: 'Gider' },
        income: { en: 'Income', az: 'Gəlir', ru: 'Доход', tr: 'Gelir' },
        icon: { en: 'Icon', az: 'İkon', ru: 'Иконка', tr: 'Simge' },
        monthlyBudget: { en: 'Monthly Budget', az: 'Aylıq Büdcə', ru: 'Месячный бюджет', tr: 'Aylık Bütçe' },
        pocketGroup: { en: 'Pocket Group', az: 'Cib Qrupu', ru: 'Cep Grubu', tr: 'Harcama Grubu' },
        saveCategory: { en: 'Save Category', az: 'Kateqoriyanı Yadda Saxla', ru: 'Сохранить категорию', tr: 'Kategoriyi Kaydet' },
        history: { en: 'History', az: 'Tarixçə', ru: 'История', tr: 'Geçmiş' },
        areYouSure: { en: 'Are you sure?', az: 'Əminsiniz?', ru: 'Вы уверены?', tr: 'Emin misiniz?' },
        proceed: { en: 'Proceed', az: 'Davam Et', ru: 'Продолжить', tr: 'Devam Et' },
        // About Modal
        aboutTitle: { en: 'The Story of Nar pomegranate', az: 'Nar hekayəsi', ru: 'История граната Nar', tr: 'Nar\'ın Hikayesi' },
        aboutP1: { en: 'In Azerbaijani culture, the pomegranate—or "Nar" /nɑr/—is a powerful symbol of abundance and unity. With its tough outer skin protecting hundreds of precious seeds, it perfectly represents financial wellness: safeguarding your resources so that many small efforts can grow into significant wealth.', az: 'Azərbaycan mədəniyyətində nar bolluq və birliyin güclü simvoludur. Sərt xarici qabığı yüzlərlə qiymətli toxumu qoruduğu kimi, o, maliyyə sağlamlığını mükəmməl təmsil edir: bir çox kiçik səylərin böyük sərvətə çevrilməsi üçün resurslarınızı qoruyur.', ru: 'В азербайджанской культуре гранат, или «Nar» /nɑr/, является мощным символом изобилия и единства. Его прочная кожура защищает сотни драгоценных зерен, что идеально представляет финансовое благополучие: защита ваших ресурсов, чтобы множество малых усилий могли вырасти в значительное богатство.', tr: 'Azerbaycan kültüründe nar, bereket ve birliğin güçlü bir sembolüdür. Yüzlerce değerli tohumu koruyan sert dış kabuğuyla, finansal refahı mükemmel bir şekilde temsil eder: birçok küçük çabanın önemli bir zenginliğe dönüşebilmesi için kaynaklarınızı korur.' },
        aboutP2: { en: 'Each seed is a transaction, a saving, a goal. Together, they form a vibrant whole. That is the vision behind Nar.', az: 'Hər bir toxum bir əməliyyat, bir əmanət, bir məqsəddir. Birlikdə onlar canlı bir bütün təşkil edirlər. "Nar"ın arxasındakı baxış budur.', ru: 'Каждое зернышко — это транзакция, сбережение, цель. Вместе они образуют живое целое. В этом заключается видение Nar.', tr: 'Her bir tohum bir işlem, bir tasarruf, bir hedeftir. Birlikte, canlı bir bütün oluştururlar. Nar\'ın arkasındaki vizyon budur.' },
        aboutP3: { en: "But the path to abundance isn't always smooth. For its creators, a passionate husband and wife, discussions about money were often filled with... well, *passion*. The problem wasn't a lack of shared dreams, but the absence of a simple, shared language for their finances. They needed a tool to turn potential arguments into moments of alignment.", az: 'Ancaq bolluğa gedən yol həmişə hamar deyil. Onun yaradıcıları olan ehtiraslı ər-arvad üçün pul haqqında müzakirələr çox vaxt... *ehtirasla* dolu olurdu. Problem ortaq arzuların olmaması deyil, maliyyələri üçün sadə, ortaq bir dilin olmaması idi. Potensial mübahisələri uyğunlaşma anlarına çevirmək üçün bir vasitəyə ehtiyacları vardı.', ru: 'Но путь к изобилию не всегда гладок. Для его создателей, страстной супружеской пары, обсуждения денег часто были полны... ну, *страсти*. Проблема была не в отсутствии общих мечтаний, а в отсутствии простого, общего языка для их финансов. Им нужен был инструмент, чтобы превратить потенциальные споры в моменты согласия.', tr: 'Ancak berekete giden yol her zaman pürüzsüz değildir. Yaratıcıları olan tutkulu bir karı koca için para hakkındaki tartışmalar genellikle... *tutku* doluydu. Sorun ortak hayallerin olmaması değil, mali durumları için basit, ortak bir dilin olmamasıydı. Potansiyel tartışmaları uyum anlarına dönüştürecek bir araca ihtiyaçları vardı.' },
        aboutP4: { en: 'Nar was born from this love—a desire to create an intuitive tool that replaces confusion with clarity. It’s a quiet, focused space designed not just for budgeting, but for building a life of abundance together, one seed at a time.', az: 'Nar bu sevgidən doğuldu - qarışıqlığı aydınlıqla əvəz edən intuitiv bir vasitə yaratmaq arzusundan. Bu, təkcə büdcə planlaması üçün deyil, həm də birlikdə, toxum-toxum bolluqla dolu bir həyat qurmaq üçün nəzərdə tutulmuş sakit, fokuslanmış bir məkandır.', ru: 'Nar родился из этой любви — желания создать интуитивно понятный инструмент, который заменяет путаницу ясностью. Это тихое, сфокусированное пространство, предназначенное не только для ведения бюджета, но и для построения совместной жизни в изобилии, зернышко за зернышком.', tr: 'Nar, bu sevgiden doğdu; karışıklığı netlikle değiştiren sezgisel bir araç yaratma arzusundan. Sadece bütçeleme için değil, aynı zamanda birlikte, tohum tohum bir bereket hayatı inşa etmek için tasarlanmış sakin, odaklanmış bir alandır.' },
        aboutCreators: { en: 'The Creators of Nar', az: 'Nar-ın Yaradıcıları', ru: 'Создатели Nar', tr: 'Nar\'ın Yaratıcıları' },
        // Dynamic strings
        forThisMonth: { en: 'for this month', az: 'bu ay üçün', ru: 'за этот месяц', tr: 'bu ay için' },
        summaryPeriod: { en: 'from {0} to {1}', az: '{0} tarixindən {1} tarixinədək', ru: 'с {0} по {1}', tr: '{0} ile {1} arası' },
        budgetLabel: { en: 'Budget: {0}', az: 'Büdcə: {0}', ru: 'Бюджет: {0}', tr: 'Bütçe: {0}' },
        spentLabel: { en: 'Spent: {0}', az: 'Xərclənib: {0}', ru: 'Потрачено: {0}', tr: 'Harcanan: {0}' },
        leftLabel: { en: '{0} left', az: '{0} qalıb', ru: '{0} осталось', tr: '{0} kaldı' },
        overLabel: { en: '{0} over', az: '{0} artıq', ru: '{0} aşıldı', tr: '{0} aşıldı' },
        historyFor: { en: 'History for {0}', az: '{0} üçün tarixçə', ru: 'История по {0}', tr: '{0} için Geçmiş' },
        noTransactions: { en: 'No transactions for this category yet.', az: 'Bu kateqoriya üçün hələ heç bir əməliyyat yoxdur.', ru: 'По этой категории еще нет транзакций.', tr: 'Bu kategori için henüz işlem yok.' },
        // Chart labels
        chartBudget: { en: 'Budget', az: 'Büdcə', ru: 'Бюджет', tr: 'Bütçe' },
        chartSpent: { en: 'Spent', az: 'Xərclənib', ru: 'Потрачено', tr: 'Harcanan' },
        chartIncome: { en: 'Income', az: 'Gəlir', ru: 'Доход', tr: 'Gelir' },
        chartExpenses: { en: 'Expenses', az: 'Xərclər', ru: 'Расходы', tr: 'Giderler' },
        chartProjected: { en: 'Projected Savings (Goal)', az: 'Proqnozlaşdırılan Əmanət (Məqsəd)', ru: 'Прогнозируемые накопления (цель)', tr: 'Tahmini Tasarruf (Hedef)' },
        chartActual: { en: 'Actual Accumulated Savings', az: 'Faktiki Yığılmış Əmanət', ru: 'Фактические накопления', tr: 'Gerçekleşen Birikmiş Tasarruf' },
        // Alerts
        alertInvalidGoal: { en: 'Please enter a valid, non-negative number for your savings goal.', az: 'Əmanət məqsədiniz üçün etibarlı, mənfi olmayan bir rəqəm daxil edin.', ru: 'Пожалуйста, введите допустимое, неотрицательное число для вашей цели по накоплениям.', tr: 'Lütfen tasarruf hedefiniz için geçerli, negatif olmayan bir sayı girin.' },
        alertGoalUpdated: { en: 'Savings goal updated to {0} per month.', az: 'Aylıq əmanət məqsədi {0} olaraq yeniləndi.', ru: 'Цель по накоплениям обновлена до {0} в месяц.', tr: 'Tasarruf hedefi aylık {0} olarak güncellendi.' },
        alertInvalidDate: { en: 'Start date cannot be after the end date.', az: 'Başlanğıc tarixi son tarixdən sonra ola bilməz.', ru: 'Дата начала не может быть позже даты окончания.', tr: 'Başlangıç tarihi bitiş tarihinden sonra olamaz.' },
        alertNoExport: { en: 'No transactions to export.', az: 'İxrac üçün heç bir əməliyyat yoxdur.', ru: 'Нет транзакций для экспорта.', tr: 'Dışa aktarılacak işlem yok.' },
        alertImportSuccess: { en: 'Successfully imported {0} new transactions.', az: '{0} yeni əməliyyat uğurla idxal edildi.', ru: 'Успешно импортировано {0} новых транзакций.', tr: '{0} yeni işlem başarıyla içe aktarıldı.' },
        alertImportNone: { en: 'No new transactions were found to import.', az: 'İdxal üçün yeni əməliyyat tapılmadı.', ru: 'Новых транзакций для импорта не найдено.', tr: 'İçe aktarılacak yeni işlem bulunamadı.' },
        // Confirmations
        confirmDeleteTransaction: { en: 'Are you sure you want to delete this transaction?', az: 'Bu əməliyyatı silmək istədiyinizə əminsiniz?', ru: 'Вы уверены, что хотите удалить эту транзакцию?', tr: 'Bu işlemi silmek istediğinizden emin misiniz?' },
        confirmDeleteCategory: { en: 'Are you sure you want to delete the category "{0}"?', az: '"{0}" kateqoriyasını silmək istədiyinizə əminsiniz?', ru: 'Вы уверены, что хотите удалить категорию "{0}"?', tr: '"{0}" kategorisini silmek istediğinizden emin misiniz?' },
        confirmDeleteCategoryWithTransactions: { en: 'This will also delete all transactions associated with "{0}". Are you sure?', az: 'Bu, "{0}" ilə əlaqəli bütün əməliyyatları da siləcək. Əminsiniz?', ru: 'Bu, "{0}" ile ilişkili tüm işlemleri de silecek. Emin misiniz?', tr: 'Bu işlem, "{0}" ile ilişkili tüm işlemleri de silecek. Emin misiniz?' },
        confirmWipeData: { en: 'This will permanently delete all categories and transactions. This action cannot be undone. Are you sure?', az: 'Bu, bütün kateqoriyaları və əməliyyatları həmişəlik siləcək. Bu əməliyyat geri qaytarıla bilməz. Əminsiniz?', ru: 'Это навсегда удалит все категории и транзакции. Это действие нельзя отменить. Вы уверены?', tr: 'Bu, tüm kategorileri ve işlemleri kalıcı olarak silecek. Bu işlem geri alınamaz. Emin misiniz?' },
    };
    
    // --- DATA ---
    const AppState = {
        categories: [],
        transactions: [],
        savingsGoal: 0,
        currentLanguage: 'en', // Default language
        expenseChart: null,
        budgetChart: null,
        trendChart: null,
        savingsChart: null,
        filter: {
            startDate: null,
            endDate: null,
        }
    };

    const ICONS = [
        'home', 'car', 'graduation-cap', 'dumbbell', 'utensils-crossed', 'shopping-cart', 'plane',
        'heart-pulse', 'landmark', 'briefcase', 'piggy-bank', 'gift', 'receipt', 'wrench', 'book-open',
        'shirt', 'lightbulb', 'dollar-sign', 'credit-card', 'banknote', 'trending-up', 'trending-down',
        'phone', 'wifi', 'tv', 'music', 'paw-print', 'tree-pine', 'shield', 'fuel', 'trophy', 'user-check',
        'shield-check', 'file-text', 'file-question'
    ];
    
    const defaultCategories = {
        en: [
            // Income
            { id: 'inc1', name: 'Net Salary - Adult 1', type: 'Income', icon: 'dollar-sign', group: null, budget: null },
            { id: 'inc2', name: 'Net Salary - Adult 2', type: 'Income', icon: 'dollar-sign', group: null, budget: null },
            { id: 'inc3', name: 'Other Income', type: 'Income', icon: 'trending-up', group: null, budget: null },
            // Expenses
            { id: 'exp1', name: 'Mortgage / Rent', type: 'Expense', icon: 'home', group: 'Housing', budget: 2000 },
            { id: 'exp2', name: 'Property Tax / HOA', type: 'Expense', icon: 'landmark', group: 'Housing', budget: 300 },
            { id: 'exp3', name: 'Utilities (Electricity, Water, Gas, Internet)', type: 'Expense', icon: 'lightbulb', group: 'Housing', budget: 250 },
            { id: 'exp4', name: 'Home Insurance', type: 'Expense', icon: 'shield', group: 'Housing', budget: 100 },
            { id: 'exp5', name: 'Maintenance & Repairs', type: 'Expense', icon: 'wrench', group: 'Housing', budget: 150 },
            { id: 'exp6', name: 'Car Payments', type: 'Expense', icon: 'car', group: 'Transportation', budget: 400 },
            { id: 'exp7', name: 'Fuel', type: 'Expense', icon: 'fuel', group: 'Transportation', budget: 200 },
            { id: 'exp8', name: 'Insurance', type: 'Expense', icon: 'file-text', group: 'Transportation', budget: 150 },
            { id: 'exp9', name: 'Maintenance & Repairs', type: 'Expense', icon: 'wrench', group: 'Transportation', budget: 100 },
            { id: 'exp10', name: 'Registration / Taxes', type: 'Expense', icon: 'receipt', group: 'Transportation', budget: 50 },
            { id: 'exp11', name: 'Prep School Tuition', type: 'Expense', icon: 'graduation-cap', group: 'Education (Oldest Prep School)', budget: 1500 },
            { id: 'exp12', name: 'Books & Supplies', type: 'Expense', icon: 'book-open', group: 'Education (Oldest Prep School)', budget: 200 },
            { id: 'exp13', name: 'Other School Fees', type: 'Expense', icon: 'dollar-sign', group: 'Education (Oldest Prep School)', budget: 100 },
            { id: 'exp14', name: 'Hockey Association Fees', type: 'Expense', icon: 'trophy', group: 'Child Activities - Hockey', budget: 50 },
            { id: 'exp15', name: 'Private Coaching', type: 'Expense', icon: 'user-check', group: 'Child Activities - Hockey', budget: 200 },
            { id: 'exp16', name: 'Equipment & Gear', type: 'Expense', icon: 'shirt', group: 'Child Activities - Hockey', budget: 100 },
            { id: 'exp17', name: 'Travel & Tournaments', type: 'Expense', icon: 'plane', group: 'Child Activities - Hockey', budget: 300 },
            { id: 'exp18', name: 'Misc Hockey Expenses', type: 'Expense', icon: 'receipt', group: 'Child Activities - Hockey', budget: 50 },
            { id: 'exp19', name: 'Groceries', type: 'Expense', icon: 'shopping-cart', group: 'General & Family', budget: 800 },
            { id: 'exp20', name: 'Dining Out / Takeout', type: 'Expense', icon: 'utensils-crossed', group: 'General & Family', budget: 300 },
            { id: 'exp21', name: 'Clothing & Shoes', type: 'Expense', icon: 'shirt', group: 'General & Family', budget: 200 },
            { id: 'exp22', name: 'Health Insurance & Medical', type: 'Expense', icon: 'heart-pulse', group: 'General & Family', budget: 500 },
            { id: 'exp23', name: 'Life Insurance', type: 'Expense', icon: 'shield-check', group: 'General & Family', budget: 100 },
            { id: 'exp24', name: 'Entertainment & Subscriptions', type: 'Expense', icon: 'tv', group: 'General & Family', budget: 100 },
            { id: 'exp25', name: 'Vacation / Travel', type: 'Expense', icon: 'plane', group: 'General & Family', budget: 400 },
            { id: 'exp26', name: 'Gifts & Donations', type: 'Expense', icon: 'gift', group: 'General & Family', budget: 100 },
            { id: 'exp27', name: 'Emergency Fund Contribution', type: 'Expense', icon: 'trending-up', group: 'General & Family', budget: 200 },
            { id: 'exp28', name: 'Retirement Savings', type: 'Expense', icon: 'piggy-bank', group: 'General & Family', budget: 1000 },
            { id: 'exp29', name: 'Tax', type: 'Expense', icon: 'landmark', group: 'General & Family', budget: 500 },
        ],
        az: [
            { id: 'inc1', name: 'Net Maaş - Böyük 1', type: 'Income', icon: 'dollar-sign', group: null, budget: null },
            { id: 'inc2', name: 'Net Maaş - Böyük 2', type: 'Income', icon: 'dollar-sign', group: null, budget: null },
            { id: 'inc3', name: 'Digər Gəlirlər', type: 'Income', icon: 'trending-up', group: null, budget: null },
            { id: 'exp1', name: 'İpoteka / Kirayə', type: 'Expense', icon: 'home', group: 'Mənzil', budget: 2000 },
            { id: 'exp2', name: 'Əmlak Vergisi / MİS', type: 'Expense', icon: 'landmark', group: 'Mənzil', budget: 300 },
            { id: 'exp3', name: 'Kommunal Xidmətlər', type: 'Expense', icon: 'lightbulb', group: 'Mənzil', budget: 250 },
            { id: 'exp4', name: 'Ev Sığortası', type: 'Expense', icon: 'shield', group: 'Mənzil', budget: 100 },
            { id: 'exp5', name: 'Təmir və Baxım', type: 'Expense', icon: 'wrench', group: 'Mənzil', budget: 150 },
            { id: 'exp6', name: 'Avtomobil Ödənişləri', type: 'Expense', icon: 'car', group: 'Nəqliyyat', budget: 400 },
            { id: 'exp7', name: 'Yanacaq', type: 'Expense', icon: 'fuel', group: 'Nəqliyyat', budget: 200 },
            { id: 'exp8', name: 'Sığorta', type: 'Expense', icon: 'file-text', group: 'Nəqliyyat', budget: 150 },
            { id: 'exp9', name: 'Təmir və Baxım', type: 'Expense', icon: 'wrench', group: 'Nəqliyyat', budget: 100 },
            { id: 'exp10', name: 'Qeydiyyat / Vergilər', type: 'Expense', icon: 'receipt', group: 'Nəqliyyat', budget: 50 },
            { id: 'exp11', name: 'Məktəb Təhsili', type: 'Expense', icon: 'graduation-cap', group: 'Təhsil (Böyük Uşaq)', budget: 1500 },
            { id: 'exp12', name: 'Kitablar və Ləvazimatlar', type: 'Expense', icon: 'book-open', group: 'Təhsil (Böyük Uşaq)', budget: 200 },
            { id: 'exp13', name: 'Digər Məktəb Ödənişləri', type: 'Expense', icon: 'dollar-sign', group: 'Təhsil (Böyük Uşaq)', budget: 100 },
            { id: 'exp14', name: 'Xokkey Assosiasiyası Ödənişləri', type: 'Expense', icon: 'trophy', group: 'Uşaq Fəaliyyətləri - Xokkey', budget: 50 },
            { id: 'exp15', name: 'Şəxsi Məşqçi', type: 'Expense', icon: 'user-check', group: 'Uşaq Fəaliyyətləri - Xokkey', budget: 200 },
            { id: 'exp16', name: 'Ləvazimat və Geyim', type: 'Expense', icon: 'shirt', group: 'Uşaq Fəaliyyətləri - Xokkey', budget: 100 },
            { id: 'exp17', name: 'Səyahət və Turnirlər', type: 'Expense', icon: 'plane', group: 'Uşaq Fəaliyyətləri - Xokkey', budget: 300 },
            { id: 'exp18', name: 'Müxtəlif Xokkey Xərcləri', type: 'Expense', icon: 'receipt', group: 'Uşaq Fəaliyyətləri - Xokkey', budget: 50 },
            { id: 'exp19', name: 'Ərzaq', type: 'Expense', icon: 'shopping-cart', group: 'Ümumi və Ailə', budget: 800 },
            { id: 'exp20', name: 'Restoran / Kafe', type: 'Expense', icon: 'utensils-crossed', group: 'Ümumi və Ailə', budget: 300 },
            { id: 'exp21', name: 'Geyim və Ayaqqabı', type: 'Expense', icon: 'shirt', group: 'Ümumi və Ailə', budget: 200 },
            { id: 'exp22', name: 'Sağlamlıq Sığortası və Tibbi', type: 'Expense', icon: 'heart-pulse', group: 'Ümumi və Ailə', budget: 500 },
            { id: 'exp23', name: 'Həyat Sığortası', type: 'Expense', icon: 'shield-check', group: 'Ümumi və Ailə', budget: 100 },
            { id: 'exp24', name: 'Əyləncə və Abunəliklər', type: 'Expense', icon: 'tv', group: 'Ümumi və Ailə', budget: 100 },
            { id: 'exp25', name: 'Məzuniyyət / Səyahət', type: 'Expense', icon: 'plane', group: 'Ümumi və Ailə', budget: 400 },
            { id: 'exp26', name: 'Hədiyyələr və İanələr', type: 'Expense', icon: 'gift', group: 'Ümumi və Ailə', budget: 100 },
            { id: 'exp27', name: 'Təcili Yardım Fondu', type: 'Expense', icon: 'trending-up', group: 'Ümumi və Ailə', budget: 200 },
            { id: 'exp28', name: 'Pensiya Yığımı', type: 'Expense', icon: 'piggy-bank', group: 'Ümumi və Ailə', budget: 1000 },
            { id: 'exp29', name: 'Vergi', type: 'Expense', icon: 'landmark', group: 'Ümumi və Ailə', budget: 500 },
        ],
        ru: [
            { id: 'inc1', name: 'Чистая зарплата - Взрослый 1', type: 'Income', icon: 'dollar-sign', group: null, budget: null },
            { id: 'inc2', name: 'Чистая зарплата - Взрослый 2', type: 'Income', icon: 'dollar-sign', group: null, budget: null },
            { id: 'inc3', name: 'Прочие доходы', type: 'Income', icon: 'trending-up', group: null, budget: null },
            { id: 'exp1', name: 'Ипотека / Аренда', type: 'Expense', icon: 'home', group: 'Жилье', budget: 2000 },
            { id: 'exp2', name: 'Налог на имущество / ТСЖ', type: 'Expense', icon: 'landmark', group: 'Жилье', budget: 300 },
            { id: 'exp3', name: 'Коммунальные услуги', type: 'Expense', icon: 'lightbulb', group: 'Жилье', budget: 250 },
            { id: 'exp4', name: 'Страхование жилья', type: 'Expense', icon: 'shield', group: 'Жилье', budget: 100 },
            { id: 'exp5', name: 'Ремонт и обслуживание', type: 'Expense', icon: 'wrench', group: 'Жилье', budget: 150 },
            { id: 'exp6', name: 'Автокредит', type: 'Expense', icon: 'car', group: 'Транспорт', budget: 400 },
            { id: 'exp7', name: 'Топливо', type: 'Expense', icon: 'fuel', group: 'Транспорт', budget: 200 },
            { id: 'exp8', name: 'Страхование', type: 'Expense', icon: 'file-text', group: 'Транспорт', budget: 150 },
            { id: 'exp9', name: 'Ремонт и обслуживание', type: 'Expense', icon: 'wrench', group: 'Транспорт', budget: 100 },
            { id: 'exp10', name: 'Регистрация / Налоги', type: 'Expense', icon: 'receipt', group: 'Транспорт', budget: 50 },
            { id: 'exp11', name: 'Плата за школу', type: 'Expense', icon: 'graduation-cap', group: 'Образование (старший ребенок)', budget: 1500 },
            { id: 'exp12', name: 'Книги и канцтовары', type: 'Expense', icon: 'book-open', group: 'Образование (старший ребенок)', budget: 200 },
            { id: 'exp13', name: 'Прочие школьные сборы', type: 'Expense', icon: 'dollar-sign', group: 'Образование (старший ребенок)', budget: 100 },
            { id: 'exp14', name: 'Взносы в хоккейную ассоциацию', type: 'Expense', icon: 'trophy', group: 'Детские кружки - Хоккей', budget: 50 },
            { id: 'exp15', name: 'Частные тренировки', type: 'Expense', icon: 'user-check', group: 'Детские кружки - Хоккей', budget: 200 },
            { id: 'exp16', name: 'Экипировка и снаряжение', type: 'Expense', icon: 'shirt', group: 'Детские кружки - Хоккей', budget: 100 },
            { id: 'exp17', name: 'Поездки и турниры', type: 'Expense', icon: 'plane', group: 'Детские кружки - Хоккей', budget: 300 },
            { id: 'exp18', name: 'Прочие расходы на хоккей', type: 'Expense', icon: 'receipt', group: 'Детские кружки - Хоккей', budget: 50 },
            { id: 'exp19', name: 'Продукты', type: 'Expense', icon: 'shopping-cart', group: 'Общее и семья', budget: 800 },
            { id: 'exp20', name: 'Рестораны / Еда на вынос', type: 'Expense', icon: 'utensils-crossed', group: 'Общее и семья', budget: 300 },
            { id: 'exp21', name: 'Одежда и обувь', type: 'Expense', icon: 'shirt', group: 'Общее и семья', budget: 200 },
            { id: 'exp22', name: 'Медицинская страховка и расходы', type: 'Expense', icon: 'heart-pulse', group: 'Общее и семья', budget: 500 },
            { id: 'exp23', name: 'Страхование жизни', type: 'Expense', icon: 'shield-check', group: 'Общее и семья', budget: 100 },
            { id: 'exp24', name: 'Развлечения и подписки', type: 'Expense', icon: 'tv', group: 'Общее и семья', budget: 100 },
            { id: 'exp25', name: 'Отпуск / Путешествия', type: 'Expense', icon: 'plane', group: 'Общее и семья', budget: 400 },
            { id: 'exp26', name: 'Подарки и пожертвования', type: 'Expense', icon: 'gift', group: 'Общее и семья', budget: 100 },
            { id: 'exp27', name: 'Взнос в резервный фонд', type: 'Expense', icon: 'trending-up', group: 'Общее и семья', budget: 200 },
            { id: 'exp28', name: 'Пенсионные накопления', type: 'Expense', icon: 'piggy-bank', group: 'Общее и семья', budget: 1000 },
            { id: 'exp29', name: 'Налоги', type: 'Expense', icon: 'landmark', group: 'Общее и семья', budget: 500 },
        ],
        tr: [
            { id: 'inc1', name: 'Net Maaş - Yetişkin 1', type: 'Income', icon: 'dollar-sign', group: null, budget: null },
            { id: 'inc2', name: 'Net Maaş - Yetişkin 2', type: 'Income', icon: 'dollar-sign', group: null, budget: null },
            { id: 'inc3', name: 'Diğer Gelirler', type: 'Income', icon: 'trending-up', group: null, budget: null },
            { id: 'exp1', name: 'Konut Kredisi / Kira', type: 'Expense', icon: 'home', group: 'Konut', budget: 2000 },
            { id: 'exp2', name: 'Emlak Vergisi / Aidat', type: 'Expense', icon: 'landmark', group: 'Konut', budget: 300 },
            { id: 'exp3', name: 'Faturalar (Elektrik, Su, Gaz, İnternet)', type: 'Expense', icon: 'lightbulb', group: 'Konut', budget: 250 },
            { id: 'exp4', name: 'Konut Sigortası', type: 'Expense', icon: 'shield', group: 'Konut', budget: 100 },
            { id: 'exp5', name: 'Bakım ve Onarım', type: 'Expense', icon: 'wrench', group: 'Konut', budget: 150 },
            { id: 'exp6', name: 'Araç Kredisi', type: 'Expense', icon: 'car', group: 'Ulaşım', budget: 400 },
            { id: 'exp7', name: 'Yakıt', type: 'Expense', icon: 'fuel', group: 'Ulaşım', budget: 200 },
            { id: 'exp8', name: 'Sigorta', type: 'Expense', icon: 'file-text', group: 'Ulaşım', budget: 150 },
            { id: 'exp9', name: 'Bakım ve Onarım', type: 'Expense', icon: 'wrench', group: 'Ulaşım', budget: 100 },
            { id: 'exp10', name: 'Tescil / Vergiler', type: 'Expense', icon: 'receipt', group: 'Ulaşım', budget: 50 },
            { id: 'exp11', name: 'Okul Ücreti', type: 'Expense', icon: 'graduation-cap', group: 'Eğitim (Büyük Çocuk)', budget: 1500 },
            { id: 'exp12', name: 'Kitap ve Malzemeler', type: 'Expense', icon: 'book-open', group: 'Eğitim (Büyük Çocuk)', budget: 200 },
            { id: 'exp13', name: 'Diğer Okul Ücretleri', type: 'Expense', icon: 'dollar-sign', group: 'Eğitim (Büyük Çocuk)', budget: 100 },
            { id: 'exp14', name: 'Hokey Kulübü Ücretleri', type: 'Expense', icon: 'trophy', group: 'Çocuk Aktiviteleri - Hokey', budget: 50 },
            { id: 'exp15', name: 'Özel Antrenör', type: 'Expense', icon: 'user-check', group: 'Çocuk Aktiviteleri - Hokey', budget: 200 },
            { id: 'exp16', name: 'Ekipman ve Malzemeler', type: 'Expense', icon: 'shirt', group: 'Çocuk Aktiviteleri - Hokey', budget: 100 },
            { id: 'exp17', name: 'Seyahat ve Turnuvalar', type: 'Expense', icon: 'plane', group: 'Çocuk Aktiviteleri - Hokey', budget: 300 },
            { id: 'exp18', name: 'Diğer Hokey Giderleri', type: 'Expense', icon: 'receipt', group: 'Çocuk Aktiviteleri - Hokey', budget: 50 },
            { id: 'exp19', name: 'Market Alışverişi', type: 'Expense', icon: 'shopping-cart', group: 'Genel ve Aile', budget: 800 },
            { id: 'exp20', name: 'Dışarıda Yemek / Paket Servis', type: 'Expense', icon: 'utensils-crossed', group: 'Genel ve Aile', budget: 300 },
            { id: 'exp21', name: 'Giyim ve Ayakkabı', type: 'Expense', icon: 'shirt', group: 'Genel ve Aile', budget: 200 },
            { id: 'exp22', name: 'Sağlık Sigortası ve Tıbbi Giderler', type: 'Expense', icon: 'heart-pulse', group: 'Genel ve Aile', budget: 500 },
            { id: 'exp23', name: 'Hayat Sigortası', type: 'Expense', icon: 'shield-check', group: 'Genel ve Aile', budget: 100 },
            { id: 'exp24', name: 'Eğlence ve Abonelikler', type: 'Expense', icon: 'tv', group: 'Genel ve Aile', budget: 100 },
            { id: 'exp25', name: 'Tatil / Seyahat', type: 'Expense', icon: 'plane', group: 'Genel ve Aile', budget: 400 },
            { id: 'exp26', name: 'Hediyeler ve Bağışlar', type: 'Expense', icon: 'gift', group: 'Genel ve Aile', budget: 100 },
            { id: 'exp27', name: 'Acil Durum Fonu Katkısı', type: 'Expense', icon: 'trending-up', group: 'Genel ve Aile', budget: 200 },
            { id: 'exp28', name: 'Emeklilik Birikimi', type: 'Expense', icon: 'piggy-bank', group: 'Genel ve Aile', budget: 1000 },
            { id: 'exp29', name: 'Vergi', type: 'Expense', icon: 'landmark', group: 'Genel ve Aile', budget: 500 },
        ],
    };

    // --- TRANSLATION HELPER ---
    function t(key, ...args) {
        const lang = AppState.currentLanguage;
        let str = translations[key]?.[lang] || key;
        args.forEach((arg, i) => {
            str = str.replace(`{${i}}`, arg);
        });
        return str;
    }
    
    // --- LOCAL STORAGE ---
    const Storage = {
        save() {
            localStorage.setItem('nar-data', JSON.stringify({
                categories: AppState.categories,
                transactions: AppState.transactions,
                savingsGoal: AppState.savingsGoal,
                currentLanguage: AppState.currentLanguage
            }));
        },
        load() {
            const data = localStorage.getItem('nar-data');
            if (data) {
                const parsedData = JSON.parse(data);
                AppState.categories = parsedData.categories || [];
                AppState.transactions = parsedData.transactions || [];
                AppState.savingsGoal = parsedData.savingsGoal || 0;
                AppState.currentLanguage = parsedData.currentLanguage || 'en';
                 if (AppState.categories.length === 0) {
                    this.loadDefaultCategories();
                }
            } else {
                this.loadDefaultCategories();
            }
        },
        loadDefaultCategories() {
            // Deep copy to avoid reference issues
            AppState.categories = JSON.parse(JSON.stringify(defaultCategories[AppState.currentLanguage]));
            this.save();
        }
    };
    
    // --- UI & RENDERING ---
    const UI = {
        modals: {
            transaction: document.getElementById('transaction-modal'),
            category: document.getElementById('category-modal'),
            categoryForm: document.getElementById('category-form-modal'),
            history: document.getElementById('history-modal'),
            confirm: document.getElementById('confirm-modal'),
            about: document.getElementById('about-modal'),
        },

        setLanguage(lang) {
            AppState.currentLanguage = lang;
            document.documentElement.lang = lang; // Set lang attribute on <html>

            // Create a map of the default categories for the new language for easy lookup.
            const defaultCatsMap = new Map(defaultCategories[lang].map(cat => [cat.id, cat]));

            // Iterate through the current categories in the app state.
            AppState.categories.forEach(categoryInState => {
                // Check if the category from the state exists in the default map.
                const translatedDefaultCat = defaultCatsMap.get(categoryInState.id);
                if (translatedDefaultCat) {
                    // If it's a default category, update its name and group.
                    categoryInState.name = translatedDefaultCat.name;
                    categoryInState.group = translatedDefaultCat.group;
                }
                // User-created categories will not be found in the map and will be skipped.
            });


            // Update all static text from data-translate-key
            document.querySelectorAll('[data-translate-key]').forEach(el => {
                const key = el.dataset.translateKey;
                if (translations[key]) {
                    // This handles <span> inside buttons, titles, labels, etc.
                    el.textContent = t(key);
                }
            });
            
            // Update active button style
            document.querySelectorAll('#lang-switcher .lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.lang === lang);
            });

            this.renderAll(); // Re-render dynamic content with translated categories
            Storage.save(); // Save the newly translated category names
        },

        openModal(modal) {
            modal.style.display = 'flex';
        },
        closeModal(modal) {
            modal.style.display = 'none';
        },
        
        renderAll() {
            this.renderSummary();
            this.renderPockets();
            this.renderCharts();
            this.populateCategoryDropdowns();
            lucide.createIcons();
        },
        
        renderSummary() {
            const { startDate, endDate } = AppState.filter;
            const periodTransactions = getTransactionsInPeriod(startDate, endDate);

            const totalIncome = periodTransactions
                .filter(t => AppState.categories.find(c => c.id === t.categoryId)?.type === 'Income')
                .reduce((sum, t) => sum + t.amount, 0);

            const totalExpenses = periodTransactions
                .filter(t => AppState.categories.find(c => c.id === t.categoryId)?.type === 'Expense')
                .reduce((sum, t) => sum + t.amount, 0);

            document.getElementById('total-income').textContent = formatCurrency(totalIncome);
            document.getElementById('total-expenses').textContent = formatCurrency(totalExpenses);
            const netCashflow = totalIncome - totalExpenses;
            const netCashflowEl = document.getElementById('net-cashflow');
            netCashflowEl.textContent = formatCurrency(netCashflow);
            netCashflowEl.classList.toggle('text-green-600', netCashflow >= 0);
            netCashflowEl.classList.toggle('text-red-600', netCashflow < 0);

            const summaryPeriodEls = document.querySelectorAll('.summary-period');
            summaryPeriodEls.forEach(el => {
                 if (startDate && endDate) {
                    const start = new Date(startDate + 'T00:00:00').toLocaleDateString();
                    const end = new Date(endDate + 'T00:00:00').toLocaleDateString();
                    el.textContent = t('summaryPeriod', start, end);
                 } else {
                    el.textContent = t('forThisMonth');
                 }
            });
        },

        renderPockets() {
            const pocketsContainer = document.getElementById('pockets-container');
            pocketsContainer.innerHTML = '';
            
            const { startDate, endDate } = AppState.filter;

            const expenseCategories = AppState.categories.filter(c => c.type === 'Expense');
            const groups = [...new Set(expenseCategories.map(c => c.group).filter(g => g))];

            groups.forEach(group => {
                const groupWrapper = document.createElement('div');
                groupWrapper.innerHTML = `<h3 class="text-xl font-semibold mb-3 text-slate-700">${group}</h3>`;
                
                const groupGrid = document.createElement('div');
                groupGrid.className = 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4';

                const categoriesInGroup = expenseCategories.filter(c => c.group === group);
                categoriesInGroup.forEach(category => {
                    const spent = getSpentForCategory(category.id, startDate, endDate);
                    const proratedBudget = calculateProratedBudget(category.budget, startDate, endDate);
                    const remaining = proratedBudget - spent;
                    const progress = proratedBudget > 0 ? (spent / proratedBudget) * 100 : 0;

                    const card = document.createElement('div');
                    card.className = 'bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex flex-col justify-between cursor-pointer hover:shadow-md hover:border-blue-400 transition-all duration-200 add-transaction-tile';
                    card.dataset.categoryId = category.id;

                    card.innerHTML = `
                        <div>
                            <div class="flex justify-between items-start">
                                <div class="flex items-center space-x-3">
                                    <span class="bg-slate-100 p-2 rounded-md">
                                        <i data-lucide="${category.icon}" class="w-6 h-6 text-slate-600"></i>
                                    </span>
                                    <div>
                                        <h4 class="font-semibold">${category.name}</h4>
                                        <p class="text-sm text-slate-500">${t('budgetLabel', formatCurrency(proratedBudget))}</p>
                                    </div>
                                </div>
                                <button class="view-history-btn text-slate-400 hover:text-blue-600" data-category-id="${category.id}">
                                    <i data-lucide="history" class="w-5 h-5"></i>
                                </button>
                            </div>
                            <div class="mt-4">
                                <div class="flex justify-between text-sm font-medium mb-1">
                                    <span class="text-slate-600">${t('spentLabel', formatCurrency(spent))}</span>
                                    <span class="${remaining >= 0 ? 'text-green-600' : 'text-red-600'}">
                                        ${remaining >= 0 ? t('leftLabel', formatCurrency(remaining)) : t('overLabel', formatCurrency(Math.abs(remaining)))}
                                    </span>
                                </div>
                                <div class="progress-bar-bg w-full h-2.5 rounded-full">
                                    <div class="progress-bar-fg h-2.5 rounded-full ${progress > 100 ? 'progress-bar-fg-over' : ''}" style="width: ${Math.min(progress, 100)}%"></div>
                                </div>
                            </div>
                        </div>
                    `;
                    groupGrid.appendChild(card);
                });
                groupWrapper.appendChild(groupGrid);
                pocketsContainer.appendChild(groupWrapper);
            });
        },

        renderCharts() {
            const { startDate, endDate } = AppState.filter;
            const expenseData = getChartData(startDate, endDate);

            if (AppState.expenseChart) AppState.expenseChart.destroy();
            const expenseCtx = document.getElementById('expense-chart').getContext('2d');
            AppState.expenseChart = new Chart(expenseCtx, {
                type: 'doughnut',
                data: {
                    labels: expenseData.labels,
                    datasets: [{
                        data: expenseData.data,
                        backgroundColor: generateColors(expenseData.labels.length),
                        borderColor: '#fdfcf9',
                        borderWidth: 4,
                    }]
                },
                options: { responsive: true, plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, padding: 15 } } } }
            });

            if (AppState.budgetChart) AppState.budgetChart.destroy();
            const budgetCtx = document.getElementById('budget-chart').getContext('2d');
            AppState.budgetChart = new Chart(budgetCtx, {
                type: 'bar',
                data: {
                    labels: expenseData.top5.labels,
                    datasets: [{
                        label: t('chartBudget'),
                        data: expenseData.top5.budgets,
                        backgroundColor: 'rgba(59, 130, 246, 0.5)',
                        borderWidth: 1
                    }, {
                        label: t('chartSpent'),
                        data: expenseData.top5.spent,
                        backgroundColor: '#C94C4C',
                        borderWidth: 1
                    }]
                },
                options: { responsive: true, scales: { y: { beginAtZero: true } }, plugins: { legend: { position: 'bottom' } } }
            });
            
            this.renderTrendChart();
            this.renderSavingsChart();
        },

        renderTrendChart() {
            const trendData = getTrendChartData();
            if (AppState.trendChart) AppState.trendChart.destroy();
            const trendCtx = document.getElementById('trend-chart').getContext('2d');
            AppState.trendChart = new Chart(trendCtx, {
                type: 'line',
                data: {
                    labels: trendData.labels,
                    datasets: [
                        { label: t('chartIncome'), data: trendData.incomeData, borderColor: '#2E7D32', backgroundColor: 'rgba(46, 125, 50, 0.1)', fill: true, tension: 0.3 },
                        { label: t('chartExpenses'), data: trendData.expenseData, borderColor: '#C94C4C', backgroundColor: 'rgba(201, 76, 76, 0.1)', fill: true, tension: 0.3 }
                    ]
                },
                options: { responsive: true, scales: { y: { beginAtZero: true } }, plugins: { legend: { position: 'top' } } }
            });
        },

        renderSavingsChart() {
            const savingsData = getSavingsChartData();
            if (AppState.savingsChart) AppState.savingsChart.destroy();
            const savingsCtx = document.getElementById('savings-chart').getContext('2d');
            AppState.savingsChart = new Chart(savingsCtx, {
                type: 'line',
                data: {
                    labels: savingsData.labels,
                    datasets: [
                        { label: t('chartProjected'), data: savingsData.projectedData, borderColor: '#3b82f6', borderDash: [5, 5], backgroundColor: 'rgba(59, 130, 246, 0.1)', fill: false, tension: 0.1 },
                        { label: t('chartActual'), data: savingsData.actualData, borderColor: '#2E7D32', backgroundColor: 'rgba(46, 125, 50, 0.1)', fill: true, tension: 0.1 }
                    ]
                },
                options: { responsive: true, scales: { y: { beginAtZero: true, ticks: { callback: value => '$' + value } } }, plugins: { legend: { position: 'top' } } }
            });
        },

        populateCategoryDropdowns() {
            const select = document.getElementById('transaction-category');
            select.innerHTML = '';
            
            const incomeCats = AppState.categories.filter(c => c.type === 'Income');
            const expenseCats = AppState.categories.filter(c => c.type === 'Expense');

            const incomeOptgroup = document.createElement('optgroup');
            incomeOptgroup.label = t('income');
            incomeCats.forEach(c => { incomeOptgroup.innerHTML += `<option value="${c.id}">${c.name}</option>`; });

            const expenseOptgroup = document.createElement('optgroup');
            expenseOptgroup.label = t('expense');
            expenseCats.forEach(c => { expenseOptgroup.innerHTML += `<option value="${c.id}">${c.name}</option>`; });

            select.appendChild(incomeOptgroup);
            select.appendChild(expenseOptgroup);
        },
        
        renderCategoryList() {
            const list = document.getElementById('category-list');
            list.innerHTML = '';
            AppState.categories.forEach(c => {
                const item = document.createElement('div');
                item.className = 'flex justify-between items-center p-3 bg-slate-50 rounded-lg border';
                item.innerHTML = `
                    <div class="flex items-center space-x-3">
                        <i data-lucide="${c.icon}" class="w-5 h-5 text-slate-500"></i>
                        <div>
                            <span class="font-medium">${c.name}</span>
                            <span class="text-sm text-slate-500 ml-2">(${t(c.type.toLowerCase())})</span>
                        </div>
                    </div>
                    <div class="space-x-2">
                        <button class="edit-category-btn text-blue-600 hover:text-blue-800" data-id="${c.id}"><i data-lucide="edit" class="w-4 h-4"></i></button>
                        <button class="delete-category-btn text-red-600 hover:text-red-800" data-id="${c.id}"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                    </div>
                `;
                list.appendChild(item);
            });
            lucide.createIcons();
        },

        renderHistory(categoryId) {
            const category = AppState.categories.find(c => c.id === categoryId);
            const transactions = AppState.transactions.filter(t => t.categoryId === categoryId).sort((a,b) => new Date(b.date) - new Date(a.date));
            
            document.getElementById('history-modal-title').textContent = t('historyFor', category.name);
            const list = document.getElementById('history-list');
            list.innerHTML = '';

            if(transactions.length === 0) {
                list.innerHTML = `<p class="text-slate-500 text-center">${t('noTransactions')}</p>`;
                return;
            }

            transactions.forEach(t => {
                const item = document.createElement('div');
                item.className = 'flex justify-between items-center p-3 bg-slate-50 rounded-lg border';
                item.innerHTML = `
                    <div>
                        <p class="font-medium">${t.description}</p>
                        <p class="text-sm text-slate-500">${new Date(t.date).toLocaleDateString()}</p>
                    </div>
                    <div class="flex items-center space-x-4">
                        <span class="font-bold text-lg ${category.type === 'Income' ? 'text-green-600' : 'text-red-600'}">
                            ${category.type === 'Income' ? '+' : '-'}${formatCurrency(t.amount)}
                        </span>
                        <div class="space-x-1">
                            <button class="edit-transaction-btn text-blue-600 hover:text-blue-800" data-id="${t.id}"><i data-lucide="edit" class="w-4 h-4"></i></button>
                            <button class="delete-transaction-btn text-red-600 hover:text-red-800" data-id="${t.id}"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                        </div>
                    </div>
                `;
                list.appendChild(item);
            });
            lucide.createIcons();
        },
        
        populateIconPicker() {
            const select = document.getElementById('category-icon');
            if (!select) return;
            select.innerHTML = ICONS.map(icon => `<option value="${icon}">${icon.replace(/-/g, ' ')}</option>`).join('');
        }
    };

    // --- EVENT HANDLERS ---
    const Handlers = {
        init() {
            // Language switcher
            document.getElementById('lang-switcher').addEventListener('click', (e) => {
                const langBtn = e.target.closest('.lang-btn');
                if (langBtn) {
                    UI.setLanguage(langBtn.dataset.lang);
                }
            });

            // Main App Listeners
            document.getElementById('logo-btn').addEventListener('click', () => UI.openModal(UI.modals.about));
            document.getElementById('add-transaction-btn').addEventListener('click', () => this.addTransaction());
            document.getElementById('manage-categories-btn').addEventListener('click', () => this.manageCategories());
            document.getElementById('export-csv').addEventListener('click', () => this.exportCSV());
            document.getElementById('import-csv').addEventListener('change', (e) => this.importCSV(e));
            document.getElementById('wipe-data-btn').addEventListener('click', () => this.wipeData());
            
            // Date Filter & Savings Goal Listeners
            document.getElementById('start-date').addEventListener('change', () => this.applyDateFilter());
            document.getElementById('end-date').addEventListener('change', () => this.applyDateFilter());
            document.getElementById('reset-date-btn').addEventListener('click', () => this.resetDateFilter());
            document.getElementById('set-goal-btn').addEventListener('click', () => this.setSavingsGoal());

            // Modal & Form Listeners
            document.getElementById('close-about-modal').addEventListener('click', () => UI.closeModal(UI.modals.about));
            document.getElementById('transaction-form').addEventListener('submit', (e) => this.saveTransaction(e));
            document.getElementById('cancel-transaction').addEventListener('click', () => UI.closeModal(UI.modals.transaction));
            document.getElementById('add-category-btn').addEventListener('click', () => this.addCategory());
            document.getElementById('close-category-modal').addEventListener('click', () => UI.closeModal(UI.modals.category));
            document.getElementById('category-form').addEventListener('submit', (e) => this.saveCategory(e));
            document.getElementById('cancel-category').addEventListener('click', () => UI.closeModal(UI.modals.categoryForm));
            document.getElementById('category-type').addEventListener('change', () => this.toggleCategoryExpenseFields());
            document.getElementById('close-history-modal').addEventListener('click', () => UI.closeModal(UI.modals.history));
            document.getElementById('confirm-cancel').addEventListener('click', () => UI.closeModal(UI.modals.confirm));

            // Delegated Listeners for dynamic content
            document.body.addEventListener('click', (e) => {
                const editCategoryBtn = e.target.closest('.edit-category-btn');
                if (editCategoryBtn) this.editCategory(editCategoryBtn.dataset.id);

                const deleteCategoryBtn = e.target.closest('.delete-category-btn');
                if (deleteCategoryBtn) this.deleteCategory(deleteCategoryBtn.dataset.id);

                const viewHistoryBtn = e.target.closest('.view-history-btn');
                if (viewHistoryBtn) this.viewHistory(viewHistoryBtn.dataset.categoryId);

                const editTransactionBtn = e.target.closest('.edit-transaction-btn');
                if (editTransactionBtn) this.editTransaction(editTransactionBtn.dataset.id);

                const deleteTransactionBtn = e.target.closest('.delete-transaction-btn');
                if (deleteTransactionBtn) this.deleteTransaction(deleteTransactionBtn.dataset.id);
                
                const tile = e.target.closest('.add-transaction-tile');
                if (tile && !e.target.closest('.view-history-btn')) {
                    e.preventDefault();
                    this.addTransactionFromTile(tile.dataset.categoryId);
                }
            });
        },
        
        setSavingsGoal() {
            const goalInput = document.getElementById('savings-goal-input');
            const newGoal = parseFloat(goalInput.value);

            if (isNaN(newGoal) || newGoal < 0) {
                alert(t('alertInvalidGoal'));
                return;
            }
            
            AppState.savingsGoal = newGoal;
            Storage.save();
            UI.renderAll();
            alert(t('alertGoalUpdated', formatCurrency(newGoal)));
        },
        
        applyDateFilter() {
            const startDate = document.getElementById('start-date').value;
            const endDate = document.getElementById('end-date').value;

            if (!startDate || !endDate) return;

            if (new Date(startDate) > new Date(endDate)) {
                alert(t('alertInvalidDate'));
                return;
            }

            AppState.filter.startDate = startDate;
            AppState.filter.endDate = endDate;
            
            UI.renderAll();
        },
        
        resetDateFilter() {
            const now = new Date();
            const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
            const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0];
            
            document.getElementById('start-date').value = firstDay;
            document.getElementById('end-date').value = lastDay;
            
            AppState.filter.startDate = firstDay;
            AppState.filter.endDate = lastDay;

            UI.renderAll();
        },
        
        addTransaction() {
            document.getElementById('transaction-form').reset();
            document.getElementById('transaction-id').value = '';
            document.getElementById('transaction-modal-title').textContent = t('addTransactionTitle');
            document.getElementById('transaction-date').valueAsDate = new Date();
            UI.openModal(UI.modals.transaction);
        },

        addTransactionFromTile(categoryId) {
            this.addTransaction(); // Open and reset the modal first
            document.getElementById('transaction-category').value = categoryId;
        },
        
        editTransaction(id) {
            const transaction = AppState.transactions.find(t => t.id === id);
            if (!transaction) return;
            
            UI.closeModal(UI.modals.history);

            document.getElementById('transaction-id').value = transaction.id;
            document.getElementById('transaction-amount').value = transaction.amount;
            document.getElementById('transaction-description').value = transaction.description;
            document.getElementById('transaction-date').value = transaction.date.split('T')[0];
            document.getElementById('transaction-category').value = transaction.categoryId;
            document.getElementById('transaction-modal-title').textContent = t('editTransactionTitle');
            
            UI.openModal(UI.modals.transaction);
        },

        saveTransaction(e) {
            e.preventDefault();
            const id = document.getElementById('transaction-id').value;
            const newTransaction = {
                id: id || `trans_${new Date().getTime()}`,
                amount: parseFloat(document.getElementById('transaction-amount').value),
                description: document.getElementById('transaction-description').value.trim(),
                date: document.getElementById('transaction-date').value,
                categoryId: document.getElementById('transaction-category').value
            };

            if (id) {
                const index = AppState.transactions.findIndex(t => t.id === id);
                if (index !== -1) AppState.transactions[index] = newTransaction;
            } else {
                AppState.transactions.push(newTransaction);
            }
            
            Storage.save();
            UI.renderAll();
            UI.closeModal(UI.modals.transaction);
        },
        
        deleteTransaction(id) {
            showConfirm(t('confirmDeleteTransaction'), () => {
                AppState.transactions = AppState.transactions.filter(t => t.id !== id);
                Storage.save();
                UI.renderAll();
                UI.closeModal(UI.modals.history);
            });
        },

        manageCategories() {
            UI.renderCategoryList();
            UI.openModal(UI.modals.category);
        },

        addCategory() {
            UI.populateIconPicker();
            document.getElementById('category-form').reset();
            document.getElementById('category-id').value = '';
            document.getElementById('category-form-title').textContent = t('addCategoryTitle');
            this.toggleCategoryExpenseFields();
            UI.openModal(UI.modals.categoryForm);
        },
        
        editCategory(id) {
            UI.populateIconPicker();
            const category = AppState.categories.find(c => c.id === id);
            if (!category) return;

            document.getElementById('category-id').value = category.id;
            document.getElementById('category-name').value = category.name;
            document.getElementById('category-type').value = category.type;
            document.getElementById('category-icon').value = category.icon;
            
            this.toggleCategoryExpenseFields();
            
            if (category.type === 'Expense') {
                document.getElementById('category-budget').value = category.budget;
                document.getElementById('category-group').value = category.group;
            }
            
            document.getElementById('category-form-title').textContent = t('editCategoryTitle');
            UI.openModal(UI.modals.categoryForm);
        },

        saveCategory(e) {
            e.preventDefault();
            const id = document.getElementById('category-id').value;
            const type = document.getElementById('category-type').value;
            const newCategory = {
                id: id || `cat_${new Date().getTime()}`,
                name: document.getElementById('category-name').value.trim(),
                type: type,
                icon: document.getElementById('category-icon').value,
                budget: type === 'Expense' ? parseFloat(document.getElementById('category-budget').value) || 0 : null,
                group: type === 'Expense' ? document.getElementById('category-group').value.trim() : null,
            };

            if (id) {
                const index = AppState.categories.findIndex(c => c.id === id);
                if (index !== -1) AppState.categories[index] = newCategory;
            } else {
                AppState.categories.push(newCategory);
            }
            
            Storage.save();
            UI.renderAll();
            UI.renderCategoryList();
            UI.closeModal(UI.modals.categoryForm);
        },
        
        deleteCategory(id) {
            const category = AppState.categories.find(c => c.id === id);
            if (!category) return;
            
            const message = category.type === 'Expense' 
                ? t('confirmDeleteCategoryWithTransactions', category.name)
                : t('confirmDeleteCategory', category.name);

            showConfirm(message, () => {
                AppState.categories = AppState.categories.filter(c => c.id !== id);
                if (category.type === 'Expense') {
                    AppState.transactions = AppState.transactions.filter(t => t.categoryId !== id);
                }
                Storage.save();
                UI.renderAll();
                UI.renderCategoryList();
            });
        },
        
        toggleCategoryExpenseFields() {
            const type = document.getElementById('category-type').value;
            const fields = document.getElementById('expense-fields');
            fields.style.display = type === 'Expense' ? 'block' : 'none';
        },

        viewHistory(categoryId) {
            UI.renderHistory(categoryId);
            UI.openModal(UI.modals.history);
        },
        
        exportCSV() {
            if (AppState.transactions.length === 0) {
                alert(t('alertNoExport'));
                return;
            }
            const headers = ['Transaction ID', 'Date', 'Description', 'Amount', 'Category ID', 'Category Name', 'Category Type'];
            const rows = AppState.transactions.map(t => {
                const category = AppState.categories.find(c => c.id === t.categoryId) || {};
                return [t.id, t.date, `"${t.description}"`, t.amount, t.categoryId, `"${category.name}"`, `"${category.type}"`].join(',');
            });
            
            const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows].join('\n');
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", `nar_backup_${new Date().toISOString().split('T')[0]}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },

        importCSV(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target.result;
                const rows = text.split('\n').slice(1);
                let importedCount = 0;
                
                rows.forEach(rowStr => {
                    if (!rowStr.trim()) return;
                    const [id, date, description, amount, categoryId, categoryName, categoryType] = rowStr.split(',');
                    
                    if (!id || !date || !amount || !categoryId) return;
                    if (AppState.transactions.some(t => t.id === id)) return;
                    
                    if (!AppState.categories.some(c => c.id === categoryId)) {
                         AppState.categories.push({
                            id: categoryId, name: (categoryName || 'Imported Category').replace(/"/g, ''), 
                            type: (categoryType || 'Expense').replace(/"/g, ''),
                            icon: 'file-question', budget: 0, group: 'Imported'
                        });
                    }
                    
                    AppState.transactions.push({ id, date, description: description.replace(/"/g, ''), amount: parseFloat(amount), categoryId });
                    importedCount++;
                });
                
                if (importedCount > 0) {
                    Storage.save();
                    this.resetDateFilter();
                    alert(t('alertImportSuccess', importedCount));
                } else {
                    alert(t('alertImportNone'));
                }
                event.target.value = '';
            };
            reader.readAsText(file);
        },

        wipeData() {
            showConfirm(t('confirmWipeData'), () => {
                localStorage.removeItem('nar-data');
                // Reload with defaults for the current language
                Storage.loadDefaultCategories();
                Storage.save();
                location.reload();
            });
        }
    };

    // --- HELPERS ---
    function formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount || 0);
    }

    function calculateProratedBudget(monthlyBudget, startDate, endDate) {
        if (!monthlyBudget || !startDate || !endDate) {
            return monthlyBudget || 0;
        }
        const start = new Date(startDate);
        const end = new Date(endDate);
        const yearDiff = end.getFullYear() - start.getFullYear();
        const monthDiff = end.getMonth() - start.getMonth();
        const numberOfMonths = (yearDiff * 12) + monthDiff + 1;
        return monthlyBudget * numberOfMonths;
    }

    function getTransactionsInPeriod(startDate, endDate) {
        if (!startDate || !endDate) return [];
        const start = new Date(startDate + 'T00:00:00');
        const end = new Date(endDate + 'T23:59:59');
        return AppState.transactions.filter(t => {
            const tDate = new Date(t.date + 'T00:00:00');
            return tDate >= start && tDate <= end;
        });
    }

    function getSpentForCategory(categoryId, startDate, endDate) {
        return getTransactionsInPeriod(startDate, endDate)
            .filter(t => t.categoryId === categoryId)
            .reduce((sum, t) => sum + t.amount, 0);
    }
    
    function getChartData(startDate, endDate) {
        const expenseCategories = AppState.categories.filter(c => c.type === 'Expense');
        const spentByCategory = expenseCategories.map(c => ({
            name: c.name,
            spent: getSpentForCategory(c.id, startDate, endDate),
            budget: calculateProratedBudget(c.budget, startDate, endDate)
        })).filter(c => c.spent > 0);

        const top5 = [...spentByCategory].sort((a, b) => b.spent - a.spent).slice(0, 5);

        return {
            labels: spentByCategory.map(c => c.name),
            data: spentByCategory.map(c => c.spent),
            top5: {
                labels: top5.map(c => c.name),
                spent: top5.map(c => c.spent),
                budgets: top5.map(c => c.budget)
            }
        };
    }

    function getTrendChartData() {
        const labels = [], incomeData = [], expenseData = [];
        const now = new Date();

        for (let i = 5; i >= 0; i--) {
            const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
            labels.push(d.toLocaleString(AppState.currentLanguage, { month: 'short' }));

            const monthlyTransactions = AppState.transactions.filter(t => {
                const tDate = new Date(t.date + 'T00:00:00');
                return tDate.getMonth() === d.getMonth() && tDate.getFullYear() === d.getFullYear();
            });

            const income = monthlyTransactions.filter(t => AppState.categories.find(c => c.id === t.categoryId)?.type === 'Income').reduce((sum, t) => sum + t.amount, 0);
            const expenses = monthlyTransactions.filter(t => AppState.categories.find(c => c.id === t.categoryId)?.type === 'Expense').reduce((sum, t) => sum + t.amount, 0);

            incomeData.push(income);
            expenseData.push(expenses);
        }
        return { labels, incomeData, expenseData };
    }
    
    function getSavingsChartData() {
        const labels = [], actualData = [], projectedData = [];
        const now = new Date();
        let cumulativeActualSavings = 0, cumulativeProjectedSavings = 0;

        for (let i = 11; i >= 0; i--) {
            const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
            labels.push(d.toLocaleString(AppState.currentLanguage, { month: 'short' }) + ` '${String(d.getFullYear()).slice(2)}`);

            const monthlyTransactions = AppState.transactions.filter(t => {
                const tDate = new Date(t.date + 'T00:00:00');
                return tDate.getMonth() === d.getMonth() && tDate.getFullYear() === d.getFullYear();
            });

            const income = monthlyTransactions.filter(t => AppState.categories.find(c => c.id === t.categoryId)?.type === 'Income').reduce((sum, t) => sum + t.amount, 0);
            const expenses = monthlyTransactions.filter(t => AppState.categories.find(c => c.id === t.categoryId)?.type === 'Expense').reduce((sum, t) => sum + t.amount, 0);
            
            cumulativeActualSavings += (income - expenses);
            cumulativeProjectedSavings += AppState.savingsGoal;

            actualData.push(cumulativeActualSavings);
            projectedData.push(cumulativeProjectedSavings);
        }
        return { labels, actualData, projectedData };
    }

    function generateColors(numColors) {
        const baseColors = ['#C94C4C', '#2E7D32', '#D97706', '#4F46E5', '#7C3AED', '#DB2777', '#0E7490', '#57534E'];
        return Array.from({ length: numColors }, (_, i) => baseColors[i % baseColors.length]);
    }
    
    function showConfirm(message, onConfirm) {
        const confirmModal = UI.modals.confirm;
        document.getElementById('confirm-message').textContent = message;
        UI.openModal(confirmModal);

        const proceedBtn = document.getElementById('confirm-proceed');
        const newProceedBtn = proceedBtn.cloneNode(true); // Re-clone to remove old listeners
        newProceedBtn.textContent = t('proceed'); // Ensure button text is translated
        proceedBtn.parentNode.replaceChild(newProceedBtn, proceedBtn);
        
        newProceedBtn.addEventListener('click', () => {
            onConfirm();
            UI.closeModal(confirmModal);
        }, { once: true });
    }

    // --- INITIALIZATION ---
    function init() {
        Storage.load();
        
        if (AppState.savingsGoal > 0) {
            document.getElementById('savings-goal-input').value = AppState.savingsGoal;
        }

        const now = new Date();
        const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
        const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0];
        AppState.filter.startDate = firstDay;
        AppState.filter.endDate = lastDay;

        document.getElementById('start-date').value = firstDay;
        document.getElementById('end-date').value = lastDay;
        
        Handlers.init();
        UI.setLanguage(AppState.currentLanguage); // Apply loaded language on startup
        
        console.log("Nar App Initialized with i18n support.");
    }

    init();
});