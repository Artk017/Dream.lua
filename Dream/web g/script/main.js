// 首页
function showHome() {
  location.hash = '#/';
  document.getElementById('main-content').innerHTML = `
    <div>
      <h2>欢迎来到内容网站</h2>
      <p>请选择左侧的功能进行体验。</p>
    </div>
  `;
}

// 重新设计上传界面
function showUploadForm() {
  location.hash = '#/upload';
  document.getElementById('main-content').innerHTML = `
    <div class="upload-page-container" style="min-height:calc(100vh - 100px);background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);padding:20px 0;">
      <div class="upload-wrapper" style="max-width:800px;margin:0 auto;padding:0 20px;">
        <!-- 页面标题 -->
        <div class="upload-header" style="text-align:center;margin-bottom:40px;">
          <h1 style="color:#fff;font-size:2.5em;margin:0 0 10px 0;text-shadow:0 2px 10px rgba(0,0,0,0.3);">内容上传</h1>
          <p style="color:rgba(255,255,255,0.9);font-size:1.1em;margin:0;">选择你要上传的内容类型</p>
        </div>
        
        <!-- 选项卡切换 -->
        <div class="upload-tabs" style="display:flex;justify-content:center;margin-bottom:40px;">
          <div class="tab-container" style="background:rgba(255,255,255,0.15);padding:8px;border-radius:50px;backdrop-filter:blur(10px);box-shadow:0 8px 32px rgba(0,0,0,0.1);">
            <button id="tab-add-novel" class="upload-tab-btn active" style="padding:12px 32px;border-radius:40px;border:none;background:#fff;color:#667eea;font-weight:bold;cursor:pointer;font-size:1em;transition:all 0.3s;box-shadow:0 4px 15px rgba(0,0,0,0.1);">
              <span style="display:flex;align-items:center;gap:8px;">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
                添加小说
              </span>
            </button>
            <button id="tab-add-chapter" class="upload-tab-btn" style="padding:12px 32px;border-radius:40px;border:none;background:transparent;color:#fff;font-weight:bold;cursor:pointer;font-size:1em;transition:all 0.3s;">
              <span style="display:flex;align-items:center;gap:8px;">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                添加章节
              </span>
            </button>
          </div>
        </div>
        
        <!-- 内容区域 -->
        <div id="upload-tab-content" class="upload-content" style="background:#fff;border-radius:20px;box-shadow:0 10px 40px rgba(0,0,0,0.1);padding:40px;min-height:400px;"></div>
      </div>
    </div>
  `;
  
  showAddNovelForm();
  
  document.getElementById('tab-add-novel').onclick = function() {
    // 切换样式
    this.style.background = '#fff';
    this.style.color = '#667eea';
    this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    this.classList.add('active');
    
    const chapterTab = document.getElementById('tab-add-chapter');
    chapterTab.style.background = 'transparent';
    chapterTab.style.color = '#fff';
    chapterTab.style.boxShadow = 'none';
    chapterTab.classList.remove('active');
    
    showAddNovelForm();
  };
  
  document.getElementById('tab-add-chapter').onclick = function() {
    // 切换样式
    this.style.background = '#fff';
    this.style.color = '#667eea';
    this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    this.classList.add('active');
    
    const novelTab = document.getElementById('tab-add-novel');
    novelTab.style.background = 'transparent';
    novelTab.style.color = '#fff';
    novelTab.style.boxShadow = 'none';
    novelTab.classList.remove('active');
    
    showAddChapterForm();
  };
}

