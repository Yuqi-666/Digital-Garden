'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {ProgressiveBlur} from "@/components/progressive_blur";
import Sentence from "@/components/sentence";
import {SparklesText} from "@/components/ui/sparkles-text";
import ImageCard from "@/components/cards/image-text-card";

const LoveLetter = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 所有句子内容
  const sentences = [
    "抱歉这份告白来得太迟，让你等了这么久。",
    "当写下这句话时，我笑了一下",
    "毕竟，我印象中的告白，总是一个人对另一个人的突然袭击",
    "伴随着内心的期许与忐忑",
    "可我们偏偏不一样，毫不掩饰自己的心思",
    "以至于告白这件事也是两个人商量着来",
    "或许这份彼此知晓心意的感觉",
    "从初次见面，对视时对方放光的眼神中就产生了",
    "那是我的心动时刻",
    "",
    "在那之前，我一直过着独来独往的生活",
    "我习惯了一个人吃饭",
    "一个人健身",
    "一个人泡在图书馆里",
    "一个人去琴房消遣时光",
    "一个人绕着操场一遍又一遍地散步",
    "我自认为已然为自己建立了一种生活秩序",
    "它能帮助我对抗孤独，充实自己",
    "仿佛不需要第二个人出现在我的生活中",
    "直到遇见了你",
    "",
    "遇见你，让我确认我的心是确确实实地正在跳动着",
    "遇见你，让我感觉到，在这熙熙攘攘的，陌生的钢铁丛林中，被察觉到",
    "遇见你，就像遇见多年未见的老友，如此熟悉亲切，来得那么自然，毫无生分",
    "你知道吗？当时接过你递来的琴谱，我愣了一下、有些迟疑，其实是在悄悄审视自己 —— 怕我的唐突会越界，让你不舒服。",
    "因为我能感觉到，大脑像在分泌某种甜滋滋的激素，让我止不住得笑，好像整个人都被一股陌生的亲密感裹住。哪怕那只是我们的第一次见面。",
    "",
    "后来，我们尝试着了解彼此",
    "我想与你再见一面",
    "再次体验那种心动的感觉",
    "但你好像一直很忙",
    "后来不知怎么就不再联系",
    "那段时间",
    "我又回到了那个独来独往的生活",
    "希望让自己忙起来，充实内心",
    "但是，我心里总感觉空落落的",
    "我总是想起你，总是希望和你聊上两句",
    "可又不知从何说起",
    "如此过去好久",
    "终于在一天",
    "我终于忍受不住那种孤寂感",
    "联系了你",
    "",
    "那是我做过最正确的决定",
    "你又重新走进了我的生活",
    "我喜欢跟你分享生活中的琐事",
    "我喜欢跟你分享旅途中的风景见闻",
    "我喜欢跟你分享我喜欢的音乐和你给我分享的音乐",
    "我喜欢你跟我分享你的美食",
    "我喜欢你跟我分享你的以前，你的现在",
    "我喜欢你陪着我在游戏中冒险，即便一开始操作有点生疏",
    "我喜欢你乐意听我分享我的一切，并给我反馈",
    "我喜欢你每次见面时开心的样子",
    "我喜欢你的鬼点子，你的坏笑",
    "我喜欢你化妆时的样子和不化妆时的样子",
    "我喜欢你的穿着打扮，即便有时候展现出品味不佳",
    "我喜欢你的头发，如果时双马尾就更好了",
    "我喜欢你的棕色瞳孔、鼻子、嘴巴",
    "我喜欢你说话的声音，真的很甜",
    "我喜欢你笑的样子，然后我会问“你笑什么”",
    "还有，我喜欢你",
    "",
    "我真的好喜欢你",
    "我想跟你更亲密一点，再亲密一点",
    "我想在我们走路时拉着你的手",
    "我想在你感觉难过的时候将你拥抱在怀里",
    "我想在你玩完雪后，把你手揣进我的兜里",
    "我想在我们脸颊靠近的时候突然亲你",
    "我想在你累的时候松松肩，捶捶背",
    "",
    "我想让你做我的女朋友",
    "一直一直呆在我身边",
    "我们一起见证彼此的成长",
    "一起面对生活",
    "经历喜怒哀乐",
    "",
    "我希望",
    "多年以后，当我们在某个慵懒的下午再次重读这封告白信时，将会回想起在琴房相识的那个遥远夜晚"
  ];
  
  // 生成随机角度（-15 到 15 度）
  const getRandomAngle = () => {
    return Math.floor(Math.random() * 30) - 15;
  };
  
  // 图片数据数组 - 改为 ImageCard 参数对象数组
  const cardData = [
    { imageSrc: "/images/微信图片_20251216113708_107_21.jpg", title: "整理头发中", description: "小喵的侧颜", angle: getRandomAngle() },
    { imageSrc: "/images/微信图片_20251216113710_109_21.jpg", title: "摆弄雪人中", description: "欺负一只雪人？", angle: getRandomAngle() },
    { imageSrc: "/images/微信图片_20251216113721_110_21.jpg", title: "氛围感", description: "被要求拍的", angle: getRandomAngle() },
    { imageSrc: "/images/微信图片_20251216113724_111_21.jpg", title: "脸", description: "我的摄影眼", angle: getRandomAngle() },
    { imageSrc: "/images/微信图片_20251216113728_112_21.jpg", title: "纪念品", description: "和小喵一起看魅影", angle: getRandomAngle() },
    { imageSrc: "/images/微信图片_20251216113732_113_21.jpg", title: "合照", description: "两个漂亮人", angle: getRandomAngle() },
    { imageSrc: "/images/微信图片_20251216113736_114_21.jpg", title: "摄影中", description: "我拍你拍它", angle: getRandomAngle() },
    { imageSrc: "/images/微信图片_20251216113742_116_21.jpg", title: "小喵开心中", description: "我拍小喵开心中", angle: getRandomAngle() },
    { imageSrc: "/images/微信图片_20251216113745_117_21.jpg", title: "小熊", description: "小喵喜欢", angle: getRandomAngle() },
    { imageSrc: "/images/微信图片_20251216113747_118_21.jpg", title: "偷拍小喵整理头发", description: "不小心把自己拍进去了", angle: getRandomAngle() }
  ];
  
  // 使用 useRef 来跟踪已使用的卡片索引，确保图片不重复显示
  const usedCardIndexesRef = useRef<Set<number>>(new Set());
  
  // 获取下一个未使用的卡片数据
  const getNextCardData = () => {
    // 如果所有卡片都已使用，重置已使用集合
    if (usedCardIndexesRef.current.size >= cardData.length) {
      usedCardIndexesRef.current.clear();
    }
    
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cardData.length);
    } while (usedCardIndexesRef.current.has(randomIndex));
    
    usedCardIndexesRef.current.add(randomIndex);
    return cardData[randomIndex];
  };
  
  // 计算卡片插入位置
  const getCardInsertPositions = () => {
    // 计算实际有内容的句子数量
    const contentSentences = sentences.filter(s => s.trim() !== '');
    const totalContentSentences = contentSentences.length;
    
    // 决定插入卡片的数量（约为内容句子数的1/3）
    const cardCount = Math.min(Math.max(3, Math.floor(totalContentSentences / 3)), cardData.length);
    
    // 计算插入卡片的位置索引
    const cardPositions = [];
    const interval = Math.floor(totalContentSentences / (cardCount + 1));
    
    for (let i = 1; i <= cardCount; i++) {
      cardPositions.push(i * interval);
    }
    
    return cardPositions;
  };
  
  // 计算当前索引是第几个有内容的句子
  const getContentIndex = (index: number) => {
    return sentences.slice(0, index).filter(s => s.trim() !== '').length;
  };
  
  // 注册 ScrollTrigger 插件
  gsap.registerPlugin(ScrollTrigger);
  
  // 使用 GSAP 和 ScrollTrigger 实现滚动触发的句子显示动画
  useEffect(() => {
    if (!containerRef.current) return;
    
    // 获取所有句子和卡片元素
    const sentenceElements = containerRef.current.querySelectorAll('p, .empty-line');
    const cardElements = containerRef.current.querySelectorAll('.card-wrapper');
    
    // 为句子添加动画
    sentenceElements.forEach((element, index) => {
      // 跳过空行，只对实际句子应用动画
      if (element.classList.contains('empty-line')) return;
      
      gsap.fromTo(element, 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%', // 当元素顶部到达视口80%位置时开始动画
            end: 'bottom 20%', // 当元素底部到达视口20%位置时结束动画
            toggleActions: 'play none none reverse', // 滚动时播放，反向滚动时反转
            once: false // 允许动画重复触发
          }
        }
      );
    });
    
    // 为卡片添加动画
    cardElements.forEach((element, index) => {
      gsap.fromTo(element, 
        { opacity: 0, scale: 0.8, rotate: 0 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 1,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%', // 当元素顶部到达视口85%位置时开始动画
            end: 'bottom 15%', // 当元素底部到达视口15%位置时结束动画
            toggleActions: 'play none none reverse', // 滚动时播放，反向滚动时反转
            once: false // 允许动画重复触发
          }
        }
      );
    });
  }, []);
  
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center bg-[#fff8d4] text-black">
      <div className="w-full max-w-4xl px-6 pt-[35vh] pb-[50vh]">
        <div className="flex flex-col items-center gap-20">
          <SparklesText text="写给文潇淼" />
          
          {/* 主内容区，包含正文和两侧的卡片 */}
          <div ref={containerRef} className="relative">
            {/* 正文内容 */}
            <div className="flex flex-col gap-6 text-center">
              {sentences.map((sentence, index) => {
                // 计算当前是第几个有内容的句子
                const contentIndex = getContentIndex(index);
                
                // 计算卡片插入位置
                const cardPositions = getCardInsertPositions();
                
                // 检查是否需要在当前段落后插入卡片
                const shouldInsertCard = cardPositions.includes(contentIndex);
                
                // 获取卡片数据（如果需要插入）
                const card = shouldInsertCard ? getNextCardData() : null;
                
                return (
                  <div key={`sentence-${index}`} className="relative">
                    {/* 正文句子 */}
                    {sentence ? (
                      <Sentence>{sentence}</Sentence>
                    ) : (
                      <div className="h-8 empty-line"></div>
                    )}
                    
                    {/* 插入卡片 */}
                    {card && (
                      <div 
                        className="card-wrapper absolute -z-10" 
                        style={{
                          left: Math.random() > 0.5 ? '-120px' : 'calc(100% + 60px)',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          zIndex: 1
                        }}
                      >
                        <ImageCard 
                          {...card} 
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* 将模糊效果放在内容之后，这样它就能覆盖在内容之上 */}
      <ProgressiveBlur position="top" backgroundColor="#fff8d4" height="30%" className="fixed" />
      <ProgressiveBlur position="bottom" backgroundColor="#fff8d4" height="30%" className="fixed" />
    </div>
  );
};
export default LoveLetter;
