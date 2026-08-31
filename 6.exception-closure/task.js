function parseCount(parse) {
    let curent = Number.parseFloat(parse);
    if(Number.isNaN(curent)) {
        throw new Error("Невалидное значение");
    } else {
        return curent;
    }
}

function validateCount(parse) {
    try {
        return parseCount(parse)
    } catch(error) {
        return error;
    }
}


class Triangle {
    constructor(a, b, c) {
        if (a <= 0 || b <= 0 || c <= 0) {
        throw new Error('Стороны треугольника должны быть положительными числами');
        }

        if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error('Треугольник с такими сторонами не существует');
        }

        this.a = a;
        this.b = b;
        this.c = c;
        let ab = this.a + this.b;
        let ac = this.a + this.c;
        let bc = this.b + this.c;
    }

    get perimeter() {
        try {
            return this.a + this.b + this.c;
        } catch {
            return 'Ошибка! Треугольник не существует';
        }
        
    }

    get area() {
        try {
            const p = this.perimeter / 2;
            return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
        } catch {
            return 'Ошибка! Треугольник не существует';
        }
        
    }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      },
      get area() {
        return 'Ошибка! Треугольник не существует';
      }
    };
  }
}