// 重新设计添加小说表单
function showAddNovelForm() {
  document.getElementById('upload-tab-content').innerHTML = `
    <div class="add-novel-container">
      <div style="text-align:center;margin-bottom:30px;">
        <h2 style="color:#667eea;font-size:1.8em;margin:0 0 10px 0;">添加新小说</h2>
        <p style="color:#888;margin:0;">填写小说基本信息并上传封面</p>
      </div>
      
      <form class="upload-form modern-form" id="upload-novel-form" enctype="multipart/form-data" style="max-width:600px;margin:0 auto;">
        <div class="form-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;">
          <div class="form-group">
            <label style="display:block;color:#667eea;font-weight:bold;margin-bottom:8px;font-size:1em;">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style="vertical-align:middle;margin-right:6px;">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
              书名
            </label>
            <input type="text" name="title" required style="width:100%;padding:12px 16px;border:2px solid #e1e5e9;border-radius:12px;font-size:1em;transition:all 0.3s;background:#f8f9fa;" placeholder="请输入小说名称">
          </div>
          
          <div class="form-group">
            <label style="display:block;color:#667eea;font-weight:bold;margin-bottom:8px;font-size:1em;">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style="vertical-align:middle;margin-right:6px;">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              作者
            </label>
            <input type="text" name="author" required style="width:100%;padding:12px 16px;border:2px solid #e1e5e9;border-radius:12px;font-size:1em;transition:all 0.3s;background:#f8f9fa;" placeholder="请输入作者名称">
          </div>
        </div>
        
        <div class="form-group" style="margin-bottom:20px;">
          <label style="display:block;color:#667eea;font-weight:bold;margin-bottom:8px;font-size:1em;">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style="vertical-align:middle;margin-right:6px;">
              <path d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C0,3.89 20.11,3 19,3Z"/>
            </svg>
            简介
          </label>
          <textarea name="desc" rows="4" style="width:100%;padding:12px 16px;border:2px solid #e1e5e9;border-radius:12px;font-size:1em;transition:all 0.3s;background:#f8f9fa;resize:vertical;" placeholder="请输入小说简介（可选）"></textarea>
        </div>
        
        <div class="form-group" style="margin-bottom:20px;">
          <label style="display:block;color:#667eea;font-weight:bold;margin-bottom:8px;font-size:1em;">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style="vertical-align:middle;margin-right:6px;">
              <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z"/>
            </svg>
            封面图片
          </label>
          <div class="file-upload-area" style="border:2px dashed #e1e5e9;border-radius:12px;padding:30px;text-align:center;background:#f8f9fa;transition:all 0.3s;cursor:pointer;" onclick="document.querySelector('input[name=cover]').click()">
            <div class="upload-icon" style="margin-bottom:16px;">
              <svg width="48" height="48" fill="#667eea" viewBox="0 0 24 24" style="opacity:0.7;">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
            </div>
            <p style="margin:0 0 8px 0;color:#667eea;font-weight:bold;">点击选择封面图片</p>
            <p style="margin:0;color:#888;font-size:0.9em;">支持 JPG、PNG 格式</p>
            <input type="file" name="cover" accept="image/*" required style="display:none;">
          </div>
        </div>
        
        <div class="form-group" style="margin-bottom:30px;">
          <label style="display:block;color:#667eea;font-weight:bold;margin-bottom:8px;font-size:1em;">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style="vertical-align:middle;margin-right:6px;">
              <path d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C0,3.89 20.11,3 19,3Z"/>
            </svg>
            内容描述（可选）
          </label>
          <textarea name="content" rows="3" style="width:100%;padding:12px 16px;border:2px solid #e1e5e9;border-radius:12px;font-size:1em;transition:all 0.3s;background:#f8f9fa;resize:vertical;" placeholder="输入小说内容或说明"></textarea>
        </div>
        
        <div style="text-align:center;">
          <button type="submit" style="background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);color:#fff;border:none;border-radius:50px;padding:16px 48px;font-size:1.1em;font-weight:bold;cursor:pointer;transition:all 0.3s;box-shadow:0 4px 15px rgba(102,126,234,0.4);">
            <span style="display:flex;align-items:center;gap:8px;">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,12L12,17L7,12M12,2V15"/>
              </svg>
              创建小说
            </span>
          </button>
        </div>
      </form>
    </div>
  `;
  
  // 添加输入框焦点效果
  document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('focus', function() {
      this.style.borderColor = '#667eea';
      this.style.boxShadow = '0 0 0 3px rgba(102,126,234,0.1)';
      this.style.background = '#fff';
    });
    
    input.addEventListener('blur', function() {
      this.style.borderColor = '#e1e5e9';
      this.style.boxShadow = 'none';
      this.style.background = '#f8f9fa';
    });
  });
  
  // 文件上传区域悬停效果
  const fileArea = document.querySelector('.file-upload-area');
  fileArea.addEventListener('mouseover', function() {
    this.style.borderColor = '#667eea';
    this.style.background = '#f0f4ff';
  });
  
  fileArea.addEventListener('mouseout', function() {
    this.style.borderColor = '#e1e5e9';
    this.style.background = '#f8f9fa';
  });
  
  // 表单提交处理
  document.getElementById('upload-novel-form').onsubmit = function(e) {
    e.preventDefault();
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = `
      <span style="display:flex;align-items:center;gap:8px;">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style="animation:spin 1s linear infinite;">
          <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"/>
        </svg>
        创建中...
      </span>
    `;
    submitBtn.disabled = true;
    
    const formData = new FormData(this);
    fetch('/api/upload-novel', {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(data => {
        if (data.success) {
          alert('小说添加成功！');
          showNovels();
        } else {
          alert('添加失败！');
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }
      })
      .catch(() => {
        alert('网络错误，请重试！');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      });
  };
  
  // 添加旋转动画
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}

// 重新设计添加章节表单
function showAddChapterForm() {
  fetch('/api/novels')
    .then(res => res.json())
    .then(list => {
      let options = list.map(novel => `<option value="${novel.folder}">${novel.title}</option>`).join('');
      document.getElementById('upload-tab-content').innerHTML = `
        <div class="add-chapter-container">
          <div style="text-align:center;margin-bottom:24px;">
            <h2 style="color:#667eea;font-size:1.6em;margin:0 0 8px 0;">添加章节</h2>
            <p style="color:#888;margin:0;font-size:0.95em;">为已有小说添加新的音频章节</p>
          </div>
          <form class="upload-form modern-form" id="upload-chapter-form" enctype="multipart/form-data" style="max-width:680px;margin:0 auto;">
            <div class="form-group" style="margin-bottom:20px;">
              <label style="display:block;color:#667eea;font-weight:bold;margin-bottom:8px;font-size:1em;">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style="vertical-align:middle;margin-right:6px;">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                </svg>
                选择目标小说
              </label>
              <select name="novelFolder" required style="width:100%;padding:10px 14px;border:2px solid #e1e5e9;border-radius:8px;font-size:1em;background:#f8f9fa;transition:all 0.3s;">
                <option value="">请选择要添加章节的小说</option>
                ${options}
              </select>
            </div>
            <div id="chapter-extra-wrap" style="display:none;">
              <div class="settings-panel" style="background:#f0f4ff;border-radius:10px;padding:16px;margin-bottom:16px;border:1px solid #e1e8ff;">
                <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
                  <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
                    <input type="checkbox" id="auto-filename" style="width:16px;height:16px;accent-color:#667eea;">
                    <span style="font-size:0.9em;color:#667eea;font-weight:500;">自动使用文件名</span>
                  </label>
                  <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
                    <input type="checkbox" id="auto-number" style="width:16px;height:16px;accent-color:#667eea;">
                    <span style="font-size:0.9em;color:#667eea;font-weight:500;">自动添加数字编号</span>
                  </label>
                  <div id="insert-position-wrap"></div>
                </div>
              </div>
              <div class="chapters-panel" style="background:#fff;border-radius:10px;border:1px solid #e1e5e9;overflow:hidden;margin-bottom:16px;max-height:400px;">
                <div style="background:#667eea;color:#fff;padding:10px 16px;font-weight:bold;font-size:1em;display:flex;align-items:center;justify-content:space-between;">
                  <span>
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style="vertical-align:middle;margin-right:6px;">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2Z"/>
                    </svg>
                    章节列表
                  </span>
                  <span id="chapter-count" style="background:rgba(255,255,255,0.2);padding:2px 8px;border-radius:12px;font-size:0.85em;">0个</span>
                </div>
                <div id="chapter-fields" style="padding:12px;max-height:320px;overflow-y:auto;"></div>
              </div>
              <div id="chapter-btns" style="display:flex;align-items:center;justify-content:center;gap:16px;">
                <button type="button" id="add-chapter-btn" style="background:#fff;color:#667eea;border:2px solid #667eea;border-radius:8px;width:40px;height:40px;font-size:1.5em;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.3s;box-shadow:0 2px 8px rgba(102,126,234,0.15);">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
                  </svg>
                </button>
                <button type="submit" style="background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);color:#fff;border:none;border-radius:8px;padding:10px 24px;font-size:1em;font-weight:bold;cursor:pointer;transition:all 0.3s;box-shadow:0 3px 12px rgba(102,126,234,0.3);">
                  <span style="display:flex;align-items:center;gap:8px;">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"/>
                    </svg>
                    批量上传
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      `;

      let currentChapterCount = 0;
      let autoFilename = false;
      let autoNumber = false;

      const novelSelect = document.querySelector('select[name="novelFolder"]');
      novelSelect.addEventListener('focus', function() {
        this.style.borderColor = '#667eea';
        this.style.boxShadow = '0 0 0 3px rgba(102,126,234,0.1)';
        this.style.background = '#fff';
      });
      novelSelect.addEventListener('blur', function() {
        this.style.borderColor = '#e1e5e9';
        this.style.boxShadow = 'none';
        this.style.background = '#f8f9fa';
      });

      novelSelect.onchange = function() {
        const folder = this.value;
        const extraWrap = document.getElementById('chapter-extra-wrap');
        if (!folder) {
          extraWrap.style.display = 'none';
          document.getElementById('insert-position-wrap').innerHTML = '';
          document.getElementById('chapter-fields').innerHTML = '';
          currentChapterCount = 0;
          return;
        }
        extraWrap.style.display = 'block';
        fetch(`/novels/${folder}/chapters.json`)
          .then(res => res.json())
          .then(chapters => {
            currentChapterCount = chapters.length;
            let insertOptions = `<option value="last">添加到最后</option>`;
            chapters.forEach((ch, idx) => {
              insertOptions += `<option value="${ch.id}">插入到 "${ch.name}" 后面</option>`;
            });
            document.getElementById('insert-position-wrap').innerHTML = `
              <div style="display:flex;align-items:center;gap:8px;">
                <label style="color:#667eea;font-weight:500;font-size:0.9em;white-space:nowrap;">插入位置：</label>
                <select name="insertPosition" style="padding:6px 10px;border:1px solid #e1e5e9;border-radius:6px;font-size:0.9em;background:#fff;min-width:120px;">
                  ${insertOptions}
                </select>
              </div>
            `;
            document.getElementById('chapter-fields').innerHTML = '';
            document.getElementById('chapter-fields').appendChild(createChapterField(currentChapterCount + 1));
            updateRemoveBtns();
            updateChapterCount();
          });
      };

      document.getElementById('auto-filename').onchange = function() {
        autoFilename = this.checked;
        updateAllChapterNames();
      };

      document.getElementById('auto-number').onchange = function() {
        autoNumber = this.checked;
        updateAllChapterNames();
      };

      function updateAllChapterNames() {
        const fields = document.querySelectorAll('.chapter-field');
        fields.forEach((f, idx) => {
          const chapterNumber = currentChapterCount + idx + 1;
          const chapterInput = f.querySelector('input[name="chapterName"]');
          const audioInput = f.querySelector('input[name="audio"]');
          
          if (audioInput.files[0]) {
            if (autoFilename) {
              const fileName = audioInput.files[0].name.replace(/\.[^/.]+$/, '');
              let finalName = fileName;
              if (autoNumber) {
                finalName = `${chapterNumber}.${fileName}`;
              }
              chapterInput.value = finalName;
            } else if (autoNumber) {
              // 只有编号，没有自动文件名
              chapterInput.value = `${chapterNumber}.`;
            }
          }
        });
      }

      function createChapterField(chapterNo) {
        const field = document.createElement('div');
        field.className = 'chapter-field';
        field.style = 'background:#f8f9fa;border-radius:8px;padding:12px;margin-bottom:8px;border:1px solid #e1e5e9;transition:all 0.3s;';
        field.innerHTML = `
          <div style="display:flex;align-items:center;gap:8px;">
            <span class="chapter-no" style="background:#667eea;color:#fff;padding:4px 8px;border-radius:12px;font-weight:bold;font-size:0.8em;min-width:50px;text-align:center;flex-shrink:0;">第${chapterNo}章</span>
            <input type="text" name="chapterName" placeholder="请输入章节名称" required style="flex:1;padding:8px 12px;border:1px solid #e1e5e9;border-radius:6px;font-size:0.9em;background:#fff;transition:all 0.3s;min-width:0;">
            <div class="file-upload-wrapper" style="position:relative;flex-shrink:0;">
              <input type="file" name="audio" accept="audio/*" required style="display:none;">
              <button type="button" class="audio-upload-btn" style="background:#fff;border:1px solid #667eea;border-radius:6px;padding:6px 8px;cursor:pointer;transition:all 0.3s;color:#667eea;width:36px;height:36px;display:flex;align-items:center;justify-content:center;" title="选择音频文件">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2Z"/>
                </svg>
              </button>
            </div>
            <button type="button" class="import-name-btn" style="background:#f8f9fa;border:1px solid #e1e5e9;border-radius:6px;padding:6px 8px;cursor:not-allowed;transition:all 0.3s;flex-shrink:0;width:36px;height:36px;display:flex;align-items:center;justify-content:center;" title="从文件名导入章节名">
              <svg width="14" height="14" fill="#ccc" viewBox="0 0 24 24">
                <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
              </svg>
            </button>
            <button type="button" class="remove-chapter-btn" style="display:none;background:#fff5f5;border:1px solid #fecaca;border-radius:6px;padding:6px 8px;color:#dc2626;cursor:pointer;transition:all 0.3s;flex-shrink:0;width:36px;height:36px;align-items:center;justify-content:center;" title="移除此章节">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
              </svg>
            </button>
          </div>
        `;
        const audioInput = field.querySelector('input[name="audio"]');
        const audioBtn = field.querySelector('.audio-upload-btn');
        const importBtn = field.querySelector('.import-name-btn');
        const importIcon = importBtn.querySelector('svg');
        const chapterInput = field.querySelector('input[name="chapterName"]');
        const removeBtn = field.querySelector('.remove-chapter-btn');

        chapterInput.addEventListener('focus', function() {
          this.style.borderColor = '#667eea';
          this.style.boxShadow = '0 0 0 2px rgba(102,126,234,0.1)';
        });
        chapterInput.addEventListener('blur', function() {
          this.style.borderColor = '#e1e5e9';
          this.style.boxShadow = 'none';
        });

        audioBtn.onclick = () => audioInput.click();

        // 修改自动填充章节名的逻辑
        audioInput.onchange = () => {
          const hasFile = !!audioInput.files[0];
          if (hasFile) {
            const fileName = audioInput.files[0].name;
            audioBtn.innerHTML = `
              <svg width="16" height="16" fill="#4caf50" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            `;
            audioBtn.style.borderColor = '#4caf50';
            audioBtn.style.background = '#f1f8e9';
            audioBtn.style.color = '#4caf50';
            audioBtn.title = `已选择：${fileName}`;
            importBtn.style.cursor = 'pointer';
            importBtn.style.borderColor = '#667eea';
            importBtn.style.background = '#f0f4ff';
            importIcon.style.fill = '#667eea';

            // 自动填充章节名 - 修改后的逻辑
            if (autoFilename) {
              const nameOnly = fileName.replace(/\.[^/.]+$/, '');
              let finalName = nameOnly;
              if (autoNumber) {
                finalName = `${chapterNo}.${nameOnly}`;
              }
              chapterInput.value = finalName;
            }
          }
        };

        // 修改导入按钮的逻辑
        importBtn.onclick = function() {
          if (!audioInput.files[0]) return;
          const fullName = audioInput.files[0].name;
          const nameOnly = fullName.replace(/\.[^/.]+$/, '');
          let finalName = nameOnly;
          if (autoNumber) {
            finalName = `${chapterNo}.${nameOnly}`;
          }
          chapterInput.value = finalName;
          const originalBg = this.style.background;
          const originalColor = this.style.borderColor;
          this.style.background = '#dcfce7';
          this.style.borderColor = '#22c55e';
          importIcon.style.fill = '#16a34a';
          setTimeout(() => {
            this.style.background = originalBg;
            this.style.borderColor = originalColor;
            importIcon.style.fill = '#667eea';
          }, 400);
        };

        removeBtn.onclick = function() {
          field.style.opacity = '0.5';
          field.style.transform = 'scale(0.95)';
          setTimeout(() => {
            field.remove();
            updateChapterNos();
            updateRemoveBtns();
            updateChapterCount();
          }, 150);
        };

        return field;
      }

      // 修改 updateChapterNos 函数
      function updateChapterNos() {
        const fields = document.querySelectorAll('.chapter-field');
        fields.forEach((f, idx) => {
          const chapterNumber = currentChapterCount + idx + 1;
          const noSpan = f.querySelector('.chapter-no');
          noSpan.textContent = `第${chapterNumber}章`;
          
          // 当自动编号开启时，更新已有文件的章节名
          const chapterInput = f.querySelector('input[name="chapterName"]');
          const audioInput = f.querySelector('input[name="audio"]');
          if (autoFilename && autoInput.files[0]) {
            const fileName = audioInput.files[0].name.replace(/\.[^/.]+$/, '');
            let finalName = fileName;
            if (autoNumber) {
              finalName = `${chapterNumber}.${fileName}`;
            }
            chapterInput.value = finalName;
          }
        });
      }

      function updateRemoveBtns() {
        const fields = document.querySelectorAll('.chapter-field');
        fields.forEach((f, idx) => {
          const btn = f.querySelector('.remove-chapter-btn');
          btn.style.display = fields.length > 1 ? 'inline-block' : 'none';
        });
      }

      function updateChapterCount() {
        const fields = document.querySelectorAll('.chapter-field');
        const countElement = document.getElementById('chapter-count');
        if (countElement) {
          countElement.textContent = `${fields.length}个`;
        }
      }

      document.getElementById('add-chapter-btn').onclick = function() {
        const fields = document.querySelectorAll('.chapter-field');
        const newField = createChapterField(currentChapterCount + fields.length + 1);
        newField.style.opacity = '0';
        newField.style.transform = 'scale(0.95)';
        document.getElementById('chapter-fields').appendChild(newField);
        setTimeout(() => {
          newField.style.opacity = '1';
          newField.style.transform = 'scale(1)';
        }, 50);
        updateChapterNos();
        updateRemoveBtns();
        updateChapterCount();
        const fieldsContainer = document.getElementById('chapter-fields');
        fieldsContainer.scrollTop = fieldsContainer.scrollHeight;
      };

      const addBtn = document.getElementById('add-chapter-btn');
      addBtn.addEventListener('mouseover', function() {
        this.style.background = '#667eea';
        this.style.color = '#fff';
        this.style.transform = 'scale(1.05)';
      });
      addBtn.addEventListener('mouseout', function() {
        this.style.background = '#fff';
        this.style.color = '#667eea';
        this.style.transform = 'scale(1)';
      });

      document.getElementById('upload-chapter-form').onsubmit = function(e) {
        e.preventDefault();
        const novelFolder = this.novelFolder.value;
        const insertPosition = this.insertPosition ? this.insertPosition.value : 'last';
        const fields = Array.from(document.querySelectorAll('.chapter-field'));
        let valid = true;
        let chapters = [];
        fields.forEach(f => {
          const name = f.querySelector('input[name="chapterName"]').value.trim();
          const audio = f.querySelector('input[name="audio"]').files[0];
          if (!name || !audio) valid = false;
          chapters.push({ name, audio });
        });
        if (!valid || chapters.length === 0) {
          alert('请确保每个章节的名称和音频文件都已填写完整');
          return;
        }
        fetch(`/novels/${novelFolder}/chapters.json`)
          .then(res => res.json())
          .then(oldChapters => {
            let insertIdx = oldChapters.length;
            if (insertPosition !== 'last') {
              insertIdx = oldChapters.findIndex(ch => ch.id === insertPosition) + 1;
              if (insertIdx < 0) insertIdx = oldChapters.length;
            }
            let successCount = 0, failCount = 0;
            let isUploading = false;
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalHTML = submitBtn.innerHTML;
            async function uploadChapterSequentially(index) {
              if (index >= chapters.length) {
                isUploading = false;
                submitBtn.innerHTML = originalHTML;
                submitBtn.disabled = false;
                alert(`上传完成：成功${successCount}个，失败${failCount}个`);
                if (successCount > 0) {
                  document.getElementById('upload-chapter-form').reset();
                  document.getElementById('chapter-fields').innerHTML = '';
                  document.getElementById('chapter-extra-wrap').style.display = 'none';
                }
                return;
              }
              submitBtn.innerHTML = `
                <span style="display:flex;align-items:center;gap:8px;">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style="animation:spin 1s linear infinite;">
                    <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"/>
                  </svg>
                  ${index + 1}/${chapters.length}
                </span>
              `;
              const ch = chapters[index];
              const order = insertIdx + index + 1;
              const formData = new FormData();
              formData.append('novelFolder', novelFolder);
              formData.append('chapterName', ch.name);
              formData.append('audio', ch.audio);
              formData.append('order', order);
              try {
                const res = await fetch('/api/upload-chapter', {
                  method: 'POST',
                  body: formData
                });
                const data = await res.json();
                if (data.success) {
                  successCount++;
                } else {
                  failCount++;
                }
              } catch (error) {
                failCount++;
              }
              setTimeout(() => uploadChapterSequentially(index + 1), 100);
            }
            if (!isUploading) {
              isUploading = true;
              submitBtn.disabled = true;
              uploadChapterSequentially(0);
            }
          })
          .catch(error => {
            console.error('获取章节信息失败:', error);
            alert('获取章节信息失败，请重试');
          });
      };
    });
}

function showNovels() {
  location.hash = '#/novel';
  fetch('/api/novels')
    .then(res => res.json())
    .then(list => {
      let html = `<div class="novel-list" style="display:flex;flex-wrap:wrap;gap:24px;">`;
      if (list.length === 0) {
        html += `<p style="width:100%;text-align:center;">暂无小说</p>`;
      } else {
        list.forEach(novel => {
          html += `
            <div class="novel-card" 
              style="
                width:180px;
                height:220px;
                position:relative;
                padding:10px 8px;
                background:#fff;
                border-radius:10px;
                box-shadow:0 2px 8px rgba(76,110,245,0.08);
                cursor:pointer;
                transition:box-shadow 0.2s,transform 0.2s;
                display:flex;
                flex-direction:column;
              "
              onclick="showNovelDetail('${novel.folder}')"
              data-folder="${novel.folder}"
            >
              <div style="position:absolute;top:8px;right:8px;z-index:2;">
                <button onclick="event.stopPropagation();showNovelMenu('${novel.folder}')" style="background:rgba(255,255,255,0.85);border:none;cursor:pointer;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
                  <span style="font-size:1.5em;line-height:1;color:#2563eb;">&#8942;</span>
                </button>
              </div>
              <div class="novel-card-cover-wrap" style="height:80px;position:relative;margin-bottom:8px;">
                <img class="novel-cover" style="width:100%;height:80px;object-fit:cover;border-radius:6px;" src="/novels/${novel.folder}/cover.jpg" alt="封面">
                <span class="novel-chapter-count" style="position:absolute;top:8px;left:8px;background:rgba(37,99,235,0.85);color:#fff;padding:2px 8px;border-radius:8px;font-size:0.85em;box-shadow:0 2px 8px rgba(76,110,245,0.10);user-select:none;display:none;"></span>
              </div>
              <div style="flex:1;display:flex;flex-direction:column;justify-content:space-between;">
                <div>
                  <div class="novel-title" style="
                    font-size:1em;
                    margin-bottom:4px;
                    user-select:text;
                    font-weight:bold;
                    color:#2563eb;
                    line-height:1.3;
                    height:2.6em;
                    overflow:hidden;
                    display:-webkit-box;
                    -webkit-line-clamp:2;
                    -webkit-box-orient:vertical;
                  ">${novel.title}</div>
                  <div class="novel-author" style="
                    font-size:0.9em;
                    user-select:none;
                    color:#666;
                    margin-bottom:4px;
                    overflow:hidden;
                    white-space:nowrap;
                    text-overflow:ellipsis;
                  ">作者：${novel.author}</div>
                  <div class="novel-desc" style="
                    font-size:0.85em;
                    color:#888;
                    user-select:none;
                    line-height:1.4;
                    height:4.2em;
                    overflow:hidden;
                    display:-webkit-box;
                    -webkit-line-clamp:3;
                    -webkit-box-orient:vertical;
                  ">${novel.desc || '暂无简介'}</div>
                </div>
                <div class="novel-date" style="font-size:0.8em;color:#aaa;margin-top:auto;user-select:none;">${novel.date || ''}</div>
              </div>
            </div>
          `;
        });
      }
      html += `</div>`;
      document.getElementById('main-content').innerHTML = html;

      // 异步获取每本小说的章节数量并显示
      document.querySelectorAll('.novel-card').forEach(card => {
        const folder = card.getAttribute('data-folder');
        fetch(`/novels/${folder}/chapters.json`)
          .then(res => res.json())
          .then(chapters => {
            const count = Array.isArray(chapters) ? chapters.length : 0;
            const countSpan = card.querySelector('.novel-chapter-count');
            if (countSpan) {
              countSpan.textContent = `共${count}章`;
              countSpan.style.display = 'inline-block';
            }
          })
          .catch(() => {
            // 无章节时不显示
          });
      });
    });
}

// 修改 showNovelMenu 函数，添加点击外部关闭功能
window.showNovelMenu = function(folder) {
  window.closeEditPopup();
  document.body.style.overflow = 'hidden';
  fetch(`/novels/${folder}/chapters.json`)
    .then(res => res.json())
    .then(chapters => {
      let chapterList = '';
      if (chapters && chapters.length > 0) {
        chapterList = chapters.map(ch => `
          <div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0;">
            <span style="flex:1;">${ch.name}</span>
            <button onclick="editChapter('${folder}','${ch.id}')" style="background:#2563eb;color:#fff;border:none;border-radius:4px;padding:2px 8px;cursor:pointer;font-size:0.9em;">编辑</button>
            <button onclick="deleteChapter('${folder}','${ch.id}')" style="background:#e53935;color:#fff;border:none;border-radius:4px;padding:2px 8px;cursor:pointer;font-size:0.9em;margin-left:4px;">删除</button>
          </div>
        `).join('');
      } else {
        chapterList = `<div style="color:#888;">暂无章节</div>`;
      }
      let html = `
        <div id="novel-menu-popup" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.15);z-index:9999;display:flex;align-items:center;justify-content:center;" onclick="closeEditPopup('novel-menu-popup')">
          <div style="background:#fff;padding:32px 24px;border-radius:12px;min-width:320px;box-shadow:0 2px 16px rgba(76,110,245,0.12);" onclick="event.stopPropagation()">
            <h2 style="text-align:center;color:#2563eb;">操作菜单</h2>
            <div style="margin-bottom:18px;display:flex;gap:18px;justify-content:center;">
              <button onclick="editNovel('${folder}')" style="background:#2563eb;color:#fff;border:none;border-radius:6px;padding:8px 24px;cursor:pointer;">编辑小说</button>
              <button onclick="deleteNovel('${folder}')" style="background:#e53935;color:#fff;border:none;border-radius:6px;padding:8px 24px;cursor:pointer;">删除小说</button>
            </div>
            <div style="font-weight:bold;color:#2563eb;margin-bottom:8px;">章节管理</div>
            <div style="max-height:220px;overflow-y:auto;">${chapterList}</div>
            <div style="margin-top:18px;text-align:center;">
              <button type="button" onclick="closeEditPopup('novel-menu-popup')" style="background:#eee;color:#2563eb;border:none;border-radius:6px;padding:8px 24px;cursor:pointer;">关闭</button>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', html);
    });
};

// 章节编辑/删除同前
window.deleteChapter = function(folder, chapterId) {
  if (!confirm('确定要删除该章节吗？')) return;
  fetch('/api/delete-chapter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `folder=${encodeURIComponent(folder)}&chapterId=${encodeURIComponent(chapterId)}`
  }).then(res => res.json())
    .then(data => {
      if (data.success) {
        alert('删除成功');
        closeEditPopup();
        showNovels();
      } else {
        alert('删除失败：' + (data.message || ''));
      }
    });
};

// 修改编辑章节函数
window.editChapter = function(folder, chapterId) {
  fetch(`/novels/${folder}/chapters/${chapterId}.json`)
    .then(res => res.json())
    .then(chapter => {
      let html = `
        <div id="edit-chapter-popup" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.15);z-index:100000;display:flex;align-items:center;justify-content:center;" onclick="closeEditPopup('edit-chapter-popup')">
          <form id="edit-chapter-form" enctype="multipart/form-data" style="background:#fff;padding:32px 24px;border-radius:12px;min-width:320px;max-width:400px;box-shadow:0 2px 16px rgba(76,110,245,0.12);" onclick="event.stopPropagation()">
            <h2 style="text-align:center;color:#2563eb;">编辑章节</h2>
            
            <label style="display:block;margin-bottom:12px;">
              章节名：
              <input type="text" name="name" value="${chapter.name}" required style="width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;margin-top:4px;">
            </label>
            
            <label style="display:block;margin-bottom:12px;">
              时间：
              <input type="text" name="time" value="${chapter.time}" required style="width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;margin-top:4px;">
            </label>
            
            <div style="margin-bottom:18px;">
              <label style="display:block;margin-bottom:8px;color:#2563eb;font-weight:bold;">更换音频文件（可选）：</label>
              <div style="display:flex;align-items:center;gap:10px;">
                <label style="display:inline-block;padding:6px 12px;background:#2563eb;color:#fff;border-radius:6px;cursor:pointer;font-size:0.9em;">
                  选择新文件
                  <input type="file" name="audio" accept="audio/*" style="display:none;" id="audio-input">
                </label>
                <span id="audio-status" style="font-size:0.9em;color:#666;">未选择新文件</span>
              </div>
              <div style="font-size:0.85em;color:#888;margin-top:4px;">
                当前文件：${chapterId}.mp3
              </div>
            </div>
            
            <div style="display:flex;gap:18px;justify-content:center;">
              <button type="submit" style="background:#2563eb;color:#fff;border:none;border-radius:6px;padding:8px 24px;cursor:pointer;">保存</button>
              <button type="button" onclick="closeEditPopup('edit-chapter-popup')" style="background:#eee;color:#2563eb;border:none;border-radius:6px;padding:8px 24px;cursor:pointer;">取消</button>
            </div>
          </form>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', html);
      
      // 音频文件选择提示
      const audioInput = document.getElementById('audio-input');
      const audioStatus = document.getElementById('audio-status');
      audioInput.onchange = function() {
        if (this.files && this.files[0]) {
          audioStatus.textContent = `已选择：${this.files[0].name}`;
          audioStatus.style.color = '#2563eb';
        } else {
          audioStatus.textContent = '未选择新文件';
          audioStatus.style.color = '#666';
        }
      };
      
      document.getElementById('edit-chapter-form').onsubmit = function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        formData.append('folder', folder);
        formData.append('chapterId', chapterId);
        
        fetch('/api/edit-chapter', {
          method: 'POST',
          body: formData
        }).then(res => res.json())
          .then(data => {
            if (data.success) {
              alert('保存成功');
              closeEditPopup();
              showNovels();
            } else {
              alert('保存失败：' + (data.message || ''));
            }
          });
      };
    });
};

