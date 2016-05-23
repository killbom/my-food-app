define(["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'my-food-app';
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: 'home', nav: true, title: 'Home' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUVBO1FBQUE7UUFXQSxDQUFDO1FBUkcsNkJBQWUsR0FBZixVQUFnQixNQUEyQixFQUFFLE1BQWM7WUFDdkQsTUFBTSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7WUFDN0IsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDUCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO2FBQ3BGLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLENBQUM7UUFDTCxVQUFDO0lBQUQsQ0FYQSxBQVdDLElBQUE7SUFYWSxXQUFHLE1BV2YsQ0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlciwgUm91dGVyQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICAgIHJvdXRlcjogUm91dGVyO1xyXG5cclxuICAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgY29uZmlnLnRpdGxlID0gJ215LWZvb2QtYXBwJztcclxuICAgICAgICBjb25maWcubWFwKFtcclxuICAgICAgICAgICAgeyByb3V0ZTogWycnLCAnaG9tZSddLCBuYW1lOiAnaG9tZScsIG1vZHVsZUlkOiAnaG9tZScsIG5hdjogdHJ1ZSwgdGl0bGU6ICdIb21lJyB9XHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
