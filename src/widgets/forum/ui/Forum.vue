<template>
  <div class="min-h-screen bg-base-200">
    <main class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Основной контент -->
        <div class="lg:col-span-3 space-y-8">
          <!-- Закрепленные топики -->
          <section class="bg-base-100 rounded-xl shadow-lg">
            <div class="p-6 border-b border-base-300">
              <h2 class="text-2xl font-bold">📌 Закрепленные топики</h2>
            </div>
            <div class="divide-y divide-base-300">
              <ForumTopic
                v-for="topic in pinnedTopics"
                :key="topic.id"
                :topic="topic"
                pinned
              />
            </div>
          </section>
          <!-- Новости -->
          <section class="bg-base-100 rounded-xl shadow-lg">
            <div class="p-6 border-b border-base-300">
              <h2 class="text-2xl font-bold">📰 Последние новости</h2>
            </div>
            <div class="divide-y divide-base-300">
                <NewsPost
                v-for="news in latestNews"
                :key="news.id"
                :news="news"
              />
              
            </div>
          </section>
          <!-- Последние посты -->
          <section class="bg-base-100 rounded-xl shadow-lg">
            <div class="p-6 border-b border-base-300">
              <h2 class="text-2xl font-bold">💬 Последние обсуждения</h2>
            </div>
            <div class="divide-y divide-base-300">
              <ForumTopic
                v-for="topic in latestTopics"
                :key="topic.id"
                :topic="topic"
              />
            </div>
          </section>
        </div>
        <!-- Боковая панель -->
        <aside class="lg:col-span-1 space-y-8">
          <!-- Чат -->
          <div class="bg-base-100 rounded-xl shadow-lg h-[600px] sticky top-8">
            <div class="p-6 border-b border-base-300">
              <h2 class="text-2xl font-bold">💭 Чат форума</h2>
            </div>
            <div class="p-4 h-[calc(100%-80px)] flex flex-col">
              <div class="flex-1 overflow-y-auto space-y-4 chat-container">
                <ChatMessage
                  v-for="message in chatMessages"
                  :key="message.id"
                  :message="message"
                />
              </div>
              <div class="mt-4">
                <input
                  v-model="newMessage"
                  type="text"
                  placeholder="Написать сообщение..."
                  class="input input-bordered w-full"
                  @keyup.enter="sendMessage"
                />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  </div>
</template>
<script setup>
import { ForumTopic, NewsPost, ChatMessage } from "@widgets/forum";

// Тестовые данные
const pinnedTopics = ref([
  {
    id: 1,
    title: "🔥 Новые возможности форума!",
    content: "Добавлена поддержка темной темы и новые эмодзи в чате.",
    author: {
      name: "Admin",
      avatar: "https://i.imgur.com/1QZQZQz.png",
    },
    createdAt: "2024-02-01T12:00:00Z",
    replies: 12,
  },
  {
    id: 2,
    title: "🚀 Добро пожаловать на форум!",
    content: "Рады видеть вас здесь! Ознакомьтесь с правилами форума.",
    author: {
      name: "Moderator",
      avatar: "https://i.imgur.com/2QZQZQz.png",
    },
    createdAt: "2024-01-30T14:30:00Z",
    replies: 3,
  },
]);

const latestNews = ref([
  {
    id: 1,
    title: "🎉 Новый дизайн!",
    content: "Мы обновили интерфейс форума для удобства пользователей.",
    createdAt: "2024-02-02T10:00:00Z",
    image: "https://via.placeholder.com/400x200",
  },
  {
    id: 2,
    title: "🔒 Улучшение безопасности",
    content: "Добавлены новые алгоритмы защиты данных пользователей.",
    createdAt: "2024-02-01T09:30:00Z",
    image: "https://via.placeholder.com/400x200",
  },
]);

const latestTopics = ref([
  {
    id: 3,
    title: "Как активировать ночной режим?",
    author: "User456",
    createdAt: "2024-02-02T15:00:00Z",
    replies: 5,
  },
  {
    id: 4,
    title: "Какие функции вы хотите увидеть?",
    author: "TechGuru",
    createdAt: "2024-02-01T18:20:00Z",
    replies: 8,
  },
]);

const chatMessages = ref([
  {
    id: 1,
    author: "Admin",
    content: "Привет всем! Как вам новый дизайн форума? 🚀",
    timestamp: new Date("2024-02-02T16:30:00Z"),
  },
  {
    id: 2,
    author: "User789",
    content: "Привет! Очень круто, теперь все выглядит современно! 😃",
    timestamp: new Date("2024-02-02T16:35:00Z"),
  },
  {
    id: 3,
    author: "Moderator",
    content:
      "Если есть предложения по улучшению, пишите в раздел 'Обратная связь'!",
    timestamp: new Date("2024-02-02T16:40:00Z"),
  },
]);

const newMessage = ref("");

// Метод для скролла чата вниз
const scrollToEnd = () => {
  nextTick(() => {
    const chatContainer = document.querySelector(".chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  });
};

// Метод отправки сообщений
const sendMessage = () => {
  if (newMessage.value.trim()) {
    const newMsg = {
      id: Date.now(),
      author: "UserTest",
      content: newMessage.value,
      timestamp: new Date(),
    };
    chatMessages.value.push(newMsg);
    newMessage.value = "";
    scrollToEnd();
  }
};
</script>
