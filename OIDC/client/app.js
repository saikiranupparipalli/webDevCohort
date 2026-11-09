// Default bundled fallback quotes if fetch fails
const FALLBACK_QUOTES = [
  {
    id: 1,
    quote: "Simplicity is the prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
    category: "Technology",
    bio: "Pioneering Computer Scientist",
  },
  {
    id: 2,
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Inspiration",
    bio: "Co-founder of Apple Inc.",
  },
  {
    id: 3,
    quote: "We suffer more often in imagination than in reality.",
    author: "Seneca",
    category: "Philosophy",
    bio: "Stoic Philosopher & Statesman",
  },
  {
    id: 4,
    quote: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
    category: "Technology",
    bio: "Creator of Extreme Programming",
  },
  {
    id: 5,
    quote: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    category: "Wisdom",
    bio: "Theoretical Physicist",
  },
  {
    id: 6,
    quote:
      "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry",
    category: "Design",
    bio: "Writer and Aviator",
  },
  {
    id: 7,
    quote: "Good design is as little design as possible.",
    author: "Dieter Rams",
    category: "Design",
    bio: "Industrial Designer",
  },
  {
    id: 8,
    quote: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    category: "Technology",
    bio: "Creator of Linux & Git",
  },
];

// App State
let quotes = [];
let currentCategory = "All";
let currentQuote = null;
let favorites = [];

// DOM Elements
const quoteTextEl = document.getElementById("quote-text");
const quoteAuthorEl = document.getElementById("quote-author");
const quoteBioEl = document.getElementById("quote-bio");
const quoteCategoryEl = document.getElementById("quote-category");
const quoteIndexEl = document.getElementById("quote-index");
const categoriesContainer = document.getElementById("categories-container");
const nextBtn = document.getElementById("next-btn");
const copyBtn = document.getElementById("copy-btn");
const favBtn = document.getElementById("favorite-btn");
const favIcon = document.getElementById("fav-icon");
const speechBtn = document.getElementById("speech-btn");
const shareBtn = document.getElementById("share-btn");
const themeToggle = document.getElementById("theme-toggle");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");
const favoritesModal = document.getElementById("favorites-modal");
const viewFavoritesBtn = document.getElementById("view-favorites-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const favoritesList = document.getElementById("favorites-list");
const favoritesCount = document.getElementById("favorites-count");
const loginbutton = document.getElementById("login");
// Initialize application
async function initApp() {
  loadThemePreference();
  loadFavorites();

  try {
    const res = await fetch("quotes.json");
    if (res.ok) {
      quotes = await res.json();
    } else {
      quotes = FALLBACK_QUOTES;
    }
  } catch (err) {
    quotes = FALLBACK_QUOTES;
  }

  renderCategories();
  displayNextQuote();
  setupEventListeners();
}

// Category Pills Rendering
function renderCategories() {
  const categorySet = new Set(["All"]);
  quotes.forEach((q) => categorySet.add(q.category));

  categoriesContainer.innerHTML = "";
  categorySet.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = `cat-pill ${cat === currentCategory ? "active" : ""}`;
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      currentCategory = cat;
      document
        .querySelectorAll(".cat-pill")
        .forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      displayNextQuote();
    });
    categoriesContainer.appendChild(btn);
  });
}

// Filter and Display Next Quote
function displayNextQuote() {
  const filtered =
    currentCategory === "All"
      ? quotes
      : quotes.filter((q) => q.category === currentCategory);

  if (filtered.length === 0) return;

  // Pick a random quote that isn't the current one (if possible)
  let candidate = filtered[Math.floor(Math.random() * filtered.length)];
  if (filtered.length > 1 && currentQuote && candidate.id === currentQuote.id) {
    const others = filtered.filter((q) => q.id !== currentQuote.id);
    candidate = others[Math.floor(Math.random() * others.length)];
  }

  currentQuote = candidate;

  // Animation transition
  quoteTextEl.classList.add("anim-out");
  quoteTextEl.classList.remove("anim-in");

  setTimeout(() => {
    quoteTextEl.textContent = currentQuote.quote;
    quoteAuthorEl.textContent = currentQuote.author;
    quoteBioEl.textContent = currentQuote.bio || "";
    quoteCategoryEl.textContent = currentQuote.category;
    quoteIndexEl.textContent = `#${currentQuote.id}`;

    updateFavoriteButtonState();

    quoteTextEl.classList.remove("anim-out");
    quoteTextEl.classList.add("anim-in");
  }, 200);
}

// Update Favorite Button State
function updateFavoriteButtonState() {
  const isFav = currentQuote && favorites.some((f) => f.id === currentQuote.id);
  if (isFav) {
    favBtn.classList.add("active");
  } else {
    favBtn.classList.remove("active");
  }
}

// Favorites Management
function loadFavorites() {
  try {
    const saved = localStorage.getItem("aura_favorites");
    favorites = saved ? JSON.parse(saved) : [];
  } catch (e) {
    favorites = [];
  }
  updateFavoritesBadge();
}

