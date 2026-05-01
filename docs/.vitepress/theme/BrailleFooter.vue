<template>
  <div class="braille-footer">
    <div class="braille-row">
      <!-- L: dots 1,2,3 -->
      <span class="braille-cell">
        <span class="dot on" style="--i:0"></span>
        <span class="dot off"></span>
        <span class="dot on" style="--i:1"></span>
        <span class="dot off"></span>
        <span class="dot on" style="--i:2"></span>
        <span class="dot off"></span>
      </span>
      <!-- L: dots 1,2,3 -->
      <span class="braille-cell">
        <span class="dot on" style="--i:3"></span>
        <span class="dot off"></span>
        <span class="dot on" style="--i:4"></span>
        <span class="dot off"></span>
        <span class="dot on" style="--i:5"></span>
        <span class="dot off"></span>
      </span>
      <!-- D: dots 1,4,5 -->
      <span class="braille-cell">
        <span class="dot on" style="--i:6"></span>
        <span class="dot on" style="--i:7"></span>
        <span class="dot off"></span>
        <span class="dot on" style="--i:8"></span>
        <span class="dot off"></span>
        <span class="dot off"></span>
      </span>
    </div>
    <span class="footer-text">Built for people who learn by doing.</span>
  </div>
</template>

<style scoped>
.braille-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0 16px;
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.braille-row {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  margin-bottom: 6px;
}

.braille-cell {
  display: inline-grid;
  grid-template-columns: repeat(2, 5px);
  gap: 2px;
  margin-right: 3px;
}

.dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
}

.dot.on {
  background-color: var(--vp-c-text-2);
  animation: pulse 3s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.25s);
}

.dot.off {
  background-color: var(--vp-c-text-2);
  opacity: 0.15;
}

.footer-text {
  text-align: center;
}

@keyframes pulse {
  0%, 70%, 100% { opacity: 1; }
  35% { opacity: 0.35; }
}
</style>
