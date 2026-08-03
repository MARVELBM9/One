@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap');

:root {
    --bg-base: #030712;
    --bg-surface: #111827;
    --bg-surface-hover: #1f2937;
    --bg-active: linear-gradient(135deg, #3b82f6, #6366f1);
    
    --accent-primary: #3b82f6; 
    --accent-secondary: #ec4899; 
    --accent-gradient: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
    
    --text-primary: #ffffff;
    --text-secondary: #9ca3af;
    --border-color: rgba(255, 255, 255, 0.08);
    --border-glow: rgba(59, 130, 246, 0.4);
    
    --success: #10b981;
    --success-bg: rgba(16, 185, 129, 0.15);
    
    --radius-lg: 20px;
    --radius-md: 14px;
    --shadow-neon: 0 0 25px rgba(59, 130, 246, 0.15);
    --shadow-hover: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
    --transition-smooth: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Cairo', sans-serif;
}

body {
    background-color: var(--bg-base);
    color: var(--text-primary);
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
    line-height: 1.6;
    background-image: 
        radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 40%),
        radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.06) 0%, transparent 40%);
}

.ambient-glow {
    position: fixed;
    top: -15vh;
    left: 50%;
    transform: translateX(-50%);
    width: 70vw;
    height: 35vh;
    background: var(--accent-gradient);
    z-index: -1;
    filter: blur(140px);
    opacity: 0.2;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 50px 24px;
}

.header {
    text-align: center;
    margin-bottom: 50px;
}

.logo {
    font-family: 'Audiowide', sans-serif;
    font-size: 3.5rem;
    font-weight: 400;
    letter-spacing: 3px;
    color: var(--text-primary);
    text-transform: uppercase;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    text-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
}

.logo span {
    font-family: 'Audiowide', sans-serif;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.subtitle {
    color: var(--text-secondary);
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.progress-container {
    background: rgba(17, 24, 39, 0.7);
    backdrop-filter: blur(12px);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: 26px 32px;
    margin-bottom: 45px;
    box-shadow: var(--shadow-neon);
    position: relative;
    overflow: hidden;
}

.progress-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--accent-gradient);
}

.progress-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-secondary);
    margin-bottom: 14px;
}

.progress-info span {
    color: var(--text-primary);
    font-weight: 800;
    font-size: 1.1rem;
}

.progress-track {
    background: rgba(0, 0, 0, 0.6);
    height: 10px;
    border-radius: 9999px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.06);
}

.progress-fill {
    background: var(--accent-gradient);
    height: 100%;
    width: 0%;
    border-radius: 9999px;
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.6);
    transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.tabs-wrapper {
    display: flex;
    gap: 14px;
    justify-content: center;
    margin-bottom: 45px;
    flex-wrap: wrap;
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(10px);
    padding: 8px;
    border-radius: 20px;
    border: 1px solid var(--border-color);
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.tab-btn {
    background: transparent;
    border: none;
    color: var(--text-secondary);
    padding: 12px 26px;
    border-radius: var(--radius-md);
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: var(--transition-smooth);
}

.tab-btn:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.05);
}

.tab-btn.active {
    color: #fff;
    background: var(--bg-active);
    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
}

.controls-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-bottom: 45px;
    flex-wrap: wrap;
}

.search-box {
    flex: 1;
    min-width: 300px;
}

.search-box input {
    width: 100%;
    background: rgba(17, 24, 39, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    padding: 16px 24px;
    border-radius: var(--radius-md);
    color: var(--text-primary);
    font-size: 1.05rem;
    font-weight: 600;
    outline: none;
    transition: var(--transition-smooth);
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
}

.search-box input::placeholder {
    color: var(--text-secondary);
}

.search-box input:focus {
    background: rgba(17, 24, 39, 0.95);
    border-color: var(--accent-primary);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.25), inset 0 2px 4px rgba(0,0,0,0.3);
}

.filter-wrapper {
    display: flex;
    gap: 8px;
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(10px);
    padding: 8px;
    border-radius: 20px;
    border: 1px solid var(--border-color);
}

.filter-btn {
    background: transparent;
    border: none;
    color: var(--text-secondary);
    padding: 12px 22px;
    border-radius: var(--radius-md);
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    transition: var(--transition-smooth);
}

