// ============================================
// پروژه: سیستم سفارش آنلاین رستوران
// الهه سلطانی
// مباحث ویژه 
// دانشگاه الزهرا مشهد
// شماره دانشجویی: 03221058705046
// ============================================

/**
 * @param {string} foodName 
 * @param {Function} callback 
 */
function prepareOrder(foodName, callback) {
    console.log("order \"" + foodName + "\" is loading...");
    
    setTimeout(() => {
        console.log("\"" + foodName + "\" done!");
        callback();
    }, 3000); 
}

// ============================================
// تابع اطلاع‌رسانی به مشتری (Callback)
// ============================================
function notifyCustomer() {
    console.log("order is ready!");
    console.log("thank you!");
    console.log("---");
}

// ============================================
// اجرای برنامه 
// ============================================
console.log("=== order loading ===\n");

// سفارش اول: پیتزا
prepareOrder("pizza", notifyCustomer);

// سفارش دوم: برگر (با callback مستقیم)
setTimeout(() => {
    console.log("\n=== next order ===\n");
    prepareOrder("burger", () => {
        console.log("burger is ready!");
        console.log("---");
    });
}, 1000);

// با تشکر از آموزه های استاد گرامی سرکار خانم زارع