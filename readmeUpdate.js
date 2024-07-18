import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `
<!-- <img src="https://capsule-render.vercel.app/api?type=rounded&height=300&color=0%:D26B94,100%:76B2D4&text=Hello!&fontColor=FFFFFF"> -->

<img src="https://capsule-render.vercel.app/api?type=waving&height=300&color=0%:D26B94,100%:76B2D4&text=Hello!&fontColor=FFFFFF">

<!--
## Hi there 👋
**iseuljang/iseuljang** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->



<hr>

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=iseuljang&layout=compact)](https://github.com/iseuljang/github-readme-stats)

<h3 align="left">✨ Tech Stack ✨</h3>
<div align="left">  
  <img src="https://img.shields.io/badge/html5-E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />&nbsp
  <img src="https://img.shields.io/badge/css3-1572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />&nbsp
  <img src="https://img.shields.io/badge/javascript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=20232a" />&nbsp
  <img src="https://img.shields.io/badge/jquery-0769AD.svg?style=for-the-badge&logo=jquery&logoColor=white" />&nbsp
  <img src="https://img.shields.io/badge/Ajax-3186C0.svg?style=for-the-badge&logo=Ajax&logoColor=white" />&nbsp
  <img src="https://img.shields.io/badge/apache tomcat-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=black"/>&nbsp  
</div>

<br>

<div align="left">
  <img src="https://img.shields.io/badge/Java-D90C0F?style=for-the-badge&logo=Java&logoColor=white"/>&nbsp
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"/>&nbsp 
  <img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" />&nbsp 
</div>

<br>
<div align="left">
  <img src="https://img.shields.io/badge/pandas-150458.svg?style=for-the-badge&logo=pandas&logoColor=white" />&nbsp
  <img src="https://img.shields.io/badge/numpy-4d77cf.svg?style=for-the-badge&logo=numpy&logoColor=white" />&nbsp
  <img src="https://img.shields.io/badge/Matplotlib-11557c.svg?style=for-the-badge&logo=Matplotlib&logoColor=white" />&nbsp  
</div>

<br>

<h3 align="left">📚 Studying 📚</h3>
<div align="left">
  <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" />&nbsp  
  <img src="https://img.shields.io/badge/kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" />&nbsp  
  <!-- <img src="https://img.shields.io/badge/typescript-007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />&nbsp -->
</div>

<br>

<h3 align="left">🛠 Tools 🛠</h3>
<div align="left">
  <img src="https://img.shields.io/badge/Eclipse IDE-2C2255.svg?style=for-the-badge&logo=EclipseIDE&logoColor=white" />&nbsp
  <img src="https://img.shields.io/badge/spyder IDE-FF0000.svg?style=for-the-badge&logo=spyderide&logoColor=white" />&nbsp
  <img src="https://img.shields.io/badge/anaconda-44A833.svg?style=for-the-badge&logo=anaconda&logoColor=white" />&nbsp
</div>

<br>

<div align="left">
  <img src="https://img.shields.io/badge/subversion-809CC9.svg?style=for-the-badge&logo=subversion&logoColor=white" />&nbsp
  <img src="https://img.shields.io/badge/git-F05033.svg?style=for-the-badge&logo=git&logoColor=white" />&nbsp
  <img src="https://img.shields.io/badge/github-181717.svg?style=for-the-badge&logo=github&logoColor=white" />&nbsp
  <img src="https://img.shields.io/badge/Notion-F3F3F3.svg?style=for-the-badge&logo=notion&logoColor=black" />&nbsp
</div>

<br>
<hr>


![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=iseuljang&theme=transparent&show_icons=true)
[![Solved.ac 프로필](http://mazassumnida.wtf/api/v2/generate_badge?boj=gyr0204)](https://solved.ac/gyr0204/)

## 📕 Latest Blog Posts
<p>
    <a href="https://sgktn0204.tistory.com/"><img src="https://img.shields.io/badge/Blog-FF5722?style=flat-square&logo=Blogger&logoColor=white"/></a><br>
</p>


<!-- BLOG-POST-LIST:START -->
- [[Java] 자바 기초](https://sgktn0204.tistory.com/entry/Java-%EC%9E%90%EB%B0%94-%EA%B8%B0%EC%B4%88)
- [백준 [Java] 8393번 합](https://sgktn0204.tistory.com/entry/%EB%B0%B1%EC%A4%80-Java-8393%EB%B2%88-%ED%95%A9)
- [백준 [Java] 10950번 A+B - 3](https://sgktn0204.tistory.com/entry/%EB%B0%B1%EC%A4%80-Java-10950%EB%B2%88-AB-3)
- [백준 [Java] 2739번 구구단](https://sgktn0204.tistory.com/entry/%EB%B0%B1%EC%A4%80-Java-2739%EB%B2%88-%EA%B5%AC%EA%B5%AC%EB%8B%A8)
- [[Spring Boot] 스프링부트 프로젝트 생성하는 방법 2가지](https://sgktn0204.tistory.com/entry/Spring-Boot-%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-2%EA%B0%80%EC%A7%80)
<!-- BLOG-POST-LIST:END -->


<hr>

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fiseuljang&count_bg=%236B8FD2&title_bg=%236B8FD2&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)


`;

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://sgktn0204.tistory.com/rss');

    // 최신 5개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 5; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<a href=${link}>${title}</a></br>`;
    }

    // README.md 파일 작성
    writeFileSync('README.md', text, 'utf8', (e) => {
        console.log(e)
    })

    console.log('업데이트 완료')
})();