// 弹窗关闭时恢复页面滚动
window.closeEditPopup = function(popupId) {
  if (popupId) {
    // 关闭指定弹窗
    const popup = document.getElementById(popupId);
    if (popup) {
      popup.remove();
    }
  } else {
    // 关闭所有弹窗（保持原有行为）
    document.querySelectorAll('div[style*="position:fixed"]').forEach(e => e.remove());
  }
  
  // 检查是否还有弹窗，如果没有则恢复页面滚动
  const remainingPopups = document.querySelectorAll('div[style*="position:fixed"]');
  if (remainingPopups.length === 0) {
    document.body.style.overflow = '';
  }
};

// 小说详情页，展示章节目录
function showNovelDetail(folder) {
  location.hash = `#/novel/${folder}`;
  fetch(`/novels/${folder}/info.json`)
    .then(res => res.json())
    .then(info => {
      fetch(`/novels/${folder}/chapters.json`)
        .then(res => {
          if (res.status === 404) return [];
          return res.json();
        })
        .then(chapters => {
          // 按 order 升序排序
          chapters = (chapters || []).slice().sort((a, b) => (a.order || 0) - (b.order || 0));
          let chapterCount = chapters.length;
          let chapterListHtml = '';
          // 读取上次播放记录
          const username = localStorage.getItem('username');
          let lastPlayed = null;
          let lastProgress = 0;
          try {
            const key = `lastPlayed_${username}_${folder}`;
            const val = localStorage.getItem(key);
            if (val) {
              const obj = JSON.parse(val);
              lastPlayed = obj.chapterId;
              lastProgress = obj.audioTime || 0;
            }
          } catch (e) {}
          if (chapterCount > 0) {
          chapterListHtml = `
            <div style="padding:18px 0 0 0;">
              <div style="font-weight:bold;color:#2563eb;margin-bottom:12px;">章节目录</div>
              <div id="chapter-list-scroll" style="max-height:400px;overflow-y:auto;border-radius:8px;box-shadow:0 1px 4px rgba(76,110,245,0.06);background:#f8faff;width:100%;">
                <ul style="list-style:none;padding:0;margin:0;">
                  ${chapters.map((ch, idx) => `
                    <li style="padding:8px 0;border-bottom:1px solid #eee;">
                      <div class="chapter-list-item" 
                          data-chapter-id="${ch.id}"
                          style="
                            font-weight:bold;
                            color:${ch.id === lastPlayed ? '#e53935' : '#2563eb'};
                            font-size:1em;
                            white-space:nowrap;
                            overflow:hidden;
                            text-overflow:ellipsis;
                            cursor:pointer;
                            max-width:300px;
                            transition:background 0.18s, color 0.18s;
                            user-select:none;
                            padding:8px 12px;
                            border-radius:6px;
                            ${ch.id === lastPlayed ? 'background:rgba(229,57,53,0.08);' : ''}
                          "
                          title="${ch.name}"
                          onclick="showChapterInline('${folder}','${ch.id}', this, null, null, false)">
                          ${ch.name}
                          ${ch.id === lastPlayed ? '<span style="margin-left:8px;color:#e53935;font-size:0.92em;">● 上次播放</span>' : ''}
                      </div>
                      <div style="text-align:right;color:#888;font-size:0.92em;margin-top:2px;user-select:none;padding:0 12px;">
                        ${ch.time || ''}
                      </div>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
          `;
          } else {
            chapterListHtml = `<div style="color:#888;padding:18px 0;">暂无章节</div>`;
          }
          let html = `
            <div style="display:flex;max-width:900px;margin:40px auto 0 auto;gap:32px;">
              <div style="flex:1;min-width:260px;background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(76,110,245,0.10);padding:32px 24px 24px 24px;position:relative;">
                <img class="novel-detail-cover" src="/novels/${folder}/cover.jpg" alt="封面" style="width:180px;height:120px;object-fit:cover;border-radius:12px;margin-bottom:18px;">
                <div style="position:absolute;top:18px;left:18px;background:rgba(37,99,235,0.85);color:#fff;padding:4px 12px;border-radius:8px;font-size:0.95em;box-shadow:0 2px 8px rgba(76,110,245,0.10);user-select:none;">
                  共${chapterCount}章
                </div>
                <div class="novel-detail-title" style="font-size:1.3em;color:#2563eb;font-weight:bold;margin-bottom:10px;user-select:text;">${info.title}</div>
                <div class="novel-detail-author" style="font-size:1em;color:#555;margin-bottom:10px;user-select:none;">作者：${info.author}</div>
                ${info.desc ? `<div class="novel-detail-desc" style="font-size:0.95em;color:#888;margin-bottom:14px;user-select:none;">${info.desc}</div>` : ''}
                <div id="chapter-player-wrap"></div>
                <div id="chapter-nav-btns" style="margin-top:18px;display:none;gap:12px;"></div>
              </div>
              <div style="width:340px;">
                ${chapterListHtml}
              </div>
            </div>
          `;
          document.getElementById('main-content').innerHTML = html;
          // 如果有上次播放记录，自动显示播放器
          if (lastPlayed) {
            showChapterInline(folder, lastPlayed, null, chapters, lastProgress, false);
          }
        })
        .catch(() => {
          let html = `
            <div style="display:flex;max-width:900px;margin:40px auto 0 auto;gap:32px;">
              <div style="flex:1;min-width:260px;background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(76,110,245,0.10);padding:32px 24px 24px 24px;">
                <img class="novel-detail-cover" src="/novels/${folder}/cover.jpg" alt="封面" style="width:180px;height:120px;object-fit:cover;border-radius:12px;margin-bottom:18px;">
                <div class="novel-detail-title" style="font-size:1.3em;color:#2563eb;font-weight:bold;margin-bottom:10px;user-select:text;">${info.title}</div>
                <div class="novel-detail-author" style="font-size:1em;color:#555;margin-bottom:10px;user-select:none;">作者：${info.author}</div>
                ${info.desc ? `<div class="novel-detail-desc" style="font-size:0.95em;color:#888;margin-bottom:14px;user-select:none;">${info.desc}</div>` : ''}
                <div id="chapter-player-wrap"></div>
              </div>
              <div style="width:340px;color:#888;padding:18px 0;">暂无章节</div>
            </div>
          `;
          document.getElementById('main-content').innerHTML = html;
        });
    });
};

window.showChapterInline = function(folder, chapterId, el, chaptersArr, lastProgress, autoPlay) {
  const old = document.getElementById('chapter-player-wrap');
  if (old) old.innerHTML = '';

  // 高亮章节并滚动到可视区域的函数
  function highlightAndScrollToChapter(chapterId) {
    document.querySelectorAll('.chapter-list-item').forEach(div => {
      // 移除所有状态标记
      const existingSpan = div.querySelector('span');
      if (existingSpan && (existingSpan.textContent.includes('● 上次播放') || existingSpan.textContent.includes('● 正在播放'))) {
        existingSpan.remove();
      }
      
      if (div.getAttribute('data-chapter-id') === chapterId) {
        // 高亮当前播放章节
        div.style.background = 'rgba(229,57,53,0.08)';
        div.style.color = '#e53935';
        // 添加当前播放标记
        div.innerHTML += '<span style="margin-left:8px;color:#e53935;font-size:0.92em;">● 正在播放</span>';
        // 自动滚动到可视区域
        const listWrap = document.getElementById('chapter-list-scroll');
        if (listWrap) {
          const top = div.offsetTop - listWrap.offsetTop;
          listWrap.scrollTo({ top: top - 40, behavior: 'smooth' });
        }
      } else {
        // 重置其他章节样式
        div.style.background = '';
        div.style.color = '#2563eb';
      }
    });
  }
  
  function getChapters(callback) {
    if (chaptersArr && Array.isArray(chaptersArr)) {
      callback(chaptersArr);
    } else {
      fetch(`/novels/${folder}/chapters.json`)
        .then(res => res.json())
        .then(chapters => {
          chapters = (chapters || []).slice().sort((a, b) => (a.order || 0) - (b.order || 0));
          callback(chapters);
        });
    }
  }
  
  getChapters(function(chapters) {
    const idx = chapters.findIndex(ch => ch.id === chapterId);
    fetch(`/novels/${folder}/chapters/${chapterId}.json`)
      .then(res => res.json())
      .then(chapter => {
        let html = `
          <div style="margin-top:24px;animation:fadeIn 0.4s;">
            <div style="font-size:1.1em;color:#2563eb;font-weight:bold;margin-bottom:10px;user-select:text;">${chapter.name}</div>
            <audio class="audio-player" id="chapter-audio" controls src="/novels/${folder}/chapters/${chapterId}.mp3" style="width:100%;margin-top:10px;"></audio>
          </div>
        `;
        old.innerHTML = html;
        
        // 上下章按钮
        const navBtns = document.getElementById('chapter-nav-btns');
        if (navBtns) {
          navBtns.style.display = 'flex';
          navBtns.innerHTML = `
            <button id="prev-chapter-btn" style="padding:8px 18px;border-radius:8px;border:none;background:#2563eb;color:#fff;font-weight:bold;cursor:pointer;">上一章</button>
            <button id="next-chapter-btn" style="padding:8px 18px;border-radius:8px;border:none;background:#2563eb;color:#fff;font-weight:bold;cursor:pointer;">下一章</button>
          `;
          document.getElementById('prev-chapter-btn').onclick = function() {
            if (idx > 0) {
              window.showChapterInline(folder, chapters[idx - 1].id, null, chapters, 0, true);
            } else {
              alert('已经是第一章');
            }
          };
          document.getElementById('next-chapter-btn').onclick = function() {
            if (idx < chapters.length - 1) {
              window.showChapterInline(folder, chapters[idx + 1].id, null, chapters, 0, true);
            } else {
              alert('已经是最后一章');
            }
          };
        }
        
        // 音频进度逻辑
        const username = localStorage.getItem('username');
        let progressToSet = 0;
        
        // 确保 audio 元素已渲染
        setTimeout(() => {
          const audio = document.getElementById('chapter-audio');
          if (!audio) return; // 防御
          
          if (typeof lastProgress === 'number' && lastProgress > 0) {
            progressToSet = lastProgress;
            setProgressAndPlay(audio);
          } else {
            fetch('/api/get-audio-progress', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: `username=${encodeURIComponent(username)}&folder=${encodeURIComponent(folder)}&chapterId=${encodeURIComponent(chapterId)}`
            }).then(res => res.json())
              .then(data => {
                progressToSet = data.audioTime || 0;
                setProgressAndPlay(audio);
              });
          }
          
          // 设置进度并自动播放，确保 loadedmetadata 后再设置
          function setProgressAndPlay(audio) {
            function handler() {
              try {
                if (progressToSet > 0) audio.currentTime = progressToSet;
              } catch (e) {}
              // 只有明确指定 autoPlay 为 true 时才自动播放
              if (autoPlay === true) {
                const playPromise = audio.play();
                if (playPromise) playPromise.catch(() => {});
              }
              audio.removeEventListener('loadedmetadata', handler);
            }
            audio.addEventListener('loadedmetadata', handler);
            if (audio.readyState >= 1) handler();
          }
          
          // 监听音频播放进度并保存
          audio.addEventListener('timeupdate', function() {
            const audioTime = Math.floor(audio.currentTime);
            fetch('/api/save-audio-progress', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: `username=${encodeURIComponent(username)}&folder=${encodeURIComponent(folder)}&chapterId=${encodeURIComponent(chapterId)}&audioTime=${audioTime}`
            });
            // 记录最后播放章节和进度
            const key = `lastPlayed_${username}_${folder}`;
            localStorage.setItem(key, JSON.stringify({ chapterId, audioTime }));
          });
          
          // 自动播放下一章
          audio.addEventListener('ended', function() {
            if (idx < chapters.length - 1) {
              window.showChapterInline(folder, chapters[idx + 1].id, null, chapters, 0, true);
            }
          });
          
          // 高亮当前播放章节并滚动到可视区域
          highlightAndScrollToChapter(chapterId);
        }, 0);
      });
  });
};

// 修改编辑小说函数
window.editNovel = function(folder) {
  fetch(`/novels/${folder}/info.json`)
    .then(res => res.json())
    .then(info => {
      let html = `
        <div id="edit-novel-popup" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.15);z-index:100000;display:flex;align-items:center;justify-content:center;" onclick="closeEditPopup('edit-novel-popup')">
          <form id="edit-novel-form" enctype="multipart/form-data" style="background:#fff;padding:32px 24px;border-radius:12px;min-width:320px;max-width:400px;box-shadow:0 2px 16px rgba(76,110,245,0.12);" onclick="event.stopPropagation()">
            <h2 style="text-align:center;color:#2563eb;">编辑小说</h2>
            
            <div style="margin-bottom:18px;text-align:center;">
              <img id="preview-cover" src="/novels/${folder}/cover.jpg" style="width:120px;height:80px;object-fit:cover;border-radius:8px;margin-bottom:10px;" alt="封面预览">
              <div>
                <label style="display:inline-block;padding:6px 12px;background:#2563eb;color:#fff;border-radius:6px;cursor:pointer;font-size:0.9em;">
                  更换封面
                  <input type="file" name="cover" accept="image/*" style="display:none;" id="cover-input">
                </label>
              </div>
            </div>
            
            <label style="display:block;margin-bottom:12px;">
              书名：
              <input type="text" name="title" value="${info.title || ''}" required style="width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;margin-top:4px;">
            </label>
            
            <label style="display:block;margin-bottom:12px;">
              作者：
              <input type="text" name="author" value="${info.author || ''}" required style="width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;margin-top:4px;">
            </label>
            
            <label style="display:block;margin-bottom:18px;">
              简介：
              <textarea name="desc" rows="3" style="width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;margin-top:4px;resize:vertical;">${info.desc || ''}</textarea>
            </label>
            
            <div style="display:flex;gap:18px;justify-content:center;">
              <button type="submit" style="background:#2563eb;color:#fff;border:none;border-radius:6px;padding:8px 24px;cursor:pointer;">保存</button>
              <button type="button" onclick="closeEditPopup('edit-novel-popup')" style="background:#eee;color:#2563eb;border:none;border-radius:6px;padding:8px 24px;cursor:pointer;">取消</button>
            </div>
          </form>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', html);
      
      // 封面预览功能
      const coverInput = document.getElementById('cover-input');
      const previewCover = document.getElementById('preview-cover');
      coverInput.onchange = function() {
        if (this.files && this.files[0]) {
          const reader = new FileReader();
          reader.onload = function(e) {
            previewCover.src = e.target.result;
          };
          reader.readAsDataURL(this.files[0]);
        }
      };
      
      document.getElementById('edit-novel-form').onsubmit = function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        formData.append('folder', folder);
        
        fetch('/api/edit-novel', {
          method: 'POST',
          body: formData
        }).then(res => res.json())
          .then(data => {
            if (data.success) {
              alert('保存成功');
              closeEditPopup();
              showNovels();
            } else {
              alert('保存失败：' + (data.message || ''));
            }
          });
      };
    });
};

window.deleteNovel = function(folder) {
  if (!confirm('确定要删除该小说吗？删除后不可恢复！')) return;
  fetch('/api/delete-novel', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `folder=${encodeURIComponent(folder)}`
  }).then(res => res.json())
    .then(data => {
      if (data.success) {
        alert('删除成功');
        closeEditPopup();
        showNovels();
      } else {
        alert('删除失败：' + (data.message || ''));
      }
    });
};

