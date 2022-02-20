//Cho các đối tượng sau
const obj = {
    id: 1,
    name: "Trainer",
    age: 33,
    skills: ["Javascript", "React", "NextJS", "Typescript"],
};

const anotherObj = {
    id: 2,
    name: "Trainee",
    age: 22,
    isFinite: false,
    isBeingTrained: true,
};

//1. Hãy clone 2 đối tượng trên bằng tất cả các cách mà bạn biết
// *YOUR CODE HERRE *
console.log("----------1-----------");
const newObj = { ...obj };
const newAnotherObj = { ...anotherObj };
const newObj2 = Object.assign(obj);
const newAnotherObj2 = Object.assign(anotherObj);

//2. Đoán thử kết quả sau đây, không chạy thử
const copiedObj = obj;
copiedObj.skills = ["React", "Typescript"];
console.log(obj.skills);
// * YOUR ANSWER HERE *
// log ra ["React", "Typescript"] vì thay đổi props cho obj

//3. Hãy merge 2 đối tượng đã cho thành 1 đối tượng mới bằng tất cả các cách mà bạn biết
// *YOUR CODE HERRE *
console.log("----------3-----------");
const newMergeObj = { ...obj, ...anotherObj };
const newMergeObj2 = Object.assign(obj, anotherObj);

//4.  Sử dụng Map trong ES6, hãy tạo ra 1 biến có giá trị như sau:
/*
[
  ["whole numbers": [1 ,2 ,3 ,4]],
  ["Decimal numbers": [1.1, 1.2, 1.3, 1.4]],
  ["negative numbers": [-1, -2, -3, -4]]
]
*/
// *YOUR CODE HERRE *
console.log("----------4-----------");
const mapmap = new Map();
mapmap.set("whole numbers", [1, 2, 3, 4]);
mapmap.set("Decimal numbers", [1.1, 1.2, 1.3, 1.4]);
mapmap.set("negative numbers", [-1, -2, -3, -4]);

//5. Sử dụng Map trong ES6, hãy tạo ra 1 map từ 2 đối tượng đã cho trên
// *YOUR CODE HERRE *
console.log("----------5-----------");
const mapmap2 = new Map();
mapmap2.set(obj, obj);
mapmap2.set(anotherObj, anotherObj);
