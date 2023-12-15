alert("앗! 야생의 동선몬을 발견했다!");
const dsname = prompt("동선몬의 이름을 지어주세요!");
const nameH1 = document.querySelector(".dsname");
const cp = document.querySelector(".title");

const cpValue = Math.floor(Math.random() * (900 + 1));

nameH1.innerText = dsname;
cp.innerText = `CP ${cpValue}`;

function checkName(name) {
  //name의 마지막 음절의 유니코드(UTF-16)
  const charCode = name.charCodeAt(name.length - 1);

  //유니코드의 한글 범위 내에서 해당 코드의 받침 확인
  const consonantCode = (charCode - 44032) % 28;

  if (consonantCode === 0) {
    //0이면 받침 없음 -> 를
    return `${name}를`;
  }
  //1이상이면 받침 있음 -> 을
  return `${name}을`;
}

const newName = checkName(dsname);

document.title = `${newName} 발견했다!`;

const container = document.querySelector(".container");
const overlay = document.querySelector(".overlay");

container.addEventListener("mousemove", (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  console.log(`${(200 - y) * 0.5}`);
  const rotateY = -(1 / 5) * x + 20;
  const rotateX = (4 / 30) * y - 20;
  container.style = `transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg);`;

  overlay.style = `background-position: ${x / 5 + y / 5}%; opacity : ${
    200 - x * 0.5 - 100
  }%;`;
});
