export type LifeNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 22 | 33;

export const MASTER_NUMBERS: LifeNumber[] = [11, 22, 33];
export const ALL_NUMBERS: LifeNumber[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33];

function digitSum(n: number): number {
  return String(n).split("").reduce((a, c) => a + Number(c), 0);
}

export function calculateLifePath(year: number, month: number, day: number): LifeNumber {
  let sum = digitSum(year) + digitSum(month) + digitSum(day);
  while (sum > 9 && !MASTER_NUMBERS.includes(sum as LifeNumber)) {
    sum = digitSum(sum);
  }
  return sum as LifeNumber;
}

export function calculationSteps(year: number, month: number, day: number): string[] {
  const steps: string[] = [];
  const allDigits = `${year}${String(month).padStart(2, "0")}${String(day).padStart(2, "0")}`.split("");
  steps.push(allDigits.join(" + "));
  let sum = allDigits.reduce((a, c) => a + Number(c), 0);
  steps.push(String(sum));
  while (sum > 9 && !MASTER_NUMBERS.includes(sum as LifeNumber)) {
    const parts = String(sum).split("");
    sum = parts.reduce((a, c) => a + Number(c), 0);
    steps.push(`${parts.join(" + ")} = ${sum}`);
  }
  return steps;
}

export function isMaster(n: LifeNumber): boolean {
  return MASTER_NUMBERS.includes(n);
}

export interface NumberProfile {
  number: LifeNumber;
  title: string;
  keywords: string[];
  tagline: string;
  traits: string;
  lessons: string;
  direction: string;
  relations: string;
  luckyNumbers: number[];
  luckyColors: { name: string; hex: string }[];
  luckyDates: string;
}