.filter-btn:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.05);
}

.filter-btn.active {
    color: #fff;
    background: var(--bg-active);
    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
}

/* شبكة الأفلام - مضبوطة بدقة لتناسب الشاشات الكبيرة والتابلت (مثل شاومي باد 7) بـ 3 أعمدة مريحة */
.movies-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
}

.card {
    background: var(--bg-surface);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: var(--transition-smooth);
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}

.card:hover {
    transform: translateY(-8px) scale(1.01);
    border-color: rgba(59, 130, 246, 0.4);
    box-shadow: var(--shadow-hover), 0 0 25px rgba(59, 130, 246, 0.2);
}

.poster-box {
    width: 100%;
    aspect-ratio: 2 / 3;
    overflow: hidden;
    background: #000;
    position: relative;
}

.poster-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.card:hover .poster-img {
    transform: scale(1.08);
}

.card-details {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-grow: 1;
    justify-content: space-between;
    background: linear-gradient(180deg, rgba(17, 24, 39, 0.4) 0%, rgba(17, 24, 39, 0.95) 100%);
}

.card-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.95rem;
    color: var(--text-secondary);
    font-weight: 700;
}

.order-tag {
    color: var(--accent-primary);
    background: rgba(59, 130, 246, 0.12);
    padding: 4px 12px;
    border-radius: 8px;
    border: 1px solid rgba(59, 130, 246, 0.2);
}

.title {
    font-size: 1.25rem;
    font-weight: 800;
    line-height: 1.4;
    color: var(--text-primary);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.upload-btn-label {
    background: rgba(255, 255, 255, 0.03);
    border: 1px dashed rgba(255, 255, 255, 0.15);
    color: var(--text-secondary);
    text-align: center;
    padding: 14px;
    border-radius: var(--radius-md);
    font-size: 1rem;
    cursor: pointer;
    font-weight: 700;
    transition: var(--transition-smooth);
    display: block;
}

.upload-btn-label:hover {
    color: var(--text-primary);
    background: rgba(59, 130, 246, 0.08);
    border-color: var(--accent-primary);
}

.upload-input-file {
    display: none;
}

.watch-btn {
    background: var(--text-primary);
    color: var(--bg-base);
    border: none;
    padding: 15px;
    border-radius: var(--radius-md);
    font-size: 1.05rem;
    font-weight: 800;
    cursor: pointer;
    transition: var(--transition-smooth);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}

.watch-btn:hover {
    background: #e2e8f0;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
}

.card.watched {
    background: rgba(16, 185, 129, 0.08);
    border-color: rgba(16, 185, 129, 0.3);
}

.card.watched .watch-btn {
    background: var(--success);
    color: #fff;
    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
}

.card.watched .watch-btn:hover {
    background: #059669;
}

.movies-grid.has-focus .card:not(.focused) {
    opacity: 0.3;
    filter: grayscale(0.7);
    transform: scale(0.95);
    pointer-events: none;
}

.movies-grid.has-focus .card.focused {
    transform: scale(1.04) translateY(-6px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.8), 0 0 35px rgba(59, 130, 246, 0.4);
    border-color: var(--accent-primary);
    z-index: 10;
}

.fade-out {
    opacity: 0;
    transform: scale(0.95);
    transition: var(--transition-smooth);
}

.fade-in {
    animation: smoothFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes smoothFadeIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
}

/* =========================================
   التكيف الدقيق مع الشاشات الصغيرة والموبايل
   ========================================= */
@media (max-width: 1024px) {
    .movies-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 25px 16px;
    }

    .logo {
        font-size: 2.4rem;
        gap: 12px;
    }

    .movies-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px; 
    }

    .card-details {
        padding: 16px; 
        gap: 12px;
    }

    .title {
        font-size: 1.05rem; 
        line-height: 1.35;
    }

    .card-meta {
        font-size: 0.85rem; 
    }

    .upload-btn-label {
        padding: 10px;
        font-size: 0.85rem;
    }

    .watch-btn {
        padding: 12px;
        font-size: 0.95rem;
    }
}

@media (max-width: 480px) {
    .movies-grid {
        grid-template-columns: repeat(2, 1fr); 
        gap: 12px;
    }
}
