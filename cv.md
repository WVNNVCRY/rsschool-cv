# Artem Varenov

![Morning...](https://i.pinimg.com/736x/94/ad/60/94ad60706eb2294acc0f6cbe42b320a0.jpg)

## Contacts: tg - [@wvnnvcry](https://t.me/wvnnvcry); discord - Artem Varenov (@WVNNVCRY);

#### About: As an aspiring frontend developer, I am driven by a passion for creating user-friendly, visually appealing, and efficient web solutions. My goal is to master modern frontend technologies and frameworks, continuously enhancing my skills to build seamless digital experiences. I prioritise staying updated with industry trends, embracing new challenges, and learning innovative approaches to problem-solving. With a strong commitment to personal growth, I am eager to deepen my knowledge in frontend development and contribute to impactful projects that blend creativity and technical expertise.

### Skills: HTML5, CSS3, JavaScript (ES6+);

### The hashtag generator (JavaScript): [task](https://www.codewars.com/kata/52449b062fb80683ec000024)

```
function generateHashtag (str) {
if (str === '' || str.replaceAll(' ', '') === '') {
return false
}

let arr = str
.split(' ')
.filter(item => item !== '')
.map(item => item[0].toUpperCase() + item.slice(1))
.reduce((acc, curr) => acc + curr, '');

if (arr.length >= 140) {
return false
}

return '#' + arr
};
```

### Experience: [CV](https://WVNNVCRY.github.io/rsschool-cv/cv);

### Education: MB of Bauman Moscow State Technical University;

### English level: A2;
