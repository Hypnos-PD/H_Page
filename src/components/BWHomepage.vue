<template>
  <div
    class="min-h-screen bg-black text-white font-sans relative overflow-hidden custom-cursor flex"
  >
    <!-- 主内容区域 -->
    <div class="container flex-grow p-8 md:p-16 with-nav">
      <header>
        <!-- 标题和副标题 -->
        <h1
          class="roman text-with-superscript text-4xl md:text-6xl mb-4 transition-all underline-animation"
        >
          Hypnos PD
        </h1>
        <p class="udmincho text-xl md:text-2xl text-gray-400">
          一個不知所雲之人
        </p>
        <br /><br />
        <p class="roman text-5xl text-gray-300 mb-6">
          Gehealden mín inwit, gehealdan Hyht.
        </p>
      </header>

      <main class="content mt-16">
        <transition
          name="slide"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <!-- “首页”部分，当 activeSection 为 'home' 时显示 -->
          <section v-if="activeSection === 'home'" class="mb-16">
            <HomeContent />
          </section>
        </transition>

        <transition
          name="slide"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <!-- “关于我”部分，当 activeSection 为 'about' 时显示 -->
          <section v-if="activeSection === 'about'" class="mb-16">
            <h2 class="roman text-3xl font-bold mb-6">About Me</h2>
            <p class="udmincho text-lg text-gray-300 mb-4">
              目前還是個学生。 平日会折騰 Code,Design 相関。 喜歓遊戯和音楽。
            </p>
            <p class="udmincho text-lg text-gray-300">
              技術桟還很浅，正在鋭力学習中。
            </p>
          </section>
        </transition>

        <transition
          name="slide"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <!-- “项目”部分，当 activeSection 为 'projects' 时显示 -->
          <section v-if="activeSection === 'projects'" class="mb-16">
            <h2 class="roman text-3xl font-bold mb-6">Projects</h2>
            <!-- 项目网格布局，使用 v-for 渲染项目列表 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div v-for="project in projects" :key="project.id" class="group">
                <h3
                  class="udmincho text-2xl font-semibold mb-2 group-hover:text-gray-300 transition-colors duration-300"
                >
                  {{ project.title }}
                </h3>
                <p class="udmincho text-gray-400 mb-2">
                  {{ project.description }}
                </p>
                <!-- 项目图片，懒加载 -->
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-48 object-cover rounded-lg grayscale"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </transition>

        <transition
          name="slide"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <!-- “联系”部分，当 activeSection 为 'contact' 时显示 -->
          <section v-if="activeSection === 'contact'" class="mb-16">
            <h2 class="roman text-3xl font-bold mb-6">Contact</h2>
            <p class="udmincho text-lg text-gray-300 mb-4">
              歓迎随時聯係，無論是合作還是友好的問候。
            </p>
            <p class="text-lg text-gray-300 mb-4">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
            <p class="udmincho text-lg text-gray-300 mb-4">
              コラボレーションのご提案や、ただの友好的な挨拶でも、お気軽にご連絡ください。
            </p>
            <p class="roman text-lg text-gray-300 mb-4">
              Fühlen Sie sich frei, mich für Kooperationen oder einfach nur für
              ein freundliches Hallo zu kontaktieren.
            </p>
            <br />
            <!-- 社交链接，使用 v-for 渲染社交图标 -->
            <div class="flex space-x-6">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <component :is="link.icon" class="w-8 h-8" />
              </a>
            </div>
          </section>
        </transition>
      </main>
      <footer>
        <p class="text-gray-400">
          © 2024 <a class="text-white" href="https://hypd.asia">寐鱼游宫</a>.
          All rights reserved.
        </p>
      </footer>
    </div>

    <!-- 右侧固定导航栏 -->
    <nav
      class="fixed right-0 top-0 h-full flex flex-col justify-center items-center w-16 md:w-24 bg-white"
    >
      <!-- 最上面的图标 -->
      <div class="my-4">
        <button
          @click="activeSection = 'home'"
          class="nav-icon p-2 text-black transition-all duration-300 cursor-pointer hover:text-gray-800"
          :class="{ 'text-gray-800': activeSection === 'home' }"
          aria-label="Home"
        >
          <BookIcon class="w-6 h-6" />
        </button>
      </div>

      <div class="flex-grow flex flex-col justify-center">
        <!-- 导航按钮，使用 v-for 渲染 -->
        <div v-for="link in navLinks" :key="link.name" class="my-4">
          <button
            @click="activeSection = link.name"
            class="nav-icon p-2 text-black transition-all duration-300 cursor-pointer focus:border-l-2 focus:border-gray-800 hover:text-gray-800"
            :class="{ 'text-gray-800': activeSection === link.name }"
            :aria-label="link.name"
          >
            <component :is="link.icon" class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- 返回顶部按钮 -->
      <div class="my-4">
        <button
          @click="scrollToTop"
          class="nav-icon p-2 text-black transition-all duration-300 cursor-pointer hover:text-gray-800"
          aria-label="Scroll to Top"
        >
          <ArrowUpCircleIcon class="w-6 h-6" />
          <!-- 使用 ArrowUpCircleIcon 作为返回顶部图标 -->
        </button>
      </div>
    </nav>

    <!-- 自定义光标 -->
    <div ref="customCursor" class="custom-cursor-element"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import HomeContent from "./HomeContent.vue";
