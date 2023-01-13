function getArea(number) {
  if (Number.isFinite(number) == false && number != null) {
    console.log("Повинно бути числове значення.");
  } else if (number == null) {
    console.log("Будь ласка, введіть радіус!");
  } else {
    console.log(
      `Площа круга = ${Math.PI * number * number} квадратних одиниць`
    );
  }
}
getArea(2);

function getSqrt(number) {
  if (Number.isFinite(number) == false && number != null) {
    console.log("Повинно бути числове значення.");
  } else if (number == null) {
    console.log("Будь ласка, введіть число!");
  } else if (number < 0) {
    console.log("Введіть додатнє число");
  } else {
    console.log(`Квадратний корінь з ${number} = ${Math.sqrt(number)} `);
  }
}
getSqrt(16);

let MyMath = {
  PI() {
    let PI = 3.141592653589793;
    console.log(PI);
  },
  pow(number, degree) {
    let result = 1;
    if (degree > 0) {
      for (let i = 1; i <= degree; i++) {
        result *= number;
      }
      console.log(`${result}`);
    } else if (degree < 0) {
      result = number ** degree;
      console.log(`${result}`);
    } else if (degree == 0) {
      result = number ** 0;
      console.log(`${result}`);
    } else if (
      (Number.isFinite(number) == false && number != null) ||
      (Number.isFinite(degree) == false && degree != null)
    ) {
      console.log("Повинно бути числове значення.");
    } else if (number == null || degree == null) {
      console.log("Будь ласка, введіть число!");
    }
  },
  abs(number) {
    if (number < 0) {
      let n = number * -1;
      console.log(n);
    } else if (number > 0) {
      console.log(number);
    } else if (number == 0) {
      console.log(number);
    } else if (isNaN(number) && number != null) {
      console.log("Повинно бути числове значення.");
    } else if (number == null) {
      console.log("Будь ласка, введіть число!");
    }
  },
  max() {
    let maxs = arguments[0];
    for (let rArg of arguments) {
      if (rArg > maxs) maxs = rArg;
    }
    if (maxs == null) {
      console.log("Будь ласка, введіть число!");
    } else if (Number.isFinite(maxs) == false && maxs != null) {
      console.log("Повинно бути числове значення.");
    } else if (isFinite(maxs) == true) {
      console.log(maxs);
    }
  },
  min() {
    let maxs = arguments[0];
    for (let rArg of arguments) {
      if (rArg < maxs) maxs = rArg;
    }
    if (maxs == null) {
      console.log("Будь ласка, введіть число!");
    } else if (Number.isFinite(maxs) == false && maxs != null) {
      console.log("Повинно бути числове значення.");
    } else if (isFinite(maxs) == true) {
      console.log(maxs);
    }
  },
};

MyMath.PI();
MyMath.abs(-13);
MyMath.pow(5, 3);
MyMath.max(5, 6, 76, 44, 2254, 5);
MyMath.min(5, 3, 53, 65, 4, 2, 5);