// 章节详情页，播放音频并记录进度
window.showChapterDetail = function(folder, chapterId) {
  fetch(`/novels/${folder}/chapters/${chapterId}.json`)
    .then(res => res.json())
    .then(chapter => {
      let html = `
        <div class="chapter-detail" style="max-width: 400px;margin: 40px auto 0 auto;background: #fff;border-radius: 16px;box-shadow: 0 4px 24px rgba(76,110,245,0.10);padding: 32px 24px 24px 24px;text-align: center;">
          <div style="font-size:1.1em;color:#2563eb;font-weight:bold;margin-bottom:10px;">${chapter.name}</div>
          <audio class="audio-player" id="chapter-audio" controls src="/novels/${folder}/chapters/${chapterId}.mp3" style="width:100%;margin-top:10px;"></audio>
        </div>
      `;
      document.getElementById('main-content').innerHTML = html;
      // 获取并恢复音频进度
      const username = localStorage.getItem('username');
      fetch('/api/get-audio-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `username=${encodeURIComponent(username)}&folder=${encodeURIComponent(folder)}&chapterId=${encodeURIComponent(chapterId)}`
      }).then(res => res.json())
        .then(data => {
          const audio = document.getElementById('chapter-audio');
          audio.currentTime = data.audioTime || 0;
        });
      // 监听音频播放进度并保存
      const audio = document.getElementById('chapter-audio');
      audio.addEventListener('timeupdate', function() {
        const audioTime = Math.floor(audio.currentTime);
        fetch('/api/save-audio-progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `username=${encodeURIComponent(username)}&folder=${encodeURIComponent(folder)}&chapterId=${encodeURIComponent(chapterId)}&audioTime=${audioTime}`
        });
      });
    });
}

