<template>
  <div class="page-article my-2">
    <div class="bg-cool-gray-700 overflow-hidden shadow-xl sm:rounded">
      <div class="flex flex-col justify-center">
        <img v-if="!!post.cover_image" :src="post.cover_image" :alt="post.title" />
        <img v-if="!post.cover_image" src="@/assets/images/SulmanWeb-cover.png" :alt="post.title" />
        <p class="px-4 pt-1 text-xs text-cool-gray-400 italic">
          {{ post.readable_publish_date }} &middot;
          {{ post.public_reactions_count }} Reactions
        </p>
        <p class="px-4 pt-1">
          <span
            class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-gray-100 text-gray-800 mr-1"
            v-for="tag in post.tags"
            :key="tag"
          >{{ tag }}</span>
        </p>
        <h1
          class="text-2xl md:text-3xl font-semibold tracking-wider pt-1 pb-2 px-4"
        >{{ post.title }}</h1>
      </div>
    </div>
    <div class="bg-cool-gray-700 overflow-hidden shadow-xl sm:rounded my-2">
      <div class="px-4 py-4 article" v-html="post.body_html"></div>
    </div>
  </div>
</template>

<script>
import hljs from "highlight.js";

export default {
  name: "Article",
  data() {
    return {
      post: {}
    };
  },
  methods: {
    async getPost() {
      try {
        let response = await axios.get(
          `https://dev.to/api/articles/sulmanweb/${this.$route.params.slug}`
        );
        this.post = response.data;
      } catch (err) {
        console.error(err);
      }
    }
  },
  mounted() {
    this.getPost();
  },
  updated() {
    document.querySelectorAll("pre.highlight").forEach(block => {
      hljs.highlightBlock(block);
    });
    var anchors = document.querySelectorAll("[class*=ltag] a");
    for (var i = 0; i < anchors.length; i++) {
      if (anchors[i].hostname === "sulmanweb.com") {
        anchors[i].href = anchors[i].href.replace(
          "https://sulmanweb.com",
          "https://dev.to"
        );
      }
    }
  },
  metaInfo() {
    return {
      title: this.post.title + " <- SulmanWeb",
      meta: [
        {
          name: "description",
          content:
            "#RubyOnRails #NodeJS #VueJS Experienced Web App Dev in Lahore, Pakistan"
        },
        { property: "og:title", content: this.post.title + " <- SulmanWeb" },
        {
          property: "og:site_name",
          content: this.post.title + " <- SulmanWeb"
        },
        { property: "og:type", content: "website" },
        {
          property: "og:url",
          content: "https://sulmanweb.com/blog/" + this.post.slug
        },
        {
          property: "og:image",
          content: this.post.social_image
        },
        {
          property: "og:description",
          content: this.post.description
        },
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: "https://sulmanweb.com/blog/" + this.post.slug
        },
        { name: "twitter:title", content: this.post.title + " <- SulmanWeb" },
        {
          name: "twitter:description",
          content: this.post.description
        },
        { name: "twitter:creator", content: "@sulmanweb" },
        {
          name: "twitter:image:src",
          content: this.post.social_image
        },
        { itemprop: "name", content: this.post.title + " <- SulmanWeb" },
        {
          itemprop: "description",
          content: this.post.description
        },
        {
          itemprop: "image",
          content: this.post.social_image
        }
      ]
    };
  }
};
</script>

<style scoped>
.article {
  @apply text-cool-gray-200 tracking-wide text-sm mx-2 overflow-x-scroll;
}
@screen md {
  .article {
    @apply mx-4;
  }
}
.article >>> img {
  @apply mx-auto mt-2;
}
.article >>> h1 {
  @apply text-4xl;
}
.article >>> h2 {
  @apply text-3xl font-semibold;
}
.article >>> h3 {
  @apply text-2xl font-medium;
}
.article >>> p {
  @apply text-base py-2 leading-7;
}
.article >>> ul {
  @apply m-3;
}
.article >>> li {
  @apply my-2 mx-auto list-disc;
}
.article >>> blockquote {
  @apply border-l-4 bg-cool-gray-800 border-cool-gray-300 rounded;
}
.article >>> blockquote::before {
  @apply text-cool-gray-200 text-5xl leading-3;
  content: open-quote;
  vertical-align: -0.4em;
}
.article >>> blockquote p {
  @apply inline;
}
.article >>> a {
  @apply text-cool-gray-50 underline;
}
.article >>> li {
  @apply ml-4;
}
.article >>> pre {
  @apply my-1 p-2 shadow-lg rounded font-mono overflow-x-scroll overflow-y-hidden;
}
.article >>> :not(pre) > code {
  @apply bg-cool-gray-900 px-2 py-1 rounded-lg font-mono;
}
.article >>> blockquote {
  padding: 2em;
}
.article >>> .ltag__replit iframe {
  @apply max-w-7xl m-4;
}

