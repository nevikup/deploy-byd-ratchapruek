import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as Route$4, A as ARTICLES, P as PageShell, t as heroImg, H as HOME_SLIDES_ENDPOINT, u as extractSlideImageUrls, v as extractLargestSrcsetUrl, w as normalizeImageUrl } from "./router-CcbwebiN.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useIsMobile } from "./use-mobile-BsFue-bT.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowRight, c as MapPin, y as Wallet, s as Gift, z as Calendar, X, x as ArrowLeft } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-icons.mjs";
import "./models-B69ILCyc.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./server-cjM90p06.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/zod.mjs";
const chargingImg = "/assets/charging-Y86UxWfd.jpg";
const bydChaengWatthanaImg = "/assets/BYD-%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%E0%B8%A7%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B0-1536x556-Cj-LAAmg.jpg";
const bydAtto3VtolImg = "/assets/BYD-ATTO3-VtoL-Vehicle-to-Load-CLq1uBAe.jpg";
const roadIcon = "data:image/webp;base64,UklGRpIDAABXRUJQVlA4WAoAAAAQAAAAMQAAIQAAQUxQSPgAAAABgBXbbtjoQRCEQjCDGkIYrBlsIIhBAyEQyiBlkDBIGTgM3kdsSTWCiJgAmOXFfgYy+y9B+EKjAGKghkm1/D2f/5YqUTN/OEedvziDCq2Xqupl4RSzmRYAWExbSKJZb2piilht063Y1gChPd+yjeJTR7kVh/qqI7S6Cgcsnn2E3ZHp/AoAyNfBbHt7VjRXz9v0oFdb6uHDsrjm1uxaDFJduZVdVXozR2Hpnb7t2dx8Z2fiwFNrG2lrJAYe2jwC+LitAQe6R8AKQBioPQ2gADqaAjVi6k0RJwojcy9HsOwhqZdCdobCGMJjvE+6Aj6WT8CVINmfLCn7BVZQOCB0AgAAEBAAnQEqMgAiAAAAACWYAyu1BfgGnb9a/Eb9IOg73p7k/tVuCJxemL5j+S39N+g39G5iD/JbaB+lfvQeIB7gH6AeqN1AH8A/rPqifyr/Jf6D9//pP/Vz9bvgI/TD/oE4OYDNZqavpZ+MyC2/ktgf+rRnKxKCCC/H00Z/Orej3muB7EsXozTWxyAA/v//xRevE6I0FzdYbzrBX6VGhP6vNxxr3YX1sgiA2b390UJnLXOKGuPAT+j+Lh5Lt19vt0qezRSXiRnulqpt6BIrPe3eINNTpf4DkXcTMW1aTWPnPSjN15fYPi2PZzZmAvot6f0JRZ7JERXH/nD/51h1ZLGG3MKP//OH/zrDqyWSN97qhf/wjBUmc23sA0ZGSdo+P/7OFYNgBs1jTnFX64djg5+jcbHuyDrpj6ff0dSdnwmK+Y914Z5m8yUImFjW5WNl/jrBeU5pjgsl+HntxhBA666I8c1MevQMmjjYlN9CGl6Tw/jmsl/++EVyj711/S5GQYdpccpPgWm/WIIuzDteRnJ0B1JC8pzT+9qdV6kciclXBkLpFRpxx96g4fE0YMv9loUtu5deRytS/niwSX0SUOQipB7goFBc98eWXw6/6dwvuoUXtX6vytYm4SW09Wj9kjK/pXS/4SYmAwiVti6vzyZFjuexS13aWd0/t6nSQSvnHAx6JfZpUB7Hf7/ct5pn55WKh418/gOy/RjxFkYP//z+iVf3yQb4DNIzN9PzhyOIeC4xJIQ/HzFheZ4ZLlpxv8Meee6LSVMROhidl1i+HfES8XGE8JGZUfWYMxFrdkd3yO4MmDURKQFQ742I9R34ktbctAAAAA==";
const shieldAltIcon = "data:image/webp;base64,UklGRkIEAABXRUJQVlA4WAoAAAAQAAAALgAAMQAAQUxQSLEBAAABoC3Jtmnbase2bdu2bdu2bfvZtm3btm1b7Zx7+xzoXxAREwCnpVd/5acF+aEzQvvLlI83Dusv2dR3NH02Mr6fspt+0/bH0oLOInW+Rrenm4dzkXLGe7p/MSahTfVttF20zojkiqIGUbrdpH03JJv02og81yq8MOozXXYHEL7lRSPydTcg7F66/R+AQkt/mJAL0Z9+gLjDnpiw6nVvAOofMlhLDUCWmQHXvugAos8XrrzWgv7C6UdqpgkHL6hZImzepma3MHOOmkvC4BFawlNsWktLAalgWi09hN8R8EXJMuESsFXJfWEu0EdHbopNgGw6pkuxAdzXEPKtcBwAJmqoTLH3/3Jp2CTF/h/O+CtMcT3EFv5OSqUkvPBVmeIpBPbzdUOqEhTljZ+JFE/DsL+XApSLmeCOh/A3pQ0wruRhHcWX8cwwz9lSylVgGemBmxALKE+HddYvLiJtpHwujB0q/7FLd43y44Rw2dGq2WfKHzPD7QSjbun2M/B9LriebnKWwa9zwP1IA8MXGeCzzlerq2ngN8NJi6nw3/urwbOS0Jh0c8DUqFCae+1XfpydAk4BAFZQOCBqAgAAsA4AnQEqLwAyAAAAACWMAtRtHQC+5/jp+qvH3us3vfJP+I+27tQdpnugHszdEz1I/PdfsZ8MfkMZo7Fp3UnxRjyAzLKC5wgu/90JkvUOJZUaIz0rZ5DPtAY2VSpMwTF/RipRnbxSp7fjG1wQmiIM1dSmP1J44NnEhFsZ1GtAAPiZ2iBXPn8RsSf6ckR+yv7NXMH9DMd/+W//et35+/5O/rrhoHtATWANU9s3jkCs/aA9s5CvDw167f881//kRrRNdbYv7f/jOo5JbweQ/GEyDNL6l6wHsvwYhcFs4pn/hq4gc/ABdfPAbcO+1RkvLeZfWBE5LuBiG/xysAZAspPYBaJudUms6DcPNsSv7KHax3AdSWN9e8SayKSheAy/A9r4DjgpM13NAO/lUXlfWcAUnSVc61SFuqFsNn91T3WTR+kTmYyf+nGadJQBqCp89zPHCr5MP61KVtzTg+yca4RjmIaHEf1SLQNSqvDl9nYVSktPExbw2sbkdGR2e096mf5CtaUZ3/nriXBAXBvhIgc2c8w9fy13KjeCsS7NFA5oiBm+6fSy6rtm52Zuu4iH+uXiJHgiNdjpcgXaU9TCd3Su2lfDCti9jCZXelk+I21gp9639yF8tKy9BvmLkv/3qakzkPuuhtvtH+OVtKAeT+HgELQvDjeNNHtbq8jYb9bX0VxHpC6EkPO3unhi4XaZExRqkXVokbdJI4kF0mE1jbzqfI3YaWMg4/zxwvJ4yDa+z1x02+geFxvgzsq8AZBt4BgW0bqB9to3UGuQrq2VLdWAAdOdFso4n2MGBvN5P8LVSaYZ1zaI6ZcAAAAA";
const temperatureLowIcon = "data:image/webp;base64,UklGRg4EAABXRUJQVlA4WAoAAAAQAAAAMQAAMQAAQUxQSJYBAAABkFbbehVJV8InAQlx0JGAg46DioOKBBwUDsBBxQE4AAeJg69n5uY1758RMQEoy+d2qB7bp6BdHltSfT8n1D+SFtNTWp5Jiy+pkEOrj6nupbWHFOTQxjTVvLT+EPbW5kNKTltX4rRjKF1NOv1wsbxYGzJLwmalebH+ZgHArPQUAJCTqGOBGQBykwhgIXkClUx2FsmOHz1JACJZUQzkqAvEEq3wJUuU7eQgC7krbCdP1AEwiezDDNPjuSn3wxBZZZZxtilgHFzDip8BrmrFzwEbC7fDzwIYv8Y9WJR/hvb/XFPqZEa8tSTbNlVc0s9pRVANgGEa+l1sRQmOpW5G6Q5ANtVNACxEXa/ABDCXqmoygGSy9opkB3ApTQIs5Op1EQ84LXrAEu2l1AKhtP8CcdhJPOBKHpjHRLIDOFkWYCVnL090AuT84TaAJLL2MuwNAHMIDgBeSudeuIm+UPlUmtHdMn1PbNqUu36ITHV7fHw8Ni3eGDjlQmM2I2D6zBhrclueMVpiy2nwE9q75nb4SY2Pp+oZF4PRVlA4IFICAABQDQCdASoyADIAAAAAJZwCEXTG/DfQB/QOksrN9i12/G7422zt6APIz60n0AP1m9MjpGLun/GT4oXkhymYWzMqiiskoYZ1Arh+3bcaRyMjH668z6do4bUXHWc2orJ9bmAl26NCiR3V7wwWMY4BVWjXIKAAAP7DwI7jwuqAzY+9fm/6HDkNWwBe+5ZmFSB5Rg0bKkFBQN///wP4Lf6pn/JFgzT52QiIKrW8AM2ZgtBf4wLx/8m37nN//+H4///Q8/xBh1HmQjemdMGu/k2iyh2KX17Vn/hMZvvO/3swV6kt2nNizyxamI3QJ7xOB8b8kbrMEMfYfrWoYKrHln5T/S+oEQ5XeXJz/aV/IEOWwi/3InnJ/dLncF1BRJNUnLaZSAGQ/2kUZZIQFJlEOwj2KCJBEgkxWEN7u7UTVmGKTjENouXAosFt8avimpKFi+32ouoiBmd+nbk+jKoK4kJe2OVT6itiykk0NHlzYHqrdE29n8vi2X8Jh/hS52Q+vqGJwQVrfiHbS6VVuCG3nEDJBLwW/JVNZ0ANWmeJvXjg+HzU93QzNlUsST+R/TiYJA3KJ6Bmi4OxS8w7nGv7rz4+f/ggAupBx1YracPMduo5HqAndeLICvJ4M/5aK9hpwCFNp9xmJVciT4QE3uuymFGXONW0grCRXiQAw1LiTFv47JIcaLL6TKjLQwqIXRF+3pHr5b6ExxIyz6JeTAlHT3JjIAnkPWmaefWOI7jk3FIZs2d8pEAsXgZAHunF71pBWkGahxFSj5sJlN4rQbvaEN9StAAAAAA=";
const powerCordIcon = "data:image/webp;base64,UklGRqADAABXRUJQVlA4WAoAAAAQAAAAJgAAJgAAQUxQSM8AAAABcFDbbhRFQiRUAhJGAhIiAQmVMA6oBByAA3AADqiDP2s2BRHhwG0bR8qIu3u93yMosHgdKGPxjjtQUSGQQDTf2AsQFcQPkDBqf09KFeu0sDuLmI8zfvMAjEbM3zyMyg090d90bMqsgJXq4P+ZADsXvuFJoT+qJwcGrJyows6HTri7dAPgT9SZkFRFUhuSWhCsKCf8GRtBIP1sRiT9rnZvDzLWDN/0McdWUvSJUjw54PifqzKZqyoasdS2VPH9S56a2OpJqCUhPv7Ea/2qcQQAVlA4IKoCAACwEQCdASonACcAAAAAJbACCOxi+bfkzylWpXbP9lf7BuiJvOoD7t/Fvx09gD8QPUB6Bf6geoB+gHUA/R/9r/Ya/SD3AegB/Xv5X6rnqAegB+pvol/9L/EfAT+wX7JfAb+pf/y4ADsAP5KYI7wC761HNnG1tzB2eWAzH5+LR4mN4ppey3uMdYO80Q19iUkb4HKspapphBAA/v/xRcUmY2woIR0Uen/B109or9N5Vf0Q/Jn9SdbfvNSkl8r+6+O2PVqJRPeAWm/vqgYNkmD6f0PfUnKWi6g+6ejNY9tMpSDAdZ32YHH0mrsrSRY+vBtBjE1rpspU7RlB52EB634VAvzs7tYQY6FEsogEYDnVPKaFhH90tuxXdNPX7ZpL4w7P6i8XHNB3Z6t+D16rcF4yb35DTBErvdxlKKXHeFIQWmgkurf+Ok/75Gd6U4O0l6NsejsoAa2geW6wnT4zP3+bDxQVyzNtJtbn+kIr02e/izkGe/dvzmwuk39pHH7FjtU6Ahajlg5Bs2Y/jIMHsASOKfOT8yGNNk7tO+LKgom5NgZ4wSPZxNYXlTo5OI4ZYRsCv5iLzCX3R3737Y29VN/zc/loF18/WzG3zmIGiwqXJA7Wuv2oIYfYnvYXPQkTgWFajX1XoWptuF2XLuafEjRYMhgVBOXF6EkIX0spphEJ5C0gue3rwC3wf7uc9raH6q30wPm2QQBS/dWPNDe5IYywE73wU8/XCBf/ya2H6iTCPuGHvGDbHug68Xyr1rnv/2VjdLp6xxGCIWZ+V6Xw/P4W+O9eSWWlVud0ruu9J+1VkwhcYD39zSvi/iBlmIjfjt5eVhjMiP99/4epbpwhXguR5KMoYJHT8+5ZZ67ReAcj/z/za2vP/8jOBmTjVp2/bXGEXEBdQ1J97nlAAAAA";
const timelapseIcon = "data:image/webp;base64,UklGRqwEAABXRUJQVlA4WAoAAAAQAAAAMQAAMQAAQUxQSOQBAAABkFBre942giAIhmAGG4OKQcwgZlAzsBhEDFIGNgOLgcUgZvDt5/0+vZ8RRIQDR3Lb5hhGiioj1jcEgobHup3yj85tfQzBT8P3KR06n86B8SUUvRydCD2yE0mkjzjokyhYo3VJI7xNWqohzEos2wTR5qGjgbkpgbbY4wPFuaZA0HShTEfno/olkpr4UV1mhxqlBlGubF2Ey3p6kGNbfxmS4SotWcRbf4cOUJvfnT/ziYhCzmrrTPZkAYzyHz+BhYgaxMMGo72iA/LCN7t0M6jTPZAFBJl1s4CFBR6mbtp/zCGccIEXp9Wc6vfAoTukzwNt1eDGB0Sp8NIZntQHy6xgb97B6m5ANgxuh5XjDdgNG8OIFW7AYclyG+QOvLy4g6uFBkso5pc0PIhix0FoORQ7LGcCnfn5Cv9xgHUqD2DY4QHK27zcLC9r2ts8rDWiPdiIFgR7okUoZgScOC4qmioZdPPGr4XvhzeqhomsqXVPS8EcKyhE7AXz+TL1r5U3SSeapm7GHPNeReqeRzPT9qw4u7PQs5+FQtgFD2Mz3VuYlBCr4KoHNapyf+0m4J2tTYbnKapP/O8smo71C6uCr/UwHZOhdImDrsRWN4VHiY6Ki+wUoupia5Nu7eIcmPLeMFrliRkJVlA4IKICAACwDwCdASoyADIAAAAAJYwDIF+jB78B+Nf63dKVnT7jx5/O/yZ90PMAf038bu3l4zP+A9sXnM/QA9mb0APLZ9k79ufQTuc0/d5GDJnjiTS4BAmf7FE3I+tJCgVoLgbkHwYgTGj+yFn2GRP00z1uOSVFUJcsD58PcAIxUliym4VXrMnWVDLVQAD9zSy3ffllS6T2VWAav7fRzGS44fPDkgDob7lMP91iCz8+OunSG8XLstwo67Tv71m8x7p4iudX7dkfOvnD5NUQ3W/6SOzMKP+iGvKdQDhaNv2P740NOEVKYwDgHdulGBbx7ltsljPurFeQIFZ9yhCWn56Q6Vf/4j9Bfnc8RBhBo2UBGwP1dds468dqgevn9i3yakx2m2pFR5OEsLUzmQqgtzFMBTdf8c+zExrPvrsVQtTFHCOZ+wvaOIvk9151qFjsjoH6EBx31r1Pr//72TQSERpebaSA4+xfkQzwTbAyNiXA9qdvyRgfMIXinAOF7sTV8zedw/LOhIXMz9b65eYphE3/8LR4IGsvCYXbjawgfWgUZjOH7zEBeko1gtj7aDl26pFyQOJHV52uxrwMZOgArFqL9WI2bz8BYckl/lMy6pJsXLNRjJFMhOZpVwEyLc57Lo9Rq+0qtBtkz/uKjzBaPlVPPaAQgVwohI6WhnejlOKtc367fPDJHzE9fmEuukOz6pcHNDcH+ZLpgj/NDrwRQmxLs1+plWrn18v2PJO19hq8RtaiCP4zjTIhSPpIts9fWXcmuNrCRQLEd0hXWh1Fh6HxsoG5yD1WhdaYgnffL0PqbGZ6Qm7eZW5fnGIk9uVQNRdwH64gBEqH0fi8lXS52/LG//72SgXOsaRL3dvxPg4jWdXsZqIFR7s/QE3bpojxuryji4NIHAAAAA==";
const batteryChargingIcon = "data:image/webp;base64,UklGRlYDAABXRUJQVlA4WAoAAAAQAAAASwAAIwAAQUxQSAoBAAABgJZtW1DnjUAEIhCBCDQ4NJgNRoPR4NhgNpAG2MA1wAbvD5Uj37cAETEBABB+G5Xub4cPzUrVP32mUfnatVJ96gg8L0npdqK9W04BavNpumskZyj+I7nckWQCYL++xb8MgEKyfGQbFdbHJg49nqLr8V1pSG6P+R5WI2OzFMFqJBzWC2GSEJCkNDMuA4sUTsM2ALuYZdThAHjvQxPRRkVcvynicsCM68j/oK7r6gHXhGyDzg6oFJIFAJlS3LiCQCkF47JtYpyAWCklQsBGIcWjwz831vRc3iAVhRGPZCiufRvJ3ehxJJnvJpKsXsurncKdOai+oDOqO1wPorLDod8XTbPFxzYkpd6gH1ZQOCAmAgAA8AsAnQEqTAAkAAAAACWUA01gmdzbSf0z/s3Qn2qeJDJ4TrzgHXAegB+kvW3+Rxc6Z9o/8FXyQG97SXdFAk12MJkVGSKKw6bnPMmFl1/MMrX6khGrSscyt/ZrdoL6Wf0fCaRcTN47YAgA/ug0EKMrXn9NInndbAEt7QUYwDvD/iYRn5qjfGBFrnfQRBSWWP//k4P784/5Ka5CGYbfSegY7DMRNA/89Ev//w6P+LeP/xFSteJDo617fxGiP/+T0SSxSeff/EfXBoWFATwAZwR91wYy8oZR0/h7jiagnKQinQeaqgTGs49r2hgyYhlgk2il40yt4dxQ5rG9OWLzi9EPkRFb4fwxy0aShk8k7ftF9IYXOYDVt6C7Eh3xiJmAFQYSf7Z2hz8qyT7Y7zbLrtdIdT6oQKHRe15vlektZlmLrgmmuK39J8DjEFNyXEiCmgSP+35AF02nficr1bvtPi8vCiFHf2Wz1t85I/Sz0961JOCEWQQ4XcJCPQc4yAI0anNqrrG8/TrDGC1dIdYENOFYYOA42nlRjRXGy5ZWTTg7GiP06G+GodPeHVq5kk/AMaTEItGHz+GP73reFIjNt9+2+8oDveHanE9uqwtoaGiX59212NkDkQ5dhuV/Ldn10E46uP49i4O8IhvpdIdz2tTa9BMQm/l8Yh/kV+tDRbbK0RL/8IftOJgcjMZC4gThEXZR+IQn68HMRd0f9tTO/MGsxYyoqggAAA==";
const ModelsScroller = reactExports.lazy(() => import("./ModelsScroller-CGni6f-X.mjs").then((module) => ({
  default: module.ModelsScroller
})));
reactExports.lazy(() => import("./InstallmentCalculator-D7K5uIhk.mjs").then((module) => ({
  default: module.InstallmentCalculator
})));
const FAQ = reactExports.lazy(() => import("./FAQ-KPtl_5Vj.mjs").then((module) => ({
  default: module.FAQ
})));
const POPUP_PAGE_ENDPOINT = "https://cms.jinlongmotors.co.th/wp-json/wp/v2/pages?slug=popup-nakornin";
const MODEL_HERO_VIDEOS = ["https://storage.googleapis.com/ram_asset_prd/models/atto1/atto1-video.webm", "https://storage.googleapis.com/ram_asset_prd/models/new-atto3/new-atto3-video.mp4", "https://storage.googleapis.com/ram_asset_prd/models/seal5Dmi/seal5-video.mp4", "https://storage.googleapis.com/ram_asset_prd/models/seal6/overview/seal6-video.webm", "https://www.reverautomotive.com/videos/model/seal/seal-video.mp4", "https://storage.googleapis.com/ram_asset_prd/models/sealion5dmi/overview/sealion5dmi-video.webm", "https://storage.googleapis.com/ram_asset_prd/models/sealion7/overview/sealion7-video.webm"];
const MOBILE_MODEL_HERO_VIDEOS = MODEL_HERO_VIDEOS.filter((url) => url.endsWith(".mp4"));
const POPUP_FETCH_DELAY_MS = 4e3;
const HOME_POPUP_LAST_SHOWN_KEY = "home-popup-last-shown-date";
function getBangkokDayStamp() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Bangkok",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(/* @__PURE__ */ new Date());
}
function getVideoMimeType(url) {
  return url.endsWith(".webm") ? "video/webm" : "video/mp4";
}
function extractPopupImageUrl(payload) {
  if (!Array.isArray(payload) || payload.length === 0) {
    return null;
  }
  const firstPage = payload[0];
  const renderedContent = firstPage.content?.rendered;
  if (typeof renderedContent !== "string") {
    return null;
  }
  const imgTagMatch = renderedContent.match(/<img[^>]+>/i);
  if (!imgTagMatch) {
    return null;
  }
  const imgTag = imgTagMatch[0];
  const imageUrlFromSrcset = extractLargestSrcsetUrl(imgTag);
  const imageUrlFromSrc = normalizeImageUrl(imgTag.match(/src=["']([^"']+)["']/i)?.[1]?.trim() ?? "");
  const imageUrl = toOriginalWordPressImageUrl(imageUrlFromSrcset) ?? imageUrlFromSrcset ?? toOriginalWordPressImageUrl(imageUrlFromSrc) ?? imageUrlFromSrc;
  if (!imageUrl) {
    return null;
  }
  return imageUrl;
}
function toOriginalWordPressImageUrl(url) {
  if (!url) {
    return null;
  }
  const normalizedUrl = normalizeImageUrl(url);
  if (!normalizedUrl) {
    return null;
  }
  const originalUrl = normalizedUrl.replace(/-(\d{2,5})x(\d{2,5})(\.(?:jpe?g|png|webp|avif|gif))(\?.*)?$/i, "$3$4");
  return originalUrl;
}
function formatThaiDate(dateValue) {
  if (!dateValue) {
    return "อัปเดตล่าสุด";
  }
  const parsedDate = new Date(dateValue);
  if (Number.isNaN(parsedDate.getTime())) {
    return "อัปเดตล่าสุด";
  }
  return new Intl.DateTimeFormat("th-TH", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "Asia/Bangkok"
  }).format(parsedDate);
}
function HomePopupModal() {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [popupImageUrl, setPopupImageUrl] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const controller = new AbortController();
    let timeoutId = null;
    let openTimeoutId = null;
    if (window.localStorage.getItem(HOME_POPUP_LAST_SHOWN_KEY) === getBangkokDayStamp()) {
      return () => {
        controller.abort();
      };
    }
    async function loadPopupImage() {
      try {
        const response = await fetch(POPUP_PAGE_ENDPOINT, {
          signal: controller.signal
        });
        if (!response.ok) {
          return;
        }
        const payload = await response.json();
        const imageUrl = extractPopupImageUrl(payload);
        if (!imageUrl) {
          return;
        }
        setPopupImageUrl(imageUrl);
        openTimeoutId = window.setTimeout(() => {
          window.localStorage.setItem(HOME_POPUP_LAST_SHOWN_KEY, getBangkokDayStamp());
          setIsOpen(true);
        }, 2500);
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          console.error("Failed to load popup image", error);
        }
      }
    }
    timeoutId = window.setTimeout(loadPopupImage, POPUP_FETCH_DELAY_MS);
    return () => {
      controller.abort();
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
      if (openTimeoutId !== null) {
        window.clearTimeout(openTimeoutId);
      }
    };
  }, []);
  reactExports.useEffect(() => {
    if (!isOpen) {
      return;
    }
    const onEsc = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [isOpen]);
  if (!popupImageUrl || !isOpen) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[80] flex items-center justify-center bg-black/65 px-3", role: "dialog", "aria-modal": "true", "aria-label": "Popup Promotion", onClick: () => setIsOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-auto max-h-[calc(100dvh-1rem)] max-w-[calc(100vw-1.5rem)] overflow-y-auto p-0", onClick: (event) => event.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-[min(398px,calc(100vw-1.5rem))] overflow-hidden rounded-2xl border border-white/25 bg-black/85 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: popupImageUrl, alt: "Popup promotion", className: "mx-auto block h-auto max-h-[calc(100dvh-8rem)] w-full object-contain", loading: "lazy", decoding: "async" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "aria-label": "Close popup", onClick: () => setIsOpen(false), className: "flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-black/80 text-white transition hover:bg-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) }) })
  ] }) });
}
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);
  return prefersReducedMotion;
}
function HomeBranchSlider({
  imageUrls
}) {
  const sliderRef = reactExports.useRef(null);
  const dragStartRef = reactExports.useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [clientImageUrls, setClientImageUrls] = reactExports.useState([]);
  const [parallaxOffset, setParallaxOffset] = reactExports.useState(0);
  const [isPointerDown, setIsPointerDown] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (imageUrls.length > 0) {
      return;
    }
    const controller = new AbortController();
    fetch(HOME_SLIDES_ENDPOINT, {
      signal: controller.signal
    }).then((r) => r.ok ? r.json() : []).then((data) => {
      const urls = extractSlideImageUrls(data);
      if (urls.length > 0) {
        setClientImageUrls(urls);
      }
    }).catch(() => {
    });
    return () => controller.abort();
  }, [imageUrls.length]);
  const slides = imageUrls.length > 0 ? imageUrls : clientImageUrls.length > 0 ? clientImageUrls : [bydChaengWatthanaImg];
  const [activeIndex, setActiveIndex] = reactExports.useState(0);
  reactExports.useEffect(() => {
    setActiveIndex(0);
  }, [slides.length]);
  reactExports.useEffect(() => {
    if (slides.length <= 1) {
      return;
    }
    const timerId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(timerId);
  }, [slides.length]);
  reactExports.useEffect(() => {
    if (prefersReducedMotion) {
      setParallaxOffset(0);
      return;
    }
    let rafId = 0;
    const updateParallax = () => {
      if (!sliderRef.current) {
        return;
      }
      const rect = sliderRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight * 0.5;
      const sliderCenter = rect.top + rect.height * 0.5;
      const distance = viewportCenter - sliderCenter;
      const offset = Math.max(-42, Math.min(42, distance * 0.12));
      setParallaxOffset(offset);
    };
    const onScroll = () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      rafId = window.requestAnimationFrame(updateParallax);
    };
    updateParallax();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", onScroll);
    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [prefersReducedMotion]);
  const goToPrevious = reactExports.useCallback(() => {
    setActiveIndex((current) => current === 0 ? slides.length - 1 : current - 1);
  }, [slides.length]);
  const goToNext = reactExports.useCallback(() => {
    setActiveIndex((current) => (current + 1) % slides.length);
  }, [slides.length]);
  const handlePointerDown = reactExports.useCallback((event) => {
    if (slides.length <= 1) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const target = event.target;
    if (target?.closest("button, a")) return;
    dragStartRef.current = {
      x: event.clientX,
      y: event.clientY
    };
    setIsPointerDown(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }, [slides.length]);
  const handlePointerUp = reactExports.useCallback((event) => {
    const start = dragStartRef.current;
    dragStartRef.current = null;
    setIsPointerDown(false);
    if (!start) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    const SWIPE_THRESHOLD = 48;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }
    if (deltaX > 0) {
      goToPrevious();
      return;
    }
    goToNext();
  }, [goToNext, goToPrevious]);
  const handlePointerCancel = reactExports.useCallback((event) => {
    dragStartRef.current = null;
    setIsPointerDown(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: sliderRef, className: `relative h-[42vw] min-h-[320px] max-h-[760px] w-full touch-pan-y bg-black ${isPointerDown ? "cursor-grabbing" : "cursor-grab"}`, onPointerDown: handlePointerDown, onPointerUp: handlePointerUp, onPointerCancel: handlePointerCancel, children: [
    slides.map((slide, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: slide, alt: "BYD showroom exterior", width: 1536, height: 556, loading: "lazy", draggable: false, style: {
      transform: `translate3d(0, ${parallaxOffset}px, 0) scale(1.08)`
    }, className: `absolute inset-0 h-full w-full object-cover will-change-transform transition-opacity duration-[1300ms] ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"}` }, slide)),
    slides.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-3 sm:px-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: goToPrevious, "aria-label": "Previous slide", className: "text-white/70 transition hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: goToNext, "aria-label": "Next slide", className: "text-white/70 transition hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-7 w-7" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/35 px-3 py-2 backdrop-blur", children: slides.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setActiveIndex(index), "aria-label": `Go to slide ${index + 1}`, className: `h-2.5 rounded-full transition-all ${index === activeIndex ? "w-7 bg-white" : "w-2.5 bg-white/55 hover:bg-white/80"}` }, `slide-dot-${index}`)) })
    ] })
  ] }) });
}
const WHY = [{
  iconSrc: shieldAltIcon,
  iconAlt: "Shield icon",
  title: "Super Safety",
  subtitle: "ด้วย Design เซลล์แบบใบมีดวางเรียงตัว การระเบิดหรือเกิดไฟลุกจึงเกิดขึ้นได้ยากเมื่อลัดวงจร",
  description: 'เซลส์แบบใบมีด "การทดสอบการเจาะเข็ม" ได้รับการยอมรับในอุตสาหกรรมว่าเป็นวิธีการตรวจจับที่เข้มงวดที่สุดสำหรับความปลอดภัยของเซลล์แบตเตอรี่ โดยไม่เกิดควันและเปลวไฟในกรณีหากเกิดอุบัติเหตุจากการชน'
}, {
  iconSrc: batteryChargingIcon,
  iconAlt: "Battery charging icon",
  title: "Super Strength",
  subtitle: "ความแข็งแรงที่มากกว่า รองรับการสั่นสะเทือน บดขยี้ และแรงอัดดัน",
  description: "ปลอดภัยในหลายสถานการณ์ เพราะ Blade Battery ทนต่อแรงอัดรีดถึง 100-800 kN (กิโลนิวตัน) เสียรูปเพียงเล็กน้อยบนแพ็ค ไม่มีควัน และไม่มีไฟไหม้เกิน"
}, {
  iconSrc: roadIcon,
  iconAlt: "Road icon",
  title: "Super Endurance Mileage",
  subtitle: "มั่นใจได้มากขึ้นสำหรับการขับขี่ระยะไกล",
  description: "BYD ไม่หยุดยั้งในการพัฒนา โดยระยะการขับขี่คาดว่าจะถึง 800KM ในปี 2022"
}, {
  iconSrc: temperatureLowIcon,
  iconAlt: "Low temperature icon",
  title: "Super Low-temperature Performance",
  subtitle: "ความแข็งแรงที่มากกว่า รองรับการสั่นสะเทือน บดขยี้ และแรงอัดดัน",
  description: "Blade Battery ใช้งานได้เต็มประสิทธิภาพสูงสุดตั้งแต่ -35℃ ถึง 55℃"
}, {
  iconSrc: timelapseIcon,
  iconAlt: "Timelapse icon",
  title: "Super Life-time",
  subtitle: "อายุการใช้งานที่ยาวนานทั้งรอบการชาร์จและระยะเวลาการใช้งาน",
  description: "รองรับการชาร์จมากกว่า 5000 ครั้ง หรือประมาณ 13 ปี (ชาร์จทุกวันๆละครั้ง)"
}, {
  iconSrc: powerCordIcon,
  iconAlt: "Power cord icon",
  title: "Super Power",
  subtitle: "เต็มเปี่ยมด้วยพลังงานที่ขับเคลื่อนได้ดั่งใจ ใช้เวลาเพียง 20 นาทีในการชาร์จพลังงาน 70%",
  description: "ตรงตามข้อกำหนดของสถานการณ์การชาร์จที่รวดเร็วที่สุด และปล่อยกำลังสูงสุดถึง 363kW ซึ่งก็ให้อัตราเร่ง ความเร็ว 0-100 km/h ที่ 3.8s"
}];
const FAQS = [{
  q: "รถไฟฟ้า BYD ดีไหม?",
  a: "BYD เป็นแบรนด์รถยนต์ไฟฟ้าอันดับ 1 ของโลกในด้านยอดขาย มีจุดเด่นที่เทคโนโลยี Blade Battery ปลอดภัยสูง รับประกันยาวนาน และศูนย์บริการครอบคลุมทั่วประเทศไทย"
}, {
  q: "BYD วิ่งได้กี่กิโลเมตรต่อการชาร์จ?",
  a: "ขึ้นอยู่กับรุ่นและระบบขับเคลื่อน โดยรุ่น EV ของ BYD มีช่วงระยะทางตั้งแต่ประมาณ 410-567 กม. (มาตรฐาน NEDC) ส่วนรุ่น Plug-in Hybrid จะมีทั้งระยะทาง EV ล้วนและระยะทางรวมสำหรับการเดินทางไกล"
}, {
  q: "ตารางผ่อนรถ BYD เป็นอย่างไร?",
  a: "สามารถใช้เครื่องคำนวณค่างวดของเราเพื่อดูค่างวดที่แท้จริง โดยส่วนใหญ่ค่างวดเริ่มต้น 8,xxx บาท/เดือนสำหรับ Dolphin เมื่อดาวน์ 20% ผ่อน 84 งวด"
}, {
  q: "ค่าไฟชาร์จรถ EV เท่าไรต่อเดือน?",
  a: "ค่าไฟเฉลี่ย 800-1,500 บาทต่อเดือน สำหรับการขับขี่ปกติ 1,500-2,000 กม./เดือน เมื่อชาร์จที่บ้านในช่วง Off-Peak"
}, {
  q: "ซื้อ BYD กรุงเทพที่ไหนดี?",
  a: "BYD จินหลง มอเตอร์ ราชพฤกษ์ เป็นตัวแทนจำหน่ายอย่างเป็นทางการ ให้บริการครบวงจรทั้งการขาย ทดลองขับ บริการหลังการขาย พร้อมโปรโมชั่นพิเศษเฉพาะลูกค้าของเรา"
}];
const SEO_HUB = [{
  title: "BYD จินหลง มอเตอร์ ราชพฤกษ์",
  desc: "ศูนย์ตัวแทนจำหน่ายอย่างเป็นทางการ",
  href: "/contact",
  icon: MapPin
}, {
  title: "ตารางผ่อนรถ BYD",
  desc: "คำนวณค่างวดได้ทันที",
  href: "/byd-installment",
  icon: Wallet
}, {
  title: "โปรโมชั่น BYD",
  desc: "ส่วนลดและของแถมพิเศษ",
  href: "/byd-promotion",
  icon: Gift
}, {
  title: "ทดลองขับ BYD",
  desc: "นัดทดลองขับฟรี ไม่มีค่าใช้จ่าย",
  href: "/test-drive-byd",
  icon: Calendar
}];
function DeferredSection({
  children,
  minHeight,
  rootMargin = "300px"
}) {
  const containerRef = reactExports.useRef(null);
  const [isVisible, setIsVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const element = containerRef.current;
    if (!element || isVisible) {
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        return;
      }
      setIsVisible(true);
      observer.disconnect();
    }, {
      rootMargin
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, style: !isVisible ? {
    minHeight
  } : void 0, children: isVisible ? children : null });
}
function HomePage() {
  const {
    wpPosts,
    installmentWpPosts,
    slideImageUrls
  } = Route$4.useLoaderData();
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();
  const heroVideoUrls = isMobile ? MOBILE_MODEL_HERO_VIDEOS : MODEL_HERO_VIDEOS;
  const [shouldPlayHeroVideo, setShouldPlayHeroVideo] = reactExports.useState(false);
  const [videoIndex, setVideoIndex] = reactExports.useState(0);
  const hasPickedInitialVideo = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const canPlayVideo = !prefersReducedMotion && heroVideoUrls.length > 0;
    if (!canPlayVideo) {
      setShouldPlayHeroVideo(false);
      return;
    }
    setShouldPlayHeroVideo(true);
  }, [heroVideoUrls.length, prefersReducedMotion]);
  reactExports.useEffect(() => {
    if (!shouldPlayHeroVideo) {
      return;
    }
    if (!hasPickedInitialVideo.current || videoIndex >= heroVideoUrls.length) {
      setVideoIndex(Math.floor(Math.random() * heroVideoUrls.length));
      hasPickedInitialVideo.current = true;
    }
    return;
  }, [heroVideoUrls.length, shouldPlayHeroVideo, videoIndex]);
  const blogPosts = wpPosts.length > 0 ? wpPosts.slice(0, 3).map((post) => ({
    id: `wp-${post.id}`,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    date: post.date,
    image: post.image
  })) : ARTICLES.slice(0, 3).map((article) => ({
    id: article.slug,
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    category: article.category,
    date: article.date,
    image: null
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-x-clip", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HomePopupModal, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[92vh] flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "BYD electric SUV driving through Bangkok at night", width: 1920, height: 1080, className: "absolute inset-0 h-full w-full object-cover", loading: "eager", decoding: "sync", fetchPriority: "high" }),
      shouldPlayHeroVideo && /* @__PURE__ */ jsxRuntimeExports.jsx("video", { className: "absolute inset-0 h-full w-full object-cover", autoPlay: true, muted: true, loop: true, playsInline: true, preload: "none", poster: heroImg, "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: heroVideoUrls[videoIndex], type: getVideoMimeType(heroVideoUrls[videoIndex]) }) }, heroVideoUrls[videoIndex]),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-normal leading-[1.05] text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.72em] sm:text-[0.68em] lg:text-[0.62em] text-white", children: "โชว์รูม BYD จินหลง มอเตอร์" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "สาขา ราชพฤกษ์"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-white sm:text-xl", children: "โชว์รูมและศูนย์บริการมาตรฐาน BYD สาขา ราชพฤกษ์" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/models", className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffffff] via-[#f1f3f5] to-[#d9dde3] px-7 py-3.5 text-base font-semibold text-slate-900 shadow-[0_12px_30px_-16px_rgba(255,255,255,0.95)] transition hover:brightness-105", children: [
            "ดูรถทั้งหมด ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/test-drive-byd", className: "inline-flex items-center gap-2 rounded-full glass border border-primary/40 px-7 py-3.5 text-base font-semibold hover:bg-primary/10 transition", children: "นัดทดลองขับ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/byd-installment", className: "inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-muted-foreground hover:text-foreground transition", children: "ดูตารางผ่อน →" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { eyebrow: "รถยนต์ทุกรุ่น", eyebrowClassName: "bg-primary/10 text-primary", title: "รถทุกรุ่น", subtitle: "เลือกรุ่นที่ใช่สำหรับคุณ ทั้ง Sedan, SUV และ DM-i หลากหลายสไตล์" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { minHeight: 380, children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 h-72 rounded-2xl bg-white/5" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModelsScroller, { variant: "light", lightBadgeStyle: "default" }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HomeBranchSlider, { imageUrls: slideImageUrls }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-surface/40 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { eyebrow: "ทำไมต้อง BYD", eyebrowClassName: "bg-primary/10 text-primary", title: "เหตุผลที่ต้องเลือกรถไฟฟ้า BYD", subtitle: "เทคโนโลยีระดับโลก พร้อมบริการครบวงจรในประเทศไทย" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: WHY.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(160deg,rgba(255,255,255,0.94),rgba(247,247,248,0.96))] p-6 shadow-[0_24px_60px_-34px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[0_28px_80px_-32px_rgba(15,23,42,0.18)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(17,24,39,0.06),transparent_36%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-4 top-3 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(215,12,25,0.2),transparent_70%)] opacity-70 blur-2xl transition-opacity duration-300 group-hover:opacity-100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex items-start justify-between gap-4 border-b border-border/70 pb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "max-w-[12ch] text-2xl font-semibold leading-tight tracking-normal text-foreground", children: w.title }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[30ch] text-base font-medium leading-snug text-foreground", children: w.subtitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-7 text-muted-foreground", children: w.description })
        ] })
      ] }, w.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: chargingImg, alt: "EV charging in Bangkok", width: 1280, height: 720, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold text-white sm:text-4xl", children: [
            "สัมผัสประสบการณ์ขับ ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "BYD ด้วยตัวเอง" }),
            " ได้แล้ววันนี้"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/90", children: "นัดทดลองขับฟรี ไม่มีค่าใช้จ่าย ทีมงานพร้อมให้คำปรึกษาอย่างมืออาชีพ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/test-drive-byd", className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-100 to-slate-300 px-8 py-4 text-base font-semibold text-slate-900 shadow-[0_10px_25px_-12px_rgba(226,232,240,0.9)] transition hover:brightness-105", children: [
          "นัดทดลองขับฟรี ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-surface/40 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { eyebrow: "บทความ & รีวิว", eyebrowClassName: "bg-primary/10 text-primary", title: "ความรู้เกี่ยวกับรถไฟฟ้า BYD", subtitle: "อ่านบทความล่าสุดเกี่ยวกับการเลือกซื้อ ดูแล และใช้งานรถ EV" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: blogPosts.map((post) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/$slug", params: {
        slug: post.slug
      }, className: "glass rounded-2xl overflow-hidden hover-lift block h-full flex flex-col", children: [
        post.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-44 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.image, alt: post.title, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" }) }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-1 flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-300 font-semibold", children: post.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-lg font-bold leading-snug line-clamp-2", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground line-clamp-2", children: post.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-4 flex items-center justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatThaiDate(post.date) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-300", children: "อ่านต่อ →" })
          ] })
        ] })
      ] }, post.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface-elevated/80 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-surface-elevated", children: [
        "ดูบทความทั้งหมด ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[56vh] w-full overflow-hidden border-t-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: bydAtto3VtolImg, alt: "BYD ATTO 3 Vehicle to Load technology", width: 1920, height: 1080, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto flex min-h-[56vh] max-w-7xl items-end px-4 pb-8 pt-20 sm:px-6 sm:pb-10 lg:px-8 lg:pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold tracking-normal text-slate-100 sm:text-lg lg:text-xl", children: "BYD มีระบบ VtoL (Vehicle to Load)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs leading-relaxed text-slate-200 sm:text-sm", children: "เทคโนโลยีที่สามารถดึงพลังงานไฟฟ้าจากรถออกไปใช้งานกับเครื่องใช้ไฟฟ้าต่างๆ สามารถปล่อยกระแสไฟได้สูงสุด 2000w 10A." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs leading-relaxed text-slate-200 sm:text-sm", children: "โดยสามารถใช้งานได้จนแบตเตอรี่รถเหลือ SOC 15% ระบบจะตัดไฟอัตโนมัติเพื่อรถยังคงเหลือกำลังไฟในการขับเคลื่อนได้" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { eyebrow: "", title: "บริการของเรา" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: SEO_HUB.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: s.href, className: "glass rounded-2xl p-6 hover-lift block group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-8 w-8 text-[#d70c19]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-bold", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground transition-all group-hover:gap-2", children: [
          "ไปยังหน้า ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 text-muted-foreground" })
        ] })
      ] }, s.href)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeferredSection, { minHeight: 320, children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-10 max-w-7xl rounded-2xl bg-white/5 p-10" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: FAQS }) }) })
  ] }) });
}
function SectionHead({
  eyebrow,
  eyebrowClassName,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-block rounded-full px-3 py-1 text-xs font-medium mb-4 ${eyebrowClassName ?? "glass text-primary"}`, children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-normal", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: subtitle })
  ] });
}
export {
  HomePage as component
};
