System.register(['angular2/core', 'angular2/platform/browser', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, common_1;
    var DemoForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            DemoForm = (function () {
                function DemoForm(fb) {
                    this.myForm = fb.group({
                        'sku': ['ABC123']
                    });
                }
                DemoForm.prototype.onSubmit = function (value) {
                    console.log('You have Submitted Value', value);
                };
                DemoForm = __decorate([
                    core_1.Component({
                        selector: 'demo-form',
                        directives: [common_1.FORM_DIRECTIVES],
                        templateUrl: 'partials/demo-form.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DemoForm);
                return DemoForm;
            })();
            exports_1("DemoForm", DemoForm);
            browser_1.bootstrap(DemoForm);
        }
    }
});
//# sourceMappingURL=app.js.map