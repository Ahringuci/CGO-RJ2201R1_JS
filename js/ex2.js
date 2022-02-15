/*
let sum = 0; 
{
    let x = 5;
    let y = 10;
    sum = x + y;
}
*/

/**
 * biến x và y chưa khai báo vì log ngoài scope
 * sum = 15 vì sum là globalvar
 */

function random() {
    let x = Math.floor(Math.random() * 11);
    return x;
}

/**
 * biến x chưa được khai báo
 */


// 3. Tạo ra 1 hàm với 2 tham số đầu vào là x và y, trong đó:
// - giá trị mặc định của x là 5
// - giá trị mặc định của y là 10
// - trả về giá trị trung bình được làm tròn của x và y
// * YOUR CODE HERE *
console.log('');
const Av = (a = 5, b = 10) => {
    return Math.floor((a + b) * 0.5);
}
console.log(Av(1, 2));

// 4. Tạo ra 1 hàm với 2 tham số đầu vào là person1 và person2, đều là 1 object với 4 props:
// - name: string, giá trị mặc định là "anonymous"
// - age: number, giá trị mặc định là 23
// - averageRank: number, giá trị mặc định là 5.0
// xét các trường hợp:
// - so sánh averageRank của 2 tham số, averageRank lớn nhất VÀ averageRank lớn hoặc bằng 8, alert ra "*name, *age tuổi, điểm số trung bình: *averageRank sẽ là trainer!"
// - nếu không có ai có điểm số lớn hơn hoặc bằng 8, alert ra "Lớp tự học!"
// * YOUR CODE HERE *
console.log('')

const person1 = {
    name: 'anonymous',
    age: 23,
    averageRank: 5.0
};
const person2 = {
    name: 'anonymous 2',
    age: 20,
    averageRank: Math.random() * 10
};
const person = (p1, p2) => {
    const
        p1a = p1.averageRank,
        p2a = p2.averageRank;

    if (p1a < 8 && p2a < 8) return "Lớp tự học!";

    if (p1a > p2a) return `${p1.name} ${p1.age} tuổi, điểm số trung bình: ${p1a} sẽ là trainer!`;

    return `${p2.name} ${p2.age} tuổi, điểm số trung bình: ${p2a} sẽ là trainer!`;
}
console.log(person(person1, person2));
// 5. Cho trước 1 đối tượng như sau

const trainer = {
    name: 'Jason Nguyen',
    age: 33,
    mainSkills: ['React', 'Typescript'],
    isMarried: true
};

// Hãy sử dụng destructuring, access và console.log ra tất cả các props của đối tượng trên
// * YOUR CODE HERE *
console.log('');

const {
    name,
    age,
    mainSkills,
    isMarried
} = trainer;

console.log(name, age, mainSkills, isMarried);

// 6. alias các props tương ứng của đối tượng trên như sau:
// - name -> fullName
// - age -> yearsOld
// - mainSkills -> strongPoints
// - isMarried -> hasAWife
// console.log ra tất cả các alias đó và quan sát kết quả
// * YOUR CODE HERE *
console.log('');

const {
    name: fullName,
    age: yearsOld,
    mainSkills: strongPoints,
    isMarried: hasAWife
} = trainer;
console.log(fullName, yearsOld, strongPoints, hasAWife);

// 7. convert tất cả các hàm trong file bài tập này sang dạng arrow function
// * YOUR CODE HERE *
// em làm sẳn arrow rồi

//8. Clone ra 1 object mới từ object trainer trên, với tên gọi là clonedTrainer (sử dụng spread syntax)
// - thêm vào object vừa được clone trên các props: hasAnyCert dạng boolean, isOverloaded dạng boolean
// * YOUR CODE HERE *
console.log('');
const clonedTrainer = {
    ...trainer
};
console.log(clonedTrainer);

clonedTrainer.hasAnyCert = false;
clonedTrainer.isOverloaded = false;

console.log(`hasAnyCert typeof: ${typeof clonedTrainer.hasAnyCert}`);
console.log(`isOverloaded typeof: ${typeof clonedTrainer.isOverloaded}`);


// 9. Tạo ra 1 hàm với 2 tham số bất kỳ được xác định trước, sử dụng spread syntax đẻ dại diện cho tất cả các tham số còn lại.
// - Hàm có chức năng console.log ra 2 tham số được xác định trước đó
// - Hàm có chức năng lặp qua tất cả các tham số còn lại, sau đó console.log lần lượt tất cả các tham số đó
// * YOUR CODE HERE *
console.log('');
const f1 = (a, b, ...rest) => {
    console.log('dir:', a, b);

    rest.length != 0 && rest ? rest.map(val => console.log(val)) : null;
}

f1(10, 200, 1, 123, 234, 34, 241, 4, 51, 2, 32, 1);