export const PROFILES: Record<LifeNumber, NumberProfile> = {
  1: {
    number: 1, title: "领导者",
    keywords: ["独立", "开创", "自主"],
    tagline: "你是那道率先推门而入的光。",
    traits: "你常常带着天然的主导意识，习惯独立思考，倾向于走在他人之前。你身上有种不轻易被环境推动的力量，遇到不确定时，更愿意亲自去试。这种自主性让你显得果断，也让你在关键时刻总能成为发起者。",
    lessons: "你需要学习的，是在坚持中保留柔软，在前进时不忘倾听。过度追求独立可能让你与人疏离，孤立感是你常需面对的课题。真正的领导，是带着别人一起前行，而非独自抵达终点。",
    direction: "你适合开创性、决策性的角色——创业、研发、独立创作、管理岗位。任何允许你设定方向的领域，都能让你发光。避免长期处于被动执行的环境，那会消耗你的内在能量。",
    relations: "你与 3、5 这类轻盈灵动的数字相处自如，能彼此激发；与 2、6 形成互补，他们的温柔可以中和你的锋芒；与另一个 1 容易竞争，需要双方都学会让位。",
    luckyNumbers: [1, 9],
    luckyColors: [{ name: "朱红", hex: "#C8302C" }, { name: "金黄", hex: "#E0A82E" }],
    luckyDates: "每月 1、10、19、28 日",
  },
  2: {
    number: 2, title: "协调者",
    keywords: ["敏感", "合作", "平衡"],
    tagline: "你是连接两端之间最柔韧的那根线。",
    traits: "你天生敏锐，能感受到别人未说出口的情绪，倾向于在群体中扮演调和者的角色。你重视关系胜过输赢，常常能看见冲突背后的真实需要。这种共情力是你最珍贵的礼物。",
    lessons: "你的课题在于学会为自己说话。过度照顾他人感受，可能让你忽略自己的边界。允许自己有'不'的权利，也是一种成熟的温柔。",
    direction: "你适合需要协作与情感智慧的领域——咨询、教育、人力资源、外交、艺术合作。任何强调'人与人之间'的工作，都能让你展现独特价值。",
    relations: "你与 6、9 共鸣最深，彼此都珍视情感；与 1、8 形成互补，他们的果断让你更安心；与另一个 2 之间容易过度共情，需要保持独立空间。",
    luckyNumbers: [2, 7],
    luckyColors: [{ name: "月白", hex: "#E8EAF0" }, { name: "雾蓝", hex: "#7C9DB5" }],
    luckyDates: "每月 2、11、20、29 日",
  },
  3: {
    number: 3, title: "创造者",
    keywords: ["表达", "活力", "乐观"],
    tagline: "你把生活过成了一场未完待续的诗。",
    traits: "你富有表达欲，思维跳跃，常常能从平凡中看到趣味。你的乐观像是一种本能，能感染身边的人。语言、色彩、声音是你与世界交流的方式。",
    lessons: "活力的另一面是分散。你需要学会把热情聚焦，把灵感落地。深度，是你让创造力真正绽放的关键。",
    direction: "你适合创意类、表达类的工作——写作、设计、表演、媒体、教育。任何能让你输出独特视角的舞台，都属于你。",
    relations: "你与 1、5 一拍即合，彼此放大热情；与 6 形成温柔的平衡；与 4、8 之间需要适应彼此的节奏差异。",
    luckyNumbers: [3, 6, 9],
    luckyColors: [{ name: "鹅黄", hex: "#F4D35E" }, { name: "珊瑚粉", hex: "#F08080" }],
    luckyDates: "每月 3、12、21、30 日",
  },
  4: {
    number: 4, title: "建造者",
    keywords: ["稳健", "专注", "务实"],
    tagline: "你用一砖一瓦，垒起别人眼中的奇迹。",
    traits: "你信赖秩序与节奏，擅长把宏大的设想拆解成可执行的步骤。你身上有一种让人安心的稳定感，承诺过的事，几乎不会失约。",
    lessons: "你需要学习的是松弛与变通。生活并不总按计划展开，过度的控制欲会让你错过一些美好的偶然。允许意外发生，也是一种力量。",
    direction: "你适合需要长期积累与执行力的领域——工程、建筑、金融、运营、研发。慢工出细活的事业，最能彰显你的价值。",
    relations: "你与 2、6、8 相处稳定，彼此都重视责任；与 5 形成有趣的张力，对方能让你松动；与 3、11 之间需要彼此理解节奏差异。",
    luckyNumbers: [4, 8],
    luckyColors: [{ name: "深绿", hex: "#2E5339" }, { name: "石灰白", hex: "#E5E1D8" }],
    luckyDates: "每月 4、13、22、31 日",
  },
  5: {
    number: 5, title: "探险者",
    keywords: ["自由", "变化", "好奇"],
    tagline: "你把每一次告别，都看作下一段旅程的开端。",
    traits: "你的人生关键词是'体验'。你抗拒被定义，渴望尝试不同的角色与可能。变化对你而言不是焦虑，而是养料。",
    lessons: "你需要学习的是稳定与承诺的价值。频繁的更换可能让你错过深度体验，学会在某些选择上扎根，会让自由更有重量。",
    direction: "你适合多变、跨界、流动性强的工作——旅行、媒体、销售、创业、自由职业。任何能给你新鲜空气的环境，都能让你保持活力。",
    relations: "你与 1、3、7 相处轻松，彼此尊重独立；与 6 形成温柔的拉力；与 4、8 之间需要找到节奏的平衡。",
    luckyNumbers: [5, 1],
    luckyColors: [{ name: "天青", hex: "#5DADE2" }, { name: "薄荷绿", hex: "#A8E6CF" }],
    luckyDates: "每月 5、14、23 日",
  },
  6: {
    number: 6, title: "守护者",
    keywords: ["责任", "温暖", "家庭"],
    tagline: "你是别人疲惫时，第一个想到的避风港。",
    traits: "你天生具有照顾他人的本能，对家庭、社群、亲密关系有强烈的归属感。你愿意为所爱之人承担，常常被视作可以依靠的存在。",
    lessons: "你的课题是分清责任与负担。过度的付出可能让你失去自我，学会在给予前，先照顾好自己内心的那盏灯。",
    direction: "你适合与人、与关怀相关的领域——医疗、教育、咨询、家庭服务、公益。能让你滋养他人的工作，也会反哺你自己。",
    relations: "你与 2、9 共鸣最深；与 3、5 形成生动的互补；与另一个 6 之间需要警惕过度纠缠。",
    luckyNumbers: [6, 3, 9],
    luckyColors: [{ name: "玫瑰金", hex: "#D4A5A5" }, { name: "森林绿", hex: "#3C6E47" }],
    luckyDates: "每月 6、15、24 日",
  },
  7: {
    number: 7, title: "智慧者",
    keywords: ["内省", "分析", "灵性"],
    tagline: "你在沉默中，听见了世界的另一种语言。",
    traits: "你倾向于向内探索，独处对你不是孤独，而是一种必要的滋养。你重视真理、深度与思考，常常能看穿表象抵达本质。",
    lessons: "你需要学习的是与世界保持连接。过度内向可能让你与现实疏离，学会把内在洞见分享出来，也是一种慷慨。",
    direction: "你适合研究、写作、灵修、分析、技术专精类的领域。能让你深耕一方天地的事业，最能让你安住。",
    relations: "你与 2、5 之间存在微妙的吸引；与另一个 7 能彼此理解，但也容易彼此孤立；与 8 之间需要适应价值观差异。",
    luckyNumbers: [7, 2],
    luckyColors: [{ name: "深紫", hex: "#5D3FD3" }, { name: "银灰", hex: "#B8B8B8" }],
    luckyDates: "每月 7、16、25 日",
  },
  8: {
    number: 8, title: "成就者",
    keywords: ["野心", "权力", "财富"],
    tagline: "你把抱负，变成了脚下的阶梯。",
    traits: "你拥有强大的目标感与执行力，对资源、影响力、成就有敏锐的直觉。你不掩饰自己的雄心，并愿意为之付出代价。",
    lessons: "你的课题是平衡物质与精神。过度追求外在成就，可能让你忽略内在的丰盈。学会在巅峰时仍保持谦卑，是你长久之道。",
    direction: "你适合商业、金融、管理、政治、大型项目类的领域。任何允许你掌控资源、塑造格局的舞台，都属于你。",
    relations: "你与 2、4、6 形成稳定支撑；与 1 之间容易竞争；与 7 之间需要彼此学习。",
    luckyNumbers: [8, 4],
    luckyColors: [{ name: "墨黑", hex: "#1A1A2E" }, { name: "酒红", hex: "#722F37" }],
    luckyDates: "每月 8、17、26 日",
  },
  9: {
    number: 9, title: "博爱者",
    keywords: ["慈悲", "完成", "奉献"],
    tagline: "你是燃尽自己，也要照亮远方的那束光。",
    traits: "你心怀广阔，对人类整体有天然的关怀。你倾向于看到大局，能为超越个人的事业投入。你的人生，常常带有某种使命感。",
    lessons: "你的课题是学会接受。习惯付出的你，可能不擅长被照顾。允许自己脆弱、允许自己被爱，也是一种圆满。",
    direction: "你适合公益、艺术、人文、跨文化、心理类的领域。任何能让你影响他人、传递温度的工作，都能让你燃烧。",
    relations: "你与 2、6 共鸣深厚；与 3、5 形成生动的互动；与另一个 9 之间能彼此理解使命。",
    luckyNumbers: [9, 3, 6],
    luckyColors: [{ name: "金箔", hex: "#D4AF37" }, { name: "海洋蓝", hex: "#1B4965" }],
    luckyDates: "每月 9、18、27 日",
  },
  11: {
    number: 11, title: "直觉者",
    keywords: ["灵感", "洞察", "启示"],
    tagline: "你听见了别人尚未说出的频率。",
    traits: "作为主数字，你拥有比常人更敏锐的直觉与精神感知力。你常常被灵感推动，能在艺术、灵性、创新的领域捕捉到独特的信号。你的存在，本身就是一种启发。",
    lessons: "你的课题是把高频率的感知落地。强烈的敏感可能让你疲惫，学会照顾神经系统、给灵感一个具体的容器，是你重要的修行。",
    direction: "你适合艺术、灵性引导、心理、设计、写作、创新类的领域。任何允许你把无形之物显化的工作，都属于你。",
    relations: "你与 2、7 之间有深层的共振；与 4、8 之间需要适应彼此的频率差异；与另一个 11 之间会有强烈的共鸣，也需要彼此独立。",
    luckyNumbers: [11, 2, 7],
    luckyColors: [{ name: "靛蓝", hex: "#3F51B5" }, { name: "珍珠白", hex: "#F5F5F0" }],
    luckyDates: "每月 11、20、29 日",
  },
  22: {
    number: 22, title: "建筑师",
    keywords: ["宏图", "实践", "影响"],
    tagline: "你能把愿景，造成可以走进去的房间。",
    traits: "作为主数字中最具实践力的存在，你既有 11 的远见，又有 4 的执行力。你能构想宏大的蓝图，并真正有能力把它建成现实。你的影响力，往往超越个人范畴。",
    lessons: "你的课题是承担与放下的平衡。巨大的潜能也意味着巨大的责任压力，学会信任协作者、不必独自扛起一切，是你长久走下去的关键。",
    direction: "你适合大型项目、组织建设、社会创新、跨领域整合类的工作。任何能让你把宏图付诸实施的舞台，都是你的天地。",
    relations: "你与 4、8 形成稳定的实务伙伴；与 11、33 之间共享主数字的共鸣；与轻盈的 3、5 之间能彼此调和。",
    luckyNumbers: [22, 4, 8],
    luckyColors: [{ name: "深蓝", hex: "#0100FB" }, { name: "黄铜", hex: "#B5651D" }],
    luckyDates: "每月 4、13、22、31 日",
  },
  33: {
    number: 33, title: "导师",
    keywords: ["智慧", "治愈", "引领"],
    tagline: "你的存在，本身就是一种安静的疗愈。",
    traits: "作为最罕见的主数字，你结合了 6 的关怀与 11 的灵性，以及 22 的实践力。你常常被无形的使命牵引，愿意为他人的成长奉献自己。你的存在，对身边人是一种深层的滋养。",
    lessons: "你的课题是边界与自我关照。当你把自己活成一座灯塔，也要记得灯塔本身需要燃料。学会接受、学会休息，是你能长久燃烧的前提。",
    direction: "你适合教育、心理疗愈、精神引领、人文创作、长期社会项目。任何能让你以智慧滋养他人的工作，都属于你。",
    relations: "你与 6、9 之间有深层的爱与共鸣；与 11、22 之间共享主数字的频率；与所有数字都能找到给予的方式，需要警惕的是过度承担。",
    luckyNumbers: [33, 6, 9],
    luckyColors: [{ name: "祖母绿", hex: "#046307" }, { name: "暖白", hex: "#FAF7F2" }],
    luckyDates: "每月 6、15、24 日",
  },
};