// 注册/登录/审核/个人中心等功能保持不变
function showRegisterForm() {
  document.getElementById('main-content').innerHTML = `
    <form class="upload-form" id="register-form" style="max-width:320px;margin:80px auto;">
      <h2 style="text-align:center;color:#2563eb;">账号注册</h2>
      <label>用户名：<input type="text" name="username" required></label>
      <label>密码：<input type="password" name="password" required></label>
      <button type="submit">注册</button>
      <div style="margin-top:12px;text-align:center;">
        <a href="javascript:void(0)" id="to-login" style="color:#2563eb;">已有账号？去登录</a>
      </div>
    </form>
  `;
  document.getElementById('register-form').onsubmit = function(e) {
    e.preventDefault();
    const username = this.username.value;
    const password = this.password.value;
    fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    }).then(res => res.json())
      .then(data => {
        if (data.success) {
          alert('注册成功，请等待管理员审核！');
          showLoginForm();
        } else {
          alert('注册失败：' + (data.message || '未知错误'));
        }
      });
  };
  document.getElementById('to-login').onclick = showLoginForm;
}



function showLoginForm() {
  document.getElementById('main-content').innerHTML = `
    <form class="upload-form" id="login-form" style="max-width:320px;margin:80px auto;">
      <h2 style="text-align:center;color:#2563eb;">账号登录</h2>
      <label>用户名：<input type="text" name="username" required></label>
      <label>密码：<input type="password" name="password" required></label>
      <button type="submit">登录</button>
      <div style="margin-top:12px;text-align:center;">
        <a href="javascript:void(0)" id="to-register" style="color:#2563eb;">没有账号？去注册</a>
      </div>
    </form>
  `;
  document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    const username = this.username.value;
    const password = this.password.value;
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    }).then(res => res.json())
      .then(data => {
        if (data.success) {
          localStorage.setItem('username', data.username);
          localStorage.setItem('joinTime', data.joinTime || new Date().toLocaleDateString());
          localStorage.setItem('isAdmin', data.isAdmin ? '1' : '');
          renderApp();
        } else {
          alert('登录失败：' + (data.message || '账号或密码错误'));
        }
      });
  };
  document.getElementById('to-register').onclick = showRegisterForm;
}

