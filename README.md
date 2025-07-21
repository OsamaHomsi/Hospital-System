طبعًا يا أسامة! ✨ هذا ملف `README.md` احترافي مناسب تمامًا لمشروعك "Hospital Appointment System API"، مكتوب بأسلوب واضح ومناسب للنشر على GitHub:

---

```markdown
# 🏥 Hospital Appointment System API

نظام إدارة مواعيد المستشفيات باستخدام Node.js و Express و MongoDB، يوفر آلية آمنة لحجز وإلغاء المواعيد بين المرضى والأطباء، مع حماية مبنية على JWT وتقسيم الأدوار (دكتور / مريض).

---

## 📌 فكرة المشروع

نظام API بسيط وفعال يتيح للمستخدمين تسجيل الدخول، حجز المواعيد الطبية، إلغاؤها، والاطلاع على بيانات المستخدمين المرتبطة بهم. تم تطبيق حماية كاملة للمسارات باستخدام Passport.js وجدار صلاحيات للتحكم بالدور.

---

## ✅ المميزات الأساسية

- 🔐 تسجيل دخول وتسجيل جديد باستخدام JWT
- 🧑‍⚕️ التحكم بالصلاحيات حسب الدور (doctor / patient)
- 📅 حجز مواعيد فقط إذا كان الطبيب متاح في الوقت المحدد
- ❌ منع الحجز عند تضارب المواعيد
- 🗂️ عرض قائمة المستخدمين حسب الدور
- 🔧 إلغاء المواعيد واستعراضها
- 🧪 اختبار كامل للمسارات باستخدام Postman

---

## 🛠️ التقنيات المستخدمة

- Node.js  
- Express.js  
- MongoDB + Mongoose  
- Passport.js  
- JWT  
- Bcrypt.js  
- MVC Architecture  
- Role-Based Access  
- Postman  
- dotenv  
- Centralized Error Handling

---

## 📁 بنية المشروع

```bash
├── controllers/          # ملفات التحكم بالمسارات
├── routes/               # تعريف المسارات
├── middleware/           # حماية وصلاحيات
├── models/               # تعريف نماذج البيانات (Schemas)
├── app.js                # نقطة بدء التطبيق
├── .env                  # متغيرات البيئة (غير مرفوع على GitHub)
├── .gitignore            # تجاهل node_modules و .env
└── README.md             # ملف التوثيق
```

---

## 📥 خطوات التشغيل محليًا

1. **استنساخ المستودع:**

```bash
git clone https://github.com/YOUR_USERNAME/hospital-appointment-system.git
cd hospital-appointment-system
```

2. **تثبيت الحزم:**

```bash
npm install
```

3. **إضافة ملف .env:**

```bash
JWT_SECRET=your_jwt_secret_key
MONGO_URI=your_mongodb_connection_string
```

4. **تشغيل التطبيق:**

```bash
node server.js
```

> سيتم تشغيل API على `http://localhost:PORT`

---

## 🧪 اختبار باستخدام Postman

للوصول إلى جميع الـ endpoints، تأكد من تسجيل الدخول أولًا للحصول على الـ token، ثم ضعه في Header:

```
Authorization: Bearer <your_token>
```

---

## 📣 ملاحظات إضافية

- الكود منظم وقابل للتوسع مستقبلًا مثل إضافة التحكم في توفر الأطباء، التقويم الزمني، أو صفحة واجهة مستخدم.
- يمكن ربط النظام بسهولة بـ Frontend لأي عيادة أو مستشفى.
- المشروع مناسب كنواة لأي نظام حجوزات طبي أو إداري.

---

## 📬 للتواصل أو الاستفسار

إذا عندك أي سؤال أو اقتراح، تواصل معي مباشرة.  
📧 osama@example.com

---

```

لو حاب أعدّل على أي جزء أو تضيف روابط مثل Swagger أو Render لاحقًا، أنا جاهز ✨  
تحب أساعدك برفعه الآن بعد تجهيز هذا الملف؟
