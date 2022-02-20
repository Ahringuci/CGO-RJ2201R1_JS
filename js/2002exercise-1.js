//Cho trước 1 mảng các trainee như sau:
const traineeIterator = [
    {
        id: 1,
        firstName: "A",
        lastName: "Nguyen",
        className: "CGO-RJ2201R1",
        grade: "C",
    },
    {
        id: 2,
        firstName: "B",
        lastName: "Tran",
        className: "CGO-RJ2201R1",
        grade: "D",
    },
    {
        id: 3,
        firstName: "C",
        lastName: "Dinh",
        className: "CGO-RJ2201R1",
        grade: "A",
    },
    {
        id: 4,
        firstName: "D",
        lastName: "Le",
        className: "CGO-RJ2201R1",
        grade: "B",
    },
    {
        id: 5,
        firstName: "D",
        lastName: "Hoang",
        className: "CGO-RJ2201R1",
        grade: "F",
    },
    {
        id: 6,
        firstName: "E",
        lastName: "Pham",
        className: "CGO-RJ2201R1",
        grade: "E",
    },
];

//1. Sử dụng forEach(), hãy console.log() ra full name (firstName + lastName) của tất cả các phần từ trong mảng trên
// *YOUR CODE HERRE *
console.log("----------1-----------");
traineeIterator.forEach((val) => {
    console.log(`fullname: ${val.firstName} ${val.lastName}`);
});

//2. Sử dụng forEach(), hãy console.log() ra điểm số (grade) + full name (trong cùng 1 string, format: D Hoang / F)
//của tất cả các phần từ trong mảng trên
// *YOUR CODE HERRE *
console.log("----------2-----------");
traineeIterator.forEach((val) => {
    console.log(`fullname: ${val.firstName} ${val.lastName} / ${val.grade}`);
});

//3. Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi expectedTraineeArray,
//trong đó các props của từng phần tử được đổi như sau:
// - newId: className-id
// - fullName: firstName lastName
// - rank: grade
//ex: {
//  newId: 'CGO-RJ2201R1-5,
//  fullName: 'D Hoang',
//  rank: 'F'
//}
// *YOUR CODE HERRE *
console.log("----------3-----------");
const expectedTraineeArray = traineeIterator.map((val) => ({
    newId: `${val.className}-${val.id}`,
    fullName: `${val.firstName} ${val.lastName}`,
    rank: val.grade,
}));
console.log(expectedTraineeArray);

//4, Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi newTraineeArray,
//trong đó các props của từng phần tử được đổi như sau:
// - id: id
// - codeName: [className] - firstName lastName
// - classification: xét điều kiện:
// -> nếu đạt A grade trả về: 'Excellent'
// -> nếu đạt B grade trả về: 'Good'
// -> nếu đạt C grade trả về: 'Medium'
// -> nếu đạt D grade trả về: 'Weak'
// -> nếu đạt E grade trả về: 'Poor'
// -> nếu đạt F grade trả về: 'Disbanded'
// => tip: tạo ra 1 hàm, với đầu vào là grade, trả về giá trị tương ứng, không xét điều kiện trong forEach() body
// *YOUR CODE HERRE *
console.log("----------4-----------");
const newTraineeArray = traineeIterator.map((val) => ({
    id: val.id,
    codeName: `${val.className} - ${val.firstName} ${val.lastName}`,
    classification: `${
        val.grade === "A"
            ? "Excellent"
            : val.grade === "B"
            ? "Good"
            : val.grade === "C"
            ? "Medium"
            : val.grade === "D"
            ? "Weak"
            : val.grade === "E"
            ? "Poor"
            : "Disbanded"
    }`,
}));
console.log(newTraineeArray);

//5. Lọc ra các trainee với grade dưới B
// *YOUR CODE HERRE *
console.log("----------5-----------");
const newTrainerGradeLowerThanB = traineeIterator.filter(
    (val) => val.grade !== "B" && val.grade !== "A"
);
console.log(newTrainerGradeLowerThanB);

//6. Lọc ra các trainee với grade trên C, sau đố xét điều kiện sau:
// -> nếu số các trainee với grade trên C >= 50% sĩ số lớp, alert ra "Effective training!"
// -> nếu số các trainee với grade trên C < 30% sĩ số lớp, alert ra "Average training!"
// -> nếu số các trainee với grade trên C = 0, alert ra "Failed training!"
// *YOUR CODE HERRE *
console.log("---------6------------");
const newTrainerGradeMoreThanC = traineeIterator.filter(
    (val) => val.grade === "B" || val.grade === "A"
);
let _percent = newTrainerGradeMoreThanC.length / traineeIterator.length;

_percent >= 0.5
    ? console.log("Effective training!")
    : _percent === 0
    ? console.log("Failed training!")
    : console.log("Average training!");

//7. Tìm ra thành viên có grade A, alert ra tên đầy đủ của thành viên đó
// *YOUR CODE HERRE *
console.log("--------7-------------");
traineeIterator
    .filter((val) => val.grade === "A")
    .map((val) => console.log(val));

//8. Tìm ra thành viên có grade F, alert ra tên đầy đủ của thành viên đó
// *YOUR CODE HERRE *
console.log("---------8------------");
traineeIterator
    .filter((val) => val.grade === "F")
    .map((val) => console.log(val));

//9. Sử dụng reduce, hãy tạo ra 1 string cấu thành từ điểm số của các thành viên trong mảng đã cho
// *YOUR CODE HERRE *
console.log("---------9------------");
const stringGrade = traineeIterator.reduce(
    (acc, cur) => (acc += cur.grade),
    ""
);
console.log(stringGrade);

//10. (optional) Sử dụng reduce, hãy tạo ra 1 hàm tính được giai thừa của 1 số đầu vào. Ex: input 6 => 1*2*3*4*5*6 = 720
// *YOUR CODE HERRE *
console.log("----------10-----------");
const giaiThua = (ind) => {
    let _arr = [];
    for (let _i = 1; _i <= ind; _i++) {
        _arr.push(_i);
    }
    return _arr.reduce((acc, cur) => (acc *= cur), 1);
};

console.log(giaiThua(3));
//11. (optional) Hãy tạo ra 1 mảng mới, sử dụng 1 trong các cấu trúc lặp đã học, trong đó có các phần tử
// - grade thấp nhất
// - grade cao nhất
// - grade trung bình dạng số, biết các giá trị tương ứng của từng grade như sau: A=1, B=2, ... , F=5
// *YOUR CODE HERRE *
console.log("----------11-----------");
const newArr = (arr) => {
    if (arr.length == 0) return -1;
    let _arr = [],
        _a = arr[0].grade,
        _b = arr[0].grade,
        _c = 0;
    arr.map((val) => {
        val.grade < _a ? (_a = val.grade) : null;
        val.grade > _b ? (_b = val.grade) : null;
    });

    const parseInt = (ind) => {
        switch (ind) {
            case "A":
                return 1;
            case "B":
                return 2;
            case "C":
                return 3;
            case "D":
                return 4;
            case "E":
                return 5;
            case "F":
                return 6;
        }
    };
    _arr.push(_a, _b, (parseInt(_a) + parseInt(_b)) / 2);
    return _arr;
};
console.log(newArr(traineeIterator));