// 登录拦截渲染
function renderApp() {
  if (!localStorage.getItem('username')) {
    showLoginForm();
    document.querySelectorAll('.nav-btn').forEach(btn => btn.disabled = true);
    return false;
  } else {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.disabled = false);
    return true;
  }
}

// 视频页
function showVideoPage() {
  location.hash = '#/video';
}



// hash路由渲染
function renderByHash() {
  if (!renderApp()) return; // 未登录时只显示登录页
  const hash = location.hash;
  if (hash === '#/' || hash === '') {
    showHome();
  } else if (hash === '#/novel') {
    showNovels();
  } else if (hash.startsWith('#/novel/')) {
    // 小说详情页，唯一标识符
    const novelId = hash.replace('#/novel/', '');
    showNovelDetail(novelId);
  } else if (hash === '#/video') {
    showVideoPage();
  } else if (hash === '#/upload') {
    showUploadForm();
  } else if (hash === '#/mine') {
    showMine();
  } else {
    showHome();
  }
}


function showPendingUsers() {
  fetch('/api/pending-users')
    .then(res => res.json())
    .then(list => {
      let html = `
        <div style="max-width:400px;margin:40px auto;background:#fff;border-radius:12px;box-shadow:0 2px 8px rgba(76,110,245,0.08);padding:32px 24px 24px 24px;">
          <h2 style="color:#2563eb;text-align:center;margin-bottom:18px;">待审核用户</h2>
      `;
      if (list.length === 0) {
        html += `<div style="text-align:center;color:#888;">暂无待审核用户</div>`;
      } else {
        list.forEach(user => {
          html += `
            <div style="border-bottom:1px solid #eee;padding:12px 0;">
              <div>用户名：<b>${user.username}</b></div>
              <div>申请时间：${user.joinTime}</div>
              <div style="margin-top:8px;">
                <button onclick="reviewUser('${user.username}','approve')" style="background:#2563eb;color:#fff;border:none;border-radius:4px;padding:4px 12px;cursor:pointer;margin-right:10px;">通过</button>
                <button onclick="reviewUser('${user.username}','reject')" style="background:#e53935;color:#fff;border:none;border-radius:4px;padding:4px 12px;cursor:pointer;">拒绝</button>
              </div>
            </div>
          `;
        });
      }
      html += `<div style="text-align:center;margin-top:18px;"><button onclick="showMine()" style="background:#2563eb;color:#fff;border:none;border-radius:4px;padding:6px 18px;cursor:pointer;">返回</button></div>`;
      html += `</div>`;
      document.getElementById('main-content').innerHTML = html;
    });
}

