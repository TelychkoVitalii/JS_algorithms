// 1. Entry Point
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/JS_algorithms/nice_skills/service_workers/service_workers.js',
        { scope: '/JS_algorithms/nice_skills/service_workers/' }
    ).then(function (reg) {
        // success registration
        console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function (error) {
        // failed registration
        console.log('Registration failed with ' + error);
    })
}