/* ltag link */
.article >>> .ltag__link {
  @apply self-center max-w-xl border-2 p-4 flex items-center justify-around;
}
@screen md {
  .article >>> .ltag__link {
    @apply mx-40;
  }
  .article >>> .ltag__link h2 {
    @apply text-2xl;
  }
  .article >>> .ltag__link h3 {
    @apply text-xl;
  }
}
.article >>> .ltag__link a {
  @apply no-underline;
}
.article >>> .ltag__link img {
  @apply rounded-full;
}
.article >>> .ltag__link h2 {
  @apply text-lg;
}
.article >>> .ltag__link h3 {
  @apply text-xs text-gray-500;
}
.article >>> .ltag__link .ltag__link__tag {
  @apply text-xs;
}
.article >>> .ltag__link .ltag__link__link {
  @apply pr-3;
}

/* ltag user link */

.article >>> .ltag__user {
  @apply self-center max-w-3xl border-2 border-cool-gray-50 flex items-center justify-around m-4;
  border-width: 2px !important;
  border-color: #f7fafc !important;
  box-shadow: none !important;
}
@screen md {
  .article >>> .ltag__user {
    @apply mx-20 px-5 pt-2 pb-3;
  }
  .article >>> .ltag__user h2 {
    font-size: 24px !important;
  }
  .article >>> .ltag__user__content {
    @apply pl-4;
  }
  .article >>> .ltag__user__summary {
    font-size: 12px !important;
  }
  .article >>> .ltag__user .ltag__user__social {
    @apply text-center flex items-center text-cool-gray-50;
  }
}
.article >>> .ltag__user a {
  @apply no-underline;
}
.article >>> .ltag__user .ltag__user__content {
  @apply pl-2;
}
.article >>> .ltag__user img {
  @apply rounded-full mr-1 w-96;
}
.article >>> .ltag__user .icon-img {
  @apply w-5 h-5 inline mt-0;
}
.article >>> .ltag__user h2 {
  @apply text-lg;
}
.article >>> .ltag__user h3 {
  @apply text-xs text-cool-gray-500;
}
.article >>> .ltag__user .ltag__user__user {
  @apply pr-3;
}
.article >>> .ltag__user .ltag__user__social {
  @apply text-cool-gray-50 text-xs;
}
.article >>> .ltag__user .ltag__user__social a {
  @apply inline pt-2 ml-1;
}

/* ltag-github-readme-tag */
.article >>> .ltag-github-readme-tag {
  @apply self-center max-w-xl border-2 p-4  items-center justify-around;
}
@screen md {
  .article >>> .ltag-github-readme-tag {
    @apply mx-40;
  }
  .article >>> .ltag-github-readme-tag h2 {
    @apply text-2xl;
  }
  .article >>> .ltag-github-readme-tag h3 {
    @apply text-xl;
  }
}
.article >>> .ltag-github-readme-tag .ltag-github-body {
  @apply hidden;
}
.article >>> .ltag-github-readme-tag h1 {
  @apply no-underline text-lg;
}
.article >>> .ltag-github-readme-tag h2 {
  @apply no-underline text-sm;
}
.article >>> .ltag-github-readme-tag a {
  @apply no-underline text-sm;
}
.article >>> .ltag-github-readme-tag img {
  @apply w-5 mt-0 inline;
}
.article >>> .ltag-github-readme-tag .readme-overview {
  @apply text-center;
}
.article >>> .ltag-github-readme-tag .gh-btn-container {
  @apply text-center;
}
.article >>> .ltag-github-readme-tag .gh-btn {
  @apply bg-cool-gray-900 px-4 py-2 rounded;
}
</style>
