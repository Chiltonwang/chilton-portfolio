import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  TimerReset,
  UsersRound,
} from 'lucide-react';
import './styles.css';

const navItems = [
  ['经历', '#experience'],
  ['项目', '#projects'],
  ['优势', '#strengths'],
  ['联系', '#contact'],
];

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const metrics = [
  { value: '6+', label: '品牌线下推广与整合营销经验' },
  { value: '60+', label: '高端体验活动累计交付' },
  { value: '0', label: '客诉 / 安全事故' },
  { value: '120%', label: '音乐节试饮参与率达成' },
];

const projects = [
  {
    title: 'Kakubin 上海快闪店',
    brand: '宾三得利',
    type: 'Pop-up Campaign Report',
    image: asset('/assets/projects/kakubin.png'),
    brief: '面向年轻消费人群的城市快闪体验，聚焦品牌识别、试饮互动与社交传播。',
    role: '客户需求确认、现场动线梳理、供应商 / 场地 / 人员协同、物料清单与执行时间表管理。',
  },
  {
    title: 'JIM BEAM 草莓音乐节快闪店',
    brand: '宾三得利',
    type: 'Festival Completion Report',
    image: asset('/assets/projects/jimbeam-strawberry.jpg'),
    brief: '音乐节高客流场景下的新客触达与新品试饮转化，支撑单日上万级消费者接待。',
    role: '现场统筹、试饮流程设计、兼职培训、互动话术与突发情况协调。',
  },
  {
    title: '传奇源自拉菲罗斯柴尔德 成都快闪',
    brand: 'LEGENDE R',
    type: 'Campaign Report',
    image: asset('/assets/projects/legende.jpg'),
    brief: '核心商圈品牌体验快闪，兼顾品牌形象展示、消费者教育与现场销售转化。',
    role: '客户沟通、执行排期、设计搭建跟进、现场运营流程、排班及物料管理。',
  },
  {
    title: 'The Glenrothes 40 年上市发布会',
    brand: 'Edrington Group',
    type: 'Event Launch Report',
    image: asset('/assets/projects/glenrothes.jpg'),
    brief: '高端威士忌发布与私享晚宴，面向品牌高层、媒体与高净值客户。',
    role: '嘉宾接待、座位动线、酒款服务节奏、供应商沟通与现场应急预案。',
  },
  {
    title: 'Edrington Group CIIE',
    brand: 'Edrington Group',
    type: 'Completion Report',
    image: asset('/assets/projects/ciie.jpg'),
    brief: '大型展会场景下的品牌露出、消费者互动与多方资源协作。',
    role: '展会执行推进、供应商协调、现场巡检、问题复盘及客户反馈整理。',
  },
  {
    title: '金宾圣诞限时小镇',
    brand: 'Jim Beam',
    type: 'Pop-up Completion Report',
    image: asset('/assets/projects/christmas.jpg'),
    brief: '节日档期快闪体验，以沉浸式场景和试饮互动提升品牌触达。',
    role: '搭建跟进、动线管理、人员分工、库存巡检和撤场节点控制。',
  },
];

const strengths = [
  {
    icon: ClipboardList,
    title: '把 Brief 变成可执行清单',
    text: '能快速拆解客户需求，明确任务、节点、责任人、预算与风险项，让项目从第一天就进入可控状态。',
  },
  {
    icon: UsersRound,
    title: '多方资源统筹',
    text: '熟悉客户、设计、搭建、场地、人员、供应商之间的协作节奏，能在高压进度里保持沟通清晰。',
  },
  {
    icon: TimerReset,
    title: '现场交付与应变',
    text: '围绕动线、物料、服务话术、客流秩序和安全预案做现场巡检，问题出现时快速判断并处理。',
  },
  {
    icon: Sparkles,
    title: '复盘与效率工具',
    text: '擅长沉淀照片、数据、反馈和问题清单，也主动使用 AI 工具提高资料整理、方案梳理和提案表达效率。',
  },
];

function HeroVideo() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video || !canvas.captureStream) return undefined;

    const ctx = canvas.getContext('2d');
    const width = 1600;
    const height = 900;
    canvas.width = width;
    canvas.height = height;
    video.srcObject = canvas.captureStream(30);
    video.play().catch(() => {});

    let frame = 0;
    let raf = 0;

    const draw = () => {
      frame += 1;
      const t = frame / 360;
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#f8f7f3');
      gradient.addColorStop(0.48, '#ffffff');
      gradient.addColorStop(1, '#efede7');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 24; i += 1) {
        const y = 80 + i * 34 + Math.sin(t * 2.6 + i * 0.28) * 24;
        ctx.beginPath();
        ctx.moveTo(-80, y);
        ctx.bezierCurveTo(
          width * 0.25,
          y - 42 + Math.sin(t + i) * 18,
          width * 0.64,
          y + 54 + Math.cos(t * 1.3 + i) * 22,
          width + 80,
          y + Math.sin(t * 2 + i) * 14,
        );
        ctx.strokeStyle = `rgba(24, 23, 20, ${i % 5 === 0 ? 0.07 : 0.035})`;
        ctx.lineWidth = i % 5 === 0 ? 1.3 : 0.7;
        ctx.stroke();
      }

      for (let i = 0; i < 8; i += 1) {
        const x = ((i * 227 + frame * (0.22 + i * 0.02)) % (width + 360)) - 180;
        const y = 150 + ((i * 143) % 620) + Math.sin(t + i) * 28;
        const r = 105 + (i % 4) * 36;
        const circle = ctx.createRadialGradient(x, y, 8, x, y, r);
        circle.addColorStop(0, 'rgba(255,255,255,0.55)');
        circle.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = circle;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <video ref={videoRef} className="heroVideo" muted autoPlay loop playsInline aria-hidden="true" />
      <canvas ref={canvasRef} className="motionCanvas" aria-hidden="true" />
    </>
  );
}

