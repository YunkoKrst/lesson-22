

class GeometricShape {
    constructor(type, color, area = 0) {
      this.type = type;
      this.color = color;
      this.area = area;
      this._perimeter = 0;
    }
  
    get info() {
      return `Type: ${this.type}, Color: ${this.color}, Area: ${this.area}, Perimeter: ${this._perimeter}`;
    }
  
    get perimeter() {
      return this._perimeter;
    }
  
    set perimeter(value) {
      if (value > 0) {
        this._perimeter = value;
      } else {
        console.error('Perimeter must be a positive number.');
      }
    }
  }
  
  class Circle extends GeometricShape {
    constructor(color, radius) {
      super('Circle', color);
      this.radius = radius;
      this.calculateArea();
      this.calculatePerimeter();
    }
  
    calculateArea() {
      this.area = Math.PI * Math.pow(this.radius, 2);
    }
  
    calculatePerimeter() {
      this.perimeter = 2 * Math.PI * this.radius;
    }
  }
  
  class Rectangle extends GeometricShape {
    constructor(color, width, height) {
      super('Rectangle', color);
      this.width = width;
      this.height = height;
      this.calculateArea();
      this.calculatePerimeter();
    }
  
    calculateArea() {
      this.area = this.width * this.height;
    }
  
    calculatePerimeter() {
      this.perimeter = 2 * (this.width + this.height);
    }
  }
  
  // Створення екземплярів класів Circle та Rectangle
  const circle = new Circle('Red', 10);
  const rectangle = new Rectangle('Blue', 5, 8);
  
  // Виклик методів та демонстрація роботи сетерів і гетерів
  console.log(circle.info); // Вивід інформації про коло
  console.log(rectangle.info); // Вивід інформації про прямокутник
  
  circle.perimeter = 62; // Спроба змінити периметр
  console.log(circle.perimeter); // Вивід нового периметра (має бути успішно змінено)
  
  rectangle.perimeter = -10; // Спроба встановити невалідне значення периметра (повинно бути помилка)
  console.log(rectangle.perimeter); // Периметр не має змінитися
  
  // Використання методів для перерахунку площі та периметра після зміни властивостей
  circle.radius = 15;
  circle.calculateArea();
  circle.calculatePerimeter();
  console.log(circle.info);
  
  rectangle.width = 10;
  rectangle.height = 12;
  rectangle.calculateArea();
  rectangle.calculatePerimeter();
  console.log(rectangle.info);