import {
  BookIcon,
  UserIcon,
  BriefcaseIcon,
  MailIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  ArrowUpCircleIcon,
} from "lucide-vue-next";

// 定义接口或类型
interface NavLink {
  name: string;
  icon: any; // 可以更具体地声明类型，例如定义为 JSX.Element
}

interface SocialLink {
  name: string;
  url: string;
  icon: any; // 同上
}

const activeSection = ref<string>("home"); // 当前激活的部分
const customCursor = ref<HTMLDivElement | null>(null); // 自定义光标引用

// 导航栏链接和对应的图标
const navLinks: NavLink[] = [
  { name: "about", icon: UserIcon },
  { name: "projects", icon: BriefcaseIcon },
  { name: "contact", icon: MailIcon },
];

const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// 项目列表
const projects = [
  {
    id: 1,
    title: "無",
    description: "暂时没有很好的项目",
    image: "/placeholder.svg?height=200&width=300",
  },
];

// 社交链接列表
const socialLinks: SocialLink[] = [
  { name: "Email", url: "mailto://hp@hypd.asia", icon: MailIcon },
  { name: "GitHub", url: "https://github.com/Hypnos-PD", icon: GithubIcon },
  { name: "Twitter", url: "https://twitter.com/HypnosPD", icon: TwitterIcon },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/hypnos-p-190368323",
    icon: LinkedinIcon,
  },
];

// 过渡动画处理
const beforeEnter = (el: Element): void => {
  const element = el as HTMLElement; // 使用类型断言
  element.style.transform = "translateX(-100%)";
  element.style.opacity = "0";
};

const enter = (el: Element, done: () => void): void => {
  const element = el as HTMLElement; // 使用类型断言
  element.offsetHeight; // trigger reflow
  element.style.transition = "transform 0.5s ease, opacity 0.5s ease";
  element.style.transform = "translateX(0)";
  element.style.opacity = "1";
  done();
};

const leave = (el: Element, done: () => void): void => {
  const element = el as HTMLElement; // 使用类型断言
  element.style.transition = "transform 0.5s ease, opacity 0.5s ease";
  element.style.transform = "translateX(100%)";
  element.style.opacity = "0";
  done();
};

// 检查是否为移动设备
const isMobile = /Mobi|Android/i.test(navigator.userAgent);

if (!isMobile) {
  // 鼠标移动时自定义光标跟随
  const moveCursor = (e: MouseEvent): void => {
    if (customCursor.value) {
      customCursor.value.style.left = `${e.clientX}px`;
      customCursor.value.style.top = `${e.clientY}px`;
    }
  };

  // 鼠标按下时缩小光标
  const shrinkCursor = (): void => {
    if (customCursor.value) {
      customCursor.value.classList.add("cursor-shrink");
    }
  };

  // 鼠标释放时恢复光标大小
  const expandCursor = (): void => {
    if (customCursor.value) {
      customCursor.value.classList.remove("cursor-shrink");
    }
  };

  // 组件挂载时添加事件监听
  onMounted(() => {
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", shrinkCursor);
    document.addEventListener("mouseup", expandCursor);
  });

  // 组件卸载时移除事件监听
  onUnmounted(() => {
    document.removeEventListener("mousemove", moveCursor);
    document.removeEventListener("mousedown", shrinkCursor);
    document.removeEventListener("mouseup", expandCursor);
  });
}
</script>

<style>
@import url(../assets/css/font.css);
@import url(../assets/css/cursor.css);
@import url(../assets/css/nav.css);
@import url(../assets/css/scrollbar.css);
@import url(../assets/css/selection.css);
@import url(../assets/css/animation.css);
</style>