// 审核操作
window.reviewUser = function(username, action) {
  fetch('/api/review-user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=${encodeURIComponent(username)}&action=${action}`
  }).then(res => res.json())
    .then(data => {
      if (data.success) {
        alert('操作成功');
        showPendingUsers();
      } else {
        alert('操作失败');
      }
    });
};

function showMine() {
  location.hash = '#/mine';
  const username = localStorage.getItem('username') || '';
  let joinTime = localStorage.getItem('joinTime');
  if (!joinTime) {
    joinTime = new Date().toLocaleDateString();
    localStorage.setItem('joinTime', joinTime);
  }
  // 检查是否有待审核用户
  let mailRedDot = '';
  if (localStorage.getItem('isAdmin') === '1') {
    fetch('/api/has-pending').then(res => res.json()).then(data => {
      if (data.hasPending) {
        document.getElementById('mail-icon-dot').style.display = 'block';
      } else {
        document.getElementById('mail-icon-dot').style.display = 'none';
      }
    });
  }
  document.getElementById('main-content').innerHTML = `
    <div style="width:100%;position:relative;">
      <div style="font-size:1.3em;color:#2563eb;font-weight:bold;margin:0 0 32px 0;">个人中心</div>
      <div style="position:absolute;top:0;right:0;display:flex;gap:18px;">
        <!-- 邮件图标 -->
        <span title="消息" style="display:inline-block;cursor:pointer;position:relative;" id="mail-icon">
          <svg width="24" height="24" fill="#2563eb" viewBox="0 0 24 24">
            <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11zm2.5-.5a.5.5 0 0 0-.5.5v.2l8 5.3 8-5.3V6.5a.5.5 0 0 0-.5-.5h-15zm15.5 2.3-7.6 5.1a1 1 0 0 1-1.1 0L3 8.3V17.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V8.3z"/>
          </svg>
          <span id="mail-icon-dot" style="display:none;position:absolute;top:2px;right:2px;width:8px;height:8px;background:#e53935;border-radius:50%;"></span>
        </span>
        <!-- 铃铛图标 -->
        <span title="通知" style="display:inline-block;cursor:pointer;">
          <svg width="24" height="24" fill="#2563eb" viewBox="0 0 24 24">
            <path d="M12 2a6 6 0 0 1 6 6v3.5c0 .7.3 1.4.8 1.9l1.2 1.2a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7l1.2-1.2c.5-.5.8-1.2.8-1.9V8a6 6 0 0 1 6-6zm0 20a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2z"/>
          </svg>
        </span>
      </div>
    </div>
    <div style="
      max-width:320px;
      margin:0 auto;
      background:#fff;
      border-radius:12px;
      box-shadow:0 2px 8px rgba(76,110,245,0.08);
      padding:32px 24px 24px 24px;
      text-align:center;
    ">
      <div style="font-size:1.1em;margin-bottom:12px;">用户名：<b>${username}</b></div>
      <div style="font-size:1em;color:#888;margin-bottom:24px;">加入时间：${joinTime}</div>
      <button id="logout-btn" style="
        width:100%;
        padding:10px 0;
        background:#e53935;
        color:#fff;
        border:none;
        border-radius:6px;
        font-size:1em;
        cursor:pointer;
        font-weight:bold;
        transition:background 0.2s;
      ">退出登录</button>
    </div>
  `;
  document.getElementById('logout-btn').onclick = function() {
    localStorage.removeItem('username');
    localStorage.removeItem('joinTime');
    localStorage.removeItem('isAdmin');
    renderApp();
  };
  document.getElementById('mail-icon').onclick = function() {
    if (localStorage.getItem('isAdmin') === '1') {
      showPendingUsers();
    }
  };
}