function saveFavorites() {
  try {
    localStorage.setItem("aura_favorites", JSON.stringify(favorites));
  } catch (e) {}
  updateFavoritesBadge();
}

function updateFavoritesBadge() {
  favoritesCount.textContent = favorites.length;
}

function toggleFavorite() {
  if (!currentQuote) return;

  const index = favorites.findIndex((f) => f.id === currentQuote.id);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast("Removed from saved quotes");
  } else {
    favorites.push(currentQuote);
    showToast("Saved to favorites!");
  }

  saveFavorites();
  updateFavoriteButtonState();
}

function renderFavoritesModal() {
  if (favorites.length === 0) {
    favoritesList.innerHTML = `<div class="empty-state">No saved quotes yet. Click the heart icon to save quotes.</div>`;
    return;
  }

  favoritesList.innerHTML = "";
  favorites.forEach((fav) => {
    const item = document.createElement("div");
    item.className = "fav-item";
    item.innerHTML = `
      <div class="fav-item-content">
        <p class="fav-quote-text">“${fav.quote}”</p>
        <span class="fav-author">— ${fav.author}</span>
      </div>
      <button class="fav-remove-btn" title="Remove" aria-label="Remove quote">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    `;

    item.querySelector(".fav-remove-btn").addEventListener("click", () => {
      favorites = favorites.filter((f) => f.id !== fav.id);
      saveFavorites();
      updateFavoriteButtonState();
      renderFavoritesModal();
    });

    favoritesList.appendChild(item);
  });
}

// Copy to Clipboard
async function copyCurrentQuote() {
  if (!currentQuote) return;
  const text = `“${currentQuote.quote}” — ${currentQuote.author}`;
  try {
    await navigator.clipboard.writeText(text);
    showToast("Quote copied to clipboard!");
  } catch (err) {
    // Fallback
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showToast("Quote copied to clipboard!");
  }
}

// Speech Synthesis
function readQuoteAloud() {
  if (!currentQuote || !("speechSynthesis" in window)) {
    showToast("Text-to-speech not supported in browser");
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(
    `${currentQuote.quote}. By ${currentQuote.author}`,
  );
  utterance.rate = 0.95;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
  showToast("Reading quote...");
}

// Share on X / Twitter
function shareQuote() {
  if (!currentQuote) return;
  const tweet = `“${currentQuote.quote}” — ${currentQuote.author}`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

// Toast Feedback
let toastTimeout;
function showToast(msg) {
  toastMessage.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add("hidden");
  }, 2200);
}

// Theme Management
function loadThemePreference() {
  const savedTheme = localStorage.getItem("aura_theme") || "dark";
  document.body.setAttribute("data-theme", savedTheme);
  updateThemeIcons(savedTheme);
}

function toggleTheme() {
  const current = document.body.getAttribute("data-theme") || "dark";
  const newTheme = current === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
  localStorage.setItem("aura_theme", newTheme);
  updateThemeIcons(newTheme);
}

function updateThemeIcons(theme) {
  if (theme === "light") {
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
  } else {
    moonIcon.classList.remove("hidden");
    sunIcon.classList.add("hidden");
  }
}

// Event Listeners
function setupEventListeners() {
  nextBtn.addEventListener("click", displayNextQuote);
  copyBtn.addEventListener("click", copyCurrentQuote);
  favBtn.addEventListener("click", toggleFavorite);
  speechBtn.addEventListener("click", readQuoteAloud);
  shareBtn.addEventListener("click", shareQuote);
  themeToggle.addEventListener("click", toggleTheme);

  // LOGIN OIDC CONFIGURATION:
  loginbutton.addEventListener("click", () => {
    // window.alert("Hello from login button")
    const authorizationURL = new URL("http://localhost:8000/oauth/authorize");

    authorizationURL.searchParams.set("client_id", "shop-app-123");
    authorizationURL.searchParams.set(
      "redirect_uri",
      "http://localhost:5173/callback.html",
    );
    authorizationURL.searchParams.set("response_type", "code");
    authorizationURL.searchParams.set("scope", "openid email");
    authorizationURL.searchParams.set("state", "abc123");

    window.location.href = authorizationURL.toString();
  });
  // Favorites Modal
  viewFavoritesBtn.addEventListener("click", () => {
    renderFavoritesModal();
    favoritesModal.classList.remove("hidden");
  });

  closeModalBtn.addEventListener("click", () => {
    favoritesModal.classList.add("hidden");
  });

  favoritesModal.addEventListener("click", (e) => {
    if (e.target === favoritesModal) {
      favoritesModal.classList.add("hidden");
    }
  });

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    // Only if not inside an input/textarea
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;

    if (e.code === "Space") {
      e.preventDefault();
      displayNextQuote();
    } else if (e.key.toLowerCase() === "c") {
      copyCurrentQuote();
    } else if (e.key === "Escape") {
      favoritesModal.classList.add("hidden");
    }
  });
}

// Start
initApp();
