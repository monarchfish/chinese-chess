import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
        &nbsp;and <span className="ts">TypeScript</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      </div>
      <Versions></Versions>
      <div className="chessboard">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1100">
          {/* Board background */}
          <rect width="1000" height="1100" fill="#f0c78a" />

          {/* Position markers for soldiers/pawns */}
          {/* Black side */}
          <line x1="100" y1="370" x2="100" y2="430" stroke="black" strokeWidth="14" />
          <line x1="100" y1="400" x2="130" y2="400" stroke="black" strokeWidth="14" />
          <line x1="100" y1="370" x2="100" y2="430" stroke="#f0c78a" strokeWidth="8" />
          <line x1="100" y1="400" x2="130" y2="400" stroke="#f0c78a" strokeWidth="8" />

          <line x1="300" y1="370" x2="300" y2="430" stroke="black" strokeWidth="14" />
          <line x1="270" y1="400" x2="330" y2="400" stroke="black" strokeWidth="14" />
          <line x1="300" y1="370" x2="300" y2="430" stroke="#f0c78a" strokeWidth="8" />
          <line x1="270" y1="400" x2="330" y2="400" stroke="#f0c78a" strokeWidth="8" />

          <line x1="500" y1="370" x2="500" y2="430" stroke="black" strokeWidth="14" />
          <line x1="470" y1="400" x2="530" y2="400" stroke="black" strokeWidth="14" />
          <line x1="500" y1="370" x2="500" y2="430" stroke="#f0c78a" strokeWidth="8" />
          <line x1="470" y1="400" x2="530" y2="400" stroke="#f0c78a" strokeWidth="8" />

          <line x1="700" y1="370" x2="700" y2="430" stroke="black" strokeWidth="14" />
          <line x1="670" y1="400" x2="730" y2="400" stroke="black" strokeWidth="14" />
          <line x1="700" y1="370" x2="700" y2="430" stroke="#f0c78a" strokeWidth="8" />
          <line x1="670" y1="400" x2="730" y2="400" stroke="#f0c78a" strokeWidth="8" />

          <line x1="900" y1="370" x2="900" y2="430" stroke="black" strokeWidth="14" />
          <line x1="870" y1="400" x2="900" y2="400" stroke="black" strokeWidth="14" />
          <line x1="900" y1="370" x2="900" y2="430" stroke="#f0c78a" strokeWidth="8" />
          <line x1="870" y1="400" x2="900" y2="400" stroke="#f0c78a" strokeWidth="8" />

          {/* Red side */}
          <line x1="100" y1="670" x2="100" y2="730" stroke="black" strokeWidth="14" />
          <line x1="100" y1="700" x2="130" y2="700" stroke="black" strokeWidth="14" />
          <line x1="100" y1="670" x2="100" y2="730" stroke="#f0c78a" strokeWidth="8" />
          <line x1="100" y1="700" x2="130" y2="700" stroke="#f0c78a" strokeWidth="8" />

          <line x1="300" y1="670" x2="300" y2="730" stroke="black" strokeWidth="14" />
          <line x1="270" y1="700" x2="330" y2="700" stroke="black" strokeWidth="14" />
          <line x1="300" y1="670" x2="300" y2="730" stroke="#f0c78a" strokeWidth="8" />
          <line x1="270" y1="700" x2="330" y2="700" stroke="#f0c78a" strokeWidth="8" />

          <line x1="500" y1="670" x2="500" y2="730" stroke="black" strokeWidth="14" />
          <line x1="470" y1="700" x2="530" y2="700" stroke="black" strokeWidth="14" />
          <line x1="500" y1="670" x2="500" y2="730" stroke="#f0c78a" strokeWidth="8" />
          <line x1="470" y1="700" x2="530" y2="700" stroke="#f0c78a" strokeWidth="8" />

          <line x1="700" y1="670" x2="700" y2="730" stroke="black" strokeWidth="14" />
          <line x1="670" y1="700" x2="730" y2="700" stroke="black" strokeWidth="14" />
          <line x1="700" y1="670" x2="700" y2="730" stroke="#f0c78a" strokeWidth="8" />
          <line x1="670" y1="700" x2="730" y2="700" stroke="#f0c78a" strokeWidth="8" />

          <line x1="900" y1="670" x2="900" y2="730" stroke="black" strokeWidth="14" />
          <line x1="870" y1="700" x2="900" y2="700" stroke="black" strokeWidth="14" />
          <line x1="900" y1="670" x2="900" y2="730" stroke="#f0c78a" strokeWidth="8" />
          <line x1="870" y1="700" x2="900" y2="700" stroke="#f0c78a" strokeWidth="8" />

          {/* Position markers for cannons */}
          <line x1="200" y1="270" x2="200" y2="330" stroke="black" strokeWidth="14" />
          <line x1="170" y1="300" x2="230" y2="300" stroke="black" strokeWidth="14" />
          <line x1="200" y1="270" x2="200" y2="330" stroke="#f0c78a" strokeWidth="8" />
          <line x1="170" y1="300" x2="230" y2="300" stroke="#f0c78a" strokeWidth="8" />

          <line x1="800" y1="270" x2="800" y2="330" stroke="black" strokeWidth="14" />
          <line x1="770" y1="300" x2="830" y2="300" stroke="black" strokeWidth="14" />
          <line x1="800" y1="270" x2="800" y2="330" stroke="#f0c78a" strokeWidth="8" />
          <line x1="770" y1="300" x2="830" y2="300" stroke="#f0c78a" strokeWidth="8" />

          <line x1="200" y1="770" x2="200" y2="830" stroke="black" strokeWidth="14" />
          <line x1="170" y1="800" x2="230" y2="800" stroke="black" strokeWidth="14" />
          <line x1="200" y1="770" x2="200" y2="830" stroke="#f0c78a" strokeWidth="8" />
          <line x1="170" y1="800" x2="230" y2="800" stroke="#f0c78a" strokeWidth="8" />

          <line x1="800" y1="770" x2="800" y2="830" stroke="black" strokeWidth="14" />
          <line x1="770" y1="800" x2="830" y2="800" stroke="black" strokeWidth="14" />
          <line x1="800" y1="770" x2="800" y2="830" stroke="#f0c78a" strokeWidth="8" />
          <line x1="770" y1="800" x2="830" y2="800" stroke="#f0c78a" strokeWidth="8" />

          {/* Board border */}
          <rect
            x="90"
            y="90"
            width="820"
            height="920"
            fill="none"
            stroke="black"
            strokeWidth="10"
          />
          <rect
            x="97.5"
            y="97.5"
            width="805"
            height="905"
            fill="none"
            stroke="#f0c78a"
            strokeWidth="4"
          />

          {/* Board lines - horizontal */}
          <line x1="100" y1="100" x2="900" y2="100" stroke="black" strokeWidth="2" />
          <line x1="100" y1="200" x2="900" y2="200" stroke="black" strokeWidth="2" />
          <line x1="100" y1="300" x2="900" y2="300" stroke="black" strokeWidth="2" />
          <line x1="100" y1="400" x2="900" y2="400" stroke="black" strokeWidth="2" />
          <line x1="100" y1="500" x2="900" y2="500" stroke="black" strokeWidth="2" />
          <line x1="100" y1="600" x2="900" y2="600" stroke="black" strokeWidth="2" />
          <line x1="100" y1="700" x2="900" y2="700" stroke="black" strokeWidth="2" />
          <line x1="100" y1="800" x2="900" y2="800" stroke="black" strokeWidth="2" />
          <line x1="100" y1="900" x2="900" y2="900" stroke="black" strokeWidth="2" />
          <line x1="100" y1="1000" x2="900" y2="1000" stroke="black" strokeWidth="2" />

          {/* Board lines - vertical */}
          <line x1="100" y1="100" x2="100" y2="1000" stroke="black" strokeWidth="2" />
          <line x1="200" y1="100" x2="200" y2="1000" stroke="black" strokeWidth="2" />
          <line x1="300" y1="100" x2="300" y2="1000" stroke="black" strokeWidth="2" />
          <line x1="400" y1="100" x2="400" y2="1000" stroke="black" strokeWidth="2" />
          <line x1="500" y1="100" x2="500" y2="1000" stroke="black" strokeWidth="2" />
          <line x1="600" y1="100" x2="600" y2="1000" stroke="black" strokeWidth="2" />
          <line x1="700" y1="100" x2="700" y2="1000" stroke="black" strokeWidth="2" />
          <line x1="800" y1="100" x2="800" y2="1000" stroke="black" strokeWidth="2" />
          <line x1="900" y1="100" x2="900" y2="1000" stroke="black" strokeWidth="2" />

          {/* Palace lines - black side */}
          <line
            x1="400"
            y1="100"
            x2="600"
            y2="300"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="10,10"
          />
          <line
            x1="600"
            y1="100"
            x2="400"
            y2="300"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="10,10"
          />

          {/* Palace lines - red side */}
          <line
            x1="400"
            y1="800"
            x2="600"
            y2="1000"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="10,10"
          />
          <line
            x1="600"
            y1="800"
            x2="400"
            y2="1000"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="10,10"
          />

          {/* 覆蓋一個水平的矩形高度100左右當作楚河漢界 */}
          <rect x="101" y="501" width="798" height="98" fill="#f0c78a" />

          {/* River */}
          <text
            x="300"
            y="550"
            fontSize="48"
            fill="black"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            楚 河
          </text>
          <text
            x="700"
            y="550"
            fontSize="48"
            fill="black"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            漢 界
          </text>

          {/* Black pieces */}
          {/* Rooks/Chariots (車) */}
          <circle cx="100" cy="100" r="40" fill="#000" stroke="#000" strokeWidth="2" />
          <text
            x="100"
            y="105"
            fontSize="50"
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            車
          </text>

          <circle cx="900" cy="100" r="40" fill="#000" stroke="#000" strokeWidth="2" />
          <text
            x="900"
            y="105"
            fontSize="50"
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            車
          </text>

          {/* Horses/Knights (馬) */}
          <circle cx="200" cy="100" r="40" fill="#000" stroke="#000" strokeWidth="2" />
          <text
            x="200"
            y="105"
            fontSize="50"
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            馬
          </text>

          <circle cx="800" cy="100" r="40" fill="#000" stroke="#000" strokeWidth="2" />
          <text
            x="800"
            y="105"
            fontSize="50"
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            馬
          </text>

          {/* Elephants (象) */}
          <circle cx="300" cy="100" r="40" fill="#000" stroke="#000" strokeWidth="2" />
          <text
            x="300"
            y="105"
            fontSize="50"
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            象
          </text>

          <circle cx="700" cy="100" r="40" fill="#000" stroke="#000" strokeWidth="2" />
          <text
            x="700"
            y="105"
            fontSize="50"
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            象
          </text>

          {/* Advisors (士) */}
          <circle cx="400" cy="100" r="40" fill="#000" stroke="#000" strokeWidth="2" />
          <text
            x="400"
            y="105"
            fontSize="50"
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            士
          </text>

          <circle cx="600" cy="100" r="40" fill="#000" stroke="#000" strokeWidth="2" />
          <text
            x="600"
            y="105"
            fontSize="50"
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            士
          </text>

          {/* General/King (將) */}
          <circle cx="500" cy="100" r="40" fill="#000" stroke="#000" strokeWidth="2" />
          <text
            x="500"
            y="105"
            fontSize="50"
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            將
          </text>

          {/* Cannons (砲) */}
          <circle cx="200" cy="300" r="40" fill="#000" stroke="#000" strokeWidth="2" />
          <text
            x="200"
            y="305"
            fontSize="50"
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            砲
          </text>

          <circle cx="800" cy="300" r="40" fill="#000" stroke="#000" strokeWidth="2" />
          <text
            x="800"
            y="305"
            fontSize="50"
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            砲
          </text>

          {/* Soldiers/Pawns (卒) */}
          <circle cx="100" cy="400" r="40" fill="#000" stroke="#000" strokeWidth="2" />
          <text
            x="100"
            y="405"
            fontSize="50"
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            卒
          </text>

          <circle cx="300" cy="400" r="40" fill="#000" stroke="#000" strokeWidth="2" />
          <text
            x="300"
            y="405"
            fontSize="50"
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            卒
          </text>

          <circle cx="500" cy="400" r="40" fill="#000" stroke="#000" strokeWidth="2" />
          <text
            x="500"
            y="405"
            fontSize="50"
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            卒
          </text>

          <circle cx="700" cy="400" r="40" fill="#000" stroke="#000" strokeWidth="2" />
          <text
            x="700"
            y="405"
            fontSize="50"
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            卒
          </text>

          <circle cx="900" cy="400" r="40" fill="#000" stroke="#000" strokeWidth="2" />
          <text
            x="900"
            y="405"
            fontSize="50"
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            卒
          </text>

          {/* Red pieces */}
          {/* Rooks/Chariots (俥) */}
          <circle cx="100" cy="1000" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
          <text
            x="100"
            y="1005"
            fontSize="50"
            fill="#f00"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            俥
          </text>

          <circle cx="900" cy="1000" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
          <text
            x="900"
            y="1005"
            fontSize="50"
            fill="#f00"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            俥
          </text>

          {/* Horses/Knights (傌) */}
          <circle cx="200" cy="1000" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
          <text
            x="200"
            y="1005"
            fontSize="50"
            fill="#f00"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            傌
          </text>

          <circle cx="800" cy="1000" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
          <text
            x="800"
            y="1005"
            fontSize="50"
            fill="#f00"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            傌
          </text>

          {/* Elephants (相) */}
          <circle cx="300" cy="1000" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
          <text
            x="300"
            y="1005"
            fontSize="50"
            fill="#f00"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            相
          </text>

          <circle cx="700" cy="1000" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
          <text
            x="700"
            y="1005"
            fontSize="50"
            fill="#f00"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            相
          </text>

          {/* Advisors (仕) */}
          <circle cx="400" cy="1000" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
          <text
            x="400"
            y="1005"
            fontSize="50"
            fill="#f00"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            仕
          </text>

          <circle cx="600" cy="1000" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
          <text
            x="600"
            y="1005"
            fontSize="50"
            fill="#f00"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            仕
          </text>

          {/* General/King (帥) */}
          <circle cx="500" cy="1000" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
          <text
            x="500"
            y="1005"
            fontSize="50"
            fill="#f00"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            帥
          </text>

          {/* Cannons (炮) */}
          <circle cx="200" cy="800" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
          <text
            x="200"
            y="805"
            fontSize="50"
            fill="#f00"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            炮
          </text>

          <circle cx="800" cy="800" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
          <text
            x="800"
            y="805"
            fontSize="50"
            fill="#f00"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            炮
          </text>

          {/* Soldiers/Pawns (兵) */}
          <circle cx="100" cy="700" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
          <text
            x="100"
            y="705"
            fontSize="50"
            fill="#f00"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            兵
          </text>

          <circle cx="300" cy="700" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
          <text
            x="300"
            y="705"
            fontSize="50"
            fill="#f00"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            兵
          </text>

          <circle cx="500" cy="700" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
          <text
            x="500"
            y="705"
            fontSize="50"
            fill="#f00"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            兵
          </text>

          <circle cx="700" cy="700" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
          <text
            x="700"
            y="705"
            fontSize="50"
            fill="#f00"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            兵
          </text>

          <circle cx="900" cy="700" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
          <text
            x="900"
            y="705"
            fontSize="50"
            fill="#f00"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            兵
          </text>
        </svg>
      </div>
    </>
  )
}

export default App
