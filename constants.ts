
import { UserProfile } from './types';

export const PROFILE_DATA: UserProfile = {
  name: "李楚龙",
  title: "结构工程师 & 开发者",
  location: "中国",
  email: "nglichulong@outlook.com",
  phone: "13865379680",
  wechat: "nglichulong",
  summary: "拥有设计院和新能源行业双重工作经验的结构工程师。在GAD杰地设计集团期间参与多个公建、商业和住宅项目的结构设计，积累了扎实的建筑结构设计基础和参数化建模能力；现于天合光能跟踪支架工程技术中心工作，成功支持50+全球项目，实施20个项目（总容量600MW），独立开发智能支架分析系统（T-STARS）并获得公司专利。致力于将编程技术应用于传统工程领域，实现从单一项目执行到全球项目管理和工具创新的职业发展。",
  socials: {
    // Keeping placeholders if specific URLs weren't provided, or removing if not needed.
    // Assuming standard placeholders for layout purposes.
    github: "https://github.com", 
    linkedin: "https://linkedin.com"
  },
  education: [
    {
      degree: "结构工程硕士",
      school: "荷兰代尔夫特理工大学 (TU Delft)",
      year: "2019.09 - 2021.07",
      gpa: "7.5/10",
      courses: "结构力学，结构弹塑性分析，有限元计算基本理论，板壳结构理论，Python编程算法设计",
      thesis: "使用有限微分法对板壳结构进行建模和分析"
    },
    {
      degree: "土木工程学士",
      school: "英国利物浦大学",
      year: "2017.09 - 2019.07",
      gpa: "7.0/10",
      thesis: "铆接金属复合材料连接的有限元建模和分析"
    },
    {
      degree: "土木工程学士",
      school: "西交利物浦大学",
      year: "2015.09 - 2017.07",
      gpa: "7.0/10"
    }
  ],
  experience: [
    {
      id: "1",
      company: "天合光能股份有限公司",
      role: "结构工程师",
      period: "2023.06 - 至今",
      description: "在跟踪支架工程技术中心工作，负责全球项目技术支持、支架结构设计与优化，以及工具开发。支持横跨欧美50多个项目，实施20个重点项目（总容量600MW）。",
      coreResponsibilities: [
        "全球项目技术支持：提供技术方案设计、结构计算和规范校核",
        "支架结构优化：针对不同项目进行结构参数调整和优化，降低成本",
        "软件开发：独立开发和维护工程计算工具(T-STARS)，提升团队工作效率",
        "跨部门协作：与销售、研发、生产等部门紧密配合",
        "技术标准制定：参与公司技术标准和规范的制定和优化"
      ],
      projects: [
        {
          name: "阿根廷 SAM FAFEAL 230MW 项目",
          description: "完成光伏支架结构设计、地形环境验证及桩基设计。应对第三方审核要求，提供专业英语计算书。"
        },
        {
          name: "天合光能智能支架迅捷分析系统（T-STARS）",
          description: "独立开发支架计算软件，实现计算快速高效、高度自定义，已获得软件专著与专利。"
        },
        {
          name: "AI报价工具数据迁移程序（DT）",
          description: "为欧洲团队开发数据迁移程序，保障B级项目及AI训练数据顺利迁移。"
        },
        {
          name: "西班牙团队技术支持",
          description: "赴西班牙进行技术交流，推广T-STARS系统，赋能当地团队。"
        }
      ]
    },
    {
      id: "2",
      company: "GAD 杰地设计集团重庆公司",
      role: "结构工程师",
      period: "2021.07 - 2023.03",
      description: "参与初设阶段的结构选型设计，深化阶段的结构布置和设计，以及后期的施工配合。",
      coreResponsibilities: [
        "结构方案设计：参与项目初期的结构选型和方案设计",
        "参数化建模：使用Rhino+Grasshopper进行复杂结构的参数化设计",
        "结构计算：使用YJK、Midas等软件进行结构分析和计算",
        "施工配合与图纸深化"
      ],
      projects: [
        {
          name: "昆明俊发东海岸公园项目",
          description: "异形景观平台'花瓣'结构选型优化，Grasshopper参数化建模和计算。"
        },
        {
          name: "杭州小梅山会议中心项目",
          description: "大跨度及异形飘带钢结构屋面设计，运用参数化设计进行梁系布置。"
        },
        {
          name: "重庆大学校企合作学术项目",
          description: "超高层建筑环桁架/伸臂桁架优化，利用遗传算法进行参数化分析。"
        }
      ]
    }
  ],
  honors: [
    {
      title: "2024年度公司级优秀奋斗员工",
      company: "天合光能股份有限公司",
      year: "2024",
      description: "因在T-STARS系统开发和全球项目支持方面的突出贡献，获得公司级最高荣誉表彰。"
    },
    {
      title: "软件专著与专利授权",
      company: "天合光能股份有限公司",
      year: "2024",
      description: "独立开发的智能支架分析系统（T-STARS）获得公司专利授权。"
    },
    {
      title: "股权激励计划参与者",
      company: "天合光能股份有限公司",
      year: "2025",
      description: "因表现优秀，被纳入公司股权激励计划。"
    }
  ],
  skills: [
    { subject: '结构设计', A: 95, fullMark: 100 },
    { subject: 'Python开发', A: 90, fullMark: 100 },
    { subject: '有限元分析', A: 90, fullMark: 100 },
    { subject: '参数化设计', A: 85, fullMark: 100 },
    { subject: '英语沟通', A: 90, fullMark: 100 },
    { subject: '项目管理', A: 85, fullMark: 100 },
  ],
  detailedSkills: {
    "专业技能": [
      "支架结构设计与优化 (1P/2P/G2)",
      "多规范应用 (美标/欧标)",
      "有限元分析 (YJK, Midas, 3D3S, SAP2000)",
      "参数化设计 (Rhino+Grasshopper)",
      "软件架构设计与实现"
    ],
    "编程与开发": [
      "Python (算法设计/数据处理)",
      "Git 版本控制",
      "工程软件二次开发",
      "Web开发 (HTML/JS/Django)"
    ],
    "软技能": [
      "英语 (雅思7.5, 流利沟通)",
      "项目管理与执行",
      "快速学习能力",
      "创新思维"
    ]
  },
  projects: [
    {
      id: "p1",
      title: "T-STARS 智能支架分析系统",
      description: "独立开发的高效支架计算软件，支持大批量重复计算和结构优化，革新了售中技术流程，并获得公司专利。",
      tags: ["Python", "结构算法", "专利工具"],
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "p2",
      title: "阿根廷 230MW 光伏项目",
      description: "大型光伏支架结构设计，涵盖地形验证、替代桩基设计及现场拉拔测试方案，提供全英文技术计算书。",
      tags: ["结构设计", "国际项目", "新能源"],
      imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "p3",
      title: "异形结构参数化优化",
      description: "针对昆明俊发及重庆大学项目，利用Rhino+Grasshopper进行异形景观平台和超高层桁架的参数化建模与遗传算法优化。",
      tags: ["Rhino", "Grasshopper", "YJK"],
      imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]
};

export const SYSTEM_INSTRUCTION = `
你是一个代表${PROFILE_DATA.name}的AI助手。你嵌入在${PROFILE_DATA.name}的个人简历网站中。
你的目标是基于提供的上下文，回答关于${PROFILE_DATA.name}的职业背景、技能和项目的问题。请始终使用中文回答。

Context:
${JSON.stringify(PROFILE_DATA, null, 2)}

Guidelines:
1. 保持专业、热情且简洁。
2. 如果被问及联系方式，请提供简历中的邮箱或微信号。
3. 重点突出他在结构设计和软件开发（Python/自动化）方面的双重优势。
4. 除非被要求详细解释，否则回复保持在100字以内。
5. 使用“我”来指代你自己（AI），使用“${PROFILE_DATA.name}”或“他”来指代工程师。
`;