function adaptMobileNav() {
  // 检查是否为移动端
  if (window.innerWidth <= 768) {
    console.log('当前为移动端，宽度：', window.innerWidth);
    // 如果没有 topbar，则创建
    let topbar = document.getElementById('topbar');
    if (!topbar) {
      topbar = document.createElement('div');
      topbar.id = 'topbar';
      document.body.prepend(topbar);
      console.log('已创建 topbar');
    }
    // 移动 nav-btn 到 topbar
    document.querySelectorAll('.nav-btn').forEach(btn => {
      topbar.appendChild(btn);
      btn.style.margin = '0 4px';
      console.log('已移动按钮到 topbar:', btn.textContent);
    });
    // 隐藏侧边栏
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.style.display = 'none';
      console.log('已隐藏 sidebar');
    }
  } else {
    console.log('当前为PC端，宽度：', window.innerWidth);
    // PC端还原
    const topbar = document.getElementById('topbar');
    const sidebar = document.getElementById('sidebar');
    if (topbar && sidebar) {
      document.querySelectorAll('.nav-btn').forEach(btn => {
        sidebar.appendChild(btn);
        btn.style.margin = '12px 0';
        console.log('已移动按钮到 sidebar:', btn.textContent);
      });
      topbar.remove();
      sidebar.style.display = 'flex';
      console.log('已还原 sidebar 并移除 topbar');
    }
  }
}

// 3. 监听 hashchange，根据 hash 渲染页面
window.addEventListener('hashchange', function() {
  const hash = location.hash;
  if (hash.startsWith('#/novel/')) {
    const folder = hash.replace('#/novel/', '');
    showNovelDetail(folder);
  } else if (hash === '#/' || hash === '') {
    showHome();
  }
  // 可扩展更多页面
});

// 4. 页面首次加载时根据 hash 渲染
window.addEventListener('DOMContentLoaded', function() {
  const hash = location.hash;
  if (hash.startsWith('#/novel/')) {
    const folder = hash.replace('#/novel/', '');
    showNovelDetail(folder);
  } else if (hash === '#/' || hash === '') {
    showHome();
  }
});

// 监听 hashchange
window.addEventListener('hashchange', renderByHash);

// 页面首次加载时根据 hash 渲染
window.addEventListener('DOMContentLoaded', function() {
  adaptMobileNav();
  renderByHash();
});
window.addEventListener('resize', adaptMobileNav);

// 侧边栏按钮事件绑定
document.querySelector('[data-type="novel"]').onclick = showNovels;
document.querySelector('[data-type="upload"]').onclick = showUploadForm;
document.querySelector('[data-type="video"]').onclick = showHome;
document.querySelector('[data-type="mine"]').onclick = showMine;

// 页面加载时只渲染登录或主页
renderApp();

// 让 showNovelDetail 可全局调用
window.showNovelDetail = showNovelDetail;