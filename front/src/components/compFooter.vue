<template>
  <div class="bg-cool-gray-700 w-full">
    <div
      class="max-w-5xl mx-auto py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
    >
      <div class="flex justify-center md:order-2">
        <a
          href="https://www.linkedin.com/in/sulmanweb/"
          target="_blank"
          class="text-cool-gray-400 hover:text-cool-gray-500"
        >
          <span class="sr-only">LinkedIn</span>
          <font-awesome-icon :icon="['fab', 'linkedin']" class="text-2xl" />
        </a>
        <a
          href="https://www.facebook.com/sulmanwebdev"
          target="_blank"
          class="ml-6 text-cool-gray-400 hover:text-cool-gray-500"
        >
          <span class="sr-only">Facebook</span>
          <font-awesome-icon :icon="['fab', 'facebook']" class="text-2xl" />
        </a>
        <a
          href="https://twitter.com/sulmanweb"
          target="_blank"
          class="ml-6 text-cool-gray-400 hover:text-cool-gray-500"
        >
          <span class="sr-only">Twitter</span>
          <font-awesome-icon :icon="['fab', 'twitter']" class="text-2xl" />
        </a>
        <a
          href="https://github.com/sulmanweb"
          target="_blank"
          class="ml-6 text-cool-gray-400 hover:text-cool-gray-500"
        >
          <span class="sr-only">GitHub</span>
          <font-awesome-icon :icon="['fab', 'github-alt']" class="text-2xl" />
        </a>
        <a
          href="https://dev.to/sulmanweb"
          target="_blank"
          class="ml-6 text-cool-gray-400 hover:text-cool-gray-500"
        >
          <span class="sr-only">Dev.to</span>
          <font-awesome-icon :icon="['fab', 'dev']" class="text-2xl" />
        </a>
        <a
          href="mailto:sulmanweb@gmail.com"
          class="ml-6 text-cool-gray-400 hover:text-cool-gray-500"
        >
          <span class="sr-only">sulmanweb@gmail.com</span>
          <font-awesome-icon :icon="['fas', 'at']" class="text-2xl" />
        </a>
      </div>
      <div class="mt-4 md:mt-0 md:order-1">
        <p
          class="text-center text-base leading-6 text-cool-gray-400"
        >&copy; 2020 SulmanWeb. All rights reserved.</p>
        <div class="text-center text-sm leading-6 text-cool-gray-400 tracking-wide">
          Powered By
          <a href="https://dev.to/" target="_blank" class="mx-1">
            <font-awesome-icon :icon="['fab', 'dev']" class="text-base" />
          </a>
          <a href="https://tailwindui.com/" target="_blank" class="mx-1">
            <svg
              class="w-6 h-6 fill-current inline"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"
              />
            </svg>
          </a>
          <a href="https://fontawesome.com/" target="_blank" class="mx-1">
            <font-awesome-icon :icon="['fab', 'font-awesome']" class="text-base" />
          </a>
          <a href="https://www.netlify.com/" target="_blank" class="mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              class="w-5 h-5 fill-current inline"
              style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                d="M22.579 11.36c.151.077.291.181.405.307l3.131-1.396l-2.921-2.896l-.657 3.943zm-6.5-2.631c.156.229.249.489.281.765l4.661 1.975c.14-.109.301-.188.473-.235l.765-4.735L19.42 3.52l-3.343 5.135zm15.91 7.318l-4.995-4.995l-3.401 1.391l8.355 3.552s.073.052.041.052zm-.833.813l-8.02-3.428a1.39 1.39 0 0 1-.933.541l-.859 5.277c.255.26.401.609.401.973l4.843 1.016l4.443-4.412v-.083zm-10.625-4.527l-4.353-1.855a1.593 1.593 0 0 1-1.391.724h-.265l-3.609 5.568l9.635-4.172v.011a1.674 1.674 0 0 1 0-.224c.005-.016 0-.036-.016-.052zm5.292 9.746l-4.26-.881a1.4 1.4 0 0 1-.615.459l-1.016 6.297l5.917-5.865s-.011.032-.027.032zm-5.959-.434a1.393 1.393 0 0 1-.823-.948l-7.932-1.629l-.115.183l7.199 10.411l.432-.427l1.224-7.563s.041.031.015.016zm-8.588-3.536l7.839 1.615a1.39 1.39 0 0 1 1.099-.697l.849-5.188l-.183-.156l-9.744 4.177c.052.077.099.161.14.249zm-3.287 1.307l-.167-.165l-3.38 1.389l1.64 1.631l1.865-2.896zm2.23.532a1.895 1.895 0 0 1-.749.167c-.209 0-.407-.032-.605-.099l-2.057 2.995l9.021 8.937l1.588-1.579zm-1.266-3.521c.135-.015.276-.015.416 0c.152-.02.308-.02.459 0l3.645-5.667a1.588 1.588 0 0 1-.443-1.099a1.478 1.478 0 0 1 0-.364L8.603 7.25L5.04 10.718zm.402-9.87l4.317 1.839a1.64 1.64 0 0 1 1.115-.38c.177.005.353.031.525.083l3.371-5.26L15.896.052L9.355 6.473s-.011.068 0 .084zM7.74 17.443c.088-.161.197-.312.323-.448L4.37 11.484L.001 15.729zm-.349.932L.708 16.979l2.937 2.98l3.704-1.573z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "compFooter"
};
</script>