function App() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.replace('#', ''));
      if (!id) return;
      document.getElementById(id)?.scrollIntoView({ block: 'start' });
    };

    const initialTimer = window.setTimeout(scrollToHash, 120);
    window.addEventListener('hashchange', scrollToHash);

    return () => {
      window.clearTimeout(initialTimer);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);

  return (
    <main>
      <section className="hero" id="home">
        <HeroVideo />
        <div className="heroShade" />
        <nav className="nav shell" aria-label="主导航">
          <a className="brand" href="#home" aria-label="返回首页">
            <span>CHILTON</span>
            <small>SAE Portfolio</small>
          </a>
          <div className="navLinks">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
          <a className="navContact" href="mailto:wer15181680053@outlook.com">
            <Mail size={17} />
            联系我
          </a>
        </nav>

        <div className="heroInner shell">
          <div className="heroKicker">
            <span>Senior Account Executive</span>
            <span>Shanghai</span>
          </div>
          <h1>
            把品牌体验
            <br />
            落到现场。
          </h1>
          <p>
            王清正 Chilton，6 年以上品牌线下推广与整合营销经验，长期服务洋酒及快消品牌，专注客户沟通、项目推进、供应商统筹与高质量现场交付。
          </p>
          <div className="heroActions">
            <a href="#projects" className="primaryButton">
              查看项目
              <ArrowUpRight size={18} />
            </a>
            <a href="tel:13386190053" className="ghostButton">
              <Phone size={17} />
              13386190053
            </a>
          </div>
        </div>
      </section>

      <section className="experience section shell" id="experience">
        <div className="sectionLabel">Experience</div>
        <div className="experienceGrid">
          <div className="portraitBlock">
            <img src={asset('/assets/profile.png')} alt="王清正 Chilton 个人照片" />
            <div className="portraitCaption">
              <strong>王清正 Chilton</strong>
              <span>高级客户执行 / SAE</span>
            </div>
          </div>
          <div className="introBlock">
            <p className="eyebrow">蕴策意制上海广告有限公司 · 2019/10 - 2025/06</p>
            <h2>在客户期待、供应商限制和现场变量之间，保持项目稳定向前。</h2>
            <p className="introText">
              我熟悉从客户 Brief 解读、方案推进、预算报价、供应商统筹到现场执行复盘的完整流程。过往项目覆盖快闪店、酒展、品鉴晚宴、发布会、音乐节和大型展会，长期服务 Brown-Forman、宾三得利、爱丁顿集团等客户。
            </p>
            <div className="contactStrip">
              <a href="tel:13386190053">
                <Phone size={17} />
                13386190053
              </a>
              <a href="mailto:wer15181680053@outlook.com">
                <Mail size={17} />
                wer15181680053@outlook.com
              </a>
              <span>
                <MapPin size={17} />
                上海
              </span>
            </div>
            <div className="metricsGrid">
              {metrics.map((item) => (
                <div className="metric" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="shell">
          <div className="sectionHeader">
            <div>
              <div className="sectionLabel">Selected Work</div>
              <h2>精选项目 Report 与完工报告</h2>
            </div>
            <p>
              从商圈快闪到音乐节，从大型展会到高端晚宴，项目背后重点不是“看起来热闹”，而是每个节点都能被执行、检查和复盘。
            </p>
          </div>
          <div className="projectGrid">
            {projects.map((project, index) => (
              <article className={`projectCard projectCard${index + 1}`} key={project.title}>
                <div className="projectImage">
                  <img src={project.image} alt={`${project.title} 项目封面`} />
                </div>
                <div className="projectBody">
                  <div className="projectMeta">
                    <span>{project.brand}</span>
                    <span>{project.type}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.brief}</p>
                  <div className="roleLine">
                    <CheckCircle2 size={18} />
                    <span>{project.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="strengths section shell" id="strengths">
        <div className="sectionHeader compact">
          <div>
            <div className="sectionLabel">Strengths</div>
            <h2>我的优势</h2>
          </div>
          <p>客户执行的价值，在于让创意方案穿过真实世界的限制后，仍然保持体面、准时和可交付。</p>
        </div>
        <div className="strengthGrid">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <article className="strengthCard" key={item.title}>
                <Icon size={26} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="contactFinal" id="contact">
        <div className="shell contactInner">
          <div>
            <div className="sectionLabel">Contact</div>
            <h2>期待进入下一个现场。</h2>
            <p>
              可沟通高级客户执行、PM、策划执行相关机会。偏好上海，期待继续服务重体验、重交付、重细节的品牌项目。
            </p>
          </div>
          <div className="contactPanel">
            <a href="mailto:wer15181680053@outlook.com">
              <Mail size={20} />
              wer15181680053@outlook.com
            </a>
            <a href="tel:13386190053">
              <Phone size={20} />
              13386190053
            </a>
            <span>
              <MessageCircle size={20} />
              可提供完整项目报告与复盘材料
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
