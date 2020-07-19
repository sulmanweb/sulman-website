<template>
  <div class="page-home my-2">
    <div class="bg-cool-gray-700 overflow-hidden shadow-xl sm:rounded">
      <div class="px-4 py-5 sm:p-6">
        <div class="grid grid-cols-3 gap-4">
          <div
            class="profile-photo mx-auto md:my-auto col-span-3 md:col-span-1"
          >
            <img
              class="h-32 w-32 md:h-48 md:w-48 rounded-full"
              src="@/assets/images/sulmanweb.jpg"
              alt="SulmanWeb"
            />
          </div>
          <div
            class="profile-intro mt-4 md:mt-0 text-center col-span-3 md:col-span-2"
          >
            <h1 class="tracking-widest text-3xl md:text-4xl font-semibold">
              Sulman Baig
            </h1>
            <p class="text-xs md:text-sm text-center">
              Software Engineer @
              <a href="https://mailmunch.com">MailMunch</a>
            </p>
            <p class="text-sm md:text-base text-center mt-2">
              Experienced in Ruby on Rails, NodeJS and VueJS web application
              development. Working in industry for more than 7 years now.
            </p>
            <div class="flex justify-center md:order-2 mt-2 md:mt-4">
              <a
                href="https://www.linkedin.com/in/sulmanweb/"
                target="_blank"
                class="text-cool-gray-400 hover:text-cool-gray-500"
              >
                <span class="sr-only">LinkedIn</span>
                <font-awesome-icon
                  :icon="['fab', 'linkedin']"
                  class="text-2xl"
                />
              </a>
              <a
                href="https://www.facebook.com/sulmanwebdev"
                target="_blank"
                class="ml-6 text-cool-gray-400 hover:text-cool-gray-500"
              >
                <span class="sr-only">Facebook</span>
                <font-awesome-icon
                  :icon="['fab', 'facebook']"
                  class="text-2xl"
                />
              </a>
              <a
                href="https://twitter.com/sulmanweb"
                target="_blank"
                class="ml-6 text-cool-gray-400 hover:text-cool-gray-500"
              >
                <span class="sr-only">Twitter</span>
                <font-awesome-icon
                  :icon="['fab', 'twitter']"
                  class="text-2xl"
                />
              </a>
              <a
                href="https://github.com/sulmanweb"
                target="_blank"
                class="ml-6 text-cool-gray-400 hover:text-cool-gray-500"
              >
                <span class="sr-only">GitHub</span>
                <font-awesome-icon
                  :icon="['fab', 'github-alt']"
                  class="text-2xl"
                />
              </a>
              <a
                href="https://dev.to/sulmanweb"
                target="_blank"
                class="ml-6 text-cool-gray-400 hover:text-cool-gray-500"
              >
                <span class="sr-only">Dev.to</span>
                <font-awesome-icon :icon="['fab', 'dev']" class="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-cool-gray-700 text-cool-gray-200 pt-16 pb-16 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8 mt-2"
    >
      <div class="relative max-w-lg mx-auto lg:max-w-7xl">
        <div>
          <h2
            class="text-3xl leading-9 tracking-tight font-extrabold text-gray-200 sm:text-4xl sm:leading-10 text-center"
          >
            Recent publications
          </h2>
          <p class="mt-3 text-xl leading-7 text-gray-200 sm:mt-4 text-center">
            Recent publications of mine which can also be found on
            <a href="https://dev.to/sulmanweb" target="_blank">Dev.to</a>
          </p>
        </div>
        <div class="mt-12 border-t-2 border-gray-100 pt-12">
          <div v-for="post in latestPosts" :key="post.id">
            <div class="my-2 py-3 border-cool-gray-300 border-b-2">
              <a href="#">
                <div class="flex text-sm leading-5 text-gray-400">
                  <time>
                    {{ post.readable_publish_date }}
                  </time>
                  <span class="mx-1">
                    &middot;
                  </span>
                  <span> {{ post.public_reactions_count }} Reactions </span>
                </div>
                <div class="block">
                  <h3
                    class="mt-4 text-xl leading-7 font-semibold text-gray-200"
                  >
                    {{ post.title }}
                  </h3>
                  <p class="mt-3 text-base leading-6 text-gray-300">
                    {{ post.description }}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center mt-10">
        <a
          href="#"
          class="flex align-middle bg-cool-gray-900 px-4 py-2 rounded-lg"
          >More Articles</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      latestPosts: [],
    };
  },
  methods: {
    async getLatestPosts() {
      try {
        let response = await axios.get(
          "https://dev.to/api/articles?username=sulmanweb&per_page=5"
        );
        this.latestPosts = response.data;
      } catch (err) {
        console.error(err);
      }
    },
  },
  mounted() {
    this.getLatestPosts();
  },
};
</script>
