// 1. Khai báo 1 biến bootcampClass là 1 object, với các props như sau:
// - name: tên lớp, giá trị là 1 string tuỳ chọn
// - monitor: là 1 object với các props: name (string), age (só nguyên dương), averageScore (số thập phân, giá trị nhỏ hơn 10) có giá trị tuỳ chọn
// - headTeacher: là 1 object với các props: name(string), age (số nguyên dương), grade (enum, là 1 trong các thang rate: A,B,C,D,E,F)
// - students: là 1 array với 20 bạn, props tương tự như monitor và chỉ khác giá trị
// * YOUR CODE HERE *
const bootcampClass = {
    name: 'Root',
    monitor: {
        name: 'John',
        age: 10,
        averageScore: 8.5
    },
    headTeacher: {
        name: 'David',
        age: 199,
        grade: 'A',
    },
    students: [{
            name: 'Stud 01',
            age: 10,
            averageScore: 9.99
        },
        {
            name: 'Stud 02',
            age: 11,
            averageScore: 0.99
        },
        {
            name: 'Stud 03',
            age: 12,
            averageScore: 1.99
        },
        {
            name: 'Stud 04',
            age: 13,
            averageScore: 8.99
        },
        {
            name: 'Stud 05',
            age: 14,
            averageScore: 6.99
        },
        {
            name: 'Stud 06',
            age: 15,
            averageScore: 2.99
        },
        {
            name: 'Stud 07',
            age: 16,
            averageScore: 8.99
        },
        {
            name: 'Stud 08',
            age: 17,
            averageScore: -5.99
        },
        {
            name: 'Stud 09',
            age: 18,
            averageScore: 'error'
        },
        {
            name: 'Stud 10',
            age: 19,
            averageScore: 14.99
        }
    ]
};

// 2. Tạo 1 hàm đọc ra tên của bạn lớp trưởng (monitor) với tham số đầu vào (argument) là object bootcampClass trên
// * YOUR CODE HERE *
console.log('');
const getMonitorInfo = ({
        monitor
    }) =>
    monitor.name;

console.log(`Monitor name: ${getMonitorInfo(bootcampClass)}`);

// 3. Tạo 1 hàm đọc ra tên của thầy giáo chủ nhiệm (headTeacher) với tham số đầu vào (argument) là object bootcampClass trên
// * YOUR CODE HERE *
console.log('');
const getheadTeacherInfo = ({
        headTeacher
    }) =>
    headTeacher.name;

console.log(`Head Teacher name: ${getheadTeacherInfo(bootcampClass)}`);

// 4. (optional) Tạo 1 hàm tính tổng số điểm trung bình của tất cả sinh viên trong lớp, với tham số đầu vào (argument) là object bootcampClass trên
// * YOUR CODE HERE *
console.log('');
const getStudentsAP = ({
    students
}) => {
    let _counter = 0,
        _total = 0;

    let _students = students.filter(p => !isNaN(p.averageScore) && p.averageScore >= 0 && p.averageScore <= 10);
    _students.map((val, ind) => {
        _total += val.averageScore;
        _counter++;
    });

    return _total / _counter;
}

console.log(`Students average: ${getStudentsAP(bootcampClass)}`);

// 5. Xét điêm trung bình của lớp trưởng (monitor), 
// - nếu điểm số trên 7.5 thì alert ra "Đạt yêu cầu!"
// - nếu điểm từ 7.5 - 8.5 thì alert ra "Quá là đạt yêu cầu luôn!"
// - nếu điểm từ 8.5-10 thì alert ra "Bạn ấy không thuộc về thế giới này" 
// - còn lại thì alert ra "Thay lớp trưởng thôi!"
// tip: sử dụng if/else if/else hoặc switch/case/default
// * YOUR CODE HERE *
console.log('');
const monitorAV = ({
    monitor
}) => {
    const MA = monitor.averageScore;

    if (isNaN(MA) || MA < 0 || MA > 10) {
        console.log("sai dinh dang");
        return false;
    }

    (MA >= 8.5 && MA <= 10) ?
    console.log("Bạn ấy không thuộc về thế giới này!"): (MA >= 7.5 && MA <= 8.5) ?
        console.log("Quá là đạt yêu cầu luôn!") :
        (MA > 7.5) ?
        console.log("Đạt yêu cầu!") :
        console.log("Thay lớp trưởng thôi!");
}

monitorAV(bootcampClass);

// 6. Sử dụng for hoặc while hoặc do-while, lặp qua tất cả sinh viên của lớp, console.log ra từng sinh viên
// * YOUR CODE HERE *
console.log('');
const forStudents = ({
    students
}) => {
    for (var i = 0 in students) {
        console.log(students[i]);
    }
}
forStudents(bootcampClass);

// 7. Sử dụng for hoặc while hoặc do-while, lặp qua tất cả sinh viên của lớp, tính ra tổng số điểm trung bình. Sau đó xét các case:
// - Nếu điểm số thấp hơn 100, alert ra "Trainer thất bại!"
// - Nếu điểm số trong khoảng 100 - 150, alert ra "Tạm đạt yêu cầu!"
// - Nếu điểm số trong khoảng 150 - 200, alert ra "Đạt yêu cầu!"
// tip: sử dụng if/else if/else hoặc switch/case/default
// * YOUR CODE HERE *
console.log('');
const getStudentsTP = ({
    students
}) => {
    let _total = 0;

    let _students = students.filter(p => !isNaN(p.averageScore) && p.averageScore >= 0 && p.averageScore <= 10);
    _students.map((val, ind) => {
        _total += val.averageScore;
    });
    _total = _total.toFixed(2);

    if (_total <= 100) {
        return `TP: ${_total}, Trainer thất bại!`;
    }

    if (_total <= 150 && _total > 100) {
        return `TP: ${_total}, Tạm đạt yêu cầu!`;
    }

    return `TP: ${_total}, Đạt yêu cầu!`;
}

console.log(`Students average: ${getStudentsTP(bootcampClass)}`);

// 8. (nâng cao, optional) Biến hàm ở bài số 2 và 3 thành method của object bootcampClass, thay thế đầu vào bằng từ khoá this
// * YOUR CODE HERE *
console.log('');
bootcampClass.getMonitorInfo2 = function () {
    return this.monitor.name;
}
console.log(`Monitor name: ${bootcampClass.getMonitorInfo2()}`);

bootcampClass.getheadTeacherInfo2 = function () {
    return this.headTeacher.name;
}
console.log(`Head Teacher name: ${bootcampClass.getheadTeacherInfo2()}`);




















console.log("---------------------- End -------------------------");