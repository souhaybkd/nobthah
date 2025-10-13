import { useNavigate } from "react-router-dom";
import NavbarAr from "../../components/Navbar_ar/Navbar";
import "./terms.scss";

export default function Terms() {
  const navigate = useNavigate();

  return (
    <div className="terms-page terms-page-ar" dir="rtl">
      <NavbarAr />
      
      <div className="legal-container">
        <div className="legal-header">
          <h1 className="legal-title">شروط الخدمة</h1>
          <p className="legal-date">آخر تحديث: {new Date().toLocaleDateString('ar-SA')}</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2 className="section-title">مقدمة</h2>
            <p className="section-text">
              مرحباً بك في نبذة. باستخدامك لخدماتنا، فإنك توافق على الالتزام بشروط الخدمة هذه. يرجى قراءتها بعناية قبل استخدام منصتنا.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">قبول الشروط</h2>
            <div className="highlight-box">
              <p className="highlight-text">
                باستخدامك لخدمات نبذة، فإنك توافق على:
              </p>
              <ul className="info-list">
                <li>الالتزام بجميع الشروط والأحكام المذكورة في هذه الوثيقة</li>
                <li>استخدام الخدمة بطريقة قانونية ومشروعة</li>
                <li>عدم انتهاك حقوق الملكية الفكرية</li>
                <li>تقديم معلومات صحيحة ودقيقة</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">استخدام الخدمة</h2>
            <p className="section-text">نبذة هي منصة لإنشاء السير الذاتية الاحترافية. يمكنك استخدام خدماتنا للأغراض التالية:</p>
            <div className="purpose-grid">
              <div className="purpose-item">
                <span className="purpose-icon">✓</span>
                <p>إنشاء سيرة ذاتية احترافية</p>
              </div>
              <div className="purpose-item">
                <span className="purpose-icon">✓</span>
                <p>تحرير وتحديث سيرتك الذاتية</p>
              </div>
              <div className="purpose-item">
                <span className="purpose-icon">✓</span>
                <p>تحميل سيرتك بصيغة PDF</p>
              </div>
              <div className="purpose-item">
                <span className="purpose-icon">✓</span>
                <p>حفظ معلوماتك بشكل آمن</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">حساب المستخدم</h2>
            <div className="info-card">
              <h3 className="info-card-title">مسؤوليات المستخدم</h3>
              <ul className="info-list">
                <li>أنت مسؤول عن الحفاظ على سرية كلمة المرور الخاصة بك</li>
                <li>يجب إخطارنا فوراً بأي استخدام غير مصرح به لحسابك</li>
                <li>أنت مسؤول عن جميع الأنشطة التي تتم تحت حسابك</li>
                <li>يجب أن تكون فوق 18 عاماً أو لديك موافقة ولي الأمر</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">الأسعار والدفع</h2>
            <div className="pricing-box">
              <div className="price-tag">
                <span className="currency">ريال</span>
                <span className="amount">20</span>
              </div>
              <p className="section-text">
                رسوم استخدام الخدمة هي 20 ريال سعودي لمرة واحدة. بعد الدفع، ستحصل على:
              </p>
              <div className="benefits-grid">
                <div className="benefit-item">✓ وصول كامل لجميع القوالب</div>
                <div className="benefit-item">✓ تصدير بصيغة PDF عالية الجودة</div>
                <div className="benefit-item">✓ حفظ غير محدود</div>
                <div className="benefit-item">✓ دعم فني مدى الحياة</div>
              </div>
            </div>
            <p className="section-text">
              جميع المدفوعات نهائية وغير قابلة للاسترداد ما لم ينص القانون على خلاف ذلك.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">الملكية الفكرية</h2>
            <div className="info-card">
              <p className="section-text">
                جميع المحتويات والقوالب والتصاميم المتوفرة على نبذة محمية بحقوق الملكية الفكرية:
              </p>
              <ul className="info-list">
                <li>القوالب والتصاميم مملوكة لنبذة</li>
                <li>محتوى سيرتك الذاتية يبقى ملكاً لك</li>
                <li>يُمنع نسخ أو توزيع القوالب بدون إذن</li>
                <li>استخدام الخدمة لا يمنحك ملكية للقوالب</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">الاستخدامات المحظورة</h2>
            <div className="prohibited-grid">
              <div className="prohibited-item">
                <span className="prohibited-icon">✕</span>
                <p>استخدام الخدمة لأغراض غير قانونية</p>
              </div>
              <div className="prohibited-item">
                <span className="prohibited-icon">✕</span>
                <p>نشر معلومات كاذبة أو مضللة</p>
              </div>
              <div className="prohibited-item">
                <span className="prohibited-icon">✕</span>
                <p>محاولة اختراق أو تعطيل الخدمة</p>
              </div>
              <div className="prohibited-item">
                <span className="prohibited-icon">✕</span>
                <p>انتهاك حقوق الملكية الفكرية</p>
              </div>
              <div className="prohibited-item">
                <span className="prohibited-icon">✕</span>
                <p>استخدام روبوتات أو أدوات آلية</p>
              </div>
              <div className="prohibited-item">
                <span className="prohibited-icon">✕</span>
                <p>إساءة استخدام الدعم الفني</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">إخلاء المسؤولية</h2>
            <div className="warning-box">
              <h3>⚠️ تنويه مهم</h3>
              <p className="section-text">
                نبذة يوفر المنصة "كما هي" دون أي ضمانات صريحة أو ضمنية. نحن لسنا مسؤولين عن:
              </p>
              <ul className="info-list">
                <li>نتائج استخدامك للسير الذاتية المنشأة</li>
                <li>أي أخطاء أو انقطاعات في الخدمة</li>
                <li>فقدان البيانات بسبب ظروف خارجة عن إرادتنا</li>
                <li>قرارات التوظيف التي تتخذها الشركات</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">إنهاء الخدمة</h2>
            <p className="section-text">
              نحتفظ بالحق في تعليق أو إنهاء حسابك إذا:
            </p>
            <div className="termination-grid">
              <div className="termination-item">
                <h3>انتهكت الشروط</h3>
                <p>خرق أي من شروط الخدمة</p>
              </div>
              <div className="termination-item">
                <h3>استخدام احتيالي</h3>
                <p>محاولة الاحتيال أو خداع النظام</p>
              </div>
              <div className="termination-item">
                <h3>نشاط مشبوه</h3>
                <p>اكتشاف نشاط غير طبيعي</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2 className="section-title">التعديلات على الشروط</h2>
            <p className="section-text">
              نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال الموقع.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">القانون الساري</h2>
            <p className="section-text">
              تخضع هذه الشروط وتُفسر وفقاً لقوانين المملكة العربية السعودية.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="section-title">الاتصال بنا</h2>
            <p className="section-text">
              إذا كان لديك أي أسئلة حول شروط الخدمة، يرجى الاتصال بنا:
            </p>
            <div className="contact-box">
              <p><strong>البريد الإلكتروني:</strong> legal@nobthah.com</p>
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

