import { useNavigate } from "react-router-dom";
import NavbarAr from "../../components/Navbar_ar/Navbar";
import "./privacy.scss";

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="privacy-page privacy-page-ar" dir="rtl">
      <NavbarAr />
      
      <div className="legal-container">
        <div className="legal-header">
          <h1 className="legal-title">سياسة الخصوصية</h1>
          <p className="legal-date">آخر تحديث: {new Date().toLocaleDateString('ar-SA')}</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2 className="section-title">مقدمة</h2>
            <p className="section-text">
              نحن في نبذة نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك عند استخدام خدماتنا لإنشاء السير الذاتية.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">المعلومات التي نجمعها</h2>
            <div className="info-card">
              <h3 className="info-card-title">معلومات الحساب</h3>
              <ul className="info-list">
                <li>الاسم الكامل</li>
                <li>البريد الإلكتروني</li>
                <li>كلمة المرور (مشفرة)</li>
              </ul>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">معلومات السيرة الذاتية</h3>
              <ul className="info-list">
                <li>المعلومات الشخصية والمهنية</li>
                <li>الخبرات العملية</li>
                <li>المؤهلات التعليمية</li>
                <li>المهارات والشهادات</li>
              </ul>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">معلومات الاستخدام</h3>
              <ul className="info-list">
                <li>بيانات التصفح والاستخدام</li>
                <li>عنوان IP</li>
                <li>نوع المتصفح والجهاز</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">كيفية استخدام معلوماتك</h2>
            <p className="section-text">نستخدم معلوماتك للأغراض التالية:</p>
            <div className="purpose-grid">
              <div className="purpose-item">
                <span className="purpose-icon">✓</span>
                <p>إنشاء وإدارة حسابك</p>
              </div>
              <div className="purpose-item">
                <span className="purpose-icon">✓</span>
                <p>إنشاء وحفظ سيرتك الذاتية</p>
              </div>
              <div className="purpose-item">
                <span className="purpose-icon">✓</span>
                <p>تحسين خدماتنا وتطويرها</p>
              </div>
              <div className="purpose-item">
                <span className="purpose-icon">✓</span>
                <p>تقديم الدعم الفني</p>
              </div>
              <div className="purpose-item">
                <span className="purpose-icon">✓</span>
                <p>إرسال التحديثات المهمة</p>
              </div>
              <div className="purpose-item">
                <span className="purpose-icon">✓</span>
                <p>ضمان أمان الخدمة</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">حماية البيانات</h2>
            <p className="section-text">
              نتخذ إجراءات أمنية صارمة لحماية بياناتك، بما في ذلك:
            </p>
            <div className="security-features">
              <div className="security-item">
                <div className="security-badge">🔒</div>
                <h3>تشفير SSL/TLS</h3>
                <p>جميع البيانات المرسلة مشفرة</p>
              </div>
              <div className="security-item">
                <div className="security-badge">🛡️</div>
                <h3>تشفير كلمات المرور</h3>
                <p>كلمات المرور محمية بخوارزميات قوية</p>
              </div>
              <div className="security-item">
                <div className="security-badge">🔐</div>
                <h3>وصول محدود</h3>
                <p>الوصول للبيانات مقتصر على الموظفين المصرح لهم</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">مشاركة المعلومات</h2>
            <div className="highlight-box">
              <p className="highlight-text">
                <strong>نحن لا نبيع أو نشارك معلوماتك الشخصية مع أطراف ثالثة أبداً</strong> باستثناء الحالات التالية:
              </p>
              <ul className="info-list">
                <li>عند الحصول على موافقتك الصريحة</li>
                <li>للامتثال للمتطلبات القانونية</li>
                <li>لحماية حقوقنا وممتلكاتنا</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">حقوقك</h2>
            <p className="section-text">لديك الحقوق التالية فيما يتعلق ببياناتك:</p>
            <div className="rights-grid">
              <div className="right-item">
                <h3>الوصول</h3>
                <p>طلب نسخة من بياناتك الشخصية</p>
              </div>
              <div className="right-item">
                <h3>التصحيح</h3>
                <p>تحديث أو تصحيح معلوماتك</p>
              </div>
              <div className="right-item">
                <h3>الحذف</h3>
                <p>طلب حذف بياناتك</p>
              </div>
              <div className="right-item">
                <h3>الاعتراض</h3>
                <p>الاعتراض على معالجة بياناتك</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">ملفات تعريف الارتباط (Cookies)</h2>
            <p className="section-text">
              نستخدم ملفات تعريف الارتباط لتحسين تجربتك. يمكنك التحكم في استخدام ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">الاتصال بنا</h2>
            <p className="section-text">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا:
            </p>
            <div className="contact-box">
              <p><strong>البريد الإلكتروني:</strong> privacy@nobthah.com</p>
              <button 
                className="contact-button"
                onClick={() => navigate('/#contact')}
              >
                تواصل معنا
              </button>
            </div>
          </section>
        </div>
      </div>

      <footer className="legal-footer">
        <p>© 2025 نبذة. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}

