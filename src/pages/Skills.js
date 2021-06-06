import React from 'react'
import htmlcss from '../img/html+css.svg'
// import aws from '../img/aws2.svg'
import ReactTooltip from 'react-tooltip'


const Skills = () => {
  return (
    <div className="container skillset" style={{maxWidth: "900px"}}>

      <h6 className="text-center mb-5">SKILLS</h6>

      <div className="row">

        <div className="col-md-6">
          <div className="skills-group">
            <h6 className="text-center">Front End</h6>
            <div className="skills mt-3 text-center">
              <div className="skill">
                <button data-tip='HTML + CSS' data-for="htmlcss" style={{background: `url(${htmlcss}) no-repeat center center / contain`}}>
                </button>
                <ReactTooltip place="top" id="htmlcss" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              <div className="skill">
                <button data-tip='Bootstrap 5' data-for="bootstrap5" style={{background: "url('https://miro.medium.com/max/400/1*onZhQJU7A3ab6V1sHfMRkQ.jpeg') no-repeat center center / contain", borderRadius: "10px", width: "32px"}}>
                </button>
                <ReactTooltip place="top" id="bootstrap5" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              <div className="skill">
                <button data-tip='Tailwind CSS' data-for="tailwindcss" style={{background: "url('https://api.iconify.design/logos:tailwindcss-icon.svg') no-repeat center center / contain"}}>
                </button>
                <ReactTooltip place="top" id="tailwindcss" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              {/*<div className="skill">
                <button data-tip='Material UI' data-for="materialui" style={{background: "url('https://api.iconify.design/logos:material-ui.svg') no-repeat center center / contain", width: "34px"}}>
                </button>
                <ReactTooltip place="top" id="materialui" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>*/}
              <div className="skill">
                <button data-tip='JavaScript' data-for="javascript" style={{background: "url('https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png') no-repeat center center / contain", width: "32px"}}>
                </button>
                <ReactTooltip place="top" id="javascript" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              <div className="skill">
                <button data-tip='jQuery' data-for="jquery" style={{background: "url('https://creativo-websolutions.com/my_files/2020/04/iconfinder_jquery_3069646.png') no-repeat center center / contain", width: "34px"}}>
                </button>
                <ReactTooltip place="top" id="jquery" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              <div className="skill">
                <button data-tip='React JS' data-for="react" style={{background: "url('https://api.iconify.design/logos:react.svg') no-repeat center center / contain", width: "34px"}}>
                </button>
                <ReactTooltip place="top" id="react" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              <div className="skill">
                <button data-tip='Redux' data-for="redux" style={{background: "url('https://api.iconify.design/logos:redux.svg') no-repeat center center / contain", width: "34px"}}>
                </button>
                <ReactTooltip place="top" id="redux" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              {/*<div className="skill">
                <button data-tip='Angular JS' data-for="angular" style={{background: "url('https://api.iconify.design/logos:angular-icon.svg') no-repeat center center / contain", width: "34px"}}>
                </button>
                <ReactTooltip place="top" id="angular" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              <div className="skill">
                <button data-tip='Vue JS' data-for="vue" style={{background: "url('https://api.iconify.design/logos:vue.svg') no-repeat center center / contain", width: "34px"}}>
                </button>
                <ReactTooltip place="top" id="vue" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              <div className="skill">
                <button data-tip='TypeScript' data-for="ts" style={{background: "url('https://api.iconify.design/logos:typescript-icon.svg') no-repeat center center / contain", width: "32px"}}>
                </button>
                <ReactTooltip place="top" id="ts" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>*/}
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-3 mt-md-0">
          <div className="skills-group">
            <h6 className="text-center">Back End</h6>
            <div className="skills mt-3 text-center">
              <div className="skill">
                <button data-tip='Node JS' data-for="nodeexpress" style={{background: "url('https://api.iconify.design/logos:nodejs-icon.svg') no-repeat center center / contain", width: "34px"}}>
                </button>
                <ReactTooltip place="top" id="nodeexpress" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              <div className="skill">
                <button data-tip='Express JS' data-for="postgresql" style={{background: "url('https://api.iconify.design/simple-icons:express.svg?color=%23eee') no-repeat center center / contain", width: "34px"}}>
                </button>
                <ReactTooltip place="top" id="postgresql" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              <div className="skill">
                <button data-tip='Django' data-for="django" style={{background: `url('https://api.iconify.design/vscode-icons:file-type-django.svg') no-repeat center center / contain`, width: "38px"}}>
                </button>
                <ReactTooltip place="top" id="django" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              {/*<div className="skill">
                <button data-tip='Flask' data-for="flask" style={{background: `url('https://api.iconify.design/cib:flask.svg?color=%23eee') no-repeat center center / contain`, width: "34px"}}>
                </button>
                <ReactTooltip place="top" id="flask" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              <div className="skill">
                <button data-tip='Java Spring Boot' data-for="spring-boot" style={{background: `url('https://api.iconify.design/logos:java.svg') no-repeat center center / contain`, width: "36px"}}>
                </button>
                <ReactTooltip place="top" id="spring-boot" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>*/}
              <div className="skill">
                <button data-tip='Laravel' data-for="laravel" style={{background: `url('https://api.iconify.design/logos:laravel.svg') no-repeat center center / contain`, width: "32px"}}>
                </button>
                <ReactTooltip place="top" id="laravel" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              {/*<div className="skill">
                <button data-tip='CodeIgniter' data-for="symfony" style={{background: `url('https://api.iconify.design/cib:codeigniter.svg?color=%23dd4814') no-repeat center center / contain`, width: "34px"}}>
                </button>
                <ReactTooltip place="top" id="symfony" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>*/}
              <div className="skill">
                <button data-tip='MySQL' data-for="mysql" style={{background: "url('https://api.iconify.design/cib:mysql.svg?color=%23fff') no-repeat center center / contain", width: "38px"}}>
                </button>
                <ReactTooltip place="top" id="mysql" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              <div className="skill">
                <button data-tip='MongoDB' data-for="mongodb" style={{background: "url('https://api.iconify.design/vscode-icons:file-type-mongo.svg') no-repeat center center / contain"}}>
                </button>
                <ReactTooltip place="top" id="mongodb" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              <div className="skill">
                <button data-tip='PostgreSQL' data-for="postgresql" style={{background: "url('https://api.iconify.design/logos:postgresql.svg') no-repeat center center / contain", width: "34px"}}>
                </button>
                <ReactTooltip place="top" id="postgresql" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              {/*<div className="skill">
                <button data-tip='AWS' data-for="aws" style={{background: `url('${aws}') no-repeat center center / contain`, width: "42px"}}>
                </button>
                <ReactTooltip place="top" id="aws" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>*/}
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-3 mt-md-5">
          <div className="skills-group">
            <h6 className="text-center">Others & Tools</h6>
            <div className="skills mt-3 text-center">
              <div className="skill">
                <button data-tip='WordPress' data-for="wordpress" style={{background: "url('https://vethics.com/assets/images/wordpress-tile.svg') no-repeat center center / contain", width: "36px"}}>
                </button>
                <ReactTooltip place="top" id="wordpress" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              <div className="skill">
                <button data-tip='Sass' data-for="sass" style={{background: "url('https://api.iconify.design/logos:sass.svg') no-repeat center center / contain"}}>
                </button>
                <ReactTooltip place="top" id="sass" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              <div className="skill">
                <button data-tip='Figma' data-for="figma" style={{background: "url('https://api.iconify.design/grommet-icons:figma.svg') no-repeat center center / contain", width: "31px"}}>
                </button>
                <ReactTooltip place="top" id="figma" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              <div className="skill">
                <button data-tip='Git + GitHub' data-for="gitgithub" style={{background: "url('https://api.iconify.design/logos:git-icon.svg') no-repeat center center / contain", width: "34px"}}>
                </button>
                <ReactTooltip place="top" id="gitgithub" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              <div className="skill">
                <button data-tip='NPM' data-for="npm" style={{background: "url('https://api.iconify.design/logos:npm-icon.svg') no-repeat center center / contain", width: "32px"}}>
                </button>
                <ReactTooltip place="top" id="npm" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
              <div className="skill">
                <button data-tip='VS Code' data-for="vscode" style={{background: "url('https://api.iconify.design/vscode-icons:file-type-vscode.svg') no-repeat center center / contain", width: "34px"}}>
                </button>
                <ReactTooltip place="top" id="vscode" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-3 mt-md-5">
          <div className="skills-group">
            <h6 className="text-center">Interested in</h6>
            <div className="skills mt-3 text-center">

              <div className="skill">
                <button data-tip='Data Science' data-for="datascience" style={{width: "38px", background: "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0zMi45OTgsODMuNzgyQzM5LjgwNSw0Mi4yNDgsMTM3LjAyNCw5LjMwOSwyNTYsOS4zMDl2NDkzLjM4Mg0KCQljLTExOC45NzUsMC0yMTYuMTk0LTMyLjk0MS0yMjMuMDAyLTc0LjQ3M2gtMC40MTZWODMuNzgySDMyLjk5OHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojN0ZBQ0ZBOyIgZD0iTTQ3OS4wMDIsODMuNzgyQzQ3Mi4xOTUsNDIuMjQ4LDM3NC45NzYsOS4zMDksMjU2LDkuMzA5djQ5My4zODINCgkJYzExOC45NzUsMCwyMTYuMTk0LTMyLjk0MSwyMjMuMDAyLTc0LjQ3M2gwLjQxNlY4My43ODJINDc5LjAwMnoiLz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0E0QzJGNzsiIGQ9Ik00NTEuMDc1LDgzLjc4Mkw0NTEuMDc1LDgzLjc4MmMtNi44MDctNDEuNTM0LTQ4LjE3Mi03NC40NzMtMTY3LjE0OC03NC40NzMNCgkJCVM2Ny43MzIsNDIuMjQ4LDYwLjkyNSw4My43ODJoLTAuNDE2djM0NC40MzZoMC40MTZjNi44MDgsNDEuNTMyLDEwNC4wMjcsNzQuNDczLDIyMy4wMDIsNzQuNDczczE2MC4zNC0zMi45NDEsMTY3LjE0OC03NC40NzMNCgkJCWgwLjQxNlY4My43ODJINDUxLjA3NXoiLz4NCgkJPGVsbGlwc2Ugc3R5bGU9ImZpbGw6I0E0QzJGNzsiIGN4PSIyNzkuMjczIiBjeT0iOTMuMDkxIiByeD0iMjA5LjQ1NSIgcnk9IjgzLjc4MiIvPg0KCTwvZz4NCgk8ZWxsaXBzZSBzdHlsZT0iZmlsbDojRkZGRkZGOyIgY3g9IjI0Mi4wMzYiIGN5PSI5My4wOTEiIHJ4PSIyMDkuNDU1IiByeT0iODMuNzgyIi8+DQoJDQoJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTQ4LjY0NjciIHkxPSI2NTIuMzA1MiIgeDI9Ii00OC4xMDI2IiB5Mj0iNjUxLjAzNTYiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMzkwLjk4MTggMCAwIC0xNjcuNTYzNiAxOTE2OS42MjExIDEwOTI4OS4zNTk0KSI+DQoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNENEUxRjQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC4xNzE3IiBzdHlsZT0ic3RvcC1jb2xvcjojRDRFMUY0Ii8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuMiIgc3R5bGU9InN0b3AtY29sb3I6I0Q0RTFGNCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjIwMDEiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQUU0RjQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC4yMDA3IiBzdHlsZT0ic3RvcC1jb2xvcjojRUJFQkY0Ii8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuMjAxNCIgc3R5bGU9InN0b3AtY29sb3I6I0Y2RjFGNCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjIwMjMiIHN0eWxlPSJzdG9wLWNvbG9yOiNGREY0RjQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC4yMDUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkY1RjQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC4yNTIyIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGNUY0Ii8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuMjYiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkY1RjQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC4yNiIgc3R5bGU9InN0b3AtY29sb3I6I0Q0RTFGNCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjM5NzQiIHN0eWxlPSJzdG9wLWNvbG9yOiNENEUxRjQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC40MiIgc3R5bGU9InN0b3AtY29sb3I6I0Q0RTFGNCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjQyMDEiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQUU0RjQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC40MjA3IiBzdHlsZT0ic3RvcC1jb2xvcjojRUJFQkY0Ii8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuNDIxNCIgc3R5bGU9InN0b3AtY29sb3I6I0Y2RjFGNCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjQyMjMiIHN0eWxlPSJzdG9wLWNvbG9yOiNGREY0RjQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC40MjUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkY1RjQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC40ODk0IiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGNUY0Ii8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuNSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRjVGNCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOUYyRjQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC41MDAxIiBzdHlsZT0ic3RvcC1jb2xvcjojRThFQkY0Ii8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuNTAwMyIgc3R5bGU9InN0b3AtY29sb3I6I0RERTVGNCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjUwMDUiIHN0eWxlPSJzdG9wLWNvbG9yOiNENkUyRjQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC41MDEiIHN0eWxlPSJzdG9wLWNvbG9yOiNENEUxRjQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC43MDYyIiBzdHlsZT0ic3RvcC1jb2xvcjojRDRFMUY0Ii8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuNzQiIHN0eWxlPSJzdG9wLWNvbG9yOiNENEUxRjQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC43NDEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkY1RjQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC44MzQ2IiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGNUY0Ii8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuODUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkY1RjQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC44NTEiIHN0eWxlPSJzdG9wLWNvbG9yOiNENEUxRjQiLz4NCgk8L2xpbmVhckdyYWRpZW50Pg0KCTxlbGxpcHNlIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMV8pOyIgY3g9IjI1NiIgY3k9IjkzLjA5MSIgcng9IjE5NS40OTEiIHJ5PSI4My43ODIiLz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzQyOERGRjsiIGQ9Ik0yNTYsNTEyYy0xMjIuMjgyLDAtMjIwLjY0NS0zNC4wMTgtMjMxLjYzNi03OS41ODJjLTAuNzExLTEuMjg2LTEuMDg3LTIuNzMxLTEuMDkxLTQuMlY4My43ODINCgkJCWMtMC4wMDQtMS41NzgsMC4zOTYtMy4xMywxLjE2NC00LjUwOUMzNS43ODIsMzMuODczLDEzMy45ODIsMCwyNTYsMHMyMjAuMjE4LDMzLjg3MywyMzEuNTY0LDc5LjI3Mw0KCQkJYzAuNzY3LDEuMzc5LDEuMTY4LDIuOTMxLDEuMTY0LDQuNTA5djM0NC40MzZjMC4wMDQsMS41NzgtMC4zOTYsMy4xMy0xLjE2NCw0LjUwOUM0NzYuMjA5LDQ3OC4xMjcsMzc4LjAwOSw1MTIsMjU2LDUxMnoNCgkJCSBNNDEuODkxLDQyNS40OTFjMC4xMjksMC4zOTgsMC4yMjksMC44MDYsMC4zLDEuMjE4YzUuMjczLDMyLjIsOTIuNDU1LDY2LjY3MywyMTMuODA5LDY2LjY3M3MyMDguNTM2LTM0LjQ3MywyMTMuODA5LTY2LjY3Mw0KCQkJYzAuMDcyLTAuNDI0LDAuMTcyLTAuODQ0LDAuMy0xLjI1NVY4Ni41MDljLTAuMTI5LTAuNDAyLTAuMjI5LTAuODEyLTAuMy0xLjIyN0M0NjQuNTQ1LDUzLjA5MSwzNzcuMzczLDE4LjYxOCwyNTYsMTguNjE4DQoJCQlTNDcuNDU1LDUzLjA5MSw0Mi4xOTEsODUuMjgyYy0wLjA3MSwwLjQyOC0wLjE3MSwwLjg1LTAuMywxLjI2NFY0MjUuNDkxeiIvPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojNDI4REZGOyIgZD0iTTI1Niw0MTguOTA5Yy0xMjIuMjgyLDAtMjIwLjY0NS0zNC4wMTgtMjMxLjYzNi03OS41ODJjLTAuNzExLTEuMjg2LTEuMDg3LTIuNzMtMS4wOTEtNC4yVjIxNC4xMDkNCgkJCWMwLTUuMTQxLDQuMTY4LTkuMzA5LDkuMzA5LTkuMzA5czkuMzA5LDQuMTY4LDkuMzA5LDkuMzA5YzAsMzUuMTU1LDkxLjU2NCw3NC40NzMsMjE0LjEwOSw3NC40NzNzMjE0LjEwOS0zOS4zMTgsMjE0LjEwOS03NC40NzMNCgkJCWMwLTUuMTQxLDQuMTY4LTkuMzA5LDkuMzA5LTkuMzA5YzUuMTQxLDAsOS4zMDksNC4xNjgsOS4zMDksOS4zMDl2MTIxLjAxOGMwLjAwNCwxLjU3OC0wLjM5NiwzLjEzLTEuMTY0LDQuNTA5DQoJCQlDNDc2LjIwOSwzODUuMDM2LDM3OC4wMDksNDE4LjkwOSwyNTYsNDE4LjkwOXogTTQxLjg5MSwzMzIuNGMwLjEyOSwwLjM5OCwwLjIyOSwwLjgwNiwwLjMsMS4yMTgNCgkJCWM1LjI3MywzMi4yLDkyLjQ1NSw2Ni42NzMsMjEzLjgwOSw2Ni42NzNzMjA4LjUzNi0zNC40NzMsMjEzLjgwOS02Ni42NzNjMC4wNzItMC40MjQsMC4xNzItMC44NDQsMC4zLTEuMjU1di04MS43NzINCgkJCUM0MzQuNTY0LDI4My44MzYsMzUxLjk3MywzMDcuMiwyNTYsMzA3LjJTNzcuNDM2LDI4My44MzYsNDEuODkxLDI1MC41OTFWMzMyLjR6Ii8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiM0MjhERkY7IiBkPSJNMjU2LDMwNy4yYy0xMjIuMjgyLDAtMjIwLjY0NS0zNC4wMTgtMjMxLjYzNi03OS41ODJjLTAuNzExLTEuMjg2LTEuMDg3LTIuNzMtMS4wOTEtNC4yVjEwMi40DQoJCQljMC01LjE0MSw0LjE2OC05LjMwOSw5LjMwOS05LjMwOXM5LjMwOSw0LjE2OCw5LjMwOSw5LjMwOWMwLDM1LjE1NSw5MS41NjQsNzQuNDczLDIxNC4xMDksNzQuNDczczIxNC4xMDktMzkuMzE4LDIxNC4xMDktNzQuNDczDQoJCQljMC01LjE0MSw0LjE2OC05LjMwOSw5LjMwOS05LjMwOWM1LjE0MSwwLDkuMzA5LDQuMTY4LDkuMzA5LDkuMzA5djEyMS4wMThjMC4wMDQsMS41NzgtMC4zOTYsMy4xMy0xLjE2NCw0LjUwOQ0KCQkJQzQ3Ni4yMDksMjczLjMyNywzNzguMDA5LDMwNy4yLDI1NiwzMDcuMnogTTQxLjg5MSwyMjAuNjkxYzAuMTI5LDAuMzk4LDAuMjI5LDAuODA2LDAuMywxLjIxOA0KCQkJYzUuMjczLDMyLjIsOTIuNDU1LDY2LjY3MywyMTMuODA5LDY2LjY3M3MyMDguNTM2LTM0LjQ3MywyMTMuODA5LTY2LjY3M2MwLjA3Mi0wLjQyNCwwLjE3Mi0wLjg0NCwwLjMtMS4yNTV2LTgxLjc3Mg0KCQkJQzQzNC41NjQsMTcyLjEyNywzNTEuOTczLDE5NS40OTEsMjU2LDE5NS40OTFTNzcuNDM2LDE3Mi4xMjcsNDEuODkxLDEzOC44ODJWMjIwLjY5MXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==') no-repeat center center / contain"}}>
                </button>
                <ReactTooltip place="top" id="datascience" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>

              <div className="skill">
                <button data-tip='Artificial Intelligence' data-for="ai" style={{background: "url('data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMV8xXyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzY4NjA3YyI+PHBhdGggZD0ibTEzLjU1IDEzaDE0Ljl2MmgtMTQuOXoiIHRyYW5zZm9ybT0ibWF0cml4KC45NCAtLjM0MiAuMzQyIC45NCAtMy41MjQgOC4wMzUpIi8+PHBhdGggZD0ibTQyIDkuNjg2aDJ2MjIuNjI3aC0yeiIgdHJhbnNmb3JtPSJtYXRyaXgoLjcwNyAtLjcwNyAuNzA3IC43MDcgLTIuMjU1IDM2LjU1NikiLz48cGF0aCBkPSJtNDIgMjQuNDQ0aDEuOTk5djEyLjExM2gtMS45OTl6IiB0cmFuc2Zvcm09Im1hdHJpeCguMTM2IC0uOTkxIC45OTEgLjEzNiA2LjkyNiA2OC45NDMpIi8+PHBhdGggZD0ibTIwIDE0LjU1NmgydjE3Ljg4OWgtMnoiIHRyYW5zZm9ybT0ibWF0cml4KC40NDcgLS44OTQgLjg5NCAuNDQ3IC05LjQxIDMxLjc3NSkiLz48cGF0aCBkPSJtMTkuODI1IDQxLjQwNmgyLjAwMXYxNi4wMThoLTIuMDAxeiIgdHJhbnNmb3JtPSJtYXRyaXgoLjQ0OCAtLjg5NCAuODk0IC40NDggLTMyLjY4NSA0NS45MTkpIi8+PHBhdGggZD0ibTMxIDMzaDJ2MTdoLTJ6Ii8+PHBhdGggZD0ibTUuNTEzIDI2aDMwLjk3NHYyaC0zMC45NzR6IiB0cmFuc2Zvcm09Im1hdHJpeCguNTQ0IC0uODM5IC44MzkgLjU0NCAtMTMuMDggMjkuOTMpIi8+PHBhdGggZD0ibTMxLjgyNCA0Mi4yNWgyMi44MzJ2MmgtMjIuODMyeiIgdHJhbnNmb3JtPSJtYXRyaXgoLjY5MSAtLjcyMyAuNzIzIC42OTEgLTE3LjkwMyA0NC41OTQpIi8+PHBhdGggZD0ibTE5Ljc4NSAyMC4wMDZoMnYzMi4yNTdoLTJ6IiB0cmFuc2Zvcm09Im1hdHJpeCguODYgLS41MTEgLjUxMSAuODYgLTE1LjU0MiAxNS42ODgpIi8+PC9nPjxwYXRoIGQ9Im0xNyA0NGMwIDEuMTMtLjI2IDIuMTktLjc0IDMuMTMtMS4xNCAyLjMtMy41MiAzLjg3LTYuMjYgMy44Ny0zLjg3IDAtNy0zLjEzLTctN3MzLjEzLTcgNy03YzEuNDEgMCAyLjcxLjQxIDMuOCAxLjEyIDEuOTMgMS4yNSAzLjIgMy40MSAzLjIgNS44OHoiIGZpbGw9IiM0ZTliYjkiLz48cGF0aCBkPSJtMzcuMzEgNDkuNDVjMS4wNiAxLjIyIDEuNjkgMi44MSAxLjY5IDQuNTUgMCAzLjg3LTMuMTMgNy03IDdzLTctMy4xMy03LTdjMC0uODEuMTQtMS41OC4zOS0yLjMuNDgtMS40MSAxLjQtMi42IDIuNi0zLjQ0IDEuMTMtLjggMi41MS0xLjI2IDQuMDEtMS4yNiAyLjEzIDAgNC4wNC45NSA1LjMxIDIuNDV6IiBmaWxsPSIjOTFjYmQ3Ii8+PHBhdGggZD0ibTU0IDI1YzMuODcgMCA3IDMuMTMgNyA3cy0zLjEzIDctNyA3Yy0xLjg4IDAtMy41OC0uNzMtNC44My0xLjk1LTEuMzQtMS4yNi0yLjE3LTMuMDYtMi4xNy01LjA1IDAtLjMyLjAyLS42My4wNy0uOTQuMi0xLjU2LjkyLTIuOTUgMS45OC00LjAxIDEuMjctMS4yNyAzLjAxLTIuMDUgNC45NS0yLjA1eiIgZmlsbD0iI2ZmZDA4NiIvPjxwYXRoIGQ9Im0zOC45MyAyOS45NGMtLjQ1IDMuNDItMy4zOCA2LjA2LTYuOTMgNi4wNi0zLjg3IDAtNy0zLjEzLTctNyAwLTEuMTMuMjYtMi4xOS43NC0zLjEzIDEuMTQtMi4zIDMuNTItMy44NyA2LjI2LTMuODcgMy44NyAwIDcgMy4xMyA3IDcgMCAuMzItLjAyLjYzLS4wNy45NHoiIGZpbGw9IiNlZDY1NzEiLz48cGF0aCBkPSJtMzIgM2MzLjg3IDAgNyAzLjEzIDcgNyAwIDEuOTQtLjc4IDMuNjgtMi4wNSA0Ljk1cy0zLjAxIDIuMDUtNC45NSAyLjA1Yy0xLjQxIDAtMi43MS0uNDEtMy44LTEuMTItMS4yNy0uODItMi4yNi0yLjA0LTIuNzgtMy40OS0uMjctLjc0LS40Mi0xLjU1LS40Mi0yLjM5IDAtMy44NyAzLjEzLTcgNy03eiIgZmlsbD0iI2Y2OTQ4OSIvPjxwYXRoIGQ9Im0xNi41OCAxNS42MWMuMjcuNzQuNDIgMS41NS40MiAyLjM5IDAgMS4xMy0uMjYgMi4xOS0uNzQgMy4xMy0uNiAxLjItMS41MyAyLjItMi42OCAyLjg4LTEuMDQuNjMtMi4yNy45OS0zLjU4Ljk5LTMuODcgMC03LTMuMTMtNy03czMuMTMtNyA3LTdjMy4wMyAwIDUuNiAxLjkyIDYuNTggNC42MXoiIGZpbGw9IiM5MWNiZDciLz48L3N2Zz4=') no-repeat center center / contain"}}>
                </button>
                <ReactTooltip place="top" id="ai" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>

              <div className="skill">
                <button data-tip='Machine Learning' data-for="machinelearning" style={{width: "38px", background: "url('data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEwIDUxMCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTAgNTEwIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Im0xMzUgMzE1aC00NWMtMzMuMDg0IDAtNjAtMjYuOTE2LTYwLTYwdi0zMi41NzRsMTUtMTIuNDI2IDE1IDEyLjQyN3YzMi41NzNjMCAxNi41NDIgMTMuNDU4IDMwIDMwIDMwaDQ1bDE1IDE3eiIgZmlsbD0iIzU1Njk2ZSIvPjxwYXRoIGQ9Im00NSAyMjVjLTI0LjgxMyAwLTQ1LTIwLjE4Ny00NS00NXYtMTVoMzB2MTVjMCA4LjI3MSA2LjcyOSAxNSAxNSAxNXMxNS02LjcyOSAxNS0xNXYtMTVoMzB2MTVjMCAyNC44MTMtMjAuMTg3IDQ1LTQ1IDQ1eiIgZmlsbD0iI2ZmNWM1YyIvPjxwYXRoIGQ9Im00NTAgMjU1YzAgMTYuNTQyLTEzLjQ1NyAzMC0zMCAzMC0xNC4wNSAwLTMwLjkwNSAwLTQ1IDBsLTE1IDE1IDE1IDE1aDQ1YzMzLjA4MyAwIDYwLTI2LjkxNSA2MC02MCAwLTYuNDIxIDAtMjYuMTU2IDAtMzIuNTdsLTE1LTEyLjQzLTE1IDEyLjQzdjEwLjA3eiIgZmlsbD0iIzNmNGE0YSIvPjxwYXRoIGQ9Im00ODAgMTgwYzAgNC4xMzYtMS42ODIgNy44ODYtNC4zOTggMTAuNjAyLTUuODYzIDUuODYzLTE1LjMzNiA1Ljg2Ny0yMS4yMDMgMC0yLjcxNy0yLjcxNi00LjM5OS02LjQ2Ni00LjM5OS0xMC42MDIgMC01LjI0NiAwLTkuNzU0IDAtMTUtMTAuNDkyIDAtMTkuNTA4IDAtMzAgMHYxNWMwIDI0LjgxMiAyMC4xODYgNDUgNDUgNDUgMjQuODEyIDAgNDUtMjAuMTg2IDQ1LTQ1IDAtNS4yNDYgMC05Ljc1NCAwLTE1LTEwLjQ5MiAwLTE5LjUwOCAwLTMwIDB6IiBmaWxsPSIjZTIwMDU5Ii8+PHBhdGggZD0ibTE5NSAyMjV2MzBsMzAgMTAgMzAtMTAgMTAtMTUtMTAtMTUtMzAtMTB6IiBmaWxsPSIjOTNiZGNmIi8+PHBhdGggZD0ibTMxNSAyMjUtMzAtMTAtMzAgMTB2MzBsMzAgMTAgMzAtMTBjMC0xMC40OTIgMC0xOS41MDggMC0zMHoiIGZpbGw9IiM3YmFlYzAiLz48cGF0aCBkPSJtMjQwIDQyLjQyOXYzMi41NzFsNy41IDEwIDcuNS0xMCAxMC0xNS41LTEwLTE0LjUtNi4zNzUtOC43NXoiIGZpbGw9IiM5M2JkY2YiLz48cGF0aCBkPSJtMjYwLjc1IDM2LjUtNS43NSA4LjV2MzBsNy41IDEwIDcuNS0xMGMwLTYuNDIxIDAtMjYuMTU2IDAtMzIuNTd6IiBmaWxsPSIjN2JhZWMwIi8+PHBhdGggZD0ibTI0MCAwYy0xMC40OTIgMC0xOS41MDggMC0zMCAwIDAgMjQuODEyIDIwLjE4NiA0NSA0NSA0NWwxMC0xNS0xMC0xNWMtOC4yNyAwLTE1LTYuNzI5LTE1LTE1eiIgZmlsbD0iIzdiYWVjMCIvPjxwYXRoIGQ9Im0zMDAgMGMtMTAuNDkyIDAtMTkuNTA4IDAtMzAgMCAwIDguMjcxLTYuNzI4IDE1LTE1IDE1djMwYzI0LjgxMiAwIDQ1LTIwLjE4NiA0NS00NXoiIGZpbGw9IiM2OWEwYWUiLz48cGF0aCBkPSJtMTUwIDc1djE1MGgxMDVsMTAtNzUtMTAtNzVjLTI4LjI3OCAwLTg4LjUyNyAwLTEwNSAweiIgZmlsbD0iI2IwZDNlNyIvPjxwYXRoIGQ9Im0zNjAgMjI1YzAtMTAuMTI4IDAtMTM5Ljg3MSAwLTE1MC0yOC4yNzggMC04OC41MjcgMC0xMDUgMHYxNTB6IiBmaWxsPSIjOTNiZGNmIi8+PHBhdGggZD0ibTEzNSAyNTV2MTIxLjg5MWw2MCA4LjEwOSA2MC0xMCAxMC02MC0xMC02MGMtMTQuNTE4IDAtMTA1LjM4NiAwLTEyMCAweiIgZmlsbD0iIzJiZWNmZCIvPjxwYXRoIGQ9Im0zNzUgMjU1Yy0xNC41MTggMC0xMDUuMzg2IDAtMTIwIDB2MTIwbDYwIDEwIDYwLTguMDgyYzAtNi42OTQgMC0xMTUuMTc0IDAtMTIxLjkxOHoiIGZpbGw9IiMyYmQxZmQiLz48cGF0aCBkPSJtMjEwIDEzNWgzMHYzMGgtMzB6IiBmaWxsPSIjNTU2OTZlIi8+PHBhdGggZD0ibTI3MCAxMzVoMzB2MzBoLTMweiIgZmlsbD0iIzNmNGE0YSIvPjxwYXRoIGQ9Im0xNTAgMzc1Yy0zMy4xMzYgMC02MCAyNi44NjItNjAgNjB2MTVjMCAzMy4xMzYgMjYuODYyIDYwIDYwIDYwaDEwNWwxMC02Ny41LTEwLTY3LjVjLTI4LjI3OCAwLTg4LjUyNyAwLTEwNSAweiIgZmlsbD0iIzkzYmRjZiIvPjxwYXRoIGQ9Im00MjAgNDUwYzAtNS4yNDYgMC05Ljc1NCAwLTE1IDAtMzMuMTM2LTI2Ljg2Mi02MC02MC02MC0yOC4yNzggMC04OC41MjcgMC0xMDUgMHYxMzVoMTA1YzMzLjEzNiAwIDYwLTI2Ljg2MiA2MC02MHoiIGZpbGw9IiM3YmFlYzAiLz48cGF0aCBkPSJtMjcwIDQyN2gzMHYzMGgtMzB6IiBmaWxsPSIjM2Y0YTRhIi8+PHBhdGggZD0ibTMzMCA0MjdoMzB2MzBoLTMweiIgZmlsbD0iIzNmNGE0YSIvPjxnIGZpbGw9IiM1NTY5NmUiPjxwYXRoIGQ9Im0yMTAgNDI3aDMwdjMwaC0zMHoiLz48cGF0aCBkPSJtMTUwIDQyN2gzMHYzMGgtMzB6Ii8+PC9nPjwvZz48L3N2Zz4=') no-repeat center center / contain"}}>
                </button>
                <ReactTooltip place="top" id="machinelearning" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>

              <div className="skill">
                <button data-tip='Computer Engineering' data-for="engineering" style={{background: "url('https://api.iconify.design/flat-color-icons:engineering.svg') no-repeat center center / contain"}}>
                </button>
                <ReactTooltip place="top" id="engineering" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>

              <div className="skill">
                <button data-tip='Hacking' data-for="hacking" style={{background: "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDA5LjU5OSA0MDkuNTk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDkuNTk5IDQwOS41OTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNENUQ2REI7IiBkPSJNMCwzMjkuMjM3djExLjA0MmMwLDIuNjQ5LDIuMTQ3LDQuNzk2LDQuNzk2LDQuNzk2aDQwMC4wMDZjMi42NDksMCw0Ljc5Ni0yLjE0Nyw0Ljc5Ni00Ljc5NnYtMTEuMDQyDQoJSDB6Ii8+DQo8cG9seWdvbiBzdHlsZT0iZmlsbDojRUJGMEYzOyIgcG9pbnRzPSIzNjIuNTQ0LDI2OC4zOTggNDcuMDU1LDI2OC4zOTggMCwzMjkuMjM3IDQwOS41OTksMzI5LjIzNyAiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMzQTU1NkE7IiBkPSJNMzUxLjUzNyw2NC41MjRINTguMDYyYy02LjA0NCwwLTEwLjk0Myw0Ljg5OS0xMC45NDMsMTAuOTQydjE5Mi45MzJIMzYyLjQ4Vjc1LjQ2Ng0KCUMzNjIuNDgsNjkuNDIzLDM1Ny41ODEsNjQuNTI0LDM1MS41MzcsNjQuNTI0eiIvPg0KPHJlY3QgeD0iNjkuNDYyIiB5PSI4Ni44NjUiIHN0eWxlPSJmaWxsOiMyRDkzQkE7IiB3aWR0aD0iMjcwLjY3NCIgaGVpZ2h0PSIxNTkuMTgxIi8+DQo8cG9seWdvbiBzdHlsZT0iZmlsbDojMjdBMkRCOyIgcG9pbnRzPSIzNDAuMTM3LDg2Ljg2NiAxODIuNDUyLDg2Ljg2NiAyNzUuNDE4LDI0Ni4wNTggMzQwLjEzNywyNDYuMDU4ICIvPg0KPGc+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzY0Nzk4QTsiIHBvaW50cz0iNzcuNzcyLDI3NS4wNjggNTMuNzI3LDI3NS4wNjggNTYuMzU3LDI3MS41ODcgNzkuOTgyLDI3MS41ODcgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiM2NDc5OEE7IiBwb2ludHM9IjEyMS45OTYsMjc1LjA2OCA5Ny45NTIsMjc1LjA2OCA5OS44MSwyNzEuNTg3IDEyMy40MzUsMjcxLjU4NyAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzY0Nzk4QTsiIHBvaW50cz0iMTUyLjQ4MSwyNzUuMDY4IDEyOC40MzcsMjc1LjA2OCAxMjkuNzYzLDI3MS41ODcgMTUzLjM4NywyNzEuNTg3IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojNjQ3OThBOyIgcG9pbnRzPSIxODIuOTY2LDI3NS4wNjggMTU4LjkyMSwyNzUuMDY4IDE1OS43MTYsMjcxLjU4NyAxODMuMzQsMjcxLjU4NyAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzY0Nzk4QTsiIHBvaW50cz0iMjEzLjQ1MSwyNzUuMDY4IDE4OS40MDYsMjc1LjA2OCAxODkuNjY4LDI3MS41ODcgMjEzLjI5MywyNzEuNTg3IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojNjQ3OThBOyIgcG9pbnRzPSIyNjMuNjg2LDI3NS4wNjggMjM5LjY0MiwyNzUuMDY4IDIzOS4wMjcsMjcxLjU4NyAyNjIuNjUyLDI3MS41ODcgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiM2NDc5OEE7IiBwb2ludHM9IjI5NC4xNzEsMjc1LjA2OCAyNzAuMTI3LDI3NS4wNjggMjY4Ljk4LDI3MS41ODcgMjkyLjYwNSwyNzEuNTg3IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojNjQ3OThBOyIgcG9pbnRzPSIzMjQuNjU2LDI3NS4wNjggMzAwLjYxMSwyNzUuMDY4IDI5OC45MzMsMjcxLjU4NyAzMjIuNTU4LDI3MS41ODcgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiM2NDc5OEE7IiBwb2ludHM9IjM1NS4xNDEsMjc1LjA2OCAzMzEuMDk2LDI3NS4wNjggMzI4Ljg4NiwyNzEuNTg3IDM1Mi41MTEsMjcxLjU4NyAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzY0Nzk4QTsiIHBvaW50cz0iNzIuNTUyLDI4My4yOSA0Ny41MTYsMjgzLjI5IDUxLjU1NSwyNzcuOTQ0IDc1Ljk0NiwyNzcuOTQ0IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojNjQ3OThBOyIgcG9pbnRzPSIxMDguNjUyLDI4My4yOSA4My42MTYsMjgzLjI5IDg2LjcyNiwyNzcuOTQ0IDExMS4xMTcsMjc3Ljk0NCAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzY0Nzk4QTsiIHBvaW50cz0iMTQ0Ljc1MiwyODMuMjkgMTE5LjcxNiwyODMuMjkgMTIxLjg5NywyNzcuOTQ0IDE0Ni4yODgsMjc3Ljk0NCAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzY0Nzk4QTsiIHBvaW50cz0iMTgwLjg1MiwyODMuMjkgMTU1LjgxNiwyODMuMjkgMTU3LjA2OCwyNzcuOTQ0IDE4MS40NTksMjc3Ljk0NCAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzY0Nzk4QTsiIHBvaW50cz0iMjE2Ljk1MiwyODMuMjkgMTkxLjkxNiwyODMuMjkgMTkyLjIzOCwyNzcuOTQ0IDIxNi42MjksMjc3Ljk0NCAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzY0Nzk4QTsiIHBvaW50cz0iMjUzLjA1MiwyODMuMjkgMjI4LjAxNiwyODMuMjkgMjI3LjQwOSwyNzcuOTQ0IDI1MS44LDI3Ny45NDQgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiM2NDc5OEE7IiBwb2ludHM9IjI4OS4xNTEsMjgzLjI5IDI2NC4xMTYsMjgzLjI5IDI2Mi41OCwyNzcuOTQ0IDI4Ni45NzEsMjc3Ljk0NCAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzY0Nzk4QTsiIHBvaW50cz0iMzI1LjI1MSwyODMuMjkgMzAwLjIxNiwyODMuMjkgMjk3Ljc1MSwyNzcuOTQ0IDMyMi4xNDIsMjc3Ljk0NCAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzY0Nzk4QTsiIHBvaW50cz0iMzYxLjM1MSwyODMuMjkgMzM2LjMxNiwyODMuMjkgMzMyLjkyMiwyNzcuOTQ0IDM1Ny4zMTMsMjc3Ljk0NCAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzY0Nzk4QTsiIHBvaW50cz0iNjcuNTYyLDI5MS4xNDkgNDEuNTgsMjkxLjE0OSA0NS45MjUsMjg1LjM5NiA3MS4yMTQsMjg1LjM5NiAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzY0Nzk4QTsiIHBvaW50cz0iMTA1LjAyOCwyOTEuMTQ5IDc5LjA0NSwyOTEuMTQ5IDgyLjM5MSwyODUuMzk2IDEwNy42OCwyODUuMzk2IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojNjQ3OThBOyIgcG9pbnRzPSIxNDIuNDk0LDI5MS4xNDkgMTE2LjUxMSwyOTEuMTQ5IDExOC44NTcsMjg1LjM5NiAxNDQuMTQ2LDI4NS4zOTYgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiM2NDc5OEE7IiBwb2ludHM9IjE3OS45NTksMjkxLjE0OSAxNTMuOTc3LDI5MS4xNDkgMTU1LjMyMywyODUuMzk2IDE4MC42MTIsMjg1LjM5NiAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzY0Nzk4QTsiIHBvaW50cz0iMjE3LjQyNSwyOTEuMTQ5IDE5MS40NDMsMjkxLjE0OSAxOTEuNzg5LDI4NS4zOTYgMjE3LjA3OCwyODUuMzk2IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojNjQ3OThBOyIgcG9pbnRzPSIyNTQuODkxLDI5MS4xNDkgMjI4LjkwOCwyOTEuMTQ5IDIyOC4yNTUsMjg1LjM5NiAyNTMuNTQ1LDI4NS4zOTYgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiM2NDc5OEE7IiBwb2ludHM9IjI5Mi4zNTcsMjkxLjE0OSAyNjYuMzc0LDI5MS4xNDkgMjY0LjcyMSwyODUuMzk2IDI5MC4wMTEsMjg1LjM5NiAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzY0Nzk4QTsiIHBvaW50cz0iMzI5LjgyMywyOTEuMTQ5IDMwMy44NCwyOTEuMTQ5IDMwMS4xODcsMjg1LjM5NiAzMjYuNDc3LDI4NS4zOTYgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiM2NDc5OEE7IiBwb2ludHM9IjM2Ny4yODgsMjkxLjE0OSAzNDEuMzA2LDI5MS4xNDkgMzM3LjY1MywyODUuMzk2IDM2Mi45NDMsMjg1LjM5NiAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzY0Nzk4QTsiIHBvaW50cz0iODIuMjQxLDI5OS42MjYgMzUuMTc2LDI5OS42MjYgMzkuODY1LDI5My40MTkgODUuNjI2LDI5My40MTkgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiM2NDc5OEE7IiBwb2ludHM9IjExOC44MiwyOTkuNjI2IDkxLjgxNiwyOTkuNjI2IDk0LjkzNiwyOTMuNDE5IDEyMS4xOTIsMjkzLjQxOSAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzY0Nzk4QTsiIHBvaW50cz0iMTU3Ljc1OSwyOTkuNjI2IDEzMC43NTUsMjk5LjYyNiAxMzIuNzk2LDI5My40MTkgMTU5LjA1MiwyOTMuNDE5IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojNjQ3OThBOyIgcG9pbnRzPSIxOTYuNjk4LDI5OS42MjYgMTY5LjY5NCwyOTkuNjI2IDE3MC42NTYsMjkzLjQxOSAxOTYuOTEyLDI5My40MTkgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiM2NDc5OEE7IiBwb2ludHM9IjIzNS42MzcsMjk5LjYyNiAyMDguNjMzLDI5OS42MjYgMjA4LjUxNywyOTMuNDE5IDIzNC43NzMsMjkzLjQxOSAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzY0Nzk4QTsiIHBvaW50cz0iMjk1LjgxNCwyOTkuNjI2IDI0My45NzYsMjk5LjYyNiAyNDIuODgsMjkzLjQxOSAyOTMuMjgyLDI5My40MTkgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiM2NDc5OEE7IiBwb2ludHM9IjMzNC43NTMsMjk5LjYyNiAzMDcuNzQ5LDI5OS42MjYgMzA0Ljg4NywyOTMuNDE5IDMzMS4xNDMsMjkzLjQxOSAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzY0Nzk4QTsiIHBvaW50cz0iMzczLjY5MiwyOTkuNjI2IDM0Ni42ODgsMjk5LjYyNiAzNDIuNzQ3LDI5My40MTkgMzY5LjAwMywyOTMuNDE5IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojNjQ3OThBOyIgcG9pbnRzPSI1Ni4zNTcsMzA4Ljc5OCAyOC4yNDgsMzA4Ljc5OCAzMy4zMjMsMzAyLjA3OSA2MC42MjMsMzAyLjA3OSAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzY0Nzk4QTsiIHBvaW50cz0iMjE4LjQ4OSwzMDguNzk4IDY4Ljc4LDMwOC43OTggNzIuNjg4LDMwMi4wNzkgMjE4LjA4NCwzMDIuMDc5IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojNjQ3OThBOyIgcG9pbnRzPSIyNTkuMDIyLDMwOC43OTggMjMwLjkxMiwzMDguNzk4IDIzMC4xNDksMzAyLjA3OSAyNTcuNDQ5LDMwMi4wNzkgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiM2NDc5OEE7IiBwb2ludHM9IjM0MC4wODcsMzA4Ljc5OCAzMTEuOTc4LDMwOC43OTggMzA4Ljg4LDMwMi4wNzkgMzM2LjE4LDMwMi4wNzkgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiM2NDc5OEE7IiBwb2ludHM9IjM4MC42MiwzMDguNzk4IDM1Mi41MTEsMzA4Ljc5OCAzNDguMjQ1LDMwMi4wNzkgMzc1LjU0NSwzMDIuMDc5IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojNjQ3OThBOyIgcG9pbnRzPSIyOTguMDA5LDMwNS4wMDggMjk2LjgxNCwzMDIuMDc5IDI2OS41MTQsMzAyLjA3OSAyNzAuMzU2LDMwNS4wMDggCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiM2NDc5OEE7IiBwb2ludHM9IjI3MC41NzUsMzA1Ljc3MSAyNzEuNDQ0LDMwOC43OTggMjk5LjU1NCwzMDguNzk4IDI5OC4zMiwzMDUuNzcxIAkiLz4NCjwvZz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiMzQTU1NkE7IiBwb2ludHM9IjI0Ni4yOTYsMzI0LjM1MyAxNjMuMzAzLDMyNC4zNTMgMTY4LjU4LDMxMS4yNjcgMjQxLjAxOSwzMTEuMjY3ICIvPg0KPGc+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHBvaW50cz0iMjE3LjU5NCwxNjkuMTQ4IDE4MS42MjQsMTQ5LjMyMiAxOTEuNTA2LDE4OS4xODcgMTk2LjQ4MywxNzUuMTg2IDIwNi42NDEsMTg4LjQxIA0KCQkyMTIuOTQxLDE4My41NzEgMjAyLjc4MywxNzAuMzQ3IAkiLz4NCgk8cmVjdCB4PSIxODAuNTMxIiB5PSIxMzIuMyIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHdpZHRoPSIyLjIyMiIgaGVpZ2h0PSI2LjM5NSIvPg0KCTxyZWN0IHg9IjE4MC41MzEiIHk9IjE1OC41NzEiIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiB3aWR0aD0iMi4yMjIiIGhlaWdodD0iNi4zOTUiLz4NCgk8cmVjdCB4PSIxOTEuNTQ0IiB5PSIxNDcuNTE3IiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgd2lkdGg9IjYuMzk1IiBoZWlnaHQ9IjIuMjIyIi8+DQoJPHJlY3QgeD0iMTY1LjI2OCIgeT0iMTQ3LjUyMiIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHdpZHRoPSI2LjM5NSIgaGVpZ2h0PSIyLjIyMiIvPg0KCQ0KCQk8cmVjdCB4PSIxODkuODIyIiB5PSIxMzYuMTQ2IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC43MDcxIC0wLjcwNzEgMC43MDcxIC0wLjcwNzEgMjI3LjQxMiAzNzIuODgzMikiIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiB3aWR0aD0iMi4yMjIiIGhlaWdodD0iNi4zOTUiLz4NCgkNCgkJPHJlY3QgeD0iMTcxLjIxMSIgeT0iMTU0LjcxNyIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNzA3MSAtMC43MDcxIDAuNzA3MSAtMC43MDcxIDE4Mi41MDkzIDM5MS40Mjc0KSIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHdpZHRoPSIyLjIyMiIgaGVpZ2h0PSI2LjM5NSIvPg0KCQ0KCQk8cmVjdCB4PSIxODkuODIiIHk9IjE1NC43MzEiIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTU1Ljc1IDE4MS4yNjQ4KSIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHdpZHRoPSIyLjIyMiIgaGVpZ2h0PSI2LjM5NSIvPg0KCQ0KCQk8cmVjdCB4PSIxNzEuMjQ5IiB5PSIxMzYuMTM3IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIC00OC4wNDEgMTYyLjY4NzIpIiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgd2lkdGg9IjIuMjIyIiBoZWlnaHQ9IjYuMzk1Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==') no-repeat center center / contain"}}>
                </button>
                <ReactTooltip place="top" id="hacking" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>

              <div className="skill">
                <button data-tip='Startups' data-for="startups" style={{background: "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDg2Ljk4NiA0ODYuOTg2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODYuOTg2IDQ4Ni45ODY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMEVGRDE7IiBkPSJNNDA2Ljc2MSwxMzYuMzU5djE4Mi44NTdjLTExLjQ5NC02Ljc5Mi0yNC41NTUtMTEuNDk0LTM4LjEzOS0xMi41MzlWMTM2LjM1OUg0MDYuNzYxeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMEVGRDE7IiBkPSJNMjg5LjczMiwzMzkuMDY5VjE4OC42MDRoMzguNjYxdjEyMy44MmMtMTQuNjI5LDUuNzQ3LTI3LjY5LDE1LjE1MS0zNy4wOTQsMjcuNjlMMjg5LjczMiwzMzkuMDY5eiINCgkJLz4NCgk8cmVjdCB4PSIyMTEuMzY1IiB5PSIyNDYuMDc0IiBzdHlsZT0iZmlsbDojMDBFRkQxOyIgd2lkdGg9IjM4LjY2MSIgaGVpZ2h0PSIxODAuNzY3Ii8+DQoJPHJlY3QgeD0iMTMyLjQ3NSIgeT0iMjY5LjU4NCIgc3R5bGU9ImZpbGw6IzAwRUZEMTsiIHdpZHRoPSIzOC42NjEiIGhlaWdodD0iMTU3Ljc4Ii8+DQoJPHJlY3QgeD0iNTMuNTg1IiB5PSIzNTUuNzg4IiBzdHlsZT0iZmlsbDojMDBFRkQxOyIgd2lkdGg9IjM4LjY2MSIgaGVpZ2h0PSI3MS41NzYiLz4NCjwvZz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMEFDRUE7IiBkPSJNNDIxLjM4OSw3LjMxNEM0MTcuNzMyLDIuNjEyLDQxMS40NjMsMCw0MDUuMTkzLDBsLTU4LjUxNCwyLjYxMg0KCWMtNi4yNjksMC0xMS40OTQsNS4yMjQtMTEuNDk0LDExLjQ5NFMzNDAuNDEsMjUuNiwzNDYuNjc5LDI1LjZsNDMuMzYzLTIuNjEybC0xMDcuNjI1LDEwNi41OGwtMzcuMDk0LTM4LjEzOQ0KCWMtMi4wOS0yLjA5LTEuNTY3LTMuNjU3LTYuNzkyLTMuNjU3Yy0yLjYxMiwwLjUyMi01Ljc0NywxLjU2Ny03LjgzNywzLjEzNUwzNy45MTIsMjgzLjE2N2MtNC4xOCwzLjY1Ny00LjE4LDkuOTI2LTAuNTIyLDE0LjEwNg0KCWwwLjUyMiwwLjUyMmMzLjY1Nyw0LjE4LDkuOTI2LDQuMTgsMTQuMTA2LDAuNTIybDAuNTIyLTAuNTIybDE4NC45NDctMTg0Ljk0N2wzNy42MTYsMzcuNjE2YzIuMDksMi4wOSw0LjcwMiwzLjEzNSw3LjMxNCwzLjEzNQ0KCXM1Ljc0Ny0xLjA0NSw3LjMxNC0zLjEzNUw0MDQuNjcxLDM1LjUyN1Y4MC45OGMwLDYuMjY5LDQuMTgsMTEuNDk0LDEwLjQ0OSwxMi41MzljNi4yNjktMS4wNDUsMTAuNDQ5LTYuMjY5LDEwLjQ0OS0xMi41MzlWMTkuMzMxDQoJQzQyNS41NjksMTUuMTUxLDQyNC4wMDIsMTAuNDQ5LDQyMS4zODksNy4zMTRMNDIxLjM4OSw3LjMxNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRURCNDE7IiBkPSJNMzI3LjM0OSwzMDkuODEyYzEwLjQ0OS00LjE4LDIxLjk0My02LjI2OSwzMy40MzctNi4yNjloNy4zMTQNCgljMTQuMTA2LDEuMDQ1LDI3LjY5LDUuMjI0LDM5LjcwNiwxMi41MzljNDMuMzYzLDI2LjEyMiw1Ny40NjksODIuNTQ3LDMxLjM0NywxMjYuNDMzYy0yNi4xMjIsNDMuMzYzLTgyLjU0Nyw1Ny40NjktMTI2LjQzMywzMS4zNDcNCgljLTI3LjE2Ny0xNi4xOTYtNDMuODg2LTQ1LjQ1My00NC40MDgtNzcuMzIyYzAtMjAuODk4LDcuMzE0LTQxLjI3MywyMC4zNzUtNTcuOTkyQzI5OC42MTQsMzI1LjQ4NiwzMTIuMTk4LDMxNS41NTksMzI3LjM0OSwzMDkuODEyDQoJeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzNCQjU0QTsiIGQ9Ik0zNjAuNzg1LDM4Ny42NTdjLTYuNzkyLDAtMTIuMDE2LTUuMjI0LTEyLjAxNi0xMi4wMTZzNS4yMjQtMTIuMDE2LDEyLjAxNi0xMi4wMTYNCgljNi43OTIsMCwxMi4wMTYsNS4yMjQsMTIuMDE2LDEyLjAxNmwwLDBjMCw1Ljc0Nyw0LjcwMiwxMC40NDksMTAuNDQ5LDEwLjQ0OWM1Ljc0NywwLDEwLjk3MS00LjcwMiwxMS40OTQtMTAuNDQ5DQoJYy0wLjUyMi0xMy4wNjEtOC4zNTktMjUuMDc3LTIwLjM3NS0zMC44MjR2LTcuODM3YzAtNS43NDctNC43MDItMTAuNDQ5LTEwLjQ0OS0xMC40NDljLTUuNzQ3LDAtMTAuNDQ5LDQuNzAyLTEwLjQ0OSwxMC40NDl2Ni43OTINCgljLTE1LjE1MSwzLjEzNS0yNS42LDE2LjcxOC0yNS4wNzgsMzEuODY5YzAsMTguMjg2LDE0LjYyOSwzMi45MTQsMzIuOTE0LDMyLjkxNGwwLDBjNi43OTIsMC41MjIsMTIuMDE2LDUuNzQ3LDEyLjAxNiwxMi41MzkNCglzLTUuMjI0LDEyLjAxNi0xMi4wMTYsMTIuMDE2aC0wLjUyMmMtNi43OTIsMC0xMi4wMTYtNS4yMjQtMTIuMDE2LTEyLjAxNmwwLDBjMC01Ljc0Ny00LjcwMi0xMC40NDktMTAuNDQ5LTEwLjQ0OQ0KCWMtNS4yMjQsMC05LjkyNiw0LjE4LTkuOTI2LDkuOTI2djAuNTIyYzAsMTUuMTUxLDEwLjQ0OSwyOC4yMTIsMjUuMDc4LDMxLjg2OXY0LjE4YzAsNS43NDcsNC43MDIsMTAuNDQ5LDEwLjQ0OSwxMC40NDkNCgljNS43NDcsMCwxMC40NDktNC43MDIsMTAuNDQ5LTEwLjQ0OXYtNS4yMjRjMTIuMDE2LTUuNzQ3LDE5Ljg1My0xNy43NjMsMjAuMzc1LTMwLjgyNA0KCUMzOTQuMjIyLDQwMi4yODYsMzc5LjU5NCwzODcuNjU3LDM2MC43ODUsMzg3LjY1N3oiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K') no-repeat center center / contain"}}>
                </button>
                <ReactTooltip place="top" id="startups" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
                </ReactTooltip>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 services-content">
          <h6 className="text-center mb-4">SERVICES</h6>
          <div className="services">
            <div className="d-flex my-3 flex-wrap justify-content-around">
              <div className="service text-center">
                <p>Web Development</p>
                <hr />
                <ul>
                  <li>UI/UX/Prototyping</li>
                  <li>Front End Design</li>
                  <li>Back End API</li>
                  <li>DB Connection</li>
                </ul>
              </div>
              <div className="service text-center">
                <p>CMS WordPress</p>
                <hr />
                <ul>
                  <li>WordPress Setup</li>
                  <li>From PSD To CMS</li>
                  <li>Theme Development</li>
                  <li>WooCommerce Plugin</li>
                </ul>
              </div>
              <div className="service text-center">
                <p>In Addition</p>
                <hr />
                <ul>
                  <li>Domain & Hosting</li>
                  <li>Bug Fix & Updates</li>
                  <li>Long Term Support</li>
                  <li>And Many More</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      
    </div>
  )
}

export default Skills
