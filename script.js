const CIRC = 553;

const THEMES = [
  {n:'🌸 Sakura',     p:'#C4126A',pd:'#7A0038',pm:'#FF6DAF',a:'#7B2FD8',al:'#F7EFFF',g:'#0ABFA0',pl:'#FFF3FA'},
  {n:'💜 Witch Night',p:'#8B5CF6',pd:'#4C1D95',pm:'#A78BFA',a:'#F472B6',al:'#1a0030',g:'#34D399',pl:'#1a0038'},
  {n:'🌙 Pastel Goth',p:'#C026D3',pd:'#86198F',pm:'#E879F9',a:'#EC4899',al:'#FDF2F8',g:'#06B6D4',pl:'#FDF4FF'},
  {n:'🪻 Lavender',   p:'#7C3AED',pd:'#5B21B6',pm:'#C4B5FD',a:'#F9A8D4',al:'#FDF2F8',g:'#34D399',pl:'#F2EEFF'},
  {n:'🩵 Soft Blue',  p:'#3B82F6',pd:'#1D4ED8',pm:'#93C5FD',a:'#EC4899',al:'#FFF0F8',g:'#06B6D4',pl:'#EFF6FF'},
  {n:'🌿 Mint Witch', p:'#0891B2',pd:'#0E7490',pm:'#22D3EE',a:'#A78BFA',al:'#F2EEFF',g:'#F472B6',pl:'#ECFEFF'},
  {n:'🌹 Blood Rose', p:'#E11D48',pd:'#9F1239',pm:'#FCA5A5',a:'#8B5CF6',al:'#F3E8FF',g:'#2DD4BF',pl:'#FFF1F2'},
  {n:'🌻 Sunflower',  p:'#D97706',pd:'#92400E',pm:'#FCD34D',a:'#EC4899',al:'#FDF2F8',g:'#059669',pl:'#FFFBEB'},
  {n:'🌊 Ocean',      p:'#0284C7',pd:'#075985',pm:'#38BDF8',a:'#6366F1',al:'#EEF2FF',g:'#10B981',pl:'#F0F9FF'},
  {n:'🍓 Strawberry', p:'#F43F5E',pd:'#9F1239',pm:'#FDA4AF',a:'#EC4899',al:'#FFF0F8',g:'#22C55E',pl:'#FFF1F2'},
  {n:'✨ Stardust',   p:'#C084FC',pd:'#6D28D9',pm:'#DDD6FE',a:'#F0ABFC',al:'#FDF4FF',g:'#67E8F9',pl:'#F5F3FF'},
  {n:'🖤 Void',       p:'#6D28D9',pd:'#4C1D95',pm:'#8B5CF6',a:'#EC4899',al:'#1a0020',g:'#10B981',pl:'#0d0020'},
  {n:'🌈 Pride',      p:'#E11D48',pd:'#9F1239',pm:'#FCA5A5',a:'#F59E0B',al:'#FEF9C3',g:'#10B981',pl:'#FFF1F2'},
  {n:'🫧 Soft Holo',  p:'#A78BFA',pd:'#5B21B6',pm:'#C4B5FD',a:'#67E8F9',al:'#F0FFFE',g:'#F472B6',pl:'#F5F3FF'},
  {n:'🍬 Candy',      p:'#EC4899',pd:'#9D174D',pm:'#FBCFE8',a:'#FBBF24',al:'#FEF9C3',g:'#34D399',pl:'#FDF2F8'},
  {n:'🌌 Cosmos',     p:'#818CF8',pd:'#3730A3',pm:'#A5B4FC',a:'#F472B6',al:'#1e1b4b',g:'#34D399',pl:'#1e1b4b'},
  {n:'🖤 Obsidian',   p:'#FF2D55',pd:'#8B0020',pm:'#FF6680',a:'#BF5AF2',al:'#1a0030',g:'#30D158',pl:'#0d0010'},
  {n:'🩸 Dark Roses', p:'#DC143C',pd:'#800020',pm:'#FF4060',a:'#9B59B6',al:'#1a0028',g:'#2ECC71',pl:'#0d0010'},
  {n:'🔮 Crystal',    p:'#9B59B6',pd:'#6C3483',pm:'#C39BD3',a:'#5DADE2',al:'#1a2040',g:'#1ABC9C',pl:'#10001a'},
  {n:'🌑 Eclipse',    p:'#E91E63',pd:'#880E4F',pm:'#F48FB1',a:'#673AB7',al:'#1a0030',g:'#4CAF50',pl:'#0d000d'},
  {n:'⚡ Storm',      p:'#00BCD4',pd:'#006064',pm:'#80DEEA',a:'#FF5722',al:'#1a0800',g:'#8BC34A',pl:'#001a1a'},
  {n:'🧿 Evil Eye',   p:'#3F51B5',pd:'#1A237E',pm:'#7986CB',a:'#FF4081',al:'#1a0030',g:'#00BCD4',pl:'#0a0018'},
  {n:'🌿 Dark Fern',  p:'#2E7D32',pd:'#1B5E20',pm:'#81C784',a:'#C62828',al:'#1a0000',g:'#F9A825',pl:'#001a00'},
  {n:'🎭 Theatre',    p:'#7B1FA2',pd:'#4A148C',pm:'#CE93D8',a:'#E65100',al:'#1a0a00',g:'#558B2F',pl:'#100018'},
];

const UNIT_COLS = [
  '#C026D3','#EC4899','#06B6D4','#F472B6','#60A5FA','#F59E0B','#E11D48','#34D399',
  '#A78BFA','#FB923C','#38BDF8','#4ADE80','#F87171','#C084FC','#FCD34D','#67E8F9',
  '#8B5CF6','#2DD4BF','#FBBF24','#F43F5E',
];

const FONTS = [
  // ── ENGLISH FONTS ───────────────────────────────────────────────
  {k:'Nunito',       l:'Nunito',                fn:'Nunito,"Noto Sans JP",sans-serif',                      fnh:'"Fredoka One","M PLUS Rounded 1c",cursive',   jp:false},
  {k:'Fredoka',      l:'Fredoka One',           fn:'"Fredoka One","M PLUS Rounded 1c",cursive',             fnh:'"Fredoka One","M PLUS Rounded 1c",cursive',   jp:false},
  {k:'Bubblegum',    l:'Bubblegum Sans',        fn:'"Bubblegum Sans","Noto Sans JP",cursive',               fnh:'"Bubblegum Sans",cursive',                    jp:false},
  {k:'Comfortaa',    l:'Comfortaa',             fn:'Comfortaa,"Noto Sans JP",sans-serif',                   fnh:'Comfortaa,sans-serif',                        jp:false},
  {k:'Quicksand',    l:'Quicksand',             fn:'Quicksand,"Noto Sans JP",sans-serif',                   fnh:'"Fredoka One",cursive',                       jp:false},
  {k:'DMSans',       l:'DM Sans',               fn:'"DM Sans","Noto Sans JP",sans-serif',                   fnh:'"DM Sans",sans-serif',                        jp:false},
  {k:'SpaceG',       l:'Space Grotesk',         fn:'"Space Grotesk","Noto Sans JP",sans-serif',             fnh:'"Space Grotesk",sans-serif',                  jp:false},
  {k:'Raleway',      l:'Raleway',               fn:'Raleway,"Noto Sans JP",sans-serif',                     fnh:'Raleway,sans-serif',                          jp:false},
  {k:'Bebas',        l:'Bebas Neue',            fn:'Raleway,"Noto Sans JP",sans-serif',                     fnh:'"Bebas Neue",sans-serif',                     jp:false},
  {k:'Righteous',    l:'Righteous',             fn:'Nunito,"Noto Sans JP",sans-serif',                      fnh:'Righteous,sans-serif',                        jp:false},
  {k:'Marker',       l:'Permanent Marker',      fn:'Quicksand,"Noto Sans JP",sans-serif',                   fnh:'"Permanent Marker",cursive',                  jp:false},
  {k:'Cinzel',       l:'Cinzel',                fn:'Cinzel,"Noto Serif JP",serif',                          fnh:'Cinzel,"Kaisei Opti",serif',                  jp:false},
  {k:'Playfair',     l:'Playfair Display',      fn:'"Playfair Display","Noto Serif JP",serif',              fnh:'"Playfair Display","Kaisei Opti",serif',      jp:false},
  {k:'IMFell',       l:'IM Fell English',       fn:'"IM Fell English","Noto Serif JP",serif',               fnh:'"IM Fell English",serif',                     jp:false},
  {k:'Fraktur',      l:'UnifrakturMaguntia',    fn:'"UnifrakturMaguntia","Noto Sans JP",cursive',           fnh:'"UnifrakturMaguntia",cursive',                jp:false},
  {k:'Lexend',       l:'Lexend',                fn:'Lexend,"Noto Sans JP",sans-serif',                      fnh:'Lexend,sans-serif',                           jp:false},
  {k:'Atkinson',     l:'Atkinson Hyperlegible',  fn:'"Atkinson Hyperlegible","Noto Sans JP",sans-serif',   fnh:'"Atkinson Hyperlegible",sans-serif',          jp:false},
  // ── JAPANESE FONTS ──────────────────────────────────────────────
  {k:'NotoJP',       l:'Noto Sans JP',          fn:'"Noto Sans JP",Nunito,sans-serif',                      fnh:'"Zen Maru Gothic","M PLUS Rounded 1c",serif', jp:true},
  {k:'ZenMaru',      l:'Zen Maru Gothic',       fn:'"Zen Maru Gothic","Noto Sans JP",sans-serif',           fnh:'"Zen Maru Gothic",sans-serif',                jp:true},
  {k:'MPlusRnd',     l:'M PLUS Rounded',        fn:'"M PLUS Rounded 1c","Noto Sans JP",sans-serif',         fnh:'"M PLUS Rounded 1c",sans-serif',              jp:true},
  {k:'KiwiMaru',     l:'Kiwi Maru',             fn:'"Kiwi Maru","Noto Sans JP",serif',                      fnh:'"Kiwi Maru",serif',                           jp:true},
  {k:'Yomogi',       l:'Yomogi',                fn:'Yomogi,"Noto Sans JP",sans-serif',                      fnh:'Yomogi,sans-serif',                           jp:true},
  {k:'DelaGothic',   l:'Dela Gothic One',       fn:'"Dela Gothic One","Noto Sans JP",sans-serif',           fnh:'"Dela Gothic One",sans-serif',                jp:true},
  {k:'BizUD',        l:'BIZ UDGothic',          fn:'"BIZ UDGothic","Noto Sans JP",sans-serif',              fnh:'"BIZ UDGothic","Zen Maru Gothic",sans-serif', jp:true},
  {k:'Kaisei',       l:'Kaisei Opti',           fn:'"Kaisei Opti","Noto Serif JP",serif',                   fnh:'"Kaisei Opti",serif',                         jp:true},
];

const ALL_STK = [...'🌙⭐🔮💜🦇🕸️🌸✨🌺🍄🦋🌹💫🕯️🖤🌿✦✿🌻🌼🍀🌈🐱🐰🦊🐼🍓🍰💝🎀🔑💎🌟🪄🌒🌕🎭🧿🪷🫧🌊🦄🐉🎀🌙🫶💞🎵🌛🌜🌝✌️🌊🫀🥀💀🩸🕷️🌑🪬🦴🌫🗝️'];
const ALL_PETALS = [...'🌸🌙⭐✦✿🌺💫🔮🦋🌼🕸️🖤💜🍄🌹🫧🌊❄️🪷💗🍀🥀🦇🕯️🩸💀'];

const DEF_VIBES = 'focused 🎯,stressed 😬,tired 😪,motivated 🔥,anxious 💭,okay 🙂,overwhelmed 🌊,proud ✨,lost 🌫,grateful 🌸,excited 🎉,calm 🌿,zoned out 👾,content 🫧,cozy 🕯️';
const DEF_VIBES_JP = '集中してる 🎯,ストレス 😬,疲れた 😪,やる気 🔥,不安 💭,まあまあ 🙂,圧倒された 🌊,誇り ✨,迷子 🌫,感謝 🌸,ワクワク 🎉,穏やか 🌿,ぼーっとしてる 👾,満足 🫧,ほっこり 🕯️';
const MOODS = ['','😞','😕','😶','🙂','🥰'];
const MOODCOLS = ['','#f87171','#fb923c','#fbbf24','#34d399','#EC4899'];
const WD_EN = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const WD_JP = ['月','火','水','木','金','土','日'];

const EMOJI_DATA = {
  'Witchy 🔮':'🔮🕸️🦇🌙🌑🌒🌓🌔🌕🕯️🖤💀🔑🧿🪬🌿🍄🪷✦🌹🥀🪩🩸🦴',
  'Nature 🌸':'🌸🌺🌻🌼🌹🌷🍀🌿🍃🌊🌈⭐💫✨🌙☀️🌤🍁🍂❄️🫧🦋🐝🍄',
  'Cute 🐱':'🐱🐰🦊🐼🐻🦋🐝🌸🍓🍰🧁💝🎀🎠🪄🌟🍭🧸🦄🐉🐾💗🫶🥹',
  'Mood 💜':'💜🖤🤍💗💀🥀🌙✨💫⭐🔮🕯️🌹🪷😌🥺🤗😤😮‍💨🫠🥲😎🌚🥹',
  'Study 📚':'📚📖✏️🖊️📝💡🔬🧪🧮📐📏💻🖥️⌨️🗂️📋📌📍🗓⏰⌚🔗📎✂️',
  'Food 🍜':'🍜🍱🍣🍡🧋🍵☕🍩🍪🍰🎂🍦🫧🥤🍓🍇🍊🍋🥑🍄🫐🍑🌮🍫',
  'Japan 🇯🇵':'🇯🇵⛩🌸🎎🎏🎐🥷🗻🍱🍜🍣🍡🎋🏯🌅🎑🧧🪭🥁🎵👘',
  'Hearts ♡':'❤️🧡💛💚💙💜🖤🤍🤎💗💖💘💝💞💕♡♥️🫀💓💌🫶',
  'Stars ✦':'⭐🌟💫✨🌙☀️🌤⛅🌈🔥💥✦✧🌠🎇🎆🪐🌌🌃🌉',
};

const I18N = {
  en:{
    nav_daily:'daily',nav_study:'study',nav_reflect:'reflect',
    n_today:'Today',n_diary:'Diary',n_habits:'Habits',n_dump:'Brain dump',
    n_timer:'Timer',n_cal:'Calendar',n_week:'Week',n_tasks:'Tasks',n_ass:'Assessments',
    n_stats:'Stats',n_notes:'Unit notes',n_archive:'Archive',n_settings:'Settings',
    c_tblks:'📚 today\'s blocks',c_due:'⚠️ coming up',c_wprog:'🎯 this week',
    c_thab:'🌱 habits',c_otasks:'✅ to-do',
    h_diary:'my diary 📖',sub_diary:'honest & just for you ♡',
    c_checkin:'✨ check in',l_hope:'🌟 hope',l_hopesub:'at the door',b_edit:'edit',
    l_mood:'😊 mood',c_vibe:'🌤 vibe',
    c_studied:'📚 what i studied',c_good:'✨ what went well',c_struggle:'💭 what was hard',
    c_grat:'🌸 grateful for',c_tom:'🎯 tomorrow',c_free:'📝 free write',
    b_saveentry:'save entry ✦',b_today:'today',
    h_habits:'Habits 🌱',sub_habits:'showing up is enough',c_streaks:'🔥 streaks',b_thisweek:'this week',b_add:'+ add',
    h_dump:'Brain dump 🧠',sub_dump:'get it out of your head',c_dump_prompt:'💬 what\'s on your mind?',b_dump:'dump it ✦',l_pin:'pin',
    hint_dump_shortcut:'⌘↵ to send',
    dump_tag_idea:'💡 idea',dump_tag_vent:'😤 vent',dump_tag_goal:'🎯 goal',dump_tag_grateful:'🌸 grateful',dump_tag_random:'✨ other',
    bd_filter_all:'all',bd_no_dumps:'nothing yet ♡',bd_no_match:'nothing found',
    h_timer:'Timer ⏱',sub_timer:'one thing at a time',b_focus:'🎯 focus mode',
    b_countdown:'countdown',b_stopwatch:'stopwatch',l_unit:'unit',l_dur:'duration (min)',l_brk:'break (min)',
    l_autobrk:'auto-start breaks',l_autolog:'auto-log sessions',c_tsess:'today\'s sessions',c_tweek:'this week',
    h_cal:'Calendar 📅',b_addblock:'+ block',b_addass:'+ assessment',
    h_week:'Week 🗓',hint_remove:'click a block to edit or remove',
    h_tasks:'Tasks ✅',sub_tasks:'everything on your plate',b_addtask:'+ add task',
    h_ass:'Assessments 📝',sub_ass:'stay on top of deadlines',
    h_stats:'Stats 📊',sub_stats:'your patterns, your progress',
    c_heat:'🗓 heatmap — past year',c_wku:'📅 this week by unit',c_moodhist:'😊 mood — last 30 days',
    h_notes:'Unit notes 📌',sub_notes:'the stuff your brain won\'t hold onto',
    h_archive:'Archive 📦',sub_archive:'everything you\'ve been through',
    h_settings:'Settings ⚙️',sub_settings:'make it yours ✦',
    sh_id:'✦ identity',l_appname:'app name',l_tagline:'tagline',l_icon:'icon',b_pick:'pick ✦',
    l_quote:'daily quote',
    b_save:'save ✦',sh_tri:'✦ trimester',l_triname:'trimester name',
    txt_newtri:'this archives your blocks, tasks, assessments, diary, habits, notes and brain dumps — then gives you a fresh start. everything stays in the Archive.',
    b_newtri:'🌱 start new trimester',
    sh_units:'📚 units',hint_units:'name · colour · weekly hour goal. add as many as you need.',b_addunit:'+ add unit',
    sh_trks:'🧠 wellness trackers',hint_trks:'daily check-in sliders. track mood, energy, anxiety, sleep — whatever you want to keep an eye on.',b_addtrk:'+ add tracker',
    sh_vibes:'💬 vibe keywords',hint_vibes:'comma-separated. click one in your diary to tag that day.',
    sh_habs:'🌱 habits',b_addhab:'+ add habit',
    sh_custom:'✦ style & feel',l_roundness:'corner roundness',r_max:'✦ very round',r_med:'● round',r_min:'■ slight',r_none:'□ sharp',
    l_glow:'card glow',g_high:'✨ high',g_med:'◎ normal',g_none:'○ off',
    l_sbwidth:'sidebar width',sbw_narrow:'◀▶ narrow',sbw_med:'▷ default',sbw_wide:'◁▷ wide',
    l_rainbowmode:'rainbow mode 🌈',l_rainbow_hint:'animated rainbow effects (turn off for calmer energy)',
    l_cardpattern:'card pattern',pat_none:'✕ none',
    l_holomode:'holographic cards ✨',l_holo_hint:'iridescent rainbow card borders',
    l_cursor:'sparkle cursor ✦',l_cursor_hint:'replace cursor with ✦',
    l_clock_fmt:'clock format',l_clock12_hint:'12-hour (AM/PM)',
    l_fontsize:'font size',fs_sm:'small',fs_md:'default',fs_lg:'large',
    l_density:'layout',dn_compact:'compact',dn_def:'default',dn_wide:'spacious',
    sh_theme:'🎨 theme & colours',c_presets:'palettes',l_cprimary:'primary colour',l_csec:'accent colour',
    sh_font:'🔤 font',hint_fonts:'applies to all text. heading font is independent.',hint_font_cats:'saved separately per language.',
    sh_lang:'🌐 language / 言語',
    sh_stk:'🧸 sidebar stickers',c_stklib:'library — click to add',c_stkcur:'your stickers — click to remove',b_addsticker:'+ add',b_clearstk:'clear all',
    sh_particles:'🌸 falling particles',l_particles:'enable particles',c_ptypes:'what falls',
    l_speed:'speed',l_gentle:'gentle 🌿',l_chaotic:'chaotic 🌪',
    sh_data:'💾 data & storage',hint_data:'your data lives in a local file you picked. export backups sometimes just in case — nothing ever goes to a server.',
    sh_sbgif:'🎨 sidebar image / GIF',hint_sbgif:'an image or GIF in your sidebar. paste a direct URL.',
    l_sbgif_light:'☀️ light mode',l_sbgif_dark:'🌙 dark mode',b_sbgif_clear:'clear',
    c_diary_img:'📸 image / gif',b_add_img:'📸',
    b_export:'📥 export backup',b_import:'📤 import backup',b_delall:'🗑 delete everything',c_storage:'💾 storage used',
    sh_bg:'🖼 background',hint_bg:'paste an image or GIF URL. set separately for light and dark.',
    l_bg_light:'☀️ light mode',l_bg_dark:'🌙 dark mode',l_bg_opacity:'opacity',
    l_subtle:'subtle',l_vivid:'vivid',b_bg_clear:'clear',
    h_ass_grades:'Assessments 📝',sub_ass_grades:'results & weighted grades',
    ass_upcoming:'upcoming',ass_past:'results',ass_unit_grade:'unit grade',
    ass_weighted:'weighted so far',ass_enter_grade:'enter grade %',ass_no_weight:'no weights set yet',
    ass_grade_hint:'weighted average based on the % you set per assessment.',
    ass_projected:'projected',ass_of_total:'of total weight graded',
    sh_dump_cats:'🏷 brain dump categories',hint_dump_cats:'customise the tags you can apply to entries.',
    b_add_dump_cat:'+ add category',b_reset_dump_cats:'↺ reset to defaults',
    l_anim_speed:'✨ animation speed',anim_slow:'🌿 slow',anim_med:'⚡ normal',anim_fast:'🌪 fast',
    l_sidebar_blur:'🫧 sidebar blur',l_card_blur:'🪟 card blur',
    l_accent_glow:'💡 accent glow',
    hint_customise_extra:'every detail matters.',
    l_card_tint:'🎨 card tint',ct_none:'✕ none',
    l_card_border_style:'🖼 card border',cb_solid:'— solid',cb_dashed:'- - dashed',cb_double:'═ double',cb_none:'○ none',cb_thick:'▌ thick',
    l_card_shadow:'☁️ card shadow',cs_none:'○ none',cs_sm:'◎ subtle',cs_med:'◉ default',cs_lg:'✦ dreamy',cs_glow:'🌟 glow',
    l_card_opacity:'🫧 glass opacity',co_ghost:'👻 ghost',co_low:'🌫 frosted',co_med:'◎ default',co_solid:'■ solid',
    pat_grid:'⊞ grid',pat_diamonds:'◇ diamonds',pat_waves:'〰 waves',pat_lace:'🕸 lace (dark)',
    l_energy:'⚡ energy',l_sleep:'😴 sleep',l_water:'💧 water',
    l_tags:'🏷 tags',l_tags_ph:'add a tag…',l_private:'🔒 private',
    l_linked_tasks:'✅ linked tasks',l_diary_wg:'📓 word goal',
    l_diary_wg_unit:'words per entry',
    l_template_morning:'🌅 morning',l_template_study:'📚 study',
    l_template_night:'🌙 night',l_template_clear:'✕ clear',
    l_heading_font:'🖋 heading font',l_line_height:'↕ line height',
    lh_tight:'▪ tight',lh_normal:'◎ normal',lh_relaxed:'▫ relaxed',lh_loose:'□ loose',
    l_radius:'📐 card radius',l_sb_opacity:'🫧 sidebar opacity',l_sb_blur:'blur',
    l_sb_mode:'📌 sidebar mode',sbm_normal:'☰ normal',sbm_icons:'⬡ icons only',
    l_tilt:'🎲 3D tilt',tilt_hint:'subtle 3D on stat cards & theme swatches',
    l_sounds:'🔔 sounds',sounds_hint:'sound effects for tasks, habits, timer & streaks',
    l_view_anim:'🎞 view animations',va_full:'✦ full',va_subtle:'◎ subtle',va_off:'○ off',
    sh_extract:'🎨 extract theme from image',
    hint_extract:'paste any image URL and pull the dominant colours as your palette.',
    sh_custom_css:'💻 custom CSS',
    hint_custom_css:'injected directly into the page. use var(--p), var(--card) etc.',
    l_adv_layout:'🎛 advanced layout',
    t_tour_unavailable:'tour not available right now',t_ct_not_loaded:'color thief not loaded',
    t_ct_failed:'couldn\'t extract — try a different image',
    t_ct_bad_url:'couldn\'t load that image — check the URL',
    t_ct_empty:'couldn\'t find any colours — try something more vibrant',
    t_theme_applied:'theme applied ✦',t_css_saved:'CSS saved ✦',
    t_css_cleared:'CSS cleared',t_saved:'saved ✦',
    str_milestone_3:'three days ✦',
    str_milestone_7:'a whole week 🔥',
    str_milestone_14:'two weeks ✦',
    str_milestone_21:'three weeks 🔥',
    str_milestone_30:'30 days 🌙',
    str_milestone_60:'60 days 🌟',
    str_milestone_100:'100 days ✦',
    b_changefile:'📂 Change file',
    b_reset:'🗑 Reset',
    c_stkimg:'🖼 image stickers — click to remove',
    b_addimgstk:'+ from URL',
    b_uploadstk:'📁 upload',
    sh_np:'🎵 now playing',
    sh_vibe_mode:'✨ vibe mode',
    l_vibe_mode:'overall aesthetic',
    vm_clean:'◎ clean',vm_dreamy:'✦ dreamy',vm_cyber:'⚡ cyber',vm_cottagecore:'🌿 cottage',
    l_blur_cards:'card frosted glass',l_blur_sidebar:'sidebar blur',
    sh_seasonal:'🌸 seasonal themes',
    hint_np:'picks up whatever you\'re playing in this browser — Spotify Web, YouTube, anything with media controls.',
  },
  jp:{
    nav_daily:'きょう',nav_study:'勉強',nav_reflect:'ふりかえり',
    n_today:'今日',n_diary:'日記',n_habits:'習慣',n_dump:'脳みそ整理',
    n_timer:'タイマー',n_cal:'カレンダー',n_week:'週間',n_tasks:'タスク',n_ass:'課題',
    n_stats:'統計',n_notes:'ユニットメモ',n_archive:'アーカイブ',n_settings:'設定',
    c_tblks:'📚 今日のブロック',c_due:'⚠️ 締め切り近い',c_wprog:'🎯 今週の進捗',
    c_thab:'🌱 今日の習慣',c_otasks:'✅ やること',
    h_diary:'日記 📖',sub_diary:'正直に、あなただけのために ♡',
    c_checkin:'✨ チェックイン',l_hope:'🌟 希望',l_hopesub:'いまの気持ち',b_edit:'直す',
    l_mood:'😊 きもち',c_vibe:'🌤 バイブチェック',
    c_studied:'📚 勉強したこと',c_good:'✨ よかったこと',c_struggle:'💭 しんどかったこと',
    c_grat:'🌸 感謝',c_tom:'🎯 明日やること',c_free:'📝 ひとりごと',
    b_saveentry:'保存 ✦',b_today:'今日',
    h_habits:'習慣 🌱',sub_habits:'ちょっとずつ、それでいい',c_streaks:'🔥 連続',b_thisweek:'今週',b_add:'+ 追加',
    h_dump:'脳みそ整理 🧠',sub_dump:'頭の中、ぜんぶ出して',c_dump_prompt:'💬 いま、なにが浮かんでる？',b_dump:'吐き出す ✦',l_pin:'ピン',
    hint_dump_shortcut:'⌘↵ で送信',
    dump_tag_idea:'💡 アイデア',dump_tag_vent:'😤 ぼやき',dump_tag_goal:'🎯 目標',dump_tag_grateful:'🌸 感謝',dump_tag_random:'✨ その他',
    bd_filter_all:'すべて',bd_no_dumps:'まだなにもない — 書いてみて ♡',bd_no_match:'見つからなかった',
    h_timer:'タイマー ⏱',sub_timer:'ひとつずつ、丁寧に',b_focus:'🎯 集中モード',
    b_countdown:'カウントダウン',b_stopwatch:'ストップウォッチ',l_unit:'ユニット',l_dur:'時間（分）',l_brk:'休憩（分）',
    l_autobrk:'休憩を自動でスタート',l_autolog:'自動ログ',c_tsess:'今日のセッション',c_tweek:'今週',
    h_cal:'カレンダー 📅',b_addblock:'+ ブロック',b_addass:'+ 課題',
    h_week:'週間 🗓',hint_remove:'ブロックをクリックして編集・削除',
    h_tasks:'タスク ✅',sub_tasks:'やること、ぜんぶここに',b_addtask:'+ タスク追加',
    h_ass:'課題 📝',sub_ass:'締め切り、ちゃんと把握しとく',
    h_stats:'統計 📊',sub_stats:'自分のパターンが見えてくる',
    c_heat:'🗓 学習ヒートマップ',c_wku:'📅 今週のユニット別',c_moodhist:'😊 きもち記録 30日',
    h_notes:'ユニットメモ 📌',sub_notes:'脳が覚えたくないことを置く場所',
    h_archive:'アーカイブ 📦',sub_archive:'歩んできた道を、ここに',
    h_settings:'設定 ⚙️',sub_settings:'自分色にカスタマイズ ✦',
    sh_id:'✦ アイデンティティ',l_appname:'タイトル',l_tagline:'サブタイトル',l_icon:'アイコン',b_pick:'選ぶ ✦',
    l_quote:'今日のひとこと',
    b_save:'保存 ✦',sh_tri:'✦ ターム',l_triname:'ターム名',
    txt_newtri:'ブロック・タスク・課題・日記・習慣・メモ・ダンプが全部アーカイブされて、白紙スタートできる。アーカイブはいつでも見れるよ。',
    b_newtri:'🌱 新しいタームをはじめる',
    sh_units:'📚 ユニット',hint_units:'名前・カラー・週間目標時間。いくつでも追加してね。',b_addunit:'+ ユニット追加',
    sh_trks:'📊 日記トラッカー',hint_trks:'日記につけるスライダー。自由に追加・削除・名前変更できる。',b_addtrk:'+ トラッカー追加',
    sh_vibes:'💬 バイブキーワード',hint_vibes:'カンマ区切りで入力。日記でクリックすると今日にタグ付けできる。',
    sh_habs:'🌱 習慣',b_addhab:'+ 習慣追加',
    sh_custom:'✦ スタイルとフィーリング',l_roundness:'角の丸み',r_max:'✦ まんまる',r_med:'● 丸め',r_min:'■ ちょっと丸',r_none:'□ 四角',
    l_glow:'カードの光',g_high:'✨ 強め',g_med:'◎ ふつう',g_none:'○ なし',
    l_sbwidth:'サイドバーの幅',sbw_narrow:'◀▶ 狭め',sbw_med:'▷ ふつう',sbw_wide:'◁▷ 広め',
    l_rainbowmode:'レインボーモード 🌈',l_rainbow_hint:'レインボーをアニメーション（落ち着きたいときはオフ）',
    l_cardpattern:'カードパターン 🃏',pat_none:'✕ なし',
    l_holomode:'ホログラフィックカード ✨',l_holo_hint:'虹色のカードボーダー',
    l_cursor:'かわいいカーソル ✦',l_cursor_hint:'カーソルを✦にする',
    l_clock_fmt:'時計の表示',l_clock12_hint:'12時間表示（午前/午後）',
    l_fontsize:'文字の大きさ',fs_sm:'小さめ',fs_md:'ふつう',fs_lg:'大きめ',
    l_density:'レイアウト',dn_compact:'コンパクト',dn_def:'ふつう',dn_wide:'ゆったり',
    sh_theme:'🎨 テーマとカラー',c_presets:'プリセット',l_cprimary:'メインカラー',l_csec:'アクセントカラー',
    sh_font:'🔤 フォント',hint_fonts:'全テキストに適用される。見出しは別で選べる。',hint_font_cats:'言語ごとにフォントが保存されるよ。',
    sh_lang:'🌐 言語',
    sh_stk:'🧸 サイドバーステッカー',c_stklib:'ライブラリ — クリックして追加',c_stkcur:'いまのステッカー — クリックで削除',b_addsticker:'+ 追加',b_clearstk:'全部消す',
    sh_particles:'🌸 降ってくるもの',l_particles:'エフェクトをオンにする',c_ptypes:'何を降らせる？',
    l_speed:'速さ',l_gentle:'ゆっくり 🌿',l_chaotic:'カオス 🌪',
    sh_data:'💾 データ',hint_data:'自動保存されてる。たまにエクスポートしておくと安心。',
    sh_sbgif:'🎨 サイドバーの画像 / GIF',hint_sbgif:'サイドバーに表示する画像またはGIF。直接URLを貼り付けてね。',
    l_sbgif_light:'☀️ ライトモード URL',l_sbgif_dark:'🌙 ダークモード URL',b_sbgif_clear:'クリア',
    c_diary_img:'📸 画像 / GIF（なくてもいい）',b_add_img:'📸',
    b_export:'📥 バックアップを書き出す',b_import:'📤 インポート',b_delall:'🗑 全部消す',c_storage:'💾 使用容量',
    sh_bg:'🖼 背景画像 / GIF',hint_bg:'画像またはGIFのURL。ライト・ダークモード別に設定できる。',
    l_bg_light:'☀️ ライトモード',l_bg_dark:'🌙 ダークモード',l_bg_opacity:'透明度',
    l_subtle:'ひかえめ',l_vivid:'くっきり',b_bg_clear:'クリア',
    h_ass_grades:'課題 📝',sub_ass_grades:'結果と加重平均',
    ass_upcoming:'これから',ass_past:'結果',ass_unit_grade:'ユニットの成績',
    ass_weighted:'加重平均（現在）',ass_enter_grade:'成績を入れる %',ass_no_weight:'配点未設定',
    ass_grade_hint:'各課題の配点 % をもとに加重平均を出してる。',
    ass_projected:'予想',ass_of_total:'の配点が採点済み',
    pat_grid:'⊞ グリッド',pat_diamonds:'◇ ダイヤ',pat_waves:'〰 波',pat_lace:'🕸 レース（ダーク）',
    l_card_tint:'🎨 カードのトーン',ct_none:'✕ なし',
    l_card_border_style:'🖼 ボーダースタイル',cb_solid:'— 実線',cb_dashed:'- - 破線',cb_double:'═ 二重線',cb_none:'○ なし',cb_thick:'▌ 太め',
    l_card_shadow:'☁️ カードの影',cs_none:'○ なし',cs_sm:'◎ 控えめ',cs_med:'◉ ふつう',cs_lg:'✦ ふわっと',cs_glow:'🌟 グロー',
    l_card_opacity:'🫧 ガラス感',co_ghost:'👻 ゴースト',co_low:'🌫 フロスト',co_med:'◎ ふつう',co_solid:'■ ベタ',
    sh_dump_cats:'🏷 脳みそ整理カテゴリ',hint_dump_cats:'タグをカスタマイズできる。使わないのは消してもいい。',
    b_add_dump_cat:'+ カテゴリ追加',b_reset_dump_cats:'↺ デフォルトに戻す',
    l_anim_speed:'✨ アニメーションの速さ',anim_slow:'🌿 ゆっくり',anim_med:'⚡ ふつう',anim_fast:'🌪 はやい',
    l_sidebar_blur:'🫧 サイドバーのぼかし',l_card_blur:'🪟 カードのぼかし',
    l_accent_glow:'💡 アクセントグローの強さ',
    hint_customise_extra:'細かいとこまでこだわって。',
    l_energy:'⚡ エネルギー',l_sleep:'😴 睡眠（時間）',l_water:'💧 水分（回）',
    l_tags:'🏷 タグ',l_tags_ph:'タグを入力してEnter…',l_private:'🔒 非公開',
    l_linked_tasks:'✅ 関連タスク',l_diary_wg:'📓 目標文字数',
    l_diary_wg_unit:'字 ／ エントリー',
    l_template_morning:'🌅 朝',l_template_study:'📚 勉強後',
    l_template_night:'🌙 夜',l_template_clear:'✕ クリア',
    l_heading_font:'🖋 見出しフォント（個別設定）',l_line_height:'↕ 行間',
    lh_tight:'▪ せまい',lh_normal:'◎ ふつう',lh_relaxed:'▫ ゆったり',lh_loose:'□ 広め',
    l_radius:'📐 角の丸み（細かく）',l_sb_opacity:'🫧 サイドバーの透明度',l_sb_blur:'ぼかし',
    l_sb_mode:'📌 サイドバーの表示',sbm_normal:'☰ ふつう',sbm_icons:'⬡ アイコンだけ',
    l_tilt:'🎲 3Dチルト',tilt_hint:'統計カードとテーマスウォッチがちょっと立体的に動く',
    l_sounds:'🔔 サウンド',
    sounds_hint:'タスク完了・習慣・タイマー・連続記録のときに音が鳴る',
    l_view_anim:'🎞 画面切り替えのアニメーション',va_full:'✦ フル',va_subtle:'◎ 控えめ',va_off:'○ オフ',
    sh_extract:'🎨 画像からテーマカラーを抽出',
    hint_extract:'画像URLを貼り付けると、主要カラーを自動で抽出してテーマに反映してくれる。',
    sh_custom_css:'💻 カスタムCSS',
    hint_custom_css:'ページに直接反映される。var(--p)・var(--card)とかのCSS変数も使えるよ。',
    l_adv_layout:'🎛 レイアウトの細かい設定',
    t_tour_unavailable:'ツアーはいま使えません',
    t_ct_not_loaded:'Color Thiefが読み込まれてない',
    t_ct_failed:'うまく抽出できなかった — 別の画像を試してみて',
    t_ct_bad_url:'画像を読み込めなかった — URLを確認してみて',
    t_ct_empty:'カラーを取り出せなかった — もっとカラフルな画像で試してみて',
    t_theme_applied:'テーマを適用した ✦',t_css_saved:'カスタムCSSを保存した ✦',
    t_css_cleared:'CSSをクリアした',t_saved:'保存した ✦',
    str_milestone_3:'3日続いた ✦',
    str_milestone_7:'1週間 🔥',
    str_milestone_14:'2週間 ✦',
    str_milestone_21:'3週間 — 体が覚えてきた ✦',
    str_milestone_30:'30日 🌙',
    str_milestone_60:'60日 🌟',
    str_milestone_100:'100日 ✦',
    b_changefile:'📂 ファイルを変更',
    b_reset:'🗑 リセット',
    b_switchfile:'ファイルを切り替える',
    l_energy:'⚡ エネルギー',l_sleep:'😴 睡眠（時間）',l_water:'💧 水分（回）',
    c_stkimg:'🖼 画像スタッカー — クリックで削除',
    b_addimgstk:'+ URLから追加',
    b_uploadstk:'📁 アップロード',
    sh_np:'🎵 いま聴いてる',
    sh_vibe_mode:'✨ バイブモード',
    l_vibe_mode:'全体のムード',
    vm_clean:'◎ クリーン',vm_dreamy:'✦ ドリーミー',vm_cyber:'⚡ サイバー',vm_cottagecore:'🌿 コテージ',
    l_blur_cards:'カードのすりガラス感',l_blur_sidebar:'サイドバーのぼかし',
    sh_seasonal:'🌸 季節テーマ',
    hint_np:'このブラウザで再生中の音楽（Spotify Web、YouTubeとか）を自動で拾ってくれる。',
  }
};

function t(k){return(I18N[S.lang]||I18N.en)[k]||k;}
function applyI18N(){document.querySelectorAll('[data-i]').forEach(el=>{const v=t(el.dataset.i);if(v)el.textContent=v;});}

function defaults(){
  return {
    _v:2,
    appName:'',tagline:'',logoIcon:'✦',quote:'',vibes:DEF_VIBES,
    tri:'',
    units:[],
    trackers:[],
    habits:[],habitLog:{},
    blocks:[],assessments:[],tasks:[],diary:{},notes:{},dumps:[],archive:[],
    theme:'🌸 Sakura',font:'Nunito',lang:'en',
    stickers:[],
    petals:true,petalTypes:['🌸','🌙','⭐','✦','✿'],petalSpeed:10,
    darkMode:false,displayMode:'light',lastExport:null,_ts:0,
    bgLight:'',bgDark:'',bgOpacity:20,
    sbGif:'',sbGifDark:'',
    styleRound:'med',styleGlow:'med',styleSbw:'med',rainbow:true,
    cardPattern:'none',holo:false,cursorKawaii:false,cursorEmoji:'✦',
    dumpTags:null,
    clock12:true, fontSize:'md', density:'default',
    fontEn:'Nunito', fontJp:'NotoJP',
    animSpeed:'med', accentGlow:'soft',
    cardTint:'none', cardBorderStyle:'solid', cardShadowSize:'med', cardBgOpacity:'med',
    diaryEditMode:false,
    themeLight:{
      styleRound:'med',styleGlow:'med',styleSbw:'med',cardPattern:'none',
      cardTint:'none',cardBorderStyle:'solid',cardShadowSize:'med',cardBgOpacity:'med',
      holo:false,rainbow:true,animSpeed:'med',accentGlow:'soft',
      fontSize:'md',density:'default',_cp:null,_ca:null
    },
    themeDark:{
      styleRound:'med',styleGlow:'high',styleSbw:'med',cardPattern:'none',
      cardTint:'none',cardBorderStyle:'solid',cardShadowSize:'med',cardBgOpacity:'med',
      holo:false,rainbow:true,animSpeed:'med',accentGlow:'vivid',
      fontSize:'md',density:'default',_cp:null,_ca:null
    },
    customImgStickers:[],
    pageStickers:[],
    vibeMode:'clean',
  };
}

let S = {};

/* ══════════════════════════════════════════════════════════════════
   📁  FILE SYSTEM ACCESS STORAGE
   Primary: gmst_data.json file chosen by the user (portable — lives
   wherever you put it, wipe = just delete the file).
   Fallback: localStorage for environments without FSA support.
══════════════════════════════════════════════════════════════════ */
const KEY='gmst_data', KEY_B1='gmst_bak1', KEY_B2='gmst_bak2';
const IDB_NAME='gmst_idb', IDB_STORE='store';
let _idb=null, _fsaHandle=null, _fsaReady=false, _fsaFallback=false;
const FSA_OK=typeof window!=='undefined'&&'showOpenFilePicker' in window;

/* ── IDB (used only to persist the FSA file handle between sessions) ── */
function openIDB(){
  return new Promise((res,rej)=>{
    if(_idb){res(_idb);return;}
    const r=indexedDB.open(IDB_NAME,1);
    r.onupgradeneeded=e=>{try{e.target.result.createObjectStore(IDB_STORE);}catch(x){}};
    r.onsuccess=e=>{_idb=e.target.result;res(_idb);};
    r.onerror=()=>rej(r.error);
  });
}
function idbGet(key){
  return new Promise(res=>{
    if(!_idb){res(null);return;}
    try{const tx=_idb.transaction(IDB_STORE,'readonly'),r=tx.objectStore(IDB_STORE).get(key);r.onsuccess=()=>res(r.result??null);r.onerror=()=>res(null);}catch(e){res(null);}
  });
}
function idbSet(key,val){
  return new Promise(res=>{
    if(!_idb){res();return;}
    try{const tx=_idb.transaction(IDB_STORE,'readwrite');tx.objectStore(IDB_STORE).put(val,key);tx.oncomplete=()=>res();tx.onerror=()=>res();}catch(e){res();}
  });
}

/* ── FSA helpers ── */
async function fsaRead(){
  if(!_fsaHandle)return null;
  try{const f=await _fsaHandle.getFile(),txt=await f.text();return JSON.parse(txt);}catch(e){return null;}
}
async function fsaWrite(data){
  if(!_fsaHandle)return false;
  try{const w=await _fsaHandle.createWritable();await w.write(JSON.stringify(data,null,2));await w.close();return true;}catch(e){return false;}
}

/* ── Storage init — called on page load ── */
async function storageInit(){
  try{await openIDB();}catch(e){}
  if(!FSA_OK){_fsaFallback=true;showSetup('fallback');return;}
  // Try to restore handle from IDB
  try{
    const h=await idbGet('_fsa_handle');
    if(h&&h.kind==='file'){
      let perm=await h.queryPermission({mode:'readwrite'});
      if(perm!=='granted') perm=await h.requestPermission({mode:'readwrite'});
      if(perm==='granted'){_fsaHandle=h;_fsaReady=true;await bootFromFSA();return;}
      else{_fsaHandle=h;showSetup('reconnect');return;}
    }
  }catch(e){}
  showSetup('new');
}

async function bootFromFSA(){
  try{
    const data=await fsaRead();
    S=Object.assign(defaults(),data||{});
    migrateData();sanitize();
    hideSetup();
    bootApp();
  }catch(e){
    console.error('bootFromFSA failed:',e);
    // Fallback to fresh state
    S=defaults();migrateData();sanitize();hideSetup();bootApp();
  }
}

/* ── User-triggered FSA actions (need gesture) ── */
async function fsaCreate(){
  if(!FSA_OK)return;
  try{
    _fsaHandle=await window.showSaveFilePicker({suggestedName:'data.json',types:[{description:'GMST Data',accept:{'application/json':['.json']}}]});
    await idbSet('_fsa_handle',_fsaHandle);
    _fsaReady=true;_fsaFallback=false;
    S=defaults();migrateData();sanitize();
    await fsaWrite(S);
    hideSetup();
    bootApp();
  }catch(e){}
}
async function fsaOpen(){
  if(!FSA_OK)return;
  try{
    [_fsaHandle]=await window.showOpenFilePicker({types:[{description:'GMST Data',accept:{'application/json':['.json']}}],multiple:false});
    await idbSet('_fsa_handle',_fsaHandle);
    _fsaReady=true;_fsaFallback=false;
    await bootFromFSA();
  }catch(e){}
}
async function fsaReconnect(){
  if(!_fsaHandle)return showSetup('new');
  try{
    const perm=await _fsaHandle.requestPermission({mode:'readwrite'});
    if(perm==='granted'){_fsaReady=true;await bootFromFSA();}
  }catch(e){}
}
function useFallback(){
  _fsaFallback=true;_fsaReady=false;
  try{const r=localStorage.getItem(KEY);S=r?Object.assign(defaults(),JSON.parse(r)):defaults();}catch(e){S=defaults();}
  migrateData();sanitize();
  hideSetup();
  bootApp();
}

/* ── Setup overlay show/hide ── */
function showSetup(mode){
  const el=document.getElementById('setup-overlay');if(!el)return;
  el.style.display='flex';
  const noFSA=!FSA_OK;
  const noFSANote=document.getElementById('setup-no-fsa-note');
  const browserGoBtn=document.getElementById('setup-browser-go');
  const desc=document.getElementById('setup-desc');
  // FSA-unsupported: different UI entirely
  if(noFSA||mode==='fallback'){
    el.querySelector('.setup-new').style.display='none';
    el.querySelector('.setup-open').style.display='none';
    el.querySelector('.setup-reconnect').style.display='none';
    el.querySelector('.setup-fallback-btn').style.display='none';
    if(noFSANote)noFSANote.style.display='block';
    if(browserGoBtn)browserGoBtn.style.display='block';
    const isJPBrowser = window._autoLangJP || S.lang === 'jp';
    if(desc)desc.innerHTML=isJPBrowser
      ? 'メモ、きもち、日記は<b style="color:#FF9FD0">あなたのデバイスに保存</b>される。クラウドなし、アカウント不要。ぜんぶあなたのもの ✦'
      : 'your notes, moods, and diary are saved <b style="color:#FF9FD0">right here in this browser</b>. private, secure, and yours ✦';
    return;
  }
  // Normal FSA flow
  if(noFSANote)noFSANote.style.display='none';
  if(browserGoBtn)browserGoBtn.style.display='none';
  el.querySelector('.setup-new').style.display=mode==='reconnect'?'none':'flex';
  el.querySelector('.setup-open').style.display=mode==='reconnect'?'none':'flex';
  el.querySelector('.setup-reconnect').style.display=mode==='reconnect'?'flex':'none';
  el.querySelector('.setup-fallback-btn').style.display=mode==='reconnect'?'block':'none';
  const msg=el.querySelector('.setup-msg');
  if(msg){
    if(mode==='reconnect')msg.textContent='data file needs reconnection — tap to grant access again.';
    else msg.textContent='';
  }
}
function hideSetup(){document.getElementById('setup-overlay').style.display='none';}

/* ── One-time privacy welcome popup ── */
function showPrivacyWelcome(onContinue){
  const seen=localStorage.getItem('gmst_privacy_seen');
  if(seen){onContinue();return;}
  const isJP=(navigator.language||'').toLowerCase().startsWith('ja');
  const overlay=document.createElement('div');
  overlay.style.cssText='position:fixed;inset:0;z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(10,0,25,.75);backdrop-filter:blur(16px)';
  overlay.innerHTML=isJP ? `
    <div style="background:rgba(18,0,38,.97);border:1.5px solid color-mix(in srgb, var(--p) 32%, transparent);border-radius:28px;padding:38px 34px;max-width:480px;width:100%;box-shadow:0 0 80px color-mix(in srgb, var(--p) 14%, transparent),0 0 180px color-mix(in srgb, var(--a) 10%, transparent);text-align:center;animation:mpop .3s cubic-bezier(.34,1.56,.64,1)">
      <div style="font-size:48px;margin-bottom:14px;font-family:Apple Color Emoji,Noto Color Emoji,sans-serif">🔒</div>
      <h2 style="font-family:'Fredoka One',cursive;font-size:22px;background:linear-gradient(135deg,#FF6EB4,#A832F0);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:14px;line-height:1.35">✦ クラウドとはおさらば ✦</h2>
      <div style="background:rgba(220,100,168,.07);border:1px solid rgba(220,100,168,.18);border-radius:16px;padding:18px 20px;margin-bottom:20px;text-align:left">
        <p style="font-size:13px;color:rgba(255,210,240,.85);line-height:1.9;margin:0">
          <span style="display:block;margin-bottom:10px">✦ <b style="color:#FF96C8">データは一切どこにも送られない。</b>勉強計画も、日記も、成績も、全部あなたのパソコンのファイルの中にある。うちのサーバーでもない、誰かのサーバーでもない。マジで。</span>
          <span style="display:block;margin-bottom:10px">✦ <b style="color:#C8A0FF">アカウント不要。メルアド不要。パスワード不要。</b>トラッキングも広告もない。本当に何もない。企業のクソみたいな仕組み、全部なし。</span>
          <span style="display:block">✦ <b style="color:#FFB8E8">このデータはあなたのもの。</b>ノートに書いたことが自分のものなのと同じように。</span>
        </p>
      </div>
      <p style="font-size:11.5px;color:rgba(255,180,220,.45);margin-bottom:22px;font-style:italic">このポップアップは一回しか出ないよ ♡</p>
      <button style="background:linear-gradient(135deg,var(--p),var(--a));color:white;border:none;border-radius:14px;padding:13px 32px;font-size:15px;font-weight:800;cursor:pointer;font-family:'Nunito',sans-serif;box-shadow:0 4px 24px rgba(238,16,112,.45);transition:transform .15s" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''">
        わかった、はじめよ ✦
      </button>
    </div>` : `
    <div style="background:rgba(18,0,38,.97);border:1.5px solid color-mix(in srgb, var(--p) 32%, transparent);border-radius:28px;padding:38px 34px;max-width:480px;width:100%;box-shadow:0 0 80px color-mix(in srgb, var(--p) 14%, transparent),0 0 180px color-mix(in srgb, var(--a) 10%, transparent);text-align:center;animation:mpop .3s cubic-bezier(.34,1.56,.64,1)">
      <div style="font-size:48px;margin-bottom:14px;font-family:Apple Color Emoji,Noto Color Emoji,sans-serif">🔒</div>
      <h2 style="font-family:'Fredoka One',cursive;font-size:23px;background:linear-gradient(135deg,#FF6EB4,#A832F0);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:14px;line-height:1.25">✦ Break free from the cloud ✦</h2>
      <div style="background:rgba(220,100,168,.07);border:1px solid rgba(220,100,168,.18);border-radius:16px;padding:18px 20px;margin-bottom:20px;text-align:left">
        <p style="font-size:13px;color:rgba(255,210,240,.85);line-height:1.85;margin:0">
          <span style="display:block;margin-bottom:10px">✦ <b style="color:#FF96C8">Absolutely no data leaves your device.</b> Everything you track here — your study plans, assessments, diary entries — lives in a file on your computer. Not on some company's servers.</span>
          <span style="display:block;margin-bottom:10px">✦ <b style="color:#C8A0FF">No accounts. No email. No password. No tracking. No ads. Ever.</b> All the corporate slop, begone ✦</span>
          <span style="display:block">✦ <b style="color:#FFB8E8">You own your data</b> the same way you own a journal.</span>
        </p>
      </div>
      <p style="font-size:11.5px;color:rgba(255,180,220,.45);margin-bottom:22px;font-style:italic">Don't worry, this popup shows once ♡</p>
      <button style="background:linear-gradient(135deg,var(--p),var(--a));color:white;border:none;border-radius:14px;padding:13px 32px;font-size:15px;font-weight:800;cursor:pointer;font-family:'Nunito',sans-serif;box-shadow:0 4px 24px rgba(238,16,112,.45);transition:transform .15s" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''">
        got it — let's go ✦
      </button>
    </div>`;
  overlay.addEventListener('click',e=>{
    if(e.target===overlay){overlay.remove();localStorage.setItem('gmst_privacy_seen','1');onContinue();}
  });
  document.body.appendChild(overlay);
  overlay.querySelector('button').addEventListener('click',()=>{
    overlay.remove();
    localStorage.setItem('gmst_privacy_seen','1');
    onContinue();
  });
}

/* ── saveData — writes to file (or localStorage fallback) ── */
let _saveTm=null;
function saveData(){
  setSaveLbl('sv');
  clearTimeout(_saveTm);
  _saveTm=setTimeout(async()=>{
    S._ts=Date.now();
    if(_fsaReady&&_fsaHandle){
      const ok=await fsaWrite(S);
      setSaveLbl(ok?'ok':'er');
      if(!ok)_lsFallbackSave();
    } else {
      _lsFallbackSave();
      setSaveLbl('ok');
    }
  },350);
}
function _lsFallbackSave(){
  const raw=JSON.stringify(S);
  try{localStorage.setItem(KEY,raw);}catch(e){}
}
async function forceSave(){
  try{
    S._ts=Date.now();
    if(_fsaReady&&_fsaHandle)await fsaWrite(S);
    else _lsFallbackSave();
  }catch(e){_lsFallbackSave();}
}
setInterval(forceSave,4*60*1000);
window.addEventListener('pagehide',forceSave);
window.addEventListener('visibilitychange',()=>{if(document.hidden)forceSave();});
window.addEventListener('beforeunload',e=>{forceSave();if(typeof TM!=='undefined'&&TM.running){e.preventDefault();e.returnValue='';}});

function setSaveLbl(s){
  const el=document.getElementById('save-b');if(!el)return;
  const jp=S?.lang==='jp';
  el.className='save-b';
  if(s==='ok'){el.classList.add('s-ok');el.textContent=jp?'✦ 保存した':'✦ all saved';}
  else if(s==='sv'){el.classList.add('s-sv');el.textContent=jp?'保存してる…':'saving...';}
  else{el.classList.add('s-er');el.textContent='⚠ save error';}
}

function migrateData(){
  // Ensure all notes have ids (migration for pre-v2 data)
  if(S.notes&&typeof S.notes==='object'){
    Object.keys(S.notes).forEach(uid=>{
      if(Array.isArray(S.notes[uid])){
        S.notes[uid].forEach(n=>{if(!n.id)n.id=gid();});
      }
    });
  }
  if(!Array.isArray(S.archive))S.archive=[];
  if(!S.stickers||!Array.isArray(S.stickers))S.stickers=[];
  if(!S.petalTypes||!Array.isArray(S.petalTypes))S.petalTypes=['🌸','🌙','⭐','✦','✿'];
  if(typeof S.petals==='undefined')S.petals=true;
  if(!S.lang)S.lang='en';
  if(!S.theme)S.theme='🌸 Sakura';
  if(!S.font)S.font='Nunito';
  const _mf=FONTS.find(f=>f.k===S.font);
  if(_mf){if(S.lang==='jp'&&!_mf.jp)S.font='NotoJP';else if(S.lang==='en'&&_mf.jp)S.font='Nunito';}
  S.dumps.forEach(d=>{if(!d.id)d.id=gid();});
  S.assessments.forEach(a=>{if(a.grade===undefined)a.grade=null;});
  if(!S.bgLight)S.bgLight='';
  if(!S.bgDark)S.bgDark='';
  if(S.bgOpacity==null)S.bgOpacity=20;
  if(!S.sbGif)S.sbGif='';
  if(!S.sbGifDark)S.sbGifDark='';
  if(!S.styleRound)S.styleRound='med';
  if(!S.styleGlow)S.styleGlow='med';
  if(!S.styleSbw)S.styleSbw='med';
  if(!S.cardPattern)S.cardPattern='none';
  if(S.holo==null)S.holo=false;
  if(S.cursorKawaii==null)S.cursorKawaii=false;
  if(!S.cursorEmoji)S.cursorEmoji='✦';
  if(S.rainbow==null)S.rainbow=true;
  // dumpTags: null = use DEFAULT_DUMP_TAGS (intentional)
  if(S.dumpTags!==null&&S.dumpTags!==undefined&&!Array.isArray(S.dumpTags))S.dumpTags=null;
  if(!Array.isArray(S.customImgStickers))S.customImgStickers=[];
  if(!S.displayMode)S.displayMode=S.darkMode?'dark':'light';
  // Migrate old mode name 'goth' → 'dark'
  if(S.displayMode==='goth')S.displayMode='dark';
  if(!Array.isArray(S.pageStickers))S.pageStickers=[];
  S.dumps.forEach(d=>{if(!d.imgUrl)d.imgUrl='';});
  Object.values(S.diary).forEach(e=>{if(e&&!e.imgUrl)e.imgUrl='';});
  if(!Array.isArray(S.units))S.units=[];
  if(S.clock12==null)S.clock12=true;
  if(!S.fontSize)S.fontSize='md';
  if(!S.density)S.density='default';
  if(!S.fontEn)S.fontEn='Nunito';
  if(!S.fontJp)S.fontJp='NotoJP';
  // Migrate old flat customisation into per-theme objects
  if(!S.themeLight||typeof S.themeLight!=='object'){
    S.themeLight={
      styleRound:S.styleRound||'med', styleGlow:S.styleGlow||'med', styleSbw:S.styleSbw||'med',
      cardPattern:S.cardPattern||'none', cardTint:S.cardTint||'none',
      cardBorderStyle:S.cardBorderStyle||'solid', cardShadowSize:S.cardShadowSize||'med',
      cardBgOpacity:S.cardBgOpacity||'med', holo:!!S.holo,
      rainbow:S.rainbow!==false,
      animSpeed:S.animSpeed||'med', accentGlow:S.accentGlow||'soft',
      fontSize:S.fontSize||'md', density:S.density||'default',
      _cp:S._cp||null, _ca:S._ca||null
    };
  }
  if(!S.themeDark||typeof S.themeDark!=='object'){
    S.themeDark={
      styleRound:'med', styleGlow:'high', styleSbw:'med',
      cardPattern:'none', cardTint:'none', cardBorderStyle:'solid',
      cardShadowSize:'med', cardBgOpacity:'med', holo:false,
      rainbow:true, animSpeed:'med', accentGlow:'vivid',
      fontSize:S.fontSize||'md', density:S.density||'default',
      _cp:null, _ca:null
    };
  }
  // Ensure both objects have all fields
  const _tDef={styleRound:'med',styleGlow:'med',styleSbw:'med',cardPattern:'none',
    cardTint:'none',cardBorderStyle:'solid',cardShadowSize:'med',cardBgOpacity:'med',
    holo:false,rainbow:true,animSpeed:'med',accentGlow:'soft',
    fontSize:'md',density:'default',_cp:null,_ca:null};
  S.themeLight=Object.assign({},_tDef,S.themeLight);
  S.themeDark=Object.assign({},_tDef,S.themeDark);
  // Remap removed font keys → sensible defaults
  const _fontRemap={'OpenDyslexic':'Atkinson'};
  if(_fontRemap[S.font])S.font=_fontRemap[S.font];
  if(_fontRemap[S.fontEn])S.fontEn=_fontRemap[S.fontEn];
  if(_fontRemap[S.fontJp])S.fontJp=_fontRemap[S.fontJp];
  // Ensure saved font key still exists in FONTS array
  if(FONTS.length&&!FONTS.find(f=>f.k===S.font)){S.font=S.lang==='jp'?'NotoJP':'Nunito';}
  if(FONTS.length&&!FONTS.find(f=>f.k===S.fontEn)){S.fontEn='Nunito';}
  if(FONTS.length&&!FONTS.find(f=>f.k===S.fontJp)){S.fontJp='NotoJP';}
  if(!S.animSpeed)S.animSpeed='med';
  if(!S.accentGlow)S.accentGlow='soft';
  if(!S.cardTint)S.cardTint='none';
  if(!S.cardBorderStyle)S.cardBorderStyle='solid';
  if(!S.cardShadowSize)S.cardShadowSize='med';
  if(!S.cardBgOpacity)S.cardBgOpacity='med';
  if(S.diaryEditMode==null)S.diaryEditMode=false;
  // Only add default units if this is an old v1 data set with no units and has some usage
  if(!S.units.length&&S._v===1&&(S.blocks?.length||S.tasks?.length)){
    S.units=[{id:'u1',n:'Unit 1',color:'#C4126A',goal:5},{id:'u2',n:'Unit 2',color:'#7B2FD8',goal:5}];
  }
  S.units.forEach(u=>{if(!u.id)u.id=gid();if(!u.color)u.color=UNIT_COLS[0];if(!u.goal)u.goal=5;});
  if(!Array.isArray(S.habits))S.habits=[];
  S.habits.forEach(h=>{if(!h.id)h.id=gid();if(!h.e)h.e='✦';if(!h.color)h.color='#9333EA';});
  if(!Array.isArray(S.trackers))S.trackers=[];
  // Seed default psych trackers for existing users who skipped the wizard
  if(!S.trackers.length&&(S.units.length||S.habits.length||Object.keys(S.diary).length)){
    S.trackers=[
      {id:gid(),n:'Energy',e:'⚡',max:10},
      {id:gid(),n:'Anxiety',e:'🌊',max:10},
      {id:gid(),n:'Mood',e:'🌸',max:10},
      {id:gid(),n:'Sleep',e:'😴',max:10},
      {id:gid(),n:'Stress',e:'💭',max:10},
      {id:gid(),n:'Self-kindness',e:'💗',max:10},
    ];
  }
  S.trackers.forEach(t2=>{if(!t2.id)t2.id=gid();});
}

function sanitize(){
  ['blocks','assessments','tasks','habits','trackers','units','dumps','archive'].forEach(k=>{if(!Array.isArray(S[k]))S[k]=[];});
  ['diary','habitLog','notes'].forEach(k=>{if(!S[k]||typeof S[k]!=='object')S[k]={};});
}

let _gidC=0;function gid(){return Date.now().toString(36)+(++_gidC).toString(36)+Math.random().toString(36).slice(2,5);}
function tstr(){const d=new Date();return`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
function ds(d){return`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
function ddiff(s){return Math.round((new Date(s+'T00:00')-new Date(tstr()+'T00:00'))/86400000);}

function fmtDate(s,long){
  const d=new Date(s+'T00:00');
  if(S.lang==='jp'){const wd=['日','月','火','水','木','金','土'][d.getDay()];return long?`${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日(${wd})`:`${d.getMonth()+1}/${d.getDate()}(${wd})`;}
  return d.toLocaleDateString('en-AU',long?{weekday:'long',day:'numeric',month:'long',year:'numeric'}:{weekday:'short',day:'numeric',month:'short'});
}
function fmtMon(d){
  if(S.lang==='jp')return`${d.getFullYear()}年${d.getMonth()+1}月`;
  return d.toLocaleDateString('en-AU',{month:'long',year:'numeric'});
}
function monday(off=0){const n=new Date(),d=n.getDay(),m=new Date(n);m.setDate(n.getDate()+(d===0?-6:1-d)+off*7);m.setHours(0,0,0,0);return m;}
function gu(id){return S.units.find(u=>u.id===id)||{id:'?',n:'?',color:'#999',goal:5};}
function ucol(id){return gu(id).color||'#9333EA';}
function ulight(col){return col+'22';}
function pill(uid){const u=gu(uid);return`<span class="pill" style="background:${ulight(u.color)};color:${u.color};border-color:${u.color}50">${escH(u.n)}</span>`;}
function dot(uid){return`<span class="udot" style="background:${ucol(uid)}"></span>`;}
function fmtT(s){const h=Math.floor(s/3600),m=Math.floor((s%3600)/60),sc=s%60;return h>0?`${h}:${String(m).padStart(2,'0')}:${String(sc).padStart(2,'0')}`:`${String(m).padStart(2,'0')}:${String(sc).padStart(2,'0')}`;}
function fmtHM(d){return`${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;}
function escH(s){return(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}

function wkHrs(uid,off=0){
  const m=monday(off),e=new Date(m);e.setDate(m.getDate()+7);
  return S.blocks.filter(b=>b.unitId===uid&&b.date>=ds(m)&&b.date<ds(e))
    .reduce((a,b)=>{try{const[sh,sm]=b.start.split(':').map(Number),[eh,em]=b.end.split(':').map(Number);return a+(eh*60+em-sh*60-sm)/60;}catch{return a;}},0);
}
function calcBlkHrs(blk){try{const[sh,sm]=blk.start.split(':').map(Number),[eh,em]=blk.end.split(':').map(Number);return(eh*60+em-sh*60-sm)/60;}catch{return 0;}}

function streak(){
  let n=0;const today=tstr();let d=new Date();
  while(n<366){const k=ds(d);const e=S.diary[k];if(e&&(e.free||e.good||e.studied||e.mood||e.grat)){n++;}else if(k!==today)break;d.setDate(d.getDate()-1);}
  return n;
}

let toastTO=null;
function toast(msg,type){
  const old=document.querySelector('.toast-el');if(old)old.remove();
  const el=document.createElement('div');el.className='toast-el';
  el.style.cssText=`background:${type==='err'?'linear-gradient(135deg,#991b1b,#7f1d1d)':type==='ok'?'linear-gradient(135deg,#065F46,#047857)':'var(--card)'};color:${type?'white':'var(--tx)'};border:2px solid ${type?'transparent':'var(--brm)'};`;
  el.textContent=msg;document.body.appendChild(el);
  clearTimeout(toastTO);toastTO=setTimeout(()=>el.remove(),2600);
}

function confetti(x,y){
  const cols=['#F0196E','#A855F7','#06C79A','#FF6DAF','#FFAA2A','#2ECFDC'];
  for(let i=0;i<22;i++){
    const p=document.createElement('div');
    const cx=(Math.random()*360-180)+'px',cy=(Math.random()*-280-10)+'px',cr=(Math.random()*540)+'deg';
    p.style.cssText=`position:fixed;left:${x}px;top:${y}px;width:${5+Math.random()*7}px;height:${5+Math.random()*7}px;border-radius:${Math.random()>.5?'50%':'3px'};background:${cols[i%6]};pointer-events:none;z-index:9998;--cx:${cx};--cy:${cy};--cr:${cr};animation:cfly .9s ease forwards`;
    document.body.appendChild(p);setTimeout(()=>p.remove(),960);
  }
}
function reward(emoji,text){
  const d=document.createElement('div');d.className='reward-pop';
  d.innerHTML=`<div style="font-size:48px;margin-bottom:8px;font-family:var(--ej)">${emoji}</div><div style="font-family:var(--fnh);font-size:19px;color:var(--tx)">${text}</div>`;
  document.body.appendChild(d);setTimeout(()=>{d.style.transition='opacity .3s';d.style.opacity='0';setTimeout(()=>d.remove(),320);},1800);
}
function beep(){
  try{
    const ctx=new(window.AudioContext||window.webkitAudioContext)();
    const melody=[[880,0,.12],[1047,.18,.10],[1319,.34,.10],[1047,.50,.10],[1319,.66,.18],[1568,.88,.22],[1319,1.14,.38]];
    melody.forEach(([f,t2,vol])=>{
      const o=ctx.createOscillator(),g=ctx.createGain(),rev=ctx.createGain();
      o.connect(g);g.connect(rev);rev.connect(ctx.destination);
      o.frequency.value=f;o.type='sine';
      g.gain.setValueAtTime(vol,ctx.currentTime+t2);
      g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+t2+.55);
      rev.gain.value=0.72;
      o.start(ctx.currentTime+t2);o.stop(ctx.currentTime+t2+.7);
    });
    if(navigator.vibrate)navigator.vibrate([120,60,120,60,300]);
  }catch(e){}
}
let curV='today';
document.querySelectorAll('.ni').forEach(n=>n.addEventListener('click',()=>{nav(n.dataset.v);if(window.innerWidth<=720)toggleSB();}));
function nav(v){
  document.querySelectorAll('.ni').forEach(n=>n.classList.toggle('act',n.dataset.v===v));
  document.querySelectorAll('.view').forEach(x=>x.classList.remove('act'));
  const el=document.getElementById('view-'+v);if(el)el.classList.add('act');
  curV=v;
  ({today:rToday,diary:rDiary,habits:rHabits,braindump:rBrainDump,timer:rTimer,cal:rCal,week:rWeek,tasks:rTasks,ass:rAss,stats:rStats,notes:rNotes,archive:rArchive,settings:rSettings})[v]?.();
}
function toggleSB(){document.getElementById('sidebar').classList.toggle('open');document.getElementById('sb-bd').classList.toggle('show');}

function rToday(){
  const td=tstr(),h=new Date().getHours();
  const gEN=['still up? 🌙','good morning ☀️','good afternoon 🌸','good evening 🌙','up late? 🦇'];
  const gJP=['まだ起きてる？🌙','おはよう ☀️','こんにちは 🌸','こんばんは 🌙','まだ起きてる？🦇'];
  const gi=h<5?0:h<12?1:h<17?2:h<21?3:4;
  document.getElementById('tg').textContent=(S.lang==='jp'?gJP:gEN)[gi]+' ✦';
  document.getElementById('tsub').textContent=fmtDate(td,true);
  document.getElementById('tri-pill').textContent=S.tri;
  document.getElementById('streak-b').textContent='🔥 '+streak()+(S.lang==='jp'?' 日連続':' day streak');

  const q=S.quote;
  const qEl=document.getElementById('t-quote');
  qEl.innerHTML=`<span style="font-size:22px;display:inline-block;animation:bop 3s ease-in-out infinite;font-family:var(--ej)">✦</span><p style="font-size:13px;font-weight:700;color:var(--pd);font-style:italic;flex:1;line-height:1.75">${q||`<span style="opacity:.55">${S.lang==='jp'?'⚙️ 設定で今日のひとことを追加してね ✦':'⚙️ add your daily quote in settings ✦'}</span>`}</p>`;

  const de=S.diary[td]||{},vb=document.getElementById('t-vibes');
  if(de.mood){vb.style.display='block';vb.innerHTML=`<div style="font-size:26px;font-family:var(--ej)">${MOODS[de.mood]}</div>${de.keyword?`<div style="font-size:11px;color:var(--pd);font-weight:800;margin-top:2px">${de.keyword}</div>`:''}`;}
  else vb.style.display='none';

  const blks=S.blocks.filter(b=>b.date===td);
  const hrs=blks.reduce((a,b)=>a+calcBlkHrs(b),0);
  const pend=S.tasks.filter(x=>!x.done).length;
  const ua=S.assessments.filter(a=>a.date&&ddiff(a.date)>=0&&ddiff(a.date)<=7).length;
  const tb=document.getElementById('task-b');tb.style.display=pend>0?'flex':'none';tb.textContent=pend;
  const pinned=S.dumps.filter(d=>d.pinned).length;
  const db=document.getElementById('dump-b');if(db){db.style.display=pinned>0?'flex':'none';db.textContent=pinned;}

  document.getElementById('t-stats').innerHTML=
    `<div class="stat"><div class="sval">${blks.length}</div><div class="slbl">${S.lang==='jp'?'今日のブロック':'blocks today'}</div></div>`+
    `<div class="stat"><div class="sval">${hrs.toFixed(1)}h</div><div class="slbl">${S.lang==='jp'?'今日の時間':'hrs today'}</div></div>`+
    `<div class="stat"><div class="sval">${pend}</div><div class="slbl">${S.lang==='jp'?'やること':'open'}</div></div>`+
    `<div class="stat"><div class="sval">${ua}</div><div class="slbl">${S.lang==='jp'?'締め切り近い':'due soon'}</div></div>`;

  let bh='';
  if(!blks.length)bh=`<div class="empty"><span class="ei">📚</span>${S.lang==='jp'?'今日のブロックなし':'nothing today ✦'}</div>`;
  else blks.sort((a,b)=>a.start.localeCompare(b.start)).forEach(b=>{const col=ucol(b.unitId);bh+=`<div class="blkr" style="background:${ulight(col)};border-color:${col}">${dot(b.unitId)}<div style="flex:1"><div style="font-weight:800;font-size:13px">${gu(b.unitId).n}${b.label?` <span style="font-weight:600;color:var(--mu)">— ${escH(b.label)}</span>`:''}</div></div><span style="font-size:12px;font-weight:800;color:${col}">${b.start}–${b.end}</span></div>`;});
  document.getElementById('t-blks').innerHTML=bh;

  const ua2=S.assessments.filter(a=>a.date&&ddiff(a.date)>=0&&ddiff(a.date)<=14).sort((a,b)=>(a.date||'').localeCompare(b.date||'')).slice(0,8);
  let ah='';
  if(!ua2.length)ah=`<div class="empty"><span class="ei">🎉</span>${S.lang==='jp'?'締め切りなし！':'nothing coming up ✦'}</div>`;
  else{ah='<div class="card cnp">';ua2.forEach(a=>{const d2=ddiff(a.date),ds2=d2===0?`<b style="color:#c81e1e">${S.lang==='jp'?'今日':'TODAY'}</b>`:d2===1?`<span style="color:#c81e1e">${S.lang==='jp'?'明日':'tmrw'}</span>`:`${d2}${S.lang==='jp'?'日':'d'}`;ah+=`<div class="rrow">${pill(a.unitId)}<span style="flex:1;font-size:13px">${escH(a.title)}</span><span style="font-size:12px;font-weight:700">${ds2}</span></div>`;});ah+='</div>';}
  document.getElementById('t-due').innerHTML=ah;

  let ph='';
  if(!S.units.length)ph=`<p style="color:var(--mu);font-size:13px">${S.lang==='jp'?'設定でユニットを追加しよう':'Add units in Settings ⚙️'}</p>`;
  else S.units.forEach(u=>{const col=u.color||'var(--p)',h2=wkHrs(u.id),g=u.goal||5,pct=Math.min(100,h2/g*100),fc=pct>=100?'var(--g)':pct>=60?'var(--y)':col;ph+=`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px"><span style="font-size:13px;font-weight:800">${dot(u.id)} ${u.n}</span><span style="font-size:11px;font-weight:900;color:${col}">${h2.toFixed(1)}/${g}h${pct>=100?' ✓':''}</span></div><div class="pbar-w"><div class="pbar" style="width:${pct}%;background:${fc}"></div></div></div>`;});
  document.getElementById('t-prog').innerHTML=ph;

  let habH='';
  if(!S.habits.length)habH=`<p style="color:var(--mu);font-size:13px">${S.lang==='jp'?'設定で習慣を追加しよう！':'Add habits in Settings!'}</p>`;
  else habH=`<div style="display:flex;gap:10px;align-items:flex-start;flex-wrap:wrap">${S.habits.map(hab=>{const done=(S.habitLog[td]||{})[hab.id];return`<div onclick="qTogHabit('${hab.id}','${td}',this)" style="cursor:pointer;text-align:center;min-width:52px;max-width:68px"><div style="font-size:28px;font-family:var(--ej);filter:${done?'none':'grayscale(80%)'};opacity:${done?1:(S.darkMode?.40:.28)};transition:all .2s">${hab.e}</div><div style="font-size:9px;font-weight:800;color:${done?hab.color:'var(--fa)'};margin-top:3px;max-width:60px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;line-height:1.3;word-break:break-word">${hab.n}</div></div>`;}).join('')}</div><p style="font-size:11px;color:var(--fa);margin-top:8px">${S.lang==='jp'?'タップしてチェック ♡':'tap to check off ♡'}</p>`;
  document.getElementById('t-habtoday').innerHTML=habH;

  const pend2=S.tasks.filter(x=>!x.done);let th='';
  if(!pend2.length)th=`<div class="empty"><span class="ei">✨</span>${S.lang==='jp'?'ぜんぶ終わった ✦':'all clear ✦'}</div>`;
  else{const pr=['',`<span class="task-pr task-pr-1">!</span>`,`<span class="task-pr task-pr-2">${'!!'}</span>`,`<span class="task-pr task-pr-3">·</span>`];th='<div class="card cnp">';pend2.sort((a,b)=>(a.priority||3)-(b.priority||3)).slice(0,10).forEach(tk=>{th+=`<div class="rrow"><input type="checkbox" onchange="qtog('${tk.id}',event)">${pill(tk.unitId)}<span class="t-txt" style="flex:1;font-size:13px">${pr[tk.priority||3]||''} ${escH(tk.text)}${tk.due?`<span style="font-size:11px;color:var(--mu);margin-left:5px">📅 ${fmtDate(tk.due)}</span>`:''}</span></div>`;});th+='</div>';if(pend2.length>10)th+=`<p style="font-size:11px;color:var(--fa);margin-top:4px;text-align:center">+${pend2.length-10} more in Tasks</p>`;}
  document.getElementById('t-tasks').innerHTML=th;
}
function qtog(id,e){const tk=S.tasks.find(x=>x.id===id);if(tk){tk.done=!tk.done;saveData();if(tk.done){const r=e.target.getBoundingClientRect();confetti(r.left,r.top);reward('✅',S.lang==='jp'?'完了 ✦':'Task done!');}rToday();}}
function qTogHabit(hid,date,el){
  if(!S.habitLog[date])S.habitLog[date]={};
  S.habitLog[date][hid]=!S.habitLog[date][hid];saveData();
  const inner=el.querySelector('div:first-child');if(inner){inner.style.transform='scale(1.4)';setTimeout(()=>inner.style.transform='',220);}
  if(S.habitLog[date][hid])toast((S.habits.find(h=>h.id===hid)?.n||'')+(S.lang==='jp'?' 完了 ✦':' done ✦'),'ok');
  rToday();
}

let dDate=tstr(),dOpen=false,dAutoTO=null;
function rDiary(){
  document.getElementById('d-lbl').textContent=fmtDate(dDate);
  const e=S.diary[dDate]||{};
  const isToday=dDate===tstr();
  const btn=document.getElementById('d-mode-btn');
  const jp=S.lang==='jp';
  if(btn){
    const showModeBtn=isToday&&(dOpen||e.hope!=null);
    btn.style.display=showModeBtn?'':'none';
    btn.title=_diaryViewMode?(jp?'編集':'Edit'):(jp?'プレビュー':'Preview');
    btn.textContent=_diaryViewMode?'✏️':'👁';
  }
  if(isToday&&!dOpen&&e.hope==null){
    document.getElementById('d-gate').style.display='block';
    document.getElementById('d-body').style.display='none';
    document.getElementById('d-view-mode').style.display='none';
    document.getElementById('d-gate').innerHTML=buildGate();
    _diaryViewMode=false;
  } else {
    document.getElementById('d-gate').style.display='none';
    loadDE(e);
    // Start in view mode if entry has content, edit mode if blank
    const hasContent=!!(e.free||e.studied||e.good||e.mood||e.grat||e.tom||e.struggle||e.imgUrl);
    _diaryViewMode=hasContent;
    renderDiaryForMode();
  }
  buildDiaryKws();rDiaryRecent();
}
function buildGate(){
  const jp=S.lang==='jp';
  return`<div class="card cacc"><div style="text-align:center;padding:16px 0">
    <div style="font-size:44px;margin-bottom:12px;animation:bop 3s ease-in-out infinite;font-family:var(--ej)">✨</div>
    <h2 style="margin-bottom:8px">${jp?'開く前にちょっとだけ':'before you open...'}</h2>
    <p style="color:var(--mu);font-size:14px;margin-bottom:24px">${jp?'いま、どのくらい希望がある？<br><span style="font-size:12px;font-style:italic">正直に。答えに正解はないよ ♡</span>':'how much hope are you carrying right now?<br><span style="font-size:12px;font-style:italic">honest. no wrong answer ♡</span>'}</p>
    <div id="hn" style="font-family:var(--fnh);font-size:86px;background:linear-gradient(135deg,var(--pd),var(--a));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1">5</div>
    <p style="font-size:12px;color:var(--fa);margin-bottom:12px">${jp?'10段階で':'out of 10'}</p>
    <input type="range" min="1" max="10" value="5" id="hs" style="max-width:280px;display:block;margin:0 auto 10px" oninput="document.getElementById('hn').textContent=this.value">
    <div style="display:flex;justify-content:space-between;max-width:280px;margin:0 auto 28px;font-size:11px;color:var(--fa)"><span>${jp?'かすかな灯り':'barely a flicker'}</span><span>${jp?'満タン':'absolutely full'}</span></div>
    <button class="btn bp" style="font-size:15px;padding:14px 32px" onclick="confirmHope()">${jp?'日記を開く ✦':'open my diary ✦'}</button>
  </div></div>`;
}
function confirmHope(){const hope=parseInt(document.getElementById('hs').value, 10);const e=S.diary[dDate]||{};e.hope=hope;S.diary[dDate]=e;saveData();dOpen=true;_diaryViewMode=false;document.getElementById('d-gate').style.display='none';document.getElementById('d-view-mode').style.display='none';document.getElementById('d-body').style.display='block';loadDE(e);buildDiaryKws();}
function reOpenGate(){dOpen=false;const e=S.diary[dDate]||{};delete e.hope;S.diary[dDate]=e;saveData();rDiary();}
function loadDE(e){
  document.getElementById('dhs').textContent=e.hope!=null?e.hope:'—';
  document.querySelectorAll('.moji').forEach(x=>x.classList.toggle('on',parseInt(x.dataset.v)===(e.mood||0)));
  const jp=S.lang==='jp';
  let th='';
  const PSYCH_SUBLABELS_EN = {
    'Energy':['drained','full of life'],
    'Anxiety':['calm','very anxious'],
    'Mood':['really low','amazing'],
    'Sleep quality':['awful','great'],
    'Sleep':['awful','great'],
    'Stress':['zero stress','overwhelmed'],
    'Self-compassion':['self-critical','self-loving'],
    'Self-kindness':['self-critical','self-loving'],
    'Focus':['scattered','laser focused'],
    'Motivation':['none','sky high'],
    'Sadness':['fine','very sad'],
    'Hope':['hopeless','full of hope'],
  };
  const PSYCH_SUBLABELS_JP = {
    'Energy':['枯渇してる','みなぎってる'],
    'Anxiety':['穏やか','すごく不安'],
    'Mood':['最悪','最高'],
    'Sleep quality':['最悪','ぐっすり'],
    'Sleep':['最悪','ぐっすり'],
    'Stress':['ゼロ','限界'],
    'Self-compassion':['自分に厳しい','自分を大切にしてる'],
    'Self-kindness':['自分に厳しい','自分を大切にしてる'],
    'Focus':['散漫','超集中'],
    'Motivation':['やる気ゼロ','全力'],
    'Sadness':['元気','かなり悲しい'],
    'Hope':['絶望してる','希望に満ちてる'],
    'エネルギー':['枯渇してる','みなぎってる'],
    '不安':['穏やか','すごく不安'],
    '気分':['最悪','最高'],
    '睡眠':['最悪','ぐっすり'],
    '睡眠の質':['最悪','ぐっすり'],
    'ストレス':['ゼロ','限界'],
    '自己慈悲':['自分に厳しい','自分を大切にしてる'],
    '集中力':['散漫','超集中'],
    'モチベ':['やる気ゼロ','全力'],
    '悲しみ':['元気','かなり悲しい'],
    '希望':['絶望してる','希望に満ちてる'],
  };
  const PSYCH_SUBLABELS = jp ? PSYCH_SUBLABELS_JP : PSYCH_SUBLABELS_EN;
  S.trackers.forEach(tr=>{
    const v=(e.trackers||{})[tr.id]!=null?(e.trackers||{})[tr.id]:Math.ceil(tr.max/2);
    const sub=PSYCH_SUBLABELS[tr.n]||['low','high'];
    const pct=Math.round((v/tr.max)*100);
    const gradCol=pct>70?'var(--g)':pct>40?'var(--p)':'var(--y)';
    th+=`<div class="psych-track-row">
      <div class="psych-track-label"><span style="font-family:var(--ej)">${tr.e}</span> ${tr.n}</div>
      <div class="psych-track-val-display" id="trv-${tr.id}">${v}</div>
      <div class="psych-track-slider-wrap">
        <input type="range" min="1" max="${tr.max}" value="${v}" id="tri-${tr.id}" style="accent-color:${gradCol}" oninput="document.getElementById('trv-${tr.id}').textContent=this.value;dAuto()">
        <div class="psych-track-sublabels"><span>${sub[0]}</span><span>${sub[1]}</span></div>
      </div>
    </div>`;
  });
  document.getElementById('d-trks').innerHTML=th;
  const phs={
    studied:jp?'今日やったこと、授業とか…':'Topics, units, readings...',
    good:jp?'よかったこと、なんでも…':'Wins, moments that clicked...',
    struggle:jp?'しんどかったこと…':"What's hard or confusing...",
    grat:jp?'ちょっとでもありがたいと思ったこと…':'Three things, however tiny...',
    tom:jp?'明日の自分に残す言葉…':'Top 1–3 priorities for tomorrow...',
    free:jp?'なんでも。ここはあなただけの場所 ♡':'Vent, dream, ramble — this is yours ♡'
  };
  ['studied','good','struggle','grat','tom','free'].forEach(f=>{const el=document.getElementById('ds-'+f);if(el){el.value=e[f]||'';el.placeholder=phs[f]||'';}});
  const diaryImgEl=document.getElementById('ds-imgurl');if(diaryImgEl)diaryImgEl.value=e.imgUrl||'';
  diaryImgPreview(e.imgUrl||'');
}
function buildDiaryKws(){
  const e=S.diary[dDate]||{};
  const kws=(S.vibes||DEF_VIBES).split(',').map(v=>v.trim()).filter(Boolean);
  document.getElementById('d-kws').innerHTML=kws.map(kw=>`<button class="kw${e.keyword===kw?' on':''}" onclick="setKw(this,'${kw.replace(/'/g,'&#39;').replace(/"/g,'&quot;')}')">${kw}</button>`).join('');
}
function dAuto(){clearTimeout(dAutoTO);document.getElementById('d-sv').textContent='✎';dAutoTO=setTimeout(()=>saveDiary(true),1800);}
function setMood(v){const e=S.diary[dDate]||{};e.mood=v;S.diary[dDate]=e;saveData();document.querySelectorAll('.moji').forEach(x=>x.classList.toggle('on',parseInt(x.dataset.v)===v));}
function setKw(btn,kw){const e=S.diary[dDate]||{};e.keyword=e.keyword===kw?null:kw;S.diary[dDate]=e;saveData();document.querySelectorAll('#d-kws .kw').forEach(b=>b.classList.toggle('on',b.textContent.trim()===kw&&e.keyword===kw));}
function saveDiary(silent){
  // Only save from edit mode — don't overwrite with empty
  if(_diaryViewMode)return;
  const e=S.diary[dDate]||{};
  const gv=id=>{const el=document.getElementById(id);return el?el.value:''};
  ['studied','good','struggle','grat','tom','free'].forEach(f=>e[f]=gv('ds-'+f));
  e.imgUrl=(document.getElementById('ds-imgurl')?.value||'').trim();
  const tr={};S.trackers.forEach(tk=>{const el=document.getElementById('tri-'+tk.id);if(el)tr[tk.id]=parseInt(el.value);});e.trackers=tr;
  S.diary[dDate]=e;saveData();
  document.getElementById('d-sv').textContent='✦';setTimeout(()=>{const sv=document.getElementById('d-sv');if(sv)sv.textContent='';},2000);
  if(!silent){
    toast(S.lang==='jp'?'保存した ✦':'saved ✦','ok');
    // Switch to view mode after explicit save
    const hasContent=!!(e.free||e.studied||e.good||e.mood||e.grat||e.tom||e.struggle||e.imgUrl);
    if(hasContent){_diaryViewMode=true;renderDiaryForMode();}
  }
}
function dNav(n){saveDiary(true);const d=new Date(dDate+'T00:00');d.setDate(d.getDate()+n);dDate=ds(d);dOpen=true;rDiary();}
function dToday(){saveDiary(true);dDate=tstr();dOpen=false;rDiary();}
function goDiary(date){if(curV==='diary')saveDiary(true);dDate=date;dOpen=true;_diaryViewMode=true;nav('diary');}
function rDiaryRecent(){
  const keys=Object.keys(S.diary).filter(k=>k!==dDate&&S.diary[k]&&(S.diary[k]?.free||S.diary[k]?.good||S.diary[k]?.studied||S.diary[k]?.mood||S.diary[k]?.grat)).sort().reverse().slice(0,4);
  if(!keys.length){document.getElementById('d-recent').innerHTML='';return;}
  const jp=S.lang==='jp';
  const FIELD_LABELS={studied:{icon:'📚',en:'studied',jp:'勉強'},good:{icon:'✨',en:'went well',jp:'良かったこと'},struggle:{icon:'💭',en:'working through',jp:'悩み'},grat:{icon:'🌸',en:'grateful',jp:'感謝'},tom:{icon:'🎯',en:'focus',jp:'目標'},free:{icon:'📝',en:'wrote',jp:'自由記述'}};
  let h=`<div class="ct" style="margin-bottom:10px">${jp?'最近の記録':'recent entries'}</div><div class="g2">`;
  keys.forEach(date=>{
    const e=S.diary[date];
    h+=`<div class="diary-entry-card" style="cursor:pointer" onclick="goDiary('${date}')">
      <div class="diary-entry-header" style="padding:12px 16px 10px">
        <div class="diary-entry-meta">
          <div class="diary-entry-date" style="font-size:14px">${fmtDate(date)}</div>
          ${e.mood?`<div class="diary-entry-mood-badge"><span style="font-family:var(--ej);font-size:16px">${MOODS[e.mood]}</span></div>`:''}
          ${e.keyword?`<div class="diary-entry-mood-badge" style="font-size:10px">${escH(e.keyword)}</div>`:''}
        </div>
      </div>
      <div class="diary-entry-body" style="padding:10px 16px;gap:8px">`;
    let shown=0;
    ['free','studied','good'].forEach(f=>{
      if(shown>=2)return;
      const txt=(e[f]||'').trim();
      if(!txt)return;
      const lbl=FIELD_LABELS[f];
      h+=`<div class="diary-section" style="padding:8px 10px"><div class="diary-section-label" style="margin-bottom:4px"><span style="font-family:var(--ej)">${lbl.icon}</span> ${jp?lbl.jp:lbl.en}</div><div class="diary-section-text" style="font-size:12px">${escH(txt.slice(0,80))}${txt.length>80?'…':''}</div></div>`;
      shown++;
    });
    h+=`</div></div>`;
  });
  document.getElementById('d-recent').innerHTML=h+'</div>';
}

let habOff=0;
function habNav(n){habOff=n===0?0:habOff+n;rHabits();}
function rHabits(){
  const mon=monday(habOff),days=Array.from({length:7},(_,i)=>{const d=new Date(mon);d.setDate(mon.getDate()+i);return d;}),today=tstr();
  const WD=S.lang==='jp'?WD_JP:WD_EN;
  document.getElementById('hab-lbl').textContent=`${fmtDate(ds(days[0]))} – ${fmtDate(ds(days[6]))}`;
  if(!S.habits.length){document.getElementById('hab-body').innerHTML=`<div class="empty"><span class="ei">🌱</span>${S.lang==='jp'?'設定で習慣を追加しよう！':'nothing here yet — add some in Settings'}</div>`;document.getElementById('hab-streaks').innerHTML='';return;}
  let h=`<div style="display:flex;align-items:flex-end;gap:4px;margin-bottom:10px"><div style="width:130px"></div><div style="display:flex;gap:4px">${days.map((d,i)=>`<div style="width:26px;text-align:center;font-size:9px;font-weight:900;color:${ds(d)===today?'var(--pd)':'var(--mu)'}">${WD[i]}<div style="font-size:10px;margin-top:1px">${d.getDate()}</div></div>`).join('')}</div></div>`;
  S.habits.forEach(hab=>{const done=days.map(d=>(S.habitLog[ds(d)]||{})[hab.id]||false),total=done.filter(Boolean).length;h+=`<div style="display:flex;align-items:center;gap:8px;margin-bottom:7px"><div style="width:130px;font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"><span style="font-family:var(--ej)">${hab.e}</span> ${hab.n} <span style="font-size:10px;color:var(--mu)">${total}/7</span></div><div style="display:flex;gap:4px">${days.map((d,i)=>`<div class="hb${done[i]?' done':''}" onclick="togHabit('${hab.id}','${ds(d)}')" style="${done[i]?`background:${hab.color};border-color:${hab.color}`:''}"><span style="font-family:var(--ej)">${done[i]?'✓':''}</span></div>`).join('')}</div></div>`;});
  document.getElementById('hab-body').innerHTML=h;
  let sh='';S.habits.forEach(hab=>{let str=0,d=new Date();while(str<366){const k=ds(d);if((S.habitLog[k]||{})[hab.id])str++;else if(k!==today)break;d.setDate(d.getDate()-1);}sh+=`<div class="stat"><div style="font-size:26px;font-family:var(--ej)">${hab.e}</div><div class="sval" style="font-size:28px">${str}</div><div class="slbl">${S.lang==='jp'?'日連続':'day streak'}</div><div style="font-size:12px;font-weight:700;color:var(--mu);margin-top:3px">${hab.n}</div></div>`;});
  document.getElementById('hab-streaks').innerHTML=sh;
}
function togHabit(hid,date){if(!S.habitLog[date])S.habitLog[date]={};S.habitLog[date][hid]=!S.habitLog[date][hid];saveData();rHabits();if(S.habitLog[date][hid])toast((S.habits.find(h=>h.id===hid)?.n||'')+(S.lang==='jp'?' 完了 ✦':' done ✦'),'ok');}

const DEFAULT_DUMP_TAGS=[
  {k:'idea',   e:'💡', col:'#3B82F6', en:'idea',    jp:'アイデア'},
  {k:'vent',   e:'😤', col:'#EF4444', en:'vent',    jp:'吐き出し'},
  {k:'goal',   e:'🎯', col:'#10B981', en:'goal',    jp:'目標'},
  {k:'grateful',e:'🌸',col:'#EC4899', en:'grateful',jp:'感謝'},
  {k:'random', e:'✨', col:'#8B5CF6', en:'random',  jp:'その他'},
  {k:'study',  e:'📚', col:'#F59E0B', en:'study',   jp:'勉強'},
  {k:'anxiety',e:'💭', col:'#6366F1', en:'anxiety', jp:'不安'},
  {k:'joy',    e:'🥰', col:'#F472B6', en:'joy',     jp:'嬉しい'},
];
// Live computed list — merges defaults with user custom tags
function getDumpTags(){
  if(!S.dumpTags)return DEFAULT_DUMP_TAGS;
  return S.dumpTags;
}
// Legacy compat: old keys like 'idea','vent' still resolve
function getDumpTag(k){return getDumpTags().find(t=>t.k===k)||DEFAULT_DUMP_TAGS.find(t=>t.k===k)||null;}
const BD_PROMPTS_EN=["what's been on your mind today?","what do you need to say out loud?","what are you avoiding right now?","what would you tell a close friend right now?","what are you grateful for, even slightly?","what would make tomorrow feel a bit better?","what's something you need to release?","what's been taking up space in your head?","what made you smile recently?","what do you wish someone understood about you?","what are you quietly proud of?","what are you overthinking?","what does your body need right now?","how are you actually doing?"];
const BD_PROMPTS_JP=["今日、なにが気になってる？","声に出して言いたいこと、ある？","いま、避けてることある？","親友に話すとしたら、なにを言う？","ちょっとでもありがたいと思ったこと、ある？","明日がちょっとよくなるとしたら？","手放してもいいかなってこと、ある？","なんかエネルギー取られてるな、って感じるもの","今週、笑ったのはいつ？","誰かにわかってほしいこと、ある？","さいきん、こっそり自分をほめてあげたいことある？","考えすぎてること、なに？","体がいま、ほしがってるものはなに？","ほんとのところ、どう？"];
let _bdTag=null,_bdFilter='all',_bdPromptIdx=0;

function bdCharCount(el){
  if(!el)return;
  const c=(el.value||'').length,lim=1000;
  const span=document.getElementById('bd-charcount');
  if(!span)return;
  span.textContent=c;
  span.className='bd-charcount'+(c>lim?' over':c>lim*.8?' warn':'');
}

function shufflePrompt(){
  const jp=S.lang==='jp',arr=jp?BD_PROMPTS_JP:BD_PROMPTS_EN;
  _bdPromptIdx=(_bdPromptIdx+1)%arr.length;
  const el=document.getElementById('bd-prompt-text');
  if(el){el.style.opacity='0';setTimeout(()=>{el.textContent=arr[_bdPromptIdx];el.style.opacity='1';},180);}
  const btn=document.querySelector('.bd-prompt-shuffle');
  if(btn){btn.style.transform='rotate(360deg)';setTimeout(()=>btn.style.transform='',320);}
}

function tagLabel(tg){
  if(!tg)return'';
  const jp=S.lang==='jp';
  // Custom tags have .en/.jp labels; legacy built-ins have i18n keys
  if(tg.en)return jp?(tg.jp||tg.en):(tg.en);
  return t('dump_tag_'+tg.k)||tg.k;
}

function buildBdTags(){
  const c=document.getElementById('bd-tags');if(!c)return;
  const tags=getDumpTags();
  c.innerHTML=tags.map(tg=>{
    const lbl=tagLabel(tg);
    const sel=_bdTag===tg.k;
    return`<button class="bd-tag-btn${sel?' sel':''}" style="${sel?`background:${tg.col};color:white;border-color:transparent;`:`border-color:${tg.col}50;color:${tg.col};`}" onclick="selectBdTag('${tg.k}')">${tg.e||''} ${lbl}</button>`;
  }).join('');
}

function selectBdTag(k){
  _bdTag=_bdTag===k?null:k;
  buildBdTags();
}

function buildBdFilterBar(){
  const c=document.getElementById('bd-filter-bar');if(!c)return;
  const jp=S.lang==='jp';
  let chips=`<button class="bd-filter-chip${_bdFilter==='all'?' act':''}" onclick="setBdFilter('all')">${t('bd_filter_all')}</button>`;
  chips+=`<button class="bd-filter-chip${_bdFilter==='pinned'?' act':''}" onclick="setBdFilter('pinned')">📌 ${jp?'ピン':'Pinned'}</button>`;
  getDumpTags().forEach(tg=>{
    const has=S.dumps.some(d=>d.tag===tg.k);
    if(!has)return;
    const lbl=tagLabel(tg);
    chips+=`<button class="bd-filter-chip${_bdFilter===tg.k?' act':''}" onclick="setBdFilter('${tg.k}')" style="${_bdFilter===tg.k?`background:${tg.col};color:white;border-color:transparent;`:`border-color:${tg.col}40;color:${tg.col};`}">${tg.e||''} ${lbl}</button>`;
  });
  c.innerHTML=chips;
}

function setBdFilter(f){_bdFilter=f;rBrainDump();}

function rBrainDump(){
  const jp=S.lang==='jp';
  const inp=document.getElementById('bd-input');
  if(inp&&inp.value===''){inp.value='';bdCharCount(inp);}
  const promptEl=document.getElementById('bd-prompt-text');
  if(promptEl&&!promptEl.textContent){const arr=jp?BD_PROMPTS_JP:BD_PROMPTS_EN;promptEl.textContent=arr[_bdPromptIdx%arr.length];}
  buildBdTags();
  buildBdFilterBar();
  const q=(document.getElementById('bd-search')?.value||'').toLowerCase().trim();
  let items=[...S.dumps.filter(d=>d.pinned),...S.dumps.filter(d=>!d.pinned)];
  if(_bdFilter==='pinned')items=items.filter(d=>d.pinned);
  else if(_bdFilter!=='all')items=items.filter(d=>d.tag===_bdFilter);
  if(q)items=items.filter(d=>d.text.toLowerCase().includes(q)||(tagLabel(getDumpTag(d.tag))||'').toLowerCase().includes(q));
  const statsEl=document.getElementById('bd-stats');
  if(statsEl){
    const total=S.dumps.length,pinned=S.dumps.filter(d=>d.pinned).length;
    statsEl.textContent=jp?`${total}件 · 📌${pinned}`:`${total} thoughts · 📌${pinned}`;
  }
  const viewToggle=document.getElementById('bd-view-toggle');
  if(viewToggle){viewToggle.textContent=_bdView==='chaos'?(jp?'📋 リスト':'📋 list'):(jp?'🌀 カオス':'🌀 chaos');}
  if(!items.length){
    document.getElementById('bd-list').innerHTML=`<div class="empty"><span class="ei">🧠</span>${jp?(S.dumps.length?'見つからなかった':'なんでも出していいよ ♡'):(S.dumps.length?'No matches':'nothing yet — start writing ♡')}</div>`;
    return;
  }
  if(_bdView==='chaos'){
    _renderBdChaos(items.slice(0,20),jp);
    return;
  }
  document.getElementById('bd-list').innerHTML=items.map(d=>{
    const tg=getDumpTag(d.tag);
    const accentCol=tg?tg.col:'var(--pm)';
    const lbl=tg?tagLabel(tg):'';
    const long=d.text.length>180;
    const exp=d._exp||false;
    return`<div class="dump-card${d.pinned?' pinned':''}" id="dc-${d.id}">
      <div class="dump-card-accent" style="background:linear-gradient(90deg,${accentCol},${accentCol}66)"></div>
      <div class="dump-card-body">
        <div class="dump-card-text${long&&!exp?' collapsed':' expanded'}" id="dct-${d.id}">${escH(d.text)}</div>
        ${d.imgUrl?`<img src="${escH(d.imgUrl)}" class="entry-img" onerror="this.style.display='none'">`:''}
        ${long?`<button class="dump-expand-btn" onclick="toggleDumpExpand('${d.id}')" id="deb-${d.id}">${exp?(jp?'▲ 閉じる':'▲ less'):(jp?'▼ もっと読む':'▼ more')}</button>`:''}
      </div>
      <div class="dump-card-footer">
        ${lbl?`<span class="dump-tag-badge" style="background:${accentCol}18;color:${accentCol};border-color:${accentCol}44">${tg.e||''} ${lbl}</span>`:''}
        ${d.pinned?`<span class="dump-tag-badge" style="background:var(--yl);color:var(--yd);border-color:var(--y)50">📌 ${jp?'ピン留め':'pinned'}</span>`:''}
        <span class="dump-date">${d.date||''}</span>
        <button class="dump-btn${d.pinned?' pin-active':''}" onclick="togglePin('${d.id}')" title="${d.pinned?(jp?'ピン解除':'unpin'):(jp?'ピン留め':'pin')}">${d.pinned?'📌':'☆'}</button>
        <button class="dump-btn" onclick="delDump('${d.id}')" style="color:#ef4444;border-color:#ef444430" title="${jp?'削除':'delete'}">✕</button>
      </div>
    </div>`;
  }).join('');
}

function toggleBdView(){
  _bdView=_bdView==='chaos'?'list':'chaos';
  rBrainDump();
}

function _renderBdChaos(items,jp){
  const list=document.getElementById('bd-list');
  list.innerHTML='';
  list.style.position='relative';
  list.style.minHeight='520px';
  const orbColors=['#FF6EB4','#C898FF','#90D8FF','#A8FFDA','#FFD0A0','#FF96C8','#B8F0FF','#FFB8E8'];
  const orb=document.createElement('div');
  orb.className='bd-chaos-orb';
  list.appendChild(orb);
  items.forEach((d,i)=>{
    const tg=getDumpTag(d.tag);
    const col=tg?tg.col:orbColors[i%orbColors.length];
    const card=document.createElement('div');
    card.className='bd-chaos-card';
    const angle=(i/items.length)*360;
    const radius=36+Math.random()*22;
    const tx=50+radius*Math.cos((angle*Math.PI)/180);
    const ty=50+radius*0.52*Math.sin((angle*Math.PI)/180);
    const rot=(Math.random()*18-9).toFixed(1);
    const dur=(6+Math.random()*8).toFixed(1);
    const delay=(Math.random()*4).toFixed(1);
    card.style.cssText=`--tx:${tx}%;--ty:${ty}%;--rot:${rot}deg;--dur:${dur}s;--dl:${delay}s;border-color:${col}55;`;
    const preview=d.imgUrl?`<img src="${escH(d.imgUrl)}" style="width:100%;max-height:60px;object-fit:cover;border-radius:6px;margin-top:4px;display:block" onerror="this.style.display='none'">` :'';
    card.innerHTML=`<div style="font-size:10px;font-weight:800;color:${col};margin-bottom:3px;font-family:var(--ej)">${tg?tg.e:'✦'}</div><div style="font-size:11px;line-height:1.5;color:var(--tx);overflow:hidden;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical">${escH(d.text)}</div>${preview}<div style="font-size:9px;color:var(--fa);margin-top:4px">${d.date||''}</div>`;
    card.onclick=()=>{_bdView='list';rBrainDump();setTimeout(()=>{const el=document.getElementById('dc-'+d.id);if(el)el.scrollIntoView({behavior:'smooth',block:'center'});},80);};
    list.appendChild(card);
  });
  if(typeof anime!=='undefined'){
    anime({targets:'.bd-chaos-card',opacity:[0,1],scale:[0.4,1],delay:anime.stagger(60,{start:0}),duration:500,easing:'easeOutBack'});
  }
}

function toggleDumpExpand(id){
  const d=S.dumps.find(x=>x.id===id);if(!d)return;
  d._exp=!d._exp;
  const txtEl=document.getElementById('dct-'+id);
  const btnEl=document.getElementById('deb-'+id);
  const jp=S.lang==='jp';
  if(txtEl){txtEl.className='dump-card-text'+(d._exp?' expanded':' collapsed');}
  if(btnEl){btnEl.textContent=d._exp?(jp?'▲ 閉じる':'▲ less'):(jp?'▼ もっと読む':'▼ more');}
}

function saveDump(){
  const text=(document.getElementById('bd-input').value||'').trim();
  if(!text)return;
  const pinned=document.getElementById('bd-pin').checked;
  const tag=_bdTag||null;
  const imgUrl=(document.getElementById('bd-imgurl')?.value||'').trim();
  S.dumps.unshift({text,pinned,tag,imgUrl,date:fmtDate(tstr()),id:gid()});
  saveData();
  document.getElementById('bd-input').value='';
  document.getElementById('bd-pin').checked=false;
  bdCharCount(document.getElementById('bd-input'));
  _bdTag=null;
  const bif=document.getElementById('bd-img-field');if(bif){bif.classList.remove('open');}
  const biUrl=document.getElementById('bd-imgurl');if(biUrl)biUrl.value='';
  bdImgPreview('');
  toast(S.lang==='jp'?'出せた ✦':'out of your head ✦','ok');
  rBrainDump();
}
function togglePin(id){const d=S.dumps.find(x=>x.id===id);if(d){d.pinned=!d.pinned;saveData();rBrainDump();}}
function delDump(id){S.dumps=S.dumps.filter(d=>d.id!==id);saveData();rBrainDump();}
let _bdView='list';
let TM={mode:'cd',phase:'work',running:false,paused:false,rem:1500,tot:1500,elap:0,sessions:0,int:null};
function setTMode(m){clearInterval(TM.int);TM.running=false;TM.paused=false;TM.mode=m;tmReset();['cd','sw','po'].forEach(x=>document.getElementById('mb-'+x)?.classList.toggle('act',x===m));document.getElementById('tm-dur-row').style.display=m==='sw'?'none':'grid';document.getElementById('tm-opts').style.display=m==='po'?'block':'none';updateTmDisplay();}
function tmToggle(){
  if(TM.running){clearInterval(TM.int);TM.running=false;TM.paused=true;}
  else if(TM.paused){TM.running=true;TM.paused=false;}
  else{if(TM.mode==='sw')TM.elap=0;else{const min=parseInt(document.getElementById('tm-min')?.value)||25;TM.tot=TM.rem=min*60;}TM.running=true;}
  if(TM.running)TM.int=setInterval(tmTick,1000);
  const pb=document.getElementById('tm-pb');if(pb){pb.textContent=TM.running?'⏸':'▶';pb.classList.toggle('idle',!TM.running&&!TM.paused);}
  const fp=document.getElementById('fo-pb');if(fp)fp.textContent=TM.running?'⏸':'▶';
  buildWave();updateTmDisplay();
}
function tmTick(){if(TM.mode==='sw')TM.elap++;else{if(TM.rem>0)TM.rem--;if(TM.rem===0){clearInterval(TM.int);TM.running=false;TM.paused=false;tmDone();return;}}updateTmDisplay();}
function tmReset(){clearInterval(TM.int);TM.running=false;TM.paused=false;TM.elap=0;const min=parseInt(document.getElementById('tm-min')?.value)||25;TM.tot=TM.rem=TM.mode==='sw'?0:min*60;const pb=document.getElementById('tm-pb');if(pb){pb.textContent='▶';pb.classList.add('idle');}buildWave();updateTmDisplay();}
function tmStop(){clearInterval(TM.int);const secs=TM.mode==='sw'?TM.elap:TM.tot-TM.rem;TM.running=false;TM.paused=false;const pb=document.getElementById('tm-pb');if(pb){pb.textContent='▶';pb.classList.add('idle');}buildWave();if(secs>30)tmPromptLog(secs);TM.elap=0;const min=parseInt(document.getElementById('tm-min')?.value)||25;TM.tot=TM.rem=TM.mode==='sw'?0:min*60;updateTmDisplay();}
function tmDone(){beep();TM.sessions++;if(TM.mode==='po'&&document.getElementById('tm-autolog')?.checked){const uid=document.getElementById('tm-unit')?.value||S.units[0]?.id;if(uid)autoLog(uid,TM.tot);}else tmPromptLog(TM.tot);if(TM.mode==='po'&&document.getElementById('tm-autobrk')?.checked){const brk=(parseInt(document.getElementById('tm-brk')?.value)||5)*60;TM.phase=TM.phase==='work'?'break':'work';TM.tot=TM.rem=TM.phase==='work'?(parseInt(document.getElementById('tm-min')?.value)||25)*60:brk;updateTmDisplay();setTimeout(()=>tmToggle(),800);}reward('🍅',S.lang==='jp'?'お疲れ 🍅':'session done ✦');closeFocus();}
function tmPromptLog(secs){const uid=document.getElementById('tm-unit')?.value||S.units[0]?.id;const jp=S.lang==='jp';openModal(`<div class="mt">${jp?'セッション完了 🎉':'session done 🎉'}</div><p style="font-size:14px;color:var(--mu);margin-bottom:14px">${jp?'ブロックとして保存する？':'save as a study block?'}</p><div class="fg"><label>${jp?'ユニット':'Unit'}</label><select id="ml-u">${S.units.map(u=>`<option value="${u.id}"${u.id===uid?' selected':''}>${u.n}</option>`).join('')}</select></div><div style="display:flex;gap:8px;margin-top:10px"><button class="btn bp" onclick="logSess(${secs})">${jp?'保存 ✦':'save it ✦'}</button><button class="btn bg_" onclick="closeModal()">${jp?'あとで':'Skip'}</button></div>`);}
function logSess(secs){const uid=document.getElementById('ml-u').value;autoLog(uid,secs);closeModal();}
function autoLog(uid,secs){const now=new Date(),end=fmtHM(now);const stRaw=new Date(now-secs*1000);const todayMidnight=new Date(tstr()+'T00:00');const st=stRaw<todayMidnight?todayMidnight:stRaw;const start=fmtHM(st);S.blocks.push({id:gid(),unitId:uid,date:tstr(),start,end,label:S.lang==='jp'?'タイマー ⏱':'Timer ⏱'});saveData();toast(S.lang==='jp'?'保存した ✦':'logged ✦','ok');updateTmLog();if(curV==='today')rToday();if(curV==='week')rWeek();}
function buildWave(){} // removed — wave bars deleted
function buildDots(el){if(!el)return;let h='';for(let i=0;i<Math.max(4,TM.sessions+1);i++)h+=`<div class="sdot${i<TM.sessions?' done':i===TM.sessions&&TM.running?' live':''}"></div>`;el.innerHTML=h;}
function updateTmDisplay(){
  let dig,pct;
  if(TM.mode==='sw'){dig=fmtT(TM.elap);pct=Math.min(1,(TM.elap%3600)/3600)||0;}
  else{dig=fmtT(TM.rem);pct=TM.tot>0?TM.rem/TM.tot:1;}
  ['tm-dig','fo-dig'].forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=dig;});
  const ring=document.getElementById('tm-ring');if(ring)ring.style.strokeDashoffset=CIRC*(1-pct);
  const jp=S.lang==='jp';
  const sub=document.getElementById('tm-sub');if(sub)sub.textContent=TM.running?(jp?'やってる 🔥':'running 🔥'):TM.paused?(jp?'止まってる ⏸':'paused ⏸'):(jp?'いつでも ♡':'ready ♡');
  const lbl=document.getElementById('tm-lbl');if(lbl)lbl.textContent=TM.mode==='sw'?(jp?'ストップウォッチ':'Stopwatch'):TM.mode==='po'?(TM.phase==='work'?'Work 🍅':(jp?'休憩 🌸':'Break 🌸')):(jp?'カウントダウン':'Countdown');
  buildDots(document.getElementById('sdots'));buildDots(document.getElementById('fo-dots'));
  const fp=document.getElementById('fo-pb');if(fp)fp.textContent=TM.running?'⏸':'▶';
}
function updateTmLog(){const td=tstr(),blks=S.blocks.filter(x=>x.date===td&&(x.label||'').includes('⏱'));const el=document.getElementById('tm-log');if(!el)return;el.innerHTML=blks.length?blks.map(x=>{const col=ucol(x.unitId);return`<div class="blkr" style="background:${ulight(col)};border-color:${col};margin-bottom:4px">${dot(x.unitId)}<span style="flex:1;font-size:13px;font-weight:700">${gu(x.unitId).n}</span><span style="font-size:12px;color:${col}">${x.start}–${x.end}</span></div>`;}).join(''):`<div class="empty" style="padding:10px;font-size:12px">${S.lang==='jp'?'まだセッションなし':'nothing yet'}</div>`;}
function refreshUnitSelects(){
  // Keep timer + any open modal unit selectors in sync after unit add/delete
  const sel=document.getElementById('tm-unit');
  if(sel){const cur=sel.value;sel.innerHTML=S.units.map(u=>`<option value="${u.id}"${u.id===cur?' selected':''}>${u.n}</option>`).join('');}
}
function rTimer(){
  document.getElementById('tm-unit').innerHTML=S.units.map(u=>`<option value="${u.id}">${u.n}</option>`).join('');
  buildWave();updateTmDisplay();updateTmLog();
  let wh='',tot=0;
  S.units.forEach(u=>{const h=wkHrs(u.id);tot+=h;const col=u.color||'var(--p)';wh+=`<div style="margin-bottom:8px"><div style="display:flex;justify-content:space-between;font-size:12px;font-weight:700;margin-bottom:2px"><span>${dot(u.id)} ${u.n}</span><span style="color:${col}">${h.toFixed(1)}h</span></div><div class="pbar-w"><div class="pbar" style="width:${Math.min(100,h/(u.goal||5)*100)}%;background:${col}"></div></div></div>`;});
  document.getElementById('tm-week').innerHTML=wh||`<p style="color:var(--mu);font-size:12px">${S.lang==='jp'?'今週はまだなし':'nothing this week'}</p>`;
  document.getElementById('tm-wktot').textContent=`${tot.toFixed(1)}h total`;
}
function openFocus(){document.getElementById('focus-ol').classList.add('show');document.getElementById('fo-unit').textContent=gu(document.getElementById('tm-unit')?.value||S.units[0]?.id).n;document.getElementById('fo-quote').textContent=S.quote||(S.lang==='jp'?'いい感じだよ ✦':'you\'re doing great ✦');updateTmDisplay();}
function closeFocus(){document.getElementById('focus-ol').classList.remove('show');}

let calOff=0;
function calNav(n){calOff=n===0?0:calOff+n;rCal();}
function rCal(){
  const now=new Date(),yr=now.getFullYear(),mn=now.getMonth()+calOff;
  const first=new Date(yr,mn,1),last=new Date(yr,mn+1,0),today=tstr();
  document.getElementById('cal-lbl').textContent=fmtMon(first);
  const WD=S.lang==='jp'?WD_JP:WD_EN;
  document.getElementById('cal-heads').innerHTML=WD.map(d=>`<div class="cdn">${d}</div>`).join('');
  let dow=first.getDay();dow=dow===0?6:dow-1;
  let h='';
  for(let i=0;i<dow;i++){const d2=new Date(first);d2.setDate(d2.getDate()-dow+i);h+=`<div class="cd om"><div class="cn">${d2.getDate()}</div></div>`;}
  for(let day=1;day<=last.getDate();day++){
    const date=`${first.getFullYear()}-${String(first.getMonth()+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    const ass=S.assessments.filter(a=>a.date===date),blks=S.blocks.filter(b=>b.date===date),hd=S.diary[date]&&(S.diary[date].free||S.diary[date].good||S.diary[date].studied||S.diary[date].mood),isT=date===today;
    let dots='<div class="cdots">';
    ass.forEach(a=>dots+=`<span class="cdot" style="background:${ucol(a.unitId)}"></span>`);
    blks.slice(0,5).forEach(b=>dots+=`<span class="cdot" style="background:${ucol(b.unitId)};opacity:.4"></span>`);
    dots+='</div>';
    h+=`<div class="cd${isT?' tod':''}${hd?' cd-d':''}" onclick="openDayPanel('${date}')"><div class="cn">${day}</div>${dots}</div>`;
  }
  const rem=(7-((dow+last.getDate())%7))%7;
  for(let i=1;i<=rem&&rem<7;i++)h+=`<div class="cd om"><div class="cn">${i}</div></div>`;
  document.getElementById('cal-grid').innerHTML=h;
  document.getElementById('cal-panel').style.display='none';
}
function openDayPanel(date){
  const jp=S.lang==='jp';
  const ass=S.assessments.filter(a=>a.date===date),blks=S.blocks.filter(b=>b.date===date).sort((a,b)=>a.start.localeCompare(b.start)),de=S.diary[date];
  let h=`<div class="card"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><h2 style="margin:0;font-size:15px">${fmtDate(date,true)}</h2><button class="btn bg_ bsm" onclick="document.getElementById('cal-panel').style.display='none'">✕</button></div>`;
  if(blks.length){h+=`<div class="ct">${jp?'学習ブロック':'Study blocks'}</div>`;blks.forEach(b=>{const col=ucol(b.unitId);h+=`<div class="blkr" style="background:${ulight(col)};border-color:${col};margin-bottom:4px">${dot(b.unitId)}<div style="flex:1;font-size:13px;font-weight:700">${gu(b.unitId).n}${b.label?` — <span style="font-weight:600;color:var(--mu)">${escH(b.label)}</span>`:''}</div><span style="font-size:12px;color:${col}">${b.start}–${b.end}</span><button class="btn bd" onclick="delBlk('${b.id}');openDayPanel('${date}')">✕</button></div>`;});}
  if(ass.length){h+=`<div class="ct" style="margin-top:8px">${jp?'課題':'Assessments'}</div>`;ass.forEach(a=>{h+=`<div class="rrow">${pill(a.unitId)}<span style="flex:1;font-size:13px">${escH(a.title)}</span><button class="btn bd" onclick="delAss('${a.id}');openDayPanel('${date}')">✕</button></div>`;});}
  if(de&&de.mood){h+=`<div class="ct" style="margin-top:8px">${jp?'日記':'diary'}</div><div style="display:flex;gap:6px;align-items:center"><span style="font-size:22px;font-family:var(--ej)">${MOODS[de.mood]||''}</span>${de.hope!=null?`<span class="pill" style="background:var(--pl);color:var(--pd);border-color:var(--pm)40">hope ${de.hope}/10</span>`:''}</div>`;}
  h+=`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:12px"><button class="btn bp bsm" onclick="openBlkModal('${date}')">${jp?'+ ブロック':'+ Block'}</button><button class="btn bsm" onclick="openAssModal('${date}')">${jp?'+ 課題':'+ Assessment'}</button><button class="btn bsm" onclick="closeModal();goDiary('${date}')">${jp?'日記を見る':'Open diary'}</button></div></div>`;
  const p=document.getElementById('cal-panel');p.innerHTML=h;p.style.display='block';p.scrollIntoView({behavior:'smooth',block:'nearest'});
}

let wkOff=0;
function wkNav(n){wkOff=n===0?0:wkOff+n;rWeek();}
function rWeek(){
  const mon=monday(wkOff),days=Array.from({length:7},(_,i)=>{const d=new Date(mon);d.setDate(mon.getDate()+i);return d;}),today=tstr();
  const WD=S.lang==='jp'?WD_JP:WD_EN;
  document.getElementById('wk-lbl').textContent=`${fmtDate(ds(days[0]))} – ${fmtDate(ds(days[6]))}`;
  let h='<div class="wg7">';
  days.forEach((d,i)=>{
    const date=ds(d),isT=date===today,blks=S.blocks.filter(b=>b.date===date).sort((a,b)=>a.start.localeCompare(b.start));
    h+=`<div><div class="wh${isT?' wt':''}">${WD[i]}<br><span style="font-size:13px">${d.getDate()}</span></div>`;
    blks.forEach(b=>{const col=ucol(b.unitId);h+=`<div class="wblk" style="background:${ulight(col)};border-color:${col}" onclick="editBlkModal('${b.id}')" title="${S.lang==='jp'?'クリックして編集':'tap to edit'}"><div style="font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:${col}">${gu(b.unitId).n}</div><div style="opacity:.7;font-size:9px;color:${col}">${b.start}–${b.end}${b.label?'<br>'+escH(b.label):''}</div></div>`;});
    h+=`<div class="wblk-add" onclick="openBlkModal('${date}')" title="${S.lang==='jp'?'ブロックを追加':'add block'}" style="opacity:.35;font-size:11px;text-align:center;padding:3px;cursor:pointer;border-radius:6px;border:1.5px dashed var(--brm);margin-bottom:3px;color:var(--mu)">+</div>`;
    h+='</div>';
  });
  h+='</div>';document.getElementById('wk-body').innerHTML=h;
}
function delBlk(id){S.blocks=S.blocks.filter(b=>b.id!==id);saveData();if(curV==='week')rWeek();if(curV==='cal')rCal();if(curV==='today')rToday();toast(S.lang==='jp'?'削除した':'removed');}
function editBlkModal(id){
  const b=S.blocks.find(x=>x.id===id);if(!b)return;
  const jp=S.lang==='jp';
  openModal(`<div class="mt">${jp?'ブロックを編集 📚':'Edit study block 📚'}</div>
  <div class="frow">
    <div class="fg"><label>${jp?'ユニット':'Unit'}</label><select id="m-uid">${S.units.map(u=>`<option value="${u.id}"${u.id===b.unitId?' selected':''}>${u.n}</option>`).join('')}</select></div>
    <div class="fg"><label>${jp?'日付':'Date'}</label><input type="text" id="m-dt" placeholder="YYYY-MM-DD" readonly></div>
  </div>
  <div class="frow">
    <div class="fg"><label>${jp?'開始':'Start'}</label><input type="text" id="m-st" placeholder="HH:MM" readonly></div>
    <div class="fg"><label>${jp?'終了':'End'}</label><input type="text" id="m-et" placeholder="HH:MM" readonly></div>
  </div>
  <div class="fg"><label>${jp?'ラベル（なくてもOK）':'Label (optional)'}</label><input type="text" id="m-lb" value="${escH(b.label||'')}"></div>
  <div style="display:flex;gap:8px;margin-top:4px">
    <button class="btn bp" onclick="updateBlk('${id}')">${jp?'保存 ✦':'Save ✦'}</button>
    <button class="btn bd" onclick="delBlk('${id}');closeModal()">${jp?'削除':'Delete'}</button>
    <button class="btn bg_" onclick="closeModal()">${jp?'やめとく':'Cancel'}</button>
  </div>`);
}
function updateBlk(id){
  const b=S.blocks.find(x=>x.id===id);if(!b)return;
  const uid=document.getElementById('m-uid').value,date=document.getElementById('m-dt').value,start=document.getElementById('m-st').value,end=document.getElementById('m-et').value,label=(document.getElementById('m-lb').value||'').trim();
  if(!date||!start||!end){toast(S.lang==='jp'?'日付と時刻を入れてね':'date and times first');return;}
  if(start>=end){toast(S.lang==='jp'?'終了は開始より後にしてね':'end needs to be after start');return;}
  b.unitId=uid;b.date=date;b.start=start;b.end=end;b.label=label;
  saveData();closeModal();if(curV==='week')rWeek();if(curV==='cal')rCal();if(curV==='today')rToday();
  toast(S.lang==='jp'?'更新した ✦':'updated ✦','ok');
}
function openBlkModal(date){
  const jp=S.lang==='jp';
  openModal(`<div class="mt">${jp?'ブロックを追加 📚':'Add study block 📚'}</div>
  <div class="frow">
    <div class="fg"><label>${jp?'ユニット':'Unit'}</label><select id="m-uid">${S.units.map(u=>`<option value="${u.id}">${u.n}</option>`).join('')}</select></div>
    <div class="fg"><label>${jp?'日付':'Date'}</label><input type="text" id="m-dt" placeholder="YYYY-MM-DD" readonly></div>
  </div>
  <div class="frow">
    <div class="fg"><label>${jp?'開始':'Start'}</label><input type="text" id="m-st" placeholder="09:00" readonly></div>
    <div class="fg"><label>${jp?'終了':'End'}</label><input type="text" id="m-et" placeholder="11:00" readonly></div>
  </div>
  <div class="fg"><label>${jp?'ラベル（なくてもOK）':'Label (optional)'}</label><input type="text" id="m-lb" placeholder="${jp?'例：3章とか、講義名とか…':'e.g. Chapter 3, Lecture...'}"></div>
  <div class="fg" style="background:var(--al);border-radius:var(--rm);padding:10px 12px;border:2px solid var(--br)">
    <label style="display:flex;align-items:center;gap:8px;cursor:pointer;margin-bottom:8px">
      <input type="checkbox" id="m-rep" onchange="document.getElementById('m-reprow').style.display=this.checked?'flex':'none'">
      <span style="font-size:13px;font-weight:800">${jp?'🔁 毎週くり返す':'🔁 Repeat weekly'}</span>
    </label>
    <div id="m-reprow" style="display:none;align-items:center;gap:8px;flex-wrap:wrap">
      <span style="font-size:12px;color:var(--mu)">${jp?'何週間：':'Repeat for'}</span>
      <input type="number" id="m-repn" value="4" min="1" max="52" style="width:64px">
      <span style="font-size:12px;color:var(--mu)">${jp?'週':'weeks'}</span>
    </div>
  </div>
  <div style="display:flex;gap:8px;margin-top:4px">
    <button class="btn bp" onclick="saveBlk()">${jp?'追加 ✦':'Add ✦'}</button>
    <button class="btn bg_" onclick="closeModal()">${jp?'やめとく':'Cancel'}</button>
  </div>`);
}
function saveBlk(){
  const uid=document.getElementById('m-uid').value,date=document.getElementById('m-dt').value,start=document.getElementById('m-st').value,end=document.getElementById('m-et').value,label=(document.getElementById('m-lb').value||'').trim();
  const rep=document.getElementById('m-rep')?.checked,repN=parseInt(document.getElementById('m-repn')?.value)||1;
  if(!date||!start||!end){toast(S.lang==='jp'?'日付と時刻を入れてね':'date and times first');return;}
  if(start>=end){toast(S.lang==='jp'?'終了は開始より後にしてね':'end needs to be after start');return;}
  const count=rep?Math.min(52,Math.max(1,repN)):1;
  const baseDate=new Date(date+'T00:00');
  for(let i=0;i<count;i++){
    const d=new Date(baseDate);d.setDate(baseDate.getDate()+i*7);
    S.blocks.push({id:gid(),unitId:uid,date:ds(d),start,end,label});
  }
  saveData();closeModal();if(curV==='week')rWeek();if(curV==='cal')rCal();if(curV==='today')rToday();
  toast(count>1?(S.lang==='jp'?`${count}ブロック追加した ✦`:`${count} blocks added ✦`):(S.lang==='jp'?'ブロック追加した ✦':'block added ✦'),'ok');
}

function rTasks(){
  const jp=S.lang==='jp';const q=(document.getElementById('task-search')?.value||'').toLowerCase();
  if(!S.units.length){document.getElementById('tasks-body').innerHTML=`<div class="empty"><span class="ei">⚙️</span>${jp?'設定でユニットを追加してね':'add your units in Settings to get started'}</div>`;return;}
  let h='';
  S.units.forEach(u=>{
    const col=u.color||'var(--p)';let ut=S.tasks.filter(tk=>tk.unitId===u.id);
    if(q)ut=ut.filter(tk=>tk.text.toLowerCase().includes(q)||(tk.due||'').includes(q));
    const pend=ut.filter(tk=>!tk.done),done=ut.filter(tk=>tk.done);
    if(!q&&!ut.length)return;
    h+=`<div class="card" style="margin-bottom:10px"><div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><span class="udot" style="background:${col};width:12px;height:12px"></span><span style="font-size:15px;font-weight:800">${u.n}</span><span style="font-size:12px;color:var(--mu)">${pend.length} ${jp?'残り':'open'}</span><button class="btn bg_ bsm" onclick="openTaskModal('${u.id}')" style="margin-left:auto">+</button></div>`;
    const pr=['',`<span class="task-pr task-pr-1">!</span>`,`<span class="task-pr task-pr-2">${'!!'}</span>`,`<span class="task-pr task-pr-3">·</span>`];
    if(!ut.length)h+=`<div class="empty" style="padding:8px 0;font-size:12px">${jp?'なにもない ✦':'Nothing yet ✦'}</div>`;
    [...pend].sort((a,b)=>(a.priority||3)-(b.priority||3)).forEach(tk=>{h+=`<div class="rrow"><input type="checkbox" onchange="togTask('${tk.id}',event)">${pill(tk.unitId)}<span class="t-txt" style="flex:1;font-size:13px">${pr[tk.priority||3]||''} ${escH(tk.text)}${tk.due?`<span style="font-size:11px;color:var(--mu);margin-left:5px">📅 ${fmtDate(tk.due)}</span>`:''}</span><button class="btn bd" onclick="delTask('${tk.id}')">✕</button></div>`;});
    if(done.length){h+=`<details style="margin-top:4px"><summary style="font-size:11px;color:var(--fa);cursor:pointer;padding:4px 0">${done.length} ${jp?'完了':'done'}</summary>`;done.forEach(tk=>{h+=`<div class="rrow done"><input type="checkbox" checked onchange="togTask('${tk.id}',event)"><span class="t-txt" style="flex:1;font-size:13px">${escH(tk.text)}</span><button class="btn bd" onclick="delTask('${tk.id}')">✕</button></div>`;});h+='</details>';}
    h+='</div>';
  });
  if(!h)h=`<div class="empty"><span class="ei">✅</span>${jp?'タスクなし ✦':'No tasks found'}</div>`;
  document.getElementById('tasks-body').innerHTML=h;
}
function openTaskModal(uid){
  const jp=S.lang==='jp';const opts=S.units.map(u=>`<option value="${u.id}"${u.id===uid?' selected':''}>${u.n}</option>`).join('');
  openModal(`<div class="mt">${jp?'タスク追加 ✅':'Add task ✅'}</div><div class="fg"><label>${jp?'タスク':'task'}</label><input type="text" id="m-tt" placeholder="${jp?'何が必要？':'What needs doing?'}" onkeydown="if(event.key==='Enter')saveTask()"></div><div class="frow"><div class="fg"><label>${jp?'ユニット':'Unit'}</label><select id="m-tu">${opts}</select></div><div class="fg"><label>${jp?'優先度':'Priority'}</label><select id="m-tp"><option value="1">🔴 ${jp?'高':'High'}</option><option value="2">🟠 ${jp?'中':'Medium'}</option><option value="3" selected>🟡 ${jp?'低':'Low'}</option></select></div></div><div class="fg"><label>${jp?'期限（任意）':'Due date (optional)'}</label><input type="text" id="m-td" placeholder="Pick date" readonly></div><div style="display:flex;gap:8px"><button class="btn bp" onclick="saveTask()">${jp?'追加 ✦':'Add ✦'}</button><button class="btn bg_" onclick="closeModal()">${jp?'やめとく':'Cancel'}</button></div>`);
  setTimeout(()=>document.getElementById('m-tt')?.focus(),80);
}
function saveTask(){const text=(document.getElementById('m-tt').value||'').trim(),unitId=document.getElementById('m-tu').value,priority=parseInt(document.getElementById('m-tp').value)||3,due=document.getElementById('m-td').value||null;if(!text){toast(S.lang==='jp'?'タスクを入れてね':'what\'s the task?');return;}S.tasks.push({id:gid(),unitId,text,done:false,priority,due});saveData();closeModal();rTasks();if(curV==='today')rToday();toast(S.lang==='jp'?'タスクを追加した ✦':'task added ✦','ok');}
function togTask(id,e){const tk=S.tasks.find(x=>x.id===id);if(!tk)return;tk.done=!tk.done;saveData();if(tk.done){const r=e.target.getBoundingClientRect();confetti(r.left,r.top);reward('✅',S.lang==='jp'?'完了 ✦':'done ✦');}rTasks();if(curV==='today')rToday();}
function delTask(id){S.tasks=S.tasks.filter(t=>t.id!==id);saveData();rTasks();}

function gradeColour(g){
  if(g==null)return'var(--mu)';
  if(g>=85)return'#22c55e';
  if(g>=70)return'#3b82f6';
  if(g>=55)return'var(--y)';
  return'#ef4444';
}
function gradeLetter(g){
  if(g==null)return'—';
  if(g>=85)return'A';if(g>=80)return'A-';if(g>=75)return'B+';if(g>=70)return'B';
  if(g>=65)return'B-';if(g>=60)return'C+';if(g>=55)return'C';if(g>=50)return'D';return'F';
}
function gradeRingHTML(pct,col,label,letter,secondRing){
  const r=34,circ=Math.round(2*Math.PI*r),off=circ-(Math.min(100,pct)/100)*circ;
  const secondArc=secondRing?`<circle cx="40" cy="40" r="${r}" fill="none" stroke="${secondRing.col}" stroke-width="4" stroke-linecap="round" stroke-dasharray="${circ}" stroke-dashoffset="${circ-(Math.min(100,secondRing.pct)/100)*circ}" opacity=".35" style="transition:stroke-dashoffset .6s"/>`:'' ;
  return`<div class="grade-ring-wrap"><svg width="80" height="80" viewBox="0 0 80 80" class="grade-ring-svg"><circle cx="40" cy="40" r="${r}" fill="none" stroke="var(--br)" stroke-width="7"/>${secondArc}<circle cx="40" cy="40" r="${r}" fill="none" stroke="${col}" stroke-width="7" stroke-linecap="round" stroke-dasharray="${circ}" stroke-dashoffset="${off}" style="transition:stroke-dashoffset .6s cubic-bezier(.34,1.2,.64,1)"/></svg><div class="grade-ring-val"><span class="grade-pct" style="color:${col}">${Math.round(pct)}%</span><span class="grade-lbl">${label}</span><span class="grade-letter" style="color:${col}">${letter}</span></div></div>`;
}
function calcUnitGrade(unitId){
  const allAss=S.assessments.filter(a=>a.unitId===unitId);
  const weighted=allAss.filter(a=>a.weight&&a.weight>0);
  const unweighted=allAss.filter(a=>!a.weight||a.weight===0);
  const graded=weighted.filter(a=>a.grade!=null);
  const ungraded=weighted.filter(a=>a.grade==null);
  if(!weighted.length)return{type:'unweighted',allAss,graded:allAss.filter(a=>a.grade!=null)};
  const totalW=weighted.reduce((s,a)=>s+a.weight,0);
  const gradedW=graded.reduce((s,a)=>s+a.weight,0);
  const ungradedW=ungraded.reduce((s,a)=>s+a.weight,0);
  const weightedSum=graded.reduce((s,a)=>s+a.grade*a.weight,0);
  const currentGrade=gradedW>0?weightedSum/gradedW:null;
  const projMin=gradedW>0?weightedSum/totalW:null;
  const projMax=gradedW>0?(weightedSum+ungradedW*100)/totalW:null;
  const weightOk=Math.abs(totalW-100)<0.5;
  return{type:'weighted',currentGrade,projMin,projMax,gradedW,totalW,ungradedW,weightOk,graded:graded.length,ungraded:ungraded.length,total:weighted.length};
}
function rAss(){
  const td=tstr(),jp=S.lang==='jp';
  const el=document.getElementById('ass-body');
  // Build grade overview bar (only if any unit has weighting)
  const ovEl=document.getElementById('ass-grade-overview');
  if(ovEl){
    const unitsWithWeight=S.units.filter(u=>{
      const wa=S.assessments.filter(a=>a.unitId===u.id&&a.weight&&a.weight>0);
      return wa.length>0;
    });
    if(unitsWithWeight.length){
      let ov=`<div class="card cnp" style="padding:14px 18px"><div class="ct" style="margin-bottom:10px">🎓 ${jp?'成績サマリー':'Grade summary'}</div><div style="display:flex;gap:8px;flex-wrap:wrap">`;
      unitsWithWeight.forEach(u=>{
        const gr=calcUnitGrade(u.id);
        if(gr.type!=='weighted')return;
        const gc=gradeColour(gr.currentGrade);
        const col=u.color||'var(--p)';
        ov+=`<div style="display:flex;align-items:center;gap:8px;background:var(--faa);border-radius:12px;padding:8px 12px;border:2px solid ${col}28;min-width:160px;flex:1">
          <span class="udot" style="background:${col};width:10px;height:10px;flex-shrink:0"></span>
          <div style="flex:1;min-width:0">
            <div style="font-size:12px;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escH(u.n)}</div>
            ${gr.currentGrade!=null
              ? `<div style="font-size:20px;font-family:var(--fnh);font-weight:900;color:${gc};line-height:1.2">${gr.currentGrade.toFixed(1)}% <span style="font-size:13px">${gradeLetter(gr.currentGrade)}</span></div>
                 <div style="font-size:10px;color:var(--mu)">${jp?`${gr.gradedW.toFixed(0)}/${gr.totalW.toFixed(0)}% 採点済`:`${gr.gradedW.toFixed(0)}/${gr.totalW.toFixed(0)}% graded`}</div>`
              : `<div style="font-size:13px;color:var(--mu);font-style:italic">${jp?'採点待ち':'awaiting grades'}</div>
                 <div style="font-size:10px;color:var(--fa)">${gr.totalW.toFixed(0)}% ${jp?'設定済':'weighted'}</div>`
            }
            <div class="grade-progress-wrap" style="margin-top:4px"><div class="grade-progress-bar" style="width:${gr.currentGrade!=null?Math.min(100,gr.gradedW/Math.max(gr.totalW,1)*100):0}%;background:${gc}"></div></div>
          </div>
        </div>`;
      });
      ov+='</div></div>';
      ovEl.innerHTML=ov;
      ovEl.style.display='block';
    } else {
      ovEl.style.display='none';
    }
  }
  if(!S.assessments.length){el.innerHTML=`<div class="empty"><span class="ei">📝</span>${jp?'課題なし！':'No assessments yet!'}</div>`;return;}
  let h='';
  S.units.forEach(u=>{
    const unitAss=S.assessments.filter(a=>a.unitId===u.id);
    if(!unitAss.length)return;
    const col=u.color||'var(--p)';
    const gr=calcUnitGrade(u.id);
    const up=unitAss.filter(a=>a.date&&a.date>=td).sort((a,b)=>(a.date||'').localeCompare(b.date||''));
    const past=unitAss.filter(a=>a.date&&a.date<td).sort((a,b)=>(b.date||'').localeCompare(a.date||''));
    const undated=unitAss.filter(a=>!a.date);
    let ring='',gradePanel='';
    if(gr.type==='weighted'){
      const gc=gradeColour(gr.currentGrade);
      if(gr.currentGrade!=null){
        const projMin=gr.projMin,projMax=gr.projMax;
        ring=gradeRingHTML(gr.currentGrade,gc,jp?'現在':'current',gradeLetter(gr.currentGrade),gr.ungradedW>0?{pct:projMax,col:gc}:null);
        gradePanel=`<div style="font-size:11px;font-weight:800;color:${gc};margin-bottom:3px">${gr.currentGrade.toFixed(1)}% ${gradeLetter(gr.currentGrade)} ${jp?'（採点済み平均）':'(graded avg)'}</div>`;
        if(gr.ungradedW>0){
          gradePanel+=`<div style="font-size:10px;color:var(--mu);margin-bottom:2px">${jp?`残り${gr.ungradedW.toFixed(0)}% 採点待ち`:`${gr.ungradedW.toFixed(0)}% ungraded`}</div>`;
          gradePanel+=`<div style="font-size:10px;color:var(--mu);">${jp?`予想範囲: ${projMin.toFixed(1)}%–${projMax.toFixed(1)}%`:`projected: ${projMin.toFixed(1)}%–${projMax.toFixed(1)}%`}</div>`;
        }
        gradePanel+=`<div class="grade-progress-wrap" style="margin-top:5px"><div class="grade-progress-bar" style="width:${Math.min(100,(gr.gradedW/Math.max(gr.totalW,1))*100)}%;background:${gc}"></div></div>`;
        if(!gr.weightOk){gradePanel+=`<div class="grade-warn">⚠ ${jp?`配点合計 ${gr.totalW.toFixed(0)}% (100%推奨)`:`weights total ${gr.totalW.toFixed(0)}% (should be 100%)`}</div>`;}
      } else {
        ring=`<div class="grade-ring-wrap"><svg width="80" height="80" viewBox="0 0 80 80" class="grade-ring-svg"><circle cx="40" cy="40" r="34" fill="none" stroke="var(--br)" stroke-width="7"/></svg><div class="grade-ring-val"><span class="grade-pct" style="color:var(--mu)">—%</span><span class="grade-lbl">${jp?'未採点':'awaiting'}</span></div></div>`;
        gradePanel=`<div style="font-size:11px;color:var(--mu)">${jp?`配点合計 ${gr.totalW.toFixed(0)}%`:`${gr.totalW.toFixed(0)}% weighted`}${!gr.weightOk?` ⚠ ${jp?'(100%推奨)':'(target 100%)'}`:''}</div>`;
      }
    } else {
      const gradedSimple=gr.graded,totalSimple=gr.allAss.length;
      const avgSimple=gradedSimple.length?gradedSimple.reduce((s,a)=>s+(a.grade||0),0)/gradedSimple.length:null;
      const gc=gradeColour(avgSimple);
      ring=avgSimple!=null?gradeRingHTML(avgSimple,gc,jp?'平均':'avg',gradeLetter(avgSimple)):
        `<div class="grade-ring-wrap"><svg width="80" height="80" viewBox="0 0 80 80" class="grade-ring-svg"><circle cx="40" cy="40" r="34" fill="none" stroke="var(--br)" stroke-width="7"/></svg><div class="grade-ring-val"><span class="grade-pct" style="color:var(--mu)">—</span><span class="grade-lbl">${jp?'未採点':'no grades'}</span></div></div>`;
      gradePanel=`<div style="font-size:11px;color:var(--mu)">${gradedSimple.length}/${totalSimple} ${jp?'採点済':'graded'}${avgSimple!=null?` · ${avgSimple.toFixed(1)}%`:''}</div><p class="grade-warn" style="font-size:10px">${jp?'配点なし — 各課題に % を設定するとより正確な成績計算ができます':'No weights set — add % weights for proper grade calculation'}</p>`;
    }
    h+=`<div class="unit-grade-card"><div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0;align-items:center;min-width:80px">${ring}<div style="max-width:80px">${gradePanel}</div></div><div class="ugc-info"><div class="ugc-name">${dot(u.id)} ${escH(u.n)}</div>`;
    if(up.length){h+=`<div class="ct" style="margin-top:10px;margin-bottom:6px">${t('ass_upcoming')}</div><div class="ugc-items">`;up.forEach(a=>{const d2=ddiff(a.date),ds2=d2===0?`<b style="color:#ef4444">${jp?'今日':'TODAY'}</b>`:d2===1?`<span style="color:#ef4444">${jp?'明日':'tmrw'}</span>`:d2<0?`<span style="color:var(--mu)">${jp?`${Math.abs(d2)}日前`:`${Math.abs(d2)}d ago`}</span>`:`${d2}${jp?'日':'d'}`;const gc=gradeColour(a.grade);h+=`<div class="ugc-row"><div style="flex:1;min-width:0"><span class="ugc-title">${escH(a.title)}</span><div style="font-size:10px;color:var(--mu)">${a.type}${a.weight?` · ${a.weight}%`:` · ${jp?'配点なし':'no weight'}`} · ${fmtDate(a.date)}</div></div><div class="ass-grade-row" style="gap:5px;flex-shrink:0"><input type="number" class="ass-grade-input" min="0" max="100" placeholder="%" value="${a.grade??''}" oninput="setAssGrade('${a.id}',this.value)">${a.grade!=null?`<span class="grade-badge" style="background:${gc}18;color:${gc};border-color:${gc}40;font-size:10px">${a.grade}%</span>`:''}</div><span style="font-size:12px;font-weight:800;flex-shrink:0;margin-left:4px">${ds2}</span><button class="btn bd" style="padding:2px 6px;font-size:11px;flex-shrink:0" onclick="delAss('${a.id}')">✕</button></div>`;});h+='</div>';}
    if(undated.length){h+=`<div class="ct" style="margin-top:10px;margin-bottom:6px">📋 ${jp?'日付未設定':'No date set'}</div><div class="ugc-items">`;undated.forEach(a=>{const gc=gradeColour(a.grade);h+=`<div class="ugc-row"><div style="flex:1;min-width:0"><span class="ugc-title">${escH(a.title)}</span><div style="font-size:10px;color:var(--mu)">${a.type}${a.weight?` · <b>${a.weight}%</b>`:` · ${jp?'配点なし':'no weight'}`} <span class="ass-no-date">— ${jp?'日付なし':'no date'}</span></div></div><div class="ass-grade-row" style="gap:5px;flex-shrink:0"><input type="number" class="ass-grade-input" min="0" max="100" placeholder="%" value="${a.grade??''}" oninput="setAssGrade('${a.id}',this.value)">${a.grade!=null?`<span class="grade-badge" style="background:${gc}18;color:${gc};border-color:${gc}40;font-size:10px">${a.grade}% ${gradeLetter(a.grade)}</span>`:''}</div><button class="btn bd" style="padding:2px 6px;font-size:11px;flex-shrink:0" onclick="delAss('${a.id}')">✕</button></div>`;});h+='</div>';}
    if(past.length){h+=`<div class="ct" style="margin-top:10px;margin-bottom:6px">${t('ass_past')}</div><div class="ugc-items">`;past.forEach(a=>{const gc=gradeColour(a.grade);h+=`<div class="ugc-row"><div style="flex:1;min-width:0"><span class="ugc-title">${escH(a.title)}</span><div style="font-size:10px;color:var(--mu)">${a.type}${a.weight?` · <b>${a.weight}%</b>`:` · ${jp?'配点なし':'no weight'}`} · ${fmtDate(a.date)}</div></div><div class="ass-grade-row" style="gap:5px;flex-shrink:0"><input type="number" class="ass-grade-input" min="0" max="100" placeholder="%" value="${a.grade??''}" oninput="setAssGrade('${a.id}',this.value)">${a.grade!=null?`<span class="grade-badge" style="background:${gc}18;color:${gc};border-color:${gc}40;font-size:10px">${a.grade}% ${gradeLetter(a.grade)}</span>`:''}</div><button class="btn bd" style="padding:2px 6px;font-size:11px;flex-shrink:0" onclick="delAss('${a.id}')">✕</button></div>`;});h+='</div>';}
    h+=`</div></div>`;
  });
  if(!h)h=`<div class="empty"><span class="ei">📝</span>${jp?'課題なし！':'No assessments yet!'}</div>`;
  el.innerHTML=h;
}
function setAssGrade(id,val){
  const a=S.assessments.find(x=>x.id===id);
  if(!a)return;
  const g=parseFloat(val);
  a.grade=(val===''||isNaN(g))?null:Math.min(100,Math.max(0,g));
  saveData();
  // Debounce re-render to avoid losing focus while typing
  clearTimeout(window._assRT);
  window._assRT=setTimeout(()=>{if(curV==='ass')rAss();},800);
}
function openAssModal(date){
  const jp=S.lang==='jp';const opts=S.units.map(u=>`<option value="${u.id}">${u.n}</option>`).join('');
  const types=jp?['課題','試験','小テスト','発表','実験レポート','プロジェクト','その他']:['Assignment','Exam','Quiz','Presentation','Lab report','Project','Other'];
  openModal(`<div class="mt">${jp?'課題を追加 📝':'Add assessment 📝'}</div>
  <div class="fg"><label>${jp?'タイトル':'Title'}</label><input type="text" id="m-at" placeholder="${jp?'レポート1、期末試験...':'Essay 1, Final exam...'}"></div>
  <div class="frow">
    <div class="fg"><label>${jp?'ユニット':'Unit'}</label><select id="m-au">${opts}</select></div>
    <div class="fg"><label>${jp?'種類':'Type'}</label><select id="m-atype">${types.map(t2=>`<option>${t2}</option>`).join('')}</select></div>
  </div>
  <div class="frow">
    <div class="fg"><label>${jp?'期限（任意）':'Due date (optional)'}</label><input type="text" id="m-ad" placeholder="Pick date" readonly></div>
    <div class="fg"><label>${jp?'割合 % (任意)':'Weight % (optional)'}</label><input type="number" id="m-aw" min="0" max="100" placeholder="${jp?'例: 40':'e.g. 40'}"></div>
  </div>
  <p style="font-size:11px;color:var(--fa);margin-bottom:10px;font-style:italic">${jp?'💡 日付なしでも追加できます。後で入力できます。':'💡 Date is optional — you can add it later.'}</p>
  <div style="display:flex;gap:8px"><button class="btn bp" onclick="saveAss()">${jp?'追加 ✦':'Add ✦'}</button><button class="btn bg_" onclick="closeModal()">${jp?'やめとく':'Cancel'}</button></div>`);
  setTimeout(()=>document.getElementById('m-at')?.focus(),80);
}
function saveAss(){
  const title=(document.getElementById('m-at').value||'').trim();
  const unitId=document.getElementById('m-au').value;
  const type=document.getElementById('m-atype').value;
  const date=document.getElementById('m-ad').value||null;
  const weight=parseInt(document.getElementById('m-aw').value)||null;
  if(!title){toast(S.lang==='jp'?'タイトルを入れてね':'needs a title');return;}
  S.assessments.push({id:gid(),unitId,title,type,date,weight,grade:null});
  saveData();closeModal();rAss();
  if(curV==='cal')rCal();if(curV==='today')rToday();
  toast(S.lang==='jp'?'追加した ✦':'added ✦','ok');
}
function delAss(id){S.assessments=S.assessments.filter(a=>a.id!==id);saveData();rAss();if(curV==='cal')rCal();if(curV==='today')rToday();}
function rStats(){
  const today=new Date(),jp=S.lang==='jp';
  let heatH='<div class="heat-g">';
  const start=new Date(today);start.setDate(start.getDate()-363);start.setHours(0,0,0,0);
  for(let i=0;i<364;i++){const d=new Date(start);d.setDate(start.getDate()+i);const date=ds(d);const hrs=S.blocks.filter(b=>b.date===date).reduce((a,b)=>a+calcBlkHrs(b),0);const op=Math.min(1,hrs/4);const col=hrs===0?'var(--br)':`color-mix(in srgb, var(--p) ${Math.round((.2+op*.8)*100)}%, transparent)`;heatH+=`<div class="hcell" style="background:${col}" title="${date}: ${hrs.toFixed(1)}h"></div>`;}
  heatH+=`</div><div style="display:flex;gap:8px;margin-top:6px;font-size:10px;color:var(--fa);align-items:center">${jp?'少':'less'} <div style="display:flex;gap:2px">${[.1,.35,.7,1].map(o=>`<div style="width:9px;height:9px;border-radius:2px;background:color-mix(in srgb, var(--p) ${Math.round(o*100)}%, transparent)"></div>`).join('')}</div> ${jp?'多':'more'}</div>`;
  document.getElementById('st-heat').innerHTML=heatH;
  let wkH='';S.units.forEach(u=>{const h=wkHrs(u.id),col=u.color||'var(--p)';wkH+=`<div style="margin-bottom:8px"><div style="display:flex;justify-content:space-between;font-size:12px;font-weight:700;margin-bottom:2px"><span>${dot(u.id)} ${u.n}</span><span style="color:${col}">${h.toFixed(1)}h</span></div><div class="pbar-w"><div class="pbar" style="width:${Math.min(100,h/(u.goal||5)*100)}%;background:${col}"></div></div></div>`;});
  document.getElementById('st-week').innerHTML=wkH||`<p style="color:var(--mu);font-size:12px">${jp?'今週はまだなし':'No data yet'}</p>`;
  let uc='';S.units.forEach(u=>{const col=u.color||'var(--p)',allH=S.blocks.filter(b=>b.unitId===u.id).reduce((a,b)=>a+calcBlkHrs(b),0);uc+=`<div class="stat"><div style="display:flex;align-items:center;justify-content:center;gap:5px;margin-bottom:6px"><span class="udot" style="background:${col};width:10px;height:10px"></span><span style="font-size:12px;font-weight:800;word-break:break-word">${u.n}</span></div><div class="sval">${allH.toFixed(1)}h</div><div class="slbl">${jp?'合計勉強時間':'total'}</div></div>`;});
  document.getElementById('st-units').innerHTML=uc;
  const days30=Array.from({length:30},(_,i)=>{const d=new Date();d.setDate(d.getDate()-29+i);return ds(d);});
  // Emoji timeline — 5 rows of 6 days, newest right
  let mh=`<div style="display:grid;grid-template-columns:repeat(6,1fr);gap:4px;margin-top:8px">`;
  days30.slice(-30).forEach(date=>{
    const e=S.diary[date],m=e?.mood||0;
    const dayNum=new Date(date+'T00:00').getDate();
    const isToday=date===tstr();
    const emoji=MOODS[m]||'';
    const col=MOODCOLS[m]||'var(--br)';
    const bgAlpha=m?'14':'08';
    mh+=`<div title="${fmtDate(date)}${m?': '+['','awful','rough','okay','good','great'][m]:': no entry'}"
      style="display:flex;flex-direction:column;align-items:center;gap:2px;padding:5px 3px;border-radius:10px;
             background:${m?col+'22':'rgba(0,0,0,.04)'};
             border:1.5px solid ${isToday?col:'transparent'};
             cursor:default;transition:transform .1s"
      onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform=''">
      <span style="font-family:var(--ej);font-size:${m?'18':'13'}px;line-height:1;opacity:${m?'1':'.25'}">${m?emoji:'·'}</span>
      <span style="font-size:9px;font-weight:${isToday?'900':'700'};color:${isToday?col:'var(--fa)'};">${dayNum}</span>
    </div>`;
  });
  mh+=`</div>`;
  mh+=`<div style="display:flex;gap:12px;margin-top:10px;flex-wrap:wrap;align-items:center">`;
  [[1,'😞','awful'],[2,'😕','rough'],[3,'😶','okay'],[4,'🙂','good'],[5,'🥰','great']].forEach(([v,em,lbl])=>{
    const count=days30.filter(d=>S.diary[d]?.mood===v).length;
    if(!count)return;
    mh+=`<span style="font-size:11px;color:var(--mu);display:flex;align-items:center;gap:4px">
      <span style="font-family:var(--ej)">${em}</span>
      <span style="font-weight:800;color:${MOODCOLS[v]}">${count}</span>
      <span style="opacity:.7">${lbl}</span>
    </span>`;
  });
  mh+=`</div>`;
  document.getElementById('st-mood').innerHTML=mh;
}

function rNotes(){
  const jp=S.lang==='jp';
  if(!S.units.length){document.getElementById('notes-body').innerHTML=`<div class="empty"><span class="ei">⚙️</span>${jp?'設定でユニットを追加してね':'add your units in Settings to get started'}</div>`;return;}
  let h='';
  S.units.forEach(u=>{const col=u.color||'var(--p)',notes=S.notes[u.id]||[];h+=`<div class="card" style="margin-bottom:14px"><div style="display:flex;align-items:center;gap:8px;margin-bottom:12px"><span class="udot" style="background:${col};width:12px;height:12px"></span><span style="font-size:15px;font-weight:800">${u.n}</span><span style="font-size:11px;color:var(--mu)">${notes.length} ${jp?'メモ':'notes'}</span><button class="btn bg_ bsm" onclick="addNote('${u.id}')" style="margin-left:auto">+ ${jp?'メモ':'note'}</button></div>${notes.map((n,i)=>`<div class="note-card">${escH(n.text)}<button class="note-del" onclick="delNote('${u.id}','${n.id}')">✕</button><div style="font-size:10px;color:var(--fa);margin-top:6px">${n.date}</div></div>`).join('')}${!notes.length?`<div class="empty" style="padding:8px 0;font-size:12px">${jp?'まだなにも ✦':'nothing here yet ✦'}</div>`:''}</div>`;});
  document.getElementById('notes-body').innerHTML=h;
}
function addNote(uid){const jp=S.lang==='jp';openModal(`<div class="mt">${jp?'メモを追加 📌':'add a note 📌'}</div><div class="fg"><textarea id="mn-t" rows="5" placeholder="${jp?'公式、キーワード、なんでも…':'formula, term, reminder, anything…'}"></textarea></div><div style="display:flex;gap:8px"><button class="btn bp" onclick="saveNote('${uid}')">${jp?'保存 ✦':'Save ✦'}</button><button class="btn bg_" onclick="closeModal()">${jp?'やめとく':'Cancel'}</button></div>`);setTimeout(()=>document.getElementById('mn-t')?.focus(),80);}
function saveNote(uid){const text=(document.getElementById('mn-t').value||'').trim();if(!text)return;if(!S.notes[uid])S.notes[uid]=[];S.notes[uid].unshift({id:gid(),text,date:fmtDate(tstr())});saveData();closeModal();rNotes();toast(S.lang==='jp'?'保存した ✦':'note saved ✦','ok');}
function delNote(uid,nid){S.notes[uid]=S.notes[uid].filter(n=>n.id!==nid);saveData();rNotes();}

function rArchive(){
  const jp=S.lang==='jp',el=document.getElementById('archive-body');
  if(!S.archive||!S.archive.length){
    el.innerHTML=`<div class="empty"><span class="ei">📦</span><div style="margin-top:8px;max-width:280px;margin-left:auto;margin-right:auto">${jp?'まだなにもない。':'nothing archived yet — start a new trimester when the semester ends'}<br><span style="font-size:11px;opacity:.7">${jp?'設定 → ✦ ターム → 🌱 新しいタームをはじめる':'Settings → ✦ Trimester → 🌱 Start new trimester'}</span></div></div>`;
    return;
  }
  let h='';
  [...S.archive].reverse().forEach((arc,i)=>{
    const ri=S.archive.length-1-i;
    const diaryKeys=Object.keys(arc.diary||{}).filter(k=>arc.diary[k]&&(arc.diary[k].free||arc.diary[k].studied||arc.diary[k].mood));
    const hrs=arc.blocks?arc.blocks.reduce((a,b)=>a+calcBlkHrs(b),0):0;
    const moodEntries=diaryKeys.filter(k=>arc.diary[k]?.mood);
    const avgMood=moodEntries.length?Math.round(moodEntries.reduce((s,k)=>s+(arc.diary[k].mood||0),0)/moodEntries.length):null;
    const gradedAss=(arc.assessments||[]).filter(a=>a.grade!=null);
    const avgGrade=gradedAss.length?gradedAss.reduce((s,a)=>s+a.grade,0)/gradedAss.length:null;
    h+=`<div class="arch-card" onclick="toggleArcPanel(${ri},this)" style="margin-bottom:4px">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap">
        <div style="flex:1;min-width:0">
          <div style="font-family:var(--fnh);font-size:18px;color:var(--tx);margin-bottom:4px">${escH(arc.tri)}</div>
          <div style="font-size:11px;color:var(--mu);display:flex;gap:8px;flex-wrap:wrap;align-items:center">
            <span>📅 ${escH(arc.archived)}</span>
            <span>⏱ ${hrs.toFixed(1)}h</span>
            <span>📖 ${diaryKeys.length} ${jp?'日記':'diary'}</span>
            <span>🧠 ${(arc.dumps||[]).length} ${jp?'ダンプ':'dumps'}</span>
            <span>✅ ${(arc.tasks||[]).length} ${jp?'タスク':'tasks'}</span>
            <span>📝 ${(arc.assessments||[]).length} ${jp?'課題':'assess'}</span>
            ${avgMood!=null?`<span>${MOODS[avgMood]} ${jp?'平均気分':'avg mood'}</span>`:''}
            ${avgGrade!=null?`<span>🎓 ${avgGrade.toFixed(1)}%</span>`:''}
          </div>
        </div>
        <div id="arc-chev-${ri}" style="font-size:18px;color:var(--fa);transition:transform .2s;flex-shrink:0">▸</div>
      </div>
    </div>
    <div class="arch-detail" id="arc-detail-${ri}">
      <div class="arch-tab-bar">
        <button class="arch-tab act" onclick="arcTab(${ri},'diary',this)">${jp?'📖 日記':'📖 Diary'} <span style="opacity:.6">(${diaryKeys.length})</span></button>
        <button class="arch-tab" onclick="arcTab(${ri},'study',this)">${jp?'📚 学習':'📚 Study'}</button>
        <button class="arch-tab" onclick="arcTab(${ri},'tasks',this)">${jp?'✅ タスク':'✅ Tasks'} <span style="opacity:.6">(${(arc.tasks||[]).length})</span></button>
        <button class="arch-tab" onclick="arcTab(${ri},'ass',this)">${jp?'📝 課題':'📝 Grades'} <span style="opacity:.6">(${(arc.assessments||[]).length})</span></button>
        <button class="arch-tab" onclick="arcTab(${ri},'dump',this)">${jp?'🧠 ダンプ':'🧠 Dumps'} <span style="opacity:.6">(${(arc.dumps||[]).length})</span></button>
      </div>
      <div class="arch-tab-content act" id="arc-tab-${ri}-diary">${buildArcDiary(arc,jp)}</div>
      <div class="arch-tab-content" id="arc-tab-${ri}-study">${buildArcStudy(arc,jp)}</div>
      <div class="arch-tab-content" id="arc-tab-${ri}-tasks">${buildArcTasks(arc,jp)}</div>
      <div class="arch-tab-content" id="arc-tab-${ri}-ass">${buildArcAss(arc,jp)}</div>
      <div class="arch-tab-content" id="arc-tab-${ri}-dump">${buildArcDump(arc,jp)}</div>
    </div>`;
  });
  el.innerHTML=h;
}
function toggleArcPanel(ri,card){
  const detail=document.getElementById('arc-detail-'+ri);
  const chev=document.getElementById('arc-chev-'+ri);
  if(!detail)return;
  const open=detail.classList.toggle('open');
  if(chev)chev.style.transform=open?'rotate(90deg)':'';
}
function arcTab(ri,tab,btn){
  const detail=document.getElementById('arc-detail-'+ri);
  if(!detail)return;
  detail.querySelectorAll('.arch-tab').forEach(t=>t.classList.remove('act'));
  detail.querySelectorAll('.arch-tab-content').forEach(t=>t.classList.remove('act'));
  btn.classList.add('act');
  const content=document.getElementById(`arc-tab-${ri}-${tab}`);
  if(content)content.classList.add('act');
}
function buildArcDiary(arc,jp){
  const entries=Object.entries(arc.diary||{}).filter(([,e])=>e&&(e.free||e.good||e.studied||e.mood||e.grat||e.tom||e.struggle)).sort((a,b)=>b[0].localeCompare(a[0]));
  if(!entries.length)return`<div class="empty" style="padding:16px;font-size:12px">${jp?'まだなし':'No diary entries'}</div>`;
  const moodVals=entries.filter(([,e])=>e.mood).map(([,e])=>e.mood);
  const avgM=moodVals.length?moodVals.reduce((a,b)=>a+b,0)/moodVals.length:null;
  let h=`<div style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap">
    <div class="stat" style="flex:1;min-width:80px"><div class="sval">${entries.length}</div><div class="slbl">${jp?'エントリー':'entries'}</div></div>
    ${avgM!=null?`<div class="stat" style="flex:1;min-width:80px"><div class="sval">${MOODS[Math.round(avgM)]}</div><div class="slbl">${jp?'平均気分':'avg mood'}</div></div>`:''}
  </div>`;
  const FIELD_LABELS={
    studied:{icon:'📚',en:'studied',jp:'勉強'},
    good:{icon:'✨',en:'went well',jp:'良かったこと'},
    struggle:{icon:'💭',en:'working through',jp:'悩み'},
    grat:{icon:'🌸',en:'grateful for',jp:'感謝'},
    tom:{icon:'🎯',en:"tomorrow's focus",jp:'明日の目標'},
    free:{icon:'📝',en:'wrote',jp:'自由記述'},
  };
  entries.slice(0,20).forEach(([date,e])=>{
    h+=`<div class="diary-entry-card" style="margin-bottom:10px">
      <div class="diary-entry-header">
        <div class="diary-entry-meta">
          <div class="diary-entry-date">${fmtDate(date)}</div>
          ${e.mood?`<div class="diary-entry-mood-badge"><span style="font-family:var(--ej);font-size:18px">${MOODS[e.mood]}</span></div>`:''}
          ${e.hope!=null?`<div class="diary-entry-mood-badge">🌟 ${e.hope}/10</div>`:''}
          ${e.keyword?`<div class="diary-entry-mood-badge">${escH(e.keyword)}</div>`:''}
        </div>
      </div>
      <div class="diary-entry-body">`;
    ['studied','good','struggle','grat','tom','free'].forEach(f=>{
      const txt=(e[f]||'').trim();
      if(!txt)return;
      const lbl=FIELD_LABELS[f];
      h+=`<div class="diary-section"><div class="diary-section-label"><span style="font-family:var(--ej)">${lbl.icon}</span> ${jp?lbl.jp:lbl.en}</div><div class="diary-section-text">${escH(txt.slice(0,300))}${txt.length>300?'…':''}</div></div>`;
    });
    h+=`</div></div>`;
  });
  if(entries.length>20)h+=`<p style="font-size:11px;color:var(--fa);text-align:center;padding:8px">${jp?`...他${entries.length-20}エントリー`:`...and ${entries.length-20} more`}</p>`;
  return h;
}
function buildArcStudy(arc,jp){
  const blocks=arc.blocks||[];
  if(!blocks.length)return`<div class="empty" style="padding:16px;font-size:12px">${jp?'ブロックなし':'No study blocks'}</div>`;
  const hrs=blocks.reduce((a,b)=>a+calcBlkHrs(b),0);
  const byUnit={};
  blocks.forEach(b=>{if(!byUnit[b.unitId])byUnit[b.unitId]={hrs:0};byUnit[b.unitId].hrs+=calcBlkHrs(b);});
  let h=`<div class="stat" style="margin-bottom:14px"><div class="sval">${hrs.toFixed(1)}h</div><div class="slbl">${jp?'総学習時間':'total study hours'}</div></div>`;
  Object.entries(byUnit).sort((a,b)=>b[1].hrs-a[1].hrs).forEach(([uid,d])=>{
    const u=S.units.find(x=>x.id===uid)||{n:uid,color:'var(--p)'};
    h+=`<div style="margin-bottom:8px"><div style="display:flex;justify-content:space-between;font-size:12px;font-weight:700;margin-bottom:2px"><span><span class="udot" style="background:${u.color||'var(--p)'}"></span> ${escH(u.n)}</span><span style="color:${u.color||'var(--p)'}">${d.hrs.toFixed(1)}h</span></div><div class="pbar-w"><div class="pbar" style="width:${Math.min(100,(d.hrs/hrs)*100)}%;background:${u.color||'var(--p)'}"></div></div></div>`;
  });
  return h;
}
function buildArcTasks(arc,jp){
  const tasks=arc.tasks||[];
  if(!tasks.length)return`<div class="empty" style="padding:16px;font-size:12px">${jp?'タスクなし ✦':'No tasks'}</div>`;
  const done=tasks.filter(t=>t.done).length;
  let h=`<div style="font-size:12px;color:var(--mu);margin-bottom:10px;font-weight:700">${done}/${tasks.length} ${jp?'完了':'completed'}</div>`;
  tasks.forEach(tk=>{h+=`<div class="rrow"><span style="font-size:12px;${tk.done?'text-decoration:line-through;color:var(--fa)':''}">${tk.done?'✓ ':'◦ '}${escH(tk.text)}</span></div>`;});
  return h;
}
function buildArcAss(arc,jp){
  const ass=arc.assessments||[];
  if(!ass.length)return`<div class="empty" style="padding:16px;font-size:12px">${jp?'課題なし':'No assessments'}</div>`;
  const graded=ass.filter(a=>a.grade!=null);
  let h='';
  if(graded.length){
    const avg=graded.reduce((s,a)=>s+a.grade,0)/graded.length;
    const gc=gradeColour(avg);
    h+=`<div style="display:flex;gap:10px;margin-bottom:14px;flex-wrap:wrap">
      <div class="stat" style="flex:1;min-width:80px"><div class="sval" style="color:${gc}">${avg.toFixed(1)}%</div><div class="slbl">${jp?'平均':'avg grade'}</div></div>
      <div class="stat" style="flex:1;min-width:80px"><div class="sval">${graded.length}/${ass.length}</div><div class="slbl">${jp?'採点済':'graded'}</div></div>
    </div>`;
  }
  const unitIds=[...new Set(ass.map(a=>a.unitId))];
  unitIds.forEach(uid=>{
    const ua=ass.filter(a=>a.unitId===uid);
    const u=S.units.find(x=>x.id===uid)||{n:uid,color:'var(--p)'};
    h+=`<div style="margin-bottom:12px"><div style="font-size:13px;font-weight:800;margin-bottom:6px;display:flex;align-items:center;gap:6px"><span class="udot" style="background:${u.color||'var(--p)'}"></span>${escH(u.n)}</div>`;
    ua.forEach(a=>{const gc=gradeColour(a.grade);h+=`<div class="rrow"><span style="flex:1;font-size:12px">${escH(a.title)}<span style="color:var(--mu);font-size:10px"> — ${a.type}${a.weight?` (${a.weight}%)`:''}${a.date?` · ${fmtDate(a.date)}`:''}</span></span>${a.grade!=null?`<span class="grade-badge" style="background:${gc}18;color:${gc};border-color:${gc}40;font-size:11px">${a.grade}% ${gradeLetter(a.grade)}</span>`:''}</div>`;});
    h+='</div>';
  });
  return h;
}
function buildArcDump(arc,jp){
  const dumps=arc.dumps||[];
  if(!dumps.length)return`<div class="empty" style="padding:16px;font-size:12px">${jp?'ダンプなし':'No brain dumps'}</div>`;
  let h=`<div style="font-size:11px;color:var(--mu);margin-bottom:10px">${dumps.length} ${jp?'件':'entries'}</div>`;
  dumps.slice(0,30).forEach(d=>{
    const tg=getDumpTag(d.tag);
    const lbl=tg?tagLabel(tg):'';
    h+=`<div class="dump-card" style="margin-bottom:8px"><div class="dump-card-accent" style="background:${tg?tg.col:'var(--pm)'}"></div><div class="dump-card-body"><div class="dump-card-text expanded">${escH(d.text)}</div></div><div class="dump-card-footer">${lbl?`<span class="dump-tag-badge" style="background:${tg.col}18;color:${tg.col};border-color:${tg.col}44">${tg.e||''} ${lbl}</span>`:''}${d.pinned?`<span class="dump-tag-badge" style="background:var(--yl);color:var(--yd)">📌</span>`:''}<span class="dump-date">${d.date||''}</span></div></div>`;
  });
  if(dumps.length>30)h+=`<p style="font-size:11px;color:var(--fa);text-align:center;padding:8px">${jp?`...他${dumps.length-30}件`:`...${dumps.length-30} more`}</p>`;
  return h;
}

function rSettings(){
  document.getElementById('s-appname').value=S.appName||'';
  document.getElementById('s-tagline').value=S.tagline||'';
  document.getElementById('s-logoi').value=S.logoIcon||'🌙';
  document.getElementById('s-quote').value=S.quote||'';
  document.getElementById('s-tri').value=S.tri||'';
  document.getElementById('s-vibes').value=S.vibes||(S.lang==='jp'?DEF_VIBES_JP:DEF_VIBES);
  const ei=document.getElementById('s-expinfo');if(ei&&S.lastExport)ei.textContent=(S.lang==='jp'?'最終エクスポート：':'Last exported: ')+fmtDate(S.lastExport);
  buildThemeSw();buildFontBtns();buildStkSettings();buildPetalSettings();buildUnitsSt();buildTrksSt();buildHabsSt();buildLangBtns();buildDumpTagsSt();updateStorageInfo();
  applyCustomisation();
  document.getElementById('petal-tog').checked=!!S.petals;
  const ssg=document.getElementById('s-sbgif-light');if(ssg)ssg.value=S.sbGif||'';
  const ssgd=document.getElementById('s-sbgif-dark');if(ssgd)ssgd.value=S.sbGifDark||'';
  const sbl=document.getElementById('s-bg-light');if(sbl)sbl.value=S.bgLight||'';
  const sbd=document.getElementById('s-bg-dark');if(sbd)sbd.value=S.bgDark||'';
  const sbop=document.getElementById('s-bg-opacity');if(sbop)sbop.value=S.bgOpacity||20;
  ['light','dark'].forEach(m=>{const u=m==='light'?S.bgLight:S.bgDark;const p=document.getElementById('bg-prev-'+m);if(p){if(u){p.src=u;p.classList.add('show');}else{p.src='';p.classList.remove('show');}}});
  const ps=document.getElementById('petal-speed');if(ps)ps.value=S.petalSpeed||10;
  // Update placeholders for current language
  const jp2=S.lang==='jp';
  const appnameEl=document.getElementById('s-appname');
  if(appnameEl)appnameEl.placeholder=jp2?'毎日こつこつ！':'Getting My Shit Together';
  const taglineEl=document.getElementById('s-tagline');
  if(taglineEl)taglineEl.placeholder=jp2?'設定で変更できます ✦':'set me in settings ✦';
}

function buildThemeSw(){const w=document.getElementById('theme-sw');if(!w)return;w.innerHTML=THEMES.map(th=>`<div class="tsw${S.theme===th.n?' act':''}" style="background:linear-gradient(135deg,${th.p},${th.a});box-shadow:0 3px 10px ${th.p}60" data-n="${th.n}" title="${th.n}" onclick="applyTheme('${th.n}')"></div>`).join('');}

function buildFontBtns(){
  const w=document.getElementById('font-btns');if(!w)return;
  const isJP=S.lang==='jp';
  const hint=document.getElementById('hint-font-lang');
  if(hint)hint.textContent=isJP
    ?'日本語対応フォントを表示中。英語に切り替えると英語フォントが表示されます。'
    :'English fonts — switch to 日本語 to see Japanese fonts.';
  const visible=FONTS.filter(f=>isJP?f.jp:!f.jp);
  w.innerHTML=`<div style="display:flex;gap:6px;flex-wrap:wrap">${
    visible.map(f=>`<button class="btn bsm${S.font===f.k?' bp':''}" style="font-family:${f.fn}" onclick="setFont('${f.k}')" title="${f.l}">${f.l}</button>`).join('')
  }</div>`;
}
function buildStkSettings(){
  const lib=document.getElementById('stk-lib');
  if(lib){
    lib.innerHTML=ALL_STK.map((s,i)=>`<button data-si="${i}" style="font-size:20px;cursor:pointer;padding:3px 5px;border-radius:7px;border:none;background:none;transition:transform .1s;font-family:var(--ej)" onmouseover="this.style.transform='scale(1.3)'" onmouseout="this.style.transform=''">${s}</button>`).join('');
    lib.querySelectorAll('button').forEach((btn,i)=>btn.addEventListener('click',()=>addSticker(ALL_STK[i])));
  }
  const cur=document.getElementById('stk-cur');
  if(cur){cur.innerHTML=(S.stickers||[]).length
    ?(S.stickers||[]).map((s,i)=>`<span title="${S.lang==='jp'?'クリックで削除':'click to remove'}" onclick="removeSticker(${i})" style="font-size:22px;cursor:pointer;font-family:var(--ej);transition:transform .1s" onmouseover="this.style.transform='scale(1.3)'" onmouseout="this.style.transform=''">${s}</span>`).join('')
    :`<span style="font-size:12px;color:var(--fa)">${S.lang==='jp'?'上からクリックして追加':'nothing yet — click above to add'}</span>`;}
  buildImgStickerSettings();
}
function addSticker(s){if(!S.stickers)S.stickers=[];S.stickers.push(s);saveData();buildSidebarStickers();buildStkSettings();}
function addStickerCustom(){const v=(document.getElementById('stk-custom').value||'').trim();if(!v)return;addSticker(v);document.getElementById('stk-custom').value='';toast(S.lang==='jp'?'追加した ✦':'added ✦','ok');}
function removeSticker(i){S.stickers.splice(i,1);saveData();buildSidebarStickers();buildStkSettings();}
function clearStickers(){S.stickers=[];saveData();buildSidebarStickers();buildStkSettings();}

function addImageStickerUrl(){
  const url=(document.getElementById('stk-img-url')?.value||'').trim();
  if(!url){toast(S.lang==='jp'?'URLを入れてね':'paste a URL first');return;}
  if(!S.customImgStickers)S.customImgStickers=[];
  S.customImgStickers.push({id:gid(),url,type:'url'});
  saveData();buildSidebarStickers();buildStkSettings();buildImgStickerSettings();
  document.getElementById('stk-img-url').value='';
  toast(S.lang==='jp'?'追加した ✦':'added ✦','ok');
}

function uploadImageStickers(inp){
  const files=Array.from(inp.files||[]);
  if(!files.length)return;
  if(!S.customImgStickers)S.customImgStickers=[];
  let done=0;
  files.forEach(file=>{
    const reader=new FileReader();
    reader.onload=ev=>{
      S.customImgStickers.push({id:gid(),url:ev.target.result,type:'upload',name:file.name});
      done++;
      if(done===files.length){
        saveData();buildSidebarStickers();buildStkSettings();buildImgStickerSettings();
        toast(S.lang==='jp'?`${done}枚追加した ✦`:`${done} sticker${done>1?'s':''} added ✦`,'ok');
      }
    };
    reader.readAsDataURL(file);
  });
  inp.value='';
}

function removeImgSticker(id){
  if(!S.customImgStickers)return;
  S.customImgStickers=S.customImgStickers.filter(s=>s.id!==id);
  saveData();buildSidebarStickers();buildStkSettings();buildImgStickerSettings();
}

function buildImgStickerSettings(){
  const el=document.getElementById('stk-img-cur');if(!el)return;
  const jp=S.lang==='jp';
  const imgs=S.customImgStickers||[];
  if(!imgs.length){
    el.innerHTML=`<span style="font-size:12px;color:var(--fa)">${jp?'まだなし — 画像を追加してみて':'nothing yet — add some images ♡'}</span>`;
    return;
  }
  el.innerHTML=imgs.map(s=>`<div style="position:relative;display:inline-block" title="${jp?'クリックで削除':'click to remove'}" onclick="removeImgSticker('${s.id}')">
    <img src="${s.url}" style="width:48px;height:48px;object-fit:cover;border-radius:10px;border:2px solid var(--brm);cursor:pointer;transition:all .14s;display:block" onerror="this.style.display='none'" onmouseover="this.style.transform='scale(1.1)';this.style.borderColor='var(--p)'" onmouseout="this.style.transform='';this.style.borderColor='var(--brm)'">
    <div style="position:absolute;top:-5px;right:-5px;width:16px;height:16px;background:#ef4444;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:9px;font-weight:900;pointer-events:none">✕</div>
  </div>`).join('');
}

function buildPetalSettings(){
  const all=document.getElementById('petal-all');
  if(!all)return;
  all.innerHTML=ALL_PETALS.map((p,i)=>`<button data-pi="${i}" style="font-size:20px;cursor:pointer;padding:4px 8px;border-radius:8px;border:2px solid ${(S.petalTypes||[]).includes(p)?'var(--pm)':'transparent'};background:${(S.petalTypes||[]).includes(p)?'var(--pl)':'none'};transition:all .12s;font-family:var(--ej)" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform=''">${p}</button>`).join('');
  all.querySelectorAll('button').forEach((btn,i)=>btn.addEventListener('click',()=>togglePetalType(ALL_PETALS[i])));
}
function togglePetalType(p){if(!S.petalTypes)S.petalTypes=[];const i=S.petalTypes.indexOf(p);if(i>=0)S.petalTypes.splice(i,1);else S.petalTypes.push(p);saveData();buildPetalSettings();}
function restartPetals(){togglePetals(false);setTimeout(()=>togglePetals(S.petals),100);}

function buildUnitsSt(){
  const jp=S.lang==='jp';let h='';
  S.units.forEach(u=>{
    h+=`<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px" data-uid="${u.id}">
      <input type="color" value="${u.color||'var(--p)'}" style="width:38px;height:36px;flex-shrink:0" oninput="setUnitColor('${u.id}',this.value)">
      <input type="text" value="${escH(u.n)}" style="flex:2" onchange="setUnitName('${u.id}',this.value)" onblur="setUnitName('${u.id}',this.value)">
      <input type="number" value="${u.goal||5}" min="1" max="100" style="width:52px" onchange="setUnitGoal('${u.id}',this.value)" title="${jp?'週間目標時間':'Weekly goal hrs'}">
      <span style="font-size:10px;color:var(--fa);flex-shrink:0">${jp?'時間/週':'h/wk'}</span>
      <button type="button" class="btn bd" onclick="delUnit('${u.id}')">✕</button>
    </div>`;
  });
  document.getElementById('s-units').innerHTML=h||`<p style="color:var(--fa);font-size:12px">${jp?'ユニットなし':'No units yet'}</p>`;
}
function setUnitColor(id,val){const u=S.units.find(x=>x.id===id);if(u){u.color=val;saveData();}}
function setUnitName(id,val){const u=S.units.find(x=>x.id===id);if(u&&u.n!==val){u.n=val;saveData();}}
function setUnitGoal(id,val){const u=S.units.find(x=>x.id===id);if(u){u.goal=parseInt(val)||5;saveData();}}
function buildTrksSt(){
  const jp=S.lang==='jp';let h='';
  S.trackers.forEach(tr=>{
    h+=`<div style="display:grid;grid-template-columns:44px auto 1fr auto 64px auto;align-items:center;gap:6px;margin-bottom:10px;min-width:0">
      <input type="text" id="trk-e-${tr.id}" value="${escH(tr.e)}" style="width:44px;text-align:center;font-family:var(--ej);font-size:16px;padding:6px 4px" onchange="setTrkEmoji('${tr.id}',this.value)" onblur="setTrkEmoji('${tr.id}',this.value)">
      <button type="button" class="btn bsm" style="padding:4px 8px;white-space:nowrap" onclick="openEmojiPicker('trk-e-${tr.id}')">${jp?'選':'pick'}</button>
      <input type="text" value="${escH(tr.n)}" style="min-width:0;width:100%" onchange="setTrkName('${tr.id}',this.value)" onblur="setTrkName('${tr.id}',this.value)">
      <label style="font-size:11px;color:var(--mu);white-space:nowrap;margin:0">${jp?'最大':'max'}</label>
      <input type="number" value="${tr.max}" min="2" max="20" style="width:64px;text-align:center" onchange="setTrkMax('${tr.id}',this.value)">
      <button type="button" class="btn bd" onclick="delTrk('${tr.id}')">✕</button>
    </div>`;
  });
  document.getElementById('s-trks').innerHTML=h||`<p style="font-size:12px;color:var(--fa)">${jp?'トラッカーなし':'No trackers yet'}</p>`;
}
function setTrkEmoji(id,val){const t=S.trackers.find(x=>x.id===id);if(t){t.e=val||t.e;saveData();}}
function setTrkName(id,val){const t=S.trackers.find(x=>x.id===id);if(t&&t.n!==val){t.n=val;saveData();}}
function setTrkMax(id,val){const t=S.trackers.find(x=>x.id===id);if(t){t.max=parseInt(val)||10;saveData();}}
function buildDumpTagsSt(){
  const el=document.getElementById('s-dump-tags');if(!el)return;
  const jp=S.lang==='jp';
  const tags=getDumpTags();
  if(!tags.length){el.innerHTML=`<p style="font-size:12px;color:var(--fa)">${jp?'カテゴリなし':'No categories yet'}</p>`;return;}
  el.innerHTML=tags.map((tg,i)=>`
    <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px">
      <span style="font-size:18px;width:28px;text-align:center;font-family:var(--ej)">${tg.e||'🏷'}</span>
      <span style="flex:1;font-size:13px;font-weight:700">${jp?(tg.jp||tg.en||tg.k):(tg.en||tg.k)}</span>
      <span class="dump-tag-badge" style="background:${tg.col}18;color:${tg.col};border-color:${tg.col}44;font-size:10px">${tg.col}</span>
      <div style="width:20px;height:20px;border-radius:50%;background:${tg.col};flex-shrink:0;border:2px solid ${tg.col}66"></div>
      <button class="btn bd bsm" onclick="delDumpTag('${tg.k}')">✕</button>
    </div>`).join('');
}
function addDumpTagModal(){
  const jp=S.lang==='jp';
  const COLS=['#3B82F6','#EF4444','#10B981','#EC4899','#8B5CF6','#F59E0B','#06B6D4','#F472B6','#84CC16','#A855F7'];
  const mainLbl=jp?'名前（日本語）':'Name';
  const mainPh=jp?'例：振り返り、きもち…':'e.g. reflection, mood...';
  const altLbl=jp?'英語名（任意）':'Japanese name (optional)';
  const altPh=jp?'e.g. reflection':'例：振り返り';
  openModal(`<div class="mt">${jp?'カテゴリを追加 🏷':'Add a tag 🏷'}</div>
    <div class="frow">
      <div class="fg" style="max-width:60px"><label>${jp?'絵文字':'Emoji'}</label>
        <input type="text" id="m-dtag-e" value="🏷" style="text-align:center;font-family:var(--ej);font-size:18px">
      </div>
      <div class="fg"><label>${mainLbl}</label><input type="text" id="m-dtag-main" placeholder="${mainPh}" onkeydown="if(event.key==='Enter')saveDumpTag()"></div>
    </div>
    <div class="fg" style="margin-top:-4px">
      <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-weight:700;font-size:12px">
        <input type="checkbox" id="m-dtag-alt-tog" onchange="document.getElementById('m-dtag-alt-row').style.display=this.checked?'block':'none'" style="width:15px;height:15px">
        ${jp?'英語名も追加する':'Add Japanese name too'}
      </label>
      <div id="m-dtag-alt-row" style="display:none;margin-top:8px">
        <input type="text" id="m-dtag-alt" placeholder="${altPh}" style="${jp?'':'font-family:var(--fn)'}">
      </div>
    </div>
    <div class="fg"><label>${jp?'カラー':'Colour'}</label>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">${COLS.map(c=>`<div onclick="document.getElementById('m-dtag-col').value='${c}';document.querySelectorAll('.col-swatch').forEach(x=>x.style.outline='none');this.style.outline='2px solid var(--tx)'" class="col-swatch" style="width:24px;height:24px;border-radius:50%;background:${c};cursor:pointer;transition:outline .1s"></div>`).join('')}</div>
      <input type="color" id="m-dtag-col" value="${COLS[0]}">
    </div>
    <div style="display:flex;gap:8px"><button class="btn bp" onclick="saveDumpTag()">${jp?'追加 ✦':'Add ✦'}</button><button class="btn bg_" onclick="closeModal()">${jp?'やめとく':'Cancel'}</button></div>`);
  setTimeout(()=>document.getElementById('m-dtag-main')?.focus(),80);
}
function saveDumpTag(){
  const jp=S.lang==='jp';
  const emoji=(document.getElementById('m-dtag-e')?.value||'🏷').trim();
  const main=(document.getElementById('m-dtag-main')?.value||'').trim();
  const alt=(document.getElementById('m-dtag-alt')?.value||'').trim();
  const col=document.getElementById('m-dtag-col')?.value||'#8B5CF6';
  if(!main){toast(jp?'名前を入れてね':'give it a name first');return;}
  const key=main.toLowerCase().replace(/[^a-z0-9ぁ-んァ-ン一-龥]/g,'_').slice(0,24)||gid().slice(0,8);
  const enVal=jp?(alt||main):main;
  const jpVal=jp?main:(alt||main);
  if(!S.dumpTags)S.dumpTags=[...DEFAULT_DUMP_TAGS];
  if(S.dumpTags.find(t=>t.k===key)){toast(jp?'同じ名前がすでにあるよ':'already exists');return;}
  S.dumpTags.push({k:key,e:emoji,en:enVal,jp:jpVal,col});
  saveData();closeModal();buildDumpTagsSt();
  toast(jp?'追加した ✦':'added ✦','ok');
}
function delDumpTag(k){
  confirmModal(S.lang==='jp'?`「${k}」カテゴリを削除しますか？`:`Delete tag "${k}"?`,()=>{
    if(!S.dumpTags)S.dumpTags=[...DEFAULT_DUMP_TAGS];
    S.dumpTags=S.dumpTags.filter(t=>t.k!==k);
    saveData();buildDumpTagsSt();
    if(_bdTag===k)_bdTag=null;
    if(curV==='braindump')rBrainDump();
  });
}
function resetDumpTags(){
  confirmModal(S.lang==='jp'?'デフォルトに戻す？':'reset to default categories?',()=>{
    S.dumpTags=null;saveData();buildDumpTagsSt();
    if(curV==='braindump')rBrainDump();
  });
}
function buildHabsSt(){
  const jp=S.lang==='jp';let h='';
  S.habits.forEach(hab=>{
    h+=`<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px">
      <input type="text" id="hab-e-${hab.id}" value="${escH(hab.e)}" style="width:44px;text-align:center;font-family:var(--ej);font-size:16px" onchange="setHabEmoji('${hab.id}',this.value)" onblur="setHabEmoji('${hab.id}',this.value)">
      <button type="button" class="btn bsm" style="padding:3px 7px" onclick="openEmojiPicker('hab-e-${hab.id}')">${jp?'選':'pick'}</button>
      <input type="text" value="${escH(hab.n)}" style="flex:1" onchange="setHabName('${hab.id}',this.value)" onblur="setHabName('${hab.id}',this.value)">
      <input type="color" value="${hab.color||'#9333EA'}" style="height:34px;width:38px" oninput="setHabColor('${hab.id}',this.value)">
      <button type="button" class="btn bd" onclick="delHabit('${hab.id}')">✕</button>
    </div>`;
  });
  document.getElementById('s-habits').innerHTML=h||`<p style="font-size:12px;color:var(--fa)">${jp?'まだなにも — 設定から追加してみて':'No habits yet — add some!'}</p>`;
}
function buildLangBtns(){
  document.getElementById('lang-en')?.classList.toggle('bp',S.lang==='en');
  document.getElementById('lang-jp')?.classList.toggle('bp',S.lang==='jp');
  const n=document.getElementById('lang-note');if(n)n.textContent=S.lang==='jp'?'日本語モード：UIが日本語になって、日本語フォントが優先される。':'Japanese mode: UI in Japanese, Japanese fonts prioritised.';
}
async function updateStorageInfo(){
  const jp=S.lang==='jp';
  // Update FSA status banner
  const icon=document.getElementById('fsa-status-icon');
  const label=document.getElementById('fsa-status-label');
  const path=document.getElementById('fsa-status-path');
  const reconnectBtn=document.getElementById('fsa-reconnect-btn');
  const banner=document.getElementById('fsa-status-banner');
  if(icon&&label&&path&&banner){
    if(_fsaReady&&_fsaHandle){
      icon.textContent='✅';
      label.textContent=jp?'データファイルに繋がってる':'Connected to data file';
      try{path.textContent=_fsaHandle.name||'';}catch(e){path.textContent='';}
      banner.style.borderColor='rgba(10,191,160,.35)';
      banner.style.background='rgba(10,191,160,.08)';
      if(reconnectBtn)reconnectBtn.style.display='none';
    } else if(_fsaHandle&&!_fsaReady){
      icon.textContent='⚠️';
      label.textContent=jp?'ファイルへの再接続が必要':'File needs reconnection';
      try{path.textContent=_fsaHandle.name||'';}catch(e){path.textContent='';}
      banner.style.borderColor='rgba(255,157,26,.35)';
      banner.style.background='rgba(255,157,26,.08)';
      if(reconnectBtn)reconnectBtn.style.display='';
    } else {
      icon.textContent='💾';
      label.textContent=jp?'ブラウザ保存（一時的）':'Browser storage (temporary)';
      path.textContent=jp?'ファイルを選ぶと持ち運べるよ':'Select a file for portable storage';
      banner.style.borderColor='var(--br)';
      banner.style.background='var(--faa)';
      if(reconnectBtn)reconnectBtn.style.display='none';
    }
  }
  // Last export info
  const ei=document.getElementById('s-expinfo');
  if(ei&&S.lastExport)ei.textContent=(jp?'最終エクスポート：':'Last exported: ')+fmtDate(S.lastExport);
}
async function switchDataFile(){
  // Allow switching to a different file
  const jp=S.lang==='jp';
  const confirmed=await new Promise(res=>{
    confirmModal(jp?'ファイルを切り替える？いまのデータは保存されるよ。':'Switch to a different file? Current data will be saved first.',()=>res(true));
    // Also handle cancel — set a timeout
    setTimeout(()=>res(false),30000);
  });
  if(!confirmed)return;
  await forceSave();
  _fsaHandle=null;_fsaReady=false;
  try{await openIDB();await idbSet('_fsa_handle',null);}catch(e){}
  showSetup('new');
}

function saveIdentity(){
  S.appName=(document.getElementById('s-appname').value||'').trim();
  S.tagline=(document.getElementById('s-tagline').value||'').trim();
  S.logoIcon=(document.getElementById('s-logoi').value||'🌙').trim()||'🌙';
  S.quote=(document.getElementById('s-quote').value||'').trim();
  saveData();applyIdentity();toast(S.lang==='jp'?'保存した ✦':'saved ✦','ok');
}
function applyIdentity(){
  const name=document.getElementById('sb-name');
  if(name){
    const n=S.appName||'Getting\nMy Shit\nTogether';
    name.innerHTML=n.replace(/\n/g,'<br>');
  }
  const tag=document.getElementById('sb-tag');
  if(tag)tag.textContent=S.tagline||(S.lang==='jp'?'あなたのプランナー ✦':'your space ✦');
  const icon=document.getElementById('lo-icon');if(icon)icon.textContent=S.logoIcon||'✦';
  document.getElementById('pg-title').textContent=(S.appName||'GMST')+' ✦';
  // Update tri-pill
  const tp=document.getElementById('tri-pill');
  if(tp)tp.textContent=S.tri||(S.lang==='jp'?'タームを追加':'add trimester');
}
function saveVibes(){S.vibes=(document.getElementById('s-vibes').value||DEF_VIBES).trim();saveData();toast(S.lang==='jp'?'保存した ✦':'saved ✦','ok');}
function saveTri(){
  S.tri=(document.getElementById('s-tri').value||'').trim();
  saveData();
  const tp=document.getElementById('tri-pill');
  if(tp)tp.textContent=S.tri||(S.lang==='jp'?'タームを追加':'add trimester');
  toast(S.lang==='jp'?'保存した ✦':'saved ✦','ok');
}
function newTri(){
  const jp=S.lang==='jp';
  const suggestName=()=>{
    const n=parseInt((S.tri||'').match(/\d+/)?.[0]||'1');
    return jp?`タームナンバー${n+1}`:`Trimester ${n+1}`;
  };
  openModal(`<div class="mt">${jp?'🌱 新しいタームを始める':'🌱 Start new trimester'}</div>
    <p style="font-size:13px;color:var(--mu);margin-bottom:16px;line-height:1.7">${jp?'ブロック・タスク・課題・日記・メモ・ダンプが全部アーカイブされるよ。設定とカスタマイズはそのまま残る。':'All current data (blocks, tasks, assessments, diary, notes, dumps) will be archived. Your settings and customisation stay exactly as they are.'}</p>
    <div class="fg">
      <label>${jp?'新しいターム名':'New trimester name'}</label>
      <input type="text" id="m-triname" value="${escH(suggestName())}" placeholder="${jp?'例: Trimester 2':'e.g. Trimester 2'}" onkeydown="if(event.key==='Enter')doNewTri()">
    </div>
    <div style="display:flex;gap:8px;margin-top:6px">
      <button class="btn bp" onclick="doNewTri()">${jp?'🌱 アーカイブして新しく始める':'🌱 Archive & fresh start'}</button>
      <button class="btn bg_" onclick="closeModal()">${jp?'やめとく':'Cancel'}</button>
    </div>`);
  setTimeout(()=>{const el=document.getElementById('m-triname');if(el){el.focus();el.select();}},80);
}
function doNewTri(){
  const jp=S.lang==='jp';
  const name=(document.getElementById('m-triname')?.value||'').trim()||suggestName?.();
  if(!name){toast(jp?'名前を入れてね':'give it a name first');return;}
  closeModal();
  const doArchive=()=>{
    S.archive.push({tri:S.tri,archived:fmtDate(tstr()),blocks:[...S.blocks],tasks:[...S.tasks],assessments:[...S.assessments],diary:JSON.parse(JSON.stringify(S.diary)),habitLog:JSON.parse(JSON.stringify(S.habitLog)),notes:JSON.parse(JSON.stringify(S.notes)),dumps:[...S.dumps],habits:[...S.habits]});
    S.blocks=[];S.tasks=[];S.assessments=[];S.diary={};S.habitLog={};S.notes={};S.dumps=[];
    S.tri=name;
    saveData();rSettings();document.getElementById('tri-pill').textContent=S.tri;
    toast(jp?'新しいターム、はじまり 🌱':'new trimester, fresh start 🌱','ok');
    reward('🌱',jp?'あたらしいはじまり ✦':'fresh start ✦');
  };
  confirmModal(jp?`「${name}」で新しくはじめる？`:`Archive everything and start "${name}"?`,doArchive);
}
function applyTheme(name){
  const th=THEMES.find(x=>x.n===name)||THEMES[0];
  const r=document.documentElement.style;
  r.setProperty('--p',th.p);r.setProperty('--pd',th.pd);r.setProperty('--pm',th.pm);
  r.setProperty('--a',th.a);r.setProperty('--al',th.al);r.setProperty('--g',th.g);r.setProperty('--pl',th.pl);
  S.theme=name;
  // Store into ctheme so applyCustomisation preserves them
  const ct=ctheme();ct._cp=th.p;ct._ca=th.a;
  // Also store non-p/a vars so restoreTheme can fully restore
  ct._pd=th.pd;ct._pm=th.pm;ct._al=th.al;ct._g=th.g;ct._pl=th.pl;
  saveData();
  document.querySelectorAll('.tsw').forEach(s=>s.classList.toggle('act',s.dataset.n===name));
  const t2p=document.getElementById('cc-p-t');if(t2p)t2p.value=th.p;
  const t2a=document.getElementById('cc-a-t');if(t2a)t2a.value=th.a;
  if(typeof _syncPickr!=='undefined'){_syncPickr('--p',th.p);_syncPickr('--a',th.a);}
}
/* applyColour handled below */
/* syncColour handled below */
function restoreTheme(){
  if(S.theme&&S.theme!=='custom'){
    const th=THEMES.find(x=>x.n===S.theme);
    if(th){
      const r=document.documentElement.style;
      r.setProperty('--p',th.p);r.setProperty('--pd',th.pd);r.setProperty('--pm',th.pm);
      r.setProperty('--a',th.a);r.setProperty('--al',th.al);r.setProperty('--g',th.g);r.setProperty('--pl',th.pl);
      const tp=document.getElementById('cc-p-t');if(tp)tp.value=th.p;
      if(typeof _syncPickr!=='undefined')_syncPickr('--p',th.p);
      const ca=document.getElementById('cc-a');if(ca){ca.value=th.a;const t=document.getElementById('cc-a-t');if(t)t.value=th.a;}
      return;
    }
  }
  const ct=ctheme();
  const r=document.documentElement.style;
  if(ct._cp){r.setProperty('--p',ct._cp);const tx=document.getElementById('cc-p-t');if(tx)tx.value=ct._cp;if(typeof _syncPickr!=='undefined')_syncPickr('--p',ct._cp);}
  if(ct._ca){r.setProperty('--a',ct._ca);const ca=document.getElementById('cc-a');if(ca){ca.value=ct._ca;const tx=document.getElementById('cc-a-t');if(tx)tx.value=ct._ca;}}
  if(ct._pd)r.setProperty('--pd',ct._pd);
  if(ct._pm)r.setProperty('--pm',ct._pm);
  if(ct._al)r.setProperty('--al',ct._al);
  if(ct._g)r.setProperty('--g',ct._g);
  if(ct._pl)r.setProperty('--pl',ct._pl);
}

function setFont(f){S.font=f;if(S.lang==="jp")S.fontJp=f;else S.fontEn=f;saveData();applyFont();buildFontBtns();}
function applyFont(){
  const fm=FONTS.find(x=>x.k===S.font)||FONTS[0];
  const r=document.documentElement.style;
  r.setProperty('--fn',fm.fn);
  r.setProperty('--fnh',fm.fnh);
}

function addUnit(){S.units.push({id:gid(),n:S.lang==='jp'?'新しいユニット':'new unit',color:UNIT_COLS[S.units.length%UNIT_COLS.length],goal:5});saveData();buildUnitsSt();refreshUnitSelects();}
function delUnit(id){if(S.units.length<=1){toast(S.lang==='jp'?'ユニットは最低1つ必要だよ':'you need at least one unit');return;}confirmModal(S.lang==='jp'?'このユニットを削除する？':'delete this unit?',()=>{S.units=S.units.filter(u=>u.id!==id);saveData();buildUnitsSt();refreshUnitSelects();});}
function addTrk(){S.trackers.push({id:gid(),n:S.lang==='jp'?'新しいトラッカー':'new tracker',e:'📊',max:10});saveData();buildTrksSt();}
function delTrk(id){S.trackers=S.trackers.filter(t=>t.id!==id);saveData();buildTrksSt();}
function openHabitModal(){
  const jp=S.lang==='jp';
  openModal(`<div class="mt">${jp?'習慣を追加 🌱':'Add habit 🌱'}</div><div class="fg"><label>${jp?'名前':'Name'}</label><input type="text" id="m-hn" placeholder="${jp?'例：20分歩く、水を飲む…':'e.g. Walk 20 mins'}" onkeydown="if(event.key==='Enter')saveHabit()"></div><div class="frow"><div class="fg"><label>${jp?'絵文字':'Emoji'}</label><div style="display:flex;gap:6px;align-items:center"><input type="text" id="m-he" value="🌱" style="width:52px;text-align:center;font-family:var(--ej);font-size:18px"><button class="btn bsm" onclick="openEmojiPicker('m-he')">${jp?'選ぶ':'pick'}</button></div></div><div class="fg"><label>${jp?'カラー':'Colour'}</label><input type="color" id="m-hc" value="${UNIT_COLS[S.habits.length%UNIT_COLS.length]}" style="height:38px;width:100%"></div></div><div style="display:flex;gap:8px"><button class="btn bp" onclick="saveHabit()">${jp?'追加 ✦':'Add ✦'}</button><button class="btn bg_" onclick="closeModal()">${jp?'やめとく':'Cancel'}</button></div>`);
  setTimeout(()=>document.getElementById('m-hn')?.focus(),80);
}
function saveHabit(){const n=(document.getElementById('m-hn').value||'').trim(),e2=(document.getElementById('m-he').value||'🌱').trim()||'🌱',color=document.getElementById('m-hc').value;if(!n){toast(S.lang==='jp'?'名前を入れてね':'give it a name first');return;}S.habits.push({id:gid(),n,e:e2,color});saveData();closeModal();if(curV==='habits')rHabits();if(curV==='settings')buildHabsSt();toast(S.lang==='jp'?'習慣を追加した ✦':'habit added ✦','ok');}
function setHabEmoji(id,val){const h=S.habits.find(x=>x.id===id);if(h){h.e=val||h.e;saveData();}}
function setHabName(id,val){const h=S.habits.find(x=>x.id===id);if(h&&h.n!==val){h.n=val;saveData();}}
function setHabColor(id,val){const h=S.habits.find(x=>x.id===id);if(h){h.color=val;saveData();}}
function delHabit(id){confirmModal(S.lang==='jp'?'この習慣と全部の記録を削除する？':'delete this habit and all its records?',()=>{S.habits=S.habits.filter(h=>h.id!==id);saveData();buildHabsSt();});}
function setLang(l){
  // Save current font to the language we're leaving
  if(S.lang==='en')S.fontEn=S.font;
  else if(S.lang==='jp')S.fontJp=S.font;
  S.lang=l;
  // Restore saved font for the new language, with fallback
  const saved=l==='jp'?S.fontJp:S.fontEn;
  const available=FONTS.filter(f=>l==='jp'?f.jp:!f.jp);
  const match=available.find(f=>f.k===saved);
  S.font=match?saved:(l==='jp'?'NotoJP':'Nunito');
  localStorage.setItem('sp_lang_set','1');
  saveData();applyJP();applyFont();applyI18N();buildLangBtns();buildFontBtns();applyIdentity();nav(curV);
}

function openEmojiPicker(targetId){
  const jp=S.lang==='jp';
  let h=`<div class="mt">${jp?'絵文字を選ぶ ✨':'Pick an emoji ✨'}</div>`;
  h+=`<div style="padding:0 0 8px"><input type="text" id="ep-q" placeholder="${jp?'検索...':'search emoji...'}" oninput="filterEp('${targetId}',this.value)" style="width:100%"></div>`;
  h+='<div class="ep-wrap"><div class="ep-grid" id="ep-all">';
  Object.entries(EMOJI_DATA).forEach(([cat,emojis])=>{
    h+=`<span class="ep-cat">${cat}</span>`;
    [...emojis].forEach((em,ei)=>h+=`<button class="ep-btn" data-em="${ei}" data-cat="${Object.keys(EMOJI_DATA).indexOf(cat)}">${em}</button>`);
  });
  h+='</div></div>';
  h+=`<div style="margin-top:10px;display:flex;gap:8px"><input type="text" id="ep-custom" placeholder="${jp?'直接入力...':'or type any emoji...'}" style="flex:1;font-family:var(--ej);font-size:16px"><button class="btn bp bsm" id="ep-use-btn">${jp?'使う':'Use'}</button></div>`;
  openModal(h);
  // Attach handlers after DOM is ready — avoids emoji-in-onclick attribute bugs
  document.getElementById('ep-all')?.querySelectorAll('.ep-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const cats=Object.values(EMOJI_DATA);
      const ci=parseInt(btn.dataset.cat),ei=parseInt(btn.dataset.em);
      const em=[...cats[ci]][ei];
      if(em)pickEmoji(targetId,em);
    });
  });
  document.getElementById('ep-use-btn')?.addEventListener('click',()=>pickEmoji(targetId,(document.getElementById('ep-custom')?.value||'✦').trim()));
  setTimeout(()=>document.getElementById('ep-q')?.focus(),80);
}
function filterEp(tid,q){
  const all=document.getElementById('ep-all');if(!all)return;
  all.querySelectorAll('.ep-btn').forEach(btn=>{btn.style.display=(!q||btn.textContent.includes(q))?'block':'none';});
}
function pickEmoji(targetId,emoji){
  const el=document.getElementById(targetId);if(el){el.value=emoji;el.dispatchEvent(new Event('change',{bubbles:true}));}
  closeModal();
}

function openQuickAdd(){
  const jp=S.lang==='jp';
  openModal(`<div class="mt">${jp?'すぐ追加 ✦':'Quick add ✦'}</div><div class="g2" style="gap:10px">
    <button class="btn ba" style="height:56px;font-size:14px;justify-content:center" onclick="closeModal();openBlkModal(tstr())">📚 ${jp?'ブロック':'block'}</button>
    <button class="btn ba" style="height:56px;font-size:14px;justify-content:center" onclick="closeModal();openTaskModal('')">✅ ${jp?'タスク':'task'}</button>
    <button class="btn ba" style="height:56px;font-size:14px;justify-content:center" onclick="closeModal();openAssModal(tstr())">📝 ${jp?'課題':'assessment'}</button>
    <button class="btn ba" style="height:56px;font-size:14px;justify-content:center" onclick="closeModal();nav('diary')">📖 ${jp?'日記':'diary'}</button>
    <button class="btn ba" style="height:56px;font-size:14px;justify-content:center;grid-column:1/-1" onclick="closeModal();nav('braindump')">🧠 ${jp?'脳みそ整理':'Brain dump'}</button>
  </div>`);
}

async function exportData(){
  S.lastExport=tstr();saveData();
  const b=new Blob([JSON.stringify(S,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(b);
  const a=document.createElement('a');a.href=url;a.download=`gmst-backup-${tstr()}.json`;
  document.body.appendChild(a);a.click();
  setTimeout(()=>{URL.revokeObjectURL(url);a.remove();},100);
  toast(S.lang==='jp'?'書き出した ✦':'backup exported ✦','ok');
}
function importData(inp){
  const file=inp.files[0];if(!file)return;
  const r=new FileReader();
  r.onload=e=>{
    try{
      const p=JSON.parse(e.target.result);
      if(p&&typeof p==='object'&&(p.units!==undefined||p._v||p.tri)){
        confirmModal(S.lang==='jp'?'このバックアップで全部上書きする？':'replace everything with this backup?',async()=>{
          S=Object.assign(defaults(),p);migrateData();sanitize();
          await forceSave();
          toast(S.lang==='jp'?'インポートした ✦':'imported ✦','ok');
          restoreTheme();applyDark();applyFont();applyIdentity();applyI18N();applyCustomisation();
          nav('today');
        });
      }else throw new Error('invalid');
    }catch(e2){toast(S.lang==='jp'?'有効なバックアップじゃないみたい':'that doesn\'t look like a valid backup','err');}
  };
  r.readAsText(file);inp.value='';
}
function clearAll(){
  const jp=S.lang==='jp';
  const confirmWord=jp?'削除':'DELETE';
  openModal(`<div class="mt" style="color:#c81e1e">⚠️ ${jp?'全部リセット':'Reset everything'}</div>
    <p style="font-size:13px;color:var(--mu);margin-bottom:16px;line-height:1.7">${jp?'データ・カスタマイズ・テーマが全部消える。<b>元に戻せないよ。</b><br>ファイル自体は残るけど中身はリセットされる。':'All data, customisation, and settings will be wiped. <b>Cannot be undone.</b><br>Your data file will remain but be reset to empty.'}</p>
    <p style="font-size:12px;font-weight:800;margin-bottom:8px;color:#991b1b">${jp?`「${confirmWord}」と入力して確認:`:`Type "${confirmWord}" to confirm:`}</p>
    <div class="fg"><input type="text" id="m-del-confirm" placeholder="${confirmWord}" oninput="document.getElementById('m-del-btn').disabled=this.value!=='${confirmWord}'" onkeydown="if(event.key==='Enter'&&this.value==='${confirmWord}')doDeleteAll()"></div>
    <div style="display:flex;gap:8px;margin-top:6px">
      <button class="btn" id="m-del-btn" disabled onclick="doDeleteAll()" style="background:#c81e1e;color:white;border-color:transparent;opacity:.5;transition:opacity .2s">${jp?'🗑 リセット':'🗑 Reset everything'}</button>
      <button class="btn bg_" onclick="closeModal()">${jp?'やめとく':'Cancel'}</button>
    </div>
    <style>#m-del-btn:not(:disabled){opacity:1!important;}</style>`);
  setTimeout(()=>document.getElementById('m-del-confirm')?.focus(),80);
}
async function doDeleteAll(){
  closeModal();
  // Clear all localStorage
  for(const k of [KEY,KEY_B1,KEY_B2]){try{localStorage.removeItem(k);}catch(e){}}
  try{Object.keys(localStorage).filter(k=>k.startsWith('gmst')).forEach(k=>localStorage.removeItem(k));}catch(e){}
  // Wipe IDB (but keep FSA handle so they don't have to repick the file)
  try{
    const keepHandle=_fsaHandle?await idbGet('_fsa_handle'):null;
    indexedDB.deleteDatabase(IDB_NAME);
    // Re-init IDB and re-save handle
    _idb=null;
    if(keepHandle){await openIDB();await idbSet('_fsa_handle',keepHandle);}
  }catch(e){}
  // Write blank data to file if connected
  S=defaults();
  if(_fsaReady&&_fsaHandle)await fsaWrite(S);
  location.reload();
}

function showWelcomeWizard(){
  const jp=S.lang==='jp';
  openModal(`
    <div style="text-align:center;padding:8px 0 16px">
      <div style="font-size:52px;margin-bottom:10px;animation:bop 3s ease-in-out infinite;font-family:var(--ej)">✦</div>
      <div class="mt" style="font-size:24px;margin-bottom:6px">${jp?'はじめましょ ✦':'Welcome!'}</div>
      <p style="font-size:13px;color:var(--mu);margin-bottom:22px;line-height:1.75">${jp?'ちょっと教えて ♡':'take 30 seconds and you\'re in ♡'}</p>
    </div>
    <div class="fg">
      <label>${jp?'サイト名（任意）':'Site name (optional)'}</label>
      <input type="text" id="wz-name" placeholder="${jp?'例：Getting My Shit Together':'e.g. Getting My Shit Together'}" style="font-size:15px">
    </div>
    <div class="fg">
      <label>${jp?'いまのターム名':'Current trimester / semester name'}</label>
      <input type="text" id="wz-tri" placeholder="${jp?'例：2024年前期':'e.g. Semester 1 2025'}" style="font-size:15px">
    </div>
    <div class="fg">
      <label>${jp?'最初のユニット（あとで増やせる）':'First unit / subject (add more later)'}</label>
      <input type="text" id="wz-unit" placeholder="${jp?'例：日本語、数学、デザイン…':'e.g. Japanese 101, Calculus…'}" style="font-size:15px" onkeydown="if(event.key==='Enter')finishWizard()">
    </div>
    <div style="display:flex;gap:8px;margin-top:8px">
      <button class="btn bp" style="flex:1;font-size:15px;padding:12px 20px" onclick="finishWizard()">${jp?'はじめる ✦':'Get started ✦'}</button>
      <button class="btn bg_" onclick="closeModal()">${jp?'あとで':'Skip'}</button>
    </div>`);
  setTimeout(()=>document.getElementById('wz-name')?.focus(),100);
}
function finishWizard(){
  const name=(document.getElementById('wz-name')?.value||'').trim();
  const tri=(document.getElementById('wz-tri')?.value||'').trim();
  const unit=(document.getElementById('wz-unit')?.value||'').trim();
  if(name)S.appName=name;
  if(tri)S.tri=tri;
  if(unit){
    S.units=[{id:gid(),n:unit,color:UNIT_COLS[0],goal:5}];
    S.notes[S.units[0].id]=[];
  }
  // Add default psych trackers on first setup
  if(!S.trackers.length){
    S.trackers=[
      {id:gid(),n:'Energy',e:'⚡',max:10},
      {id:gid(),n:'Anxiety',e:'🌊',max:10},
      {id:gid(),n:'Mood',e:'🌸',max:10},
      {id:gid(),n:'Sleep',e:'😴',max:10},
      {id:gid(),n:'Stress',e:'💭',max:10},
      {id:gid(),n:'Self-kindness',e:'💗',max:10},
    ];
  }
  saveData();
  closeModal();
  applyIdentity();
  if(S.tri)document.getElementById('tri-pill').textContent=S.tri;
  nav('today');
  toast(S.lang==='jp'?'準備できた ✦':'All set! Let\'s go ✦','ok');
}

function openModal(html){document.getElementById('modal-body').innerHTML=html;document.getElementById('overlay').classList.add('show');}
let _confirmCb=null;
function confirmModal(msg,onYes){
  _confirmCb=onYes;
  const jp=S.lang==='jp';
  openModal(`<div class="mt" style="font-size:16px;margin-bottom:14px">⚠️ ${escH(msg)}</div>
    <div style="display:flex;gap:8px">
      <button type="button" class="btn bp" onclick="closeModal();if(_confirmCb){const cb=_confirmCb;_confirmCb=null;cb();}">
        ${jp?'削除する':'yes, delete'}
      </button>
      <button type="button" class="btn bg_" onclick="_confirmCb=null;closeModal()">${jp?'やめとく':'Cancel'}</button>
    </div>`);
}
function closeModal(){document.getElementById('overlay').classList.remove('show');}
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeModal();closeFocus();}
  if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'||e.target.tagName==='SELECT')return;
  if(e.key==='+'&&!e.altKey&&!e.ctrlKey&&!e.metaKey){openQuickAdd();e.preventDefault();}
  if(e.altKey){const m={t:'today',d:'diary',h:'habits',b:'braindump',i:'timer',c:'cal',w:'week',k:'tasks',a:'ass',s:'stats',n:'notes',x:'archive',g:'settings'};if(m[e.key]){nav(m[e.key]);e.preventDefault();}}
});

function toggleDark(){
  const modes=['light','dark','space'];
  const cur=modes.indexOf(S.displayMode||'light');
  S.displayMode=modes[(cur+1)%3];
  S.darkMode=(S.displayMode!=='light');
  saveData();applyDark();applyBg();applySbGif();applyCustomisation();
}
function cycleMode(){toggleDark();}
function setMode(m){
  S.displayMode=m;S.darkMode=(m!=='light');
  saveData();applyDark();applyBg();applySbGif();applyCustomisation();
}
function applyDark(){
  const m=S.displayMode||'light';
  const hr=document.getElementById('hr');
  if(!hr)return;
  // dark mode = html.dark + html.goth (femme goth aesthetic). space = html.space.
  hr.classList.toggle('dark',  m==='dark');
  hr.classList.toggle('goth',  m==='dark');
  hr.classList.toggle('space', m==='space');
  const btn=document.getElementById('mode-btn');
  if(btn){
    const icons={light:'☀️', dark:'🌙', space:'🌌'};
    btn.textContent=icons[m]||'☀️';
    btn.classList.toggle('on',m!=='light');
    btn.dataset.mode=m;
  }
  document.querySelectorAll('[data-dm]').forEach(b=>b.classList.toggle('bp',b.dataset.dm===m));
  const jp=S.lang==='jp';
  const modeDescs={
    light: jp?'明るいかわいいモード ☀️':'bright & cute ☀️',
    dark:  jp?'フェムゴスダーク。ベルベットとレースと薔薇 🌙':'femme goth dark — velvet, lace & roses 🌙',
    space: jp?'宇宙空間。ネビュラとスターフィールド 🌌':'deep space 🌌',
  };
  const descEl=document.getElementById('mode-desc-text');
  if(descEl)descEl.textContent=modeDescs[m]||'';
}
function toggleJP(){setLang(S.lang==='jp'?'en':'jp');}
function applyJP(){
  const d=S.lang==='jp';
  document.getElementById('hr').classList.toggle('jp',d);
  const btn=document.getElementById('jp-btn');if(btn){btn.textContent=d?'EN':'JP';btn.classList.toggle('on',d);}
}

let petalInt=null;
function togglePetals(on){
  clearInterval(petalInt);
  document.querySelectorAll('.petal').forEach(p=>p.remove());
  if(on){spawnPetal();petalInt=setInterval(()=>{if(!document.hidden)spawnPetal();},2000);}
}
function spawnPetal(){
  if(!S.petals)return;
  const types=S.petalTypes&&S.petalTypes.length?S.petalTypes:['🌸','✦','⭐'];
  const el=document.createElement('div');el.className='petal';
  el.textContent=types[Math.floor(Math.random()*types.length)];
  const left=Math.random()*100,spd=S.petalSpeed||10,dur=Math.max(4,20-(spd/2))+Math.random()*6,sway=(Math.random()*160-80)+'px',rot=(Math.random()*720-360)+'deg';
  el.style.cssText=`left:${left}%;font-size:${9+Math.random()*13}px;animation-duration:${dur}s;--sw:${sway};--ro:${rot}`;
  document.getElementById('petal-layer').appendChild(el);
  setTimeout(()=>el.remove(),(dur+0.5)*1000);
}

function buildStars(){
  // Dark mode palette: amethyst, rose, ice tints (femme goth)
  // Goth mode palette: blood crimson, deep violet, ember gold
  const isDarkGoth=document.getElementById('hr')?.classList.contains('goth');
  const starCols=isDarkGoth?[
    `rgba(200,40,60,VAL)`,   // blood crimson
    `rgba(200,40,60,VAL)`,
    `rgba(160,0,40,VAL)`,   // deep blood
    `rgba(140,20,160,VAL)`, // dark violet
    `rgba(200,100,160,VAL)`,// rose blush
    `rgba(255,160,60,VAL)`, // ember candle
  ]:[
    `rgba(255,255,255,VAL)`,
    `rgba(255,255,255,VAL)`,
    `rgba(255,255,255,VAL)`,
    `rgba(210,160,255,VAL)`,  // amethyst
    `rgba(255,160,210,VAL)`,  // rose
    `rgba(210,255,255,VAL)`,  // ice
  ];
  const randCol=(op)=>starCols[Math.floor(Math.random()*starCols.length)].replace('VAL', op.toFixed(2));

  // Three layers: dense tiny, medium, large sparkles
  const cfg=[
    {id:'sf1',n:140,min:.4,max:1.2},   // dense tiny pinpoints
    {id:'sf2',n:55,min:1.0,max:2.2},   // medium stars
    {id:'sf3',n:18,min:1.8,max:3.2},   // large, some get sparkle cross
  ];
  cfg.forEach(({id,n,min,max})=>{
    const el=document.getElementById(id);if(!el)return;
    let h='';
    for(let i=0;i<n;i++){
      const x=Math.random()*100,y=Math.random()*100;
      const s=min+Math.random()*(max-min);
      const op=0.28+Math.random()*0.62;
      const dur=1.8+Math.random()*4.0,dl=Math.random()*5;
      const col=randCol(op);
      // Large layer: some get a CSS ✦ cross sparkle shape instead of circle
      const isSparkle=(id==='sf3'&&Math.random()>.35);
      if(isSparkle){
        const arm=s*2.4;
        const roseOrAmethyst=Math.random()>.5?'rgba(255,160,210,VAL)'.replace('VAL',op.toFixed(2)):`rgba(210,160,255,VAL)`.replace('VAL',op.toFixed(2));
        h+=`<div style="position:absolute;left:${x}%;top:${y}%;width:${arm}px;height:${arm}px;opacity:${op.toFixed(2)};animation:sblink ${dur}s ease-in-out ${dl}s infinite;transform-origin:center">
          <svg viewBox="0 0 10 10" width="${arm}" height="${arm}" xmlns="http://www.w3.org/2000/svg" style="overflow:visible">
            <path d="M5 0 L5.4 4.2 L9 5 L5.4 5.8 L5 10 L4.6 5.8 L1 5 L4.6 4.2Z" fill="${roseOrAmethyst.replace('VAL',op.toFixed(2)).replace('rgba(210,160,255,','rgba(210,160,255,').replace('rgba(255,160,210,','rgba(255,160,210,')}"/>
          </svg>
        </div>`;
      } else {
        h+=`<div style="position:absolute;left:${x}%;top:${y}%;width:${s}px;height:${s}px;background:${col};border-radius:50%;animation:sblink ${dur}s ease-in-out ${dl}s infinite"></div>`;
      }
    }
    // Shooting stars
    for(let i=0;i<3;i++){const x=Math.random()*80,y=Math.random()*60,dl=10+Math.random()*30;h+=`<div style="position:absolute;left:${x}%;top:${y}%;width:2px;height:2px;background:rgba(240,200,255,0.9);border-radius:50%;animation:shoot ${2.5+Math.random()*3}s linear ${dl}s infinite;opacity:0"></div>`;}
    el.innerHTML=h;
  });
}

(()=>{const s=document.createElement('style');s.textContent='@keyframes sblink{0%,100%{opacity:.25;transform:scale(1)}50%{opacity:1;transform:scale(1.6)}}';document.head.appendChild(s);})();

function buildSidebarStickers(){
  const row=document.getElementById('stk-row');if(!row)return;
  const emojis=S.stickers&&S.stickers.length?S.stickers:['🌙','⭐','🔮'];
  const imgs=S.customImgStickers||[];
  let h=emojis.map((s,i)=>`<span class="stk" style="--d:${2+i*.4}s;--dl:${i*.25}s">${s}</span>`).join('');
  h+=imgs.slice(0,6).map((s,i)=>`<img src="${s.url}" class="stk-img" style="--d:${2.5+i*.35}s;--dl:${i*.2}s" onerror="this.style.display='none'" alt="">`).join('');
  row.innerHTML=h;
}
function buildLogoPets(){const el=document.getElementById('lo-pets');if(!el)return;el.innerHTML=['✿','🌸','⭐','💫','🌺'].map((e,i)=>`<span style="--d:${2+i*.5}s;--dl:${i*.3}s">${e}</span>`).join('');}


function applyBg(){
  const isDark=S.darkMode;
  const url=isDark?(S.bgDark||''):(S.bgLight||'');
  const layer=document.getElementById('custom-bg-layer');
  if(!layer)return;
  if(url){
    layer.style.cssText=`background-image:url(${JSON.stringify(url)});background-size:cover;background-position:center;background-repeat:no-repeat;opacity:${(S.bgOpacity||20)/100};transition:opacity .5s`;
    layer.classList.add('show');
  } else {
    layer.style.backgroundImage='none';
    layer.style.opacity='0';
    layer.classList.remove('show');
  }
}

function previewBg(mode){
  const inp=document.getElementById('s-bg-'+mode);
  const prev=document.getElementById('bg-prev-'+mode);
  if(!inp||!prev)return;
  const url=(inp.value||'').trim();
  if(url){prev.src=url;prev.classList.add('show');}
  else{prev.src='';prev.classList.remove('show');}
  saveBgSettings();
}

function saveBgSettings(){
  const light=(document.getElementById('s-bg-light')?.value||'').trim();
  const dark=(document.getElementById('s-bg-dark')?.value||'').trim();
  const op=parseInt(document.getElementById('s-bg-opacity')?.value)||20;
  S.bgLight=light;S.bgDark=dark;S.bgOpacity=op;
  saveData();applyBg();
}

function clearBgSettings(){
  S.bgLight='';S.bgDark='';
  const l=document.getElementById('s-bg-light');if(l)l.value='';
  const d=document.getElementById('s-bg-dark');if(d)d.value='';
  ['light','dark'].forEach(m=>{const p=document.getElementById('bg-prev-'+m);if(p){p.src='';p.classList.remove('show');}});
  saveData();applyBg();toast(S.lang==='jp'?'背景をクリアした':'background cleared','ok');
}

function applySbGif(){
  const url=S.darkMode?(S.sbGifDark||S.sbGif||''):(S.sbGif||'');
  const wrap=document.getElementById('sb-gif-wrap');
  const img=document.getElementById('sb-gif-img');
  if(!wrap||!img)return;
  if(url){
    img.src=url;
    img.onload=()=>wrap.classList.remove('hide');
    img.onerror=()=>{wrap.classList.add('hide');img.src='';};
    wrap.classList.remove('hide');
  } else {
    wrap.classList.add('hide');
    img.src='';
  }
}
function saveSbGif(){
  S.sbGif=(document.getElementById('s-sbgif-light')?.value||'').trim();
  S.sbGifDark=(document.getElementById('s-sbgif-dark')?.value||'').trim();
  saveData();applySbGif();
  toast(S.lang==='jp'?'保存した ✦':'saved ✦','ok');
}
function clearSbGif(){
  S.sbGif='';S.sbGifDark='';
  const l=document.getElementById('s-sbgif-light');if(l)l.value='';
  const d=document.getElementById('s-sbgif-dark');if(d)d.value='';
  saveData();applySbGif();
  toast(S.lang==='jp'?'クリアした':'Cleared','');
}

function toggleBdImgInput(){
  const f=document.getElementById('bd-img-field');
  if(f){f.classList.toggle('open');if(f.classList.contains('open'))document.getElementById('bd-imgurl')?.focus();}
}
function bdImgPreview(url){
  const prev=document.getElementById('bd-img-preview');
  if(!prev)return;
  if(url){prev.innerHTML=`<img src="${escH(url)}" class="entry-img" onerror="this.style.display='none'" onload="this.style.display='block'">`;prev.style.display='block';}
  else{prev.innerHTML='';prev.style.display='none';}
}

function diaryImgPreview(url){
  const prev=document.getElementById('ds-img-preview');
  if(!prev)return;
  if(url){prev.innerHTML=`<img src="${escH(url)}" class="entry-img" onerror="this.style.display='none'" onload="this.style.display='block'">`;prev.style.display='block';}
  else{prev.innerHTML='';prev.style.display='none';}
}

/* ── CUSTOMISATION ─────────────────────────── */
// ── THEME CUSTOMISATION HELPERS ─────────────────────────────────
// ctheme() returns the customisation object for the current mode
function ctheme(){
  if(!S.themeLight||typeof S.themeLight!=='object'){
    S.themeLight=Object.assign({},defaults().themeLight);
  }
  if(!S.themeDark||typeof S.themeDark!=='object'){
    S.themeDark=Object.assign({},defaults().themeDark);
  }
  return S.darkMode?S.themeDark:S.themeLight;
}
// saveCtheme() marks the right theme dirty and saves
function saveCtheme(){saveData();applyCustomisation();}

function setRound(v){ctheme().styleRound=v;saveCtheme();}
function setGlow(v){ctheme().styleGlow=v;saveCtheme();}
function setSbw(v){ctheme().styleSbw=v;saveCtheme();}
function setRainbow(on){ctheme().rainbow=on;saveCtheme();}

function setCardPattern(v){ctheme().cardPattern=v;saveCtheme();}
function setHolo(on){ctheme().holo=!!on;saveCtheme();}
const CURSOR_EMOJIS=['✦','🌸','💗','⭐','🌙','✨','🎀','💜','🔮','🦋','🌺','💫'];
function setCursor(on){
  S.cursorKawaii=on;saveData();
  document.getElementById('hr').classList.toggle('cursor-kawaii',on);
  const t=document.getElementById('cursor-tog');if(t)t.checked=on;
  applyCursorEmoji();
}
function applyCursorEmoji(){
  const el=document.getElementById('custom-cursor');
  if(el)el.textContent=S.cursorEmoji||'✦';
}
function setCursorEmoji(e){
  S.cursorEmoji=e;saveData();applyCursorEmoji();
  document.querySelectorAll('[data-ce]').forEach(b=>b.classList.toggle('bp',b.dataset.ce===e));
}
function buildCursorEmojiPicker(){
  const c=document.getElementById('cursor-emoji-btns');if(!c)return;
  c.innerHTML=CURSOR_EMOJIS.map(e=>`<button class="btn bsm${(S.cursorEmoji||'✦')===e?' bp':''}" data-ce="${e}" onclick="setCursorEmoji('${e}')" style="font-family:var(--ej);font-size:16px;padding:4px 8px">${e}</button>`).join('');
}
function applyCustomisation(){
  const hr=document.getElementById('hr');
  const t=ctheme();
  // Apply from current theme object
  hr.setAttribute('data-round',t.styleRound||'med');
  hr.setAttribute('data-glow',t.styleGlow==='high'?'high':t.styleGlow==='none'?'none':'');
  hr.setAttribute('data-sbw',t.styleSbw==='wide'?'wide':t.styleSbw==='narrow'?'narrow':'');
  hr.classList.toggle('no-rainbow',t.rainbow===false);
  hr.classList.toggle('holo',!!t.holo);
  hr.classList.toggle('cursor-kawaii',!!S.cursorKawaii);
  if(S.clock12)hr.setAttribute('data-clock12','1'); else hr.removeAttribute('data-clock12');
  hr.setAttribute('data-font-size',t.fontSize||'md');
  hr.setAttribute('data-density',t.density||'default');
  hr.setAttribute('data-anim-speed',t.animSpeed||'med');
  hr.setAttribute('data-accent-glow',t.accentGlow||'soft');
  hr.setAttribute('data-card-tint',t.cardTint||'none');
  hr.setAttribute('data-card-border',t.cardBorderStyle||'solid');
  hr.setAttribute('data-card-shadow',t.cardShadowSize||'med');
  hr.setAttribute('data-card-opacity',t.cardBgOpacity||'med');
  if(t.cardPattern&&t.cardPattern!=='none'){hr.setAttribute('data-pattern',t.cardPattern);}
  else{hr.removeAttribute('data-pattern');}
  // Colour overrides — restore full palette from stored theme values
  const r=document.documentElement.style;
  if(t._cp){r.setProperty('--p',t._cp);const tx=document.getElementById('cc-p-t');if(tx)tx.value=t._cp;if(typeof _syncPickr!=='undefined')_syncPickr('--p',t._cp);}
  else{r.removeProperty('--p');}
  if(t._ca){r.setProperty('--a',t._ca);const ca=document.getElementById('cc-a');if(ca){ca.value=t._ca;const tx=document.getElementById('cc-a-t');if(tx)tx.value=t._ca;}}
  else{r.removeProperty('--a');}
  if(t._pd)r.setProperty('--pd',t._pd); else r.removeProperty('--pd');
  if(t._pm)r.setProperty('--pm',t._pm); else r.removeProperty('--pm');
  if(t._al)r.setProperty('--al',t._al); else r.removeProperty('--al');
  if(t._g)r.setProperty('--g',t._g);   else r.removeProperty('--g');
  if(t._pl)r.setProperty('--pl',t._pl); else r.removeProperty('--pl');
  // Button active states
  document.querySelectorAll('[data-r]').forEach(b=>b.classList.toggle('bp',b.dataset.r===(t.styleRound||'med')));
  document.querySelectorAll('[data-g]').forEach(b=>b.classList.toggle('bp',b.dataset.g===(t.styleGlow||'med')));
  document.querySelectorAll('[data-s]').forEach(b=>b.classList.toggle('bp',b.dataset.s===(t.styleSbw||'med')));
  document.querySelectorAll('[data-pat]').forEach(b=>b.classList.toggle('bp',b.dataset.pat===(t.cardPattern||'none')));
  document.querySelectorAll('[data-fs]').forEach(b=>b.classList.toggle('bp',b.dataset.fs===(t.fontSize||'md')));
  document.querySelectorAll('[data-dn]').forEach(b=>b.classList.toggle('bp',b.dataset.dn===(t.density||'default')));
  document.querySelectorAll('[data-as]').forEach(b=>b.classList.toggle('bp',b.dataset.as===(t.animSpeed||'med')));
  document.querySelectorAll('[data-ag]').forEach(b=>b.classList.toggle('bp',b.dataset.ag===(t.accentGlow||'soft')));
  document.querySelectorAll('[data-ct]').forEach(b=>b.classList.toggle('bp',b.dataset.ct===(t.cardTint||'none')));
  document.querySelectorAll('[data-cb]').forEach(b=>b.classList.toggle('bp',b.dataset.cb===(t.cardBorderStyle||'solid')));
  document.querySelectorAll('[data-cs]').forEach(b=>b.classList.toggle('bp',b.dataset.cs===(t.cardShadowSize||'med')));
  document.querySelectorAll('[data-co]').forEach(b=>b.classList.toggle('bp',b.dataset.co===(t.cardBgOpacity||'med')));
  const rt=document.getElementById('rainbow-tog');if(rt)rt.checked=t.rainbow!==false;
  const ht=document.getElementById('holo-tog');if(ht)ht.checked=!!t.holo;
  const ct=document.getElementById('cursor-tog');if(ct)ct.checked=!!S.cursorKawaii;
  const ckt=document.getElementById('clock12-tog');if(ckt)ckt.checked=!!S.clock12;
  applyCursorEmoji();
  buildCursorEmojiPicker();
}


document.addEventListener('mousemove',e=>{
  const c=document.getElementById('custom-cursor');
  if(c){c.style.left=e.clientX+'px';c.style.top=e.clientY+'px';}
});
document.addEventListener('mousedown',()=>document.getElementById('hr')?.classList.add('cursor-clicking'));
document.addEventListener('mouseup',()=>document.getElementById('hr')?.classList.remove('cursor-clicking'));

(async ()=>{
  // Auto-detect browser language on very first visit
  if (!localStorage.getItem('sp_lang_set')) {
    const bl = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (bl.startsWith('ja') || bl === 'ja' || bl.startsWith('ja-')) {
      // Will be applied after storageInit loads S
      window._autoLangJP = true;
    }
  }
  showPrivacyWelcome(async()=>{
    await storageInit();
  });
})();

function bootApp(){
  if (window._autoLangJP && !S.lang || (window._autoLangJP && S.lang === 'en' && !localStorage.getItem('sp_lang_set'))) {
    S.lang = 'jp';
    S.font = S.fontJp || 'NotoJP';
    localStorage.setItem('sp_lang_set', '1');
    saveData();
  }
  restoreTheme();
  if(!S.displayMode)S.displayMode=S.darkMode?'dark':'light';
  if(S.displayMode==='goth')S.displayMode='dark';
  applyDark();
  applyJP();
  applyFont();
  applyIdentity();
  applyI18N();
  buildSidebarStickers();
  renderPageStickers();
  buildLogoPets();
  buildStars();
  togglePetals(S.petals!==false);
  applyBg();
  applySbGif();
  applyCustomisation();
  applyVibeMode();
  startClock();
  if(!S.tri&&!S.units.length){
    nav('today');
    setTimeout(showWelcomeWizard,400);
  } else {
    nav('today');
  }
}

/* ── LIVE CLOCK ─────────────────────────────────────────────── */
let _clockInt=null;
function startClock(){
  tickClock();
  if(_clockInt)clearInterval(_clockInt);
  _clockInt=setInterval(tickClock,1000);
}
function tickClock(){
  const el=document.getElementById('t-clock');if(!el)return;
  const now=new Date();
  let h=now.getHours(),m=now.getMinutes(),s=now.getSeconds();
  const ampm=h>=12?'PM':'AM';
  if(S.clock12){h=h%12||12;}
  const time=`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  el.innerHTML=`<div class="t-clock-time">${time}</div><div class="t-clock-ampm">${S.clock12?ampm:(S.lang==='jp'?['日','月','火','水','木','金','土'][now.getDay()]+'曜日':'')}</div>`;
}
function setClock12(on){S.clock12=on;saveData();applyCustomisation();tickClock();const t=document.getElementById('clock12-tog');if(t)t.checked=on;}

/* ── DIARY VIEW / EDIT MODE ─────────────────────────────────── */
let _diaryViewMode=true; // true=read, false=edit
function toggleDiaryMode(){
  // Only allow editing today's entry
  if(dDate!==tstr())return;
  _diaryViewMode=!_diaryViewMode;
  const btn=document.getElementById('d-mode-btn');
  const jp=S.lang==='jp';
  if(btn){btn.textContent=_diaryViewMode?'✏️':'👁';btn.title=_diaryViewMode?(jp?'編集':'Edit'):(jp?'プレビュー':'Preview');}
  renderDiaryForMode();
}
function renderDiaryForMode(){
  const e=S.diary[dDate]||{};
  const viewEl=document.getElementById('d-view-mode');
  const editEl=document.getElementById('d-body');
  const jp=S.lang==='jp';
  const isToday=dDate===tstr();
  const btn=document.getElementById('d-mode-btn');
  if(_diaryViewMode){
    // Check if entry has any real content
    const hasContent=e.mood||e.studied||e.good||e.struggle||e.grat||e.tom||e.free||e.imgUrl;
    if(!hasContent){
      // No content — fall back to edit mode
      _diaryViewMode=false;
      if(btn){btn.textContent='👁';btn.title=jp?'プレビュー':'Preview';}
      viewEl.style.display='none';editEl.style.display='block';
      return;
    }
    viewEl.style.display='block';
    editEl.style.display='none';
    if(btn){btn.textContent='✏️';btn.title=jp?'編集':'Edit';}
    renderDiaryEntry(e,dDate);
  } else {
    viewEl.style.display='none';
    editEl.style.display='block';
    if(btn){btn.textContent='👁';btn.title=jp?'プレビュー':'Preview';}
    // Scroll to the writing fields, not the checkin at the top
    setTimeout(()=>{const el=document.getElementById('ds-studied');if(el)el.scrollIntoView({behavior:'smooth',block:'start',inline:'nearest'});},60);
  }
}
/* renderDiaryEntry: full version with markdown below */
function setFontSize(v){ctheme().fontSize=v;saveCtheme();}
function setDensity(v){ctheme().density=v;saveCtheme();}
function setAnimSpeed(v){ctheme().animSpeed=v;saveCtheme();}
function setAccentGlow(v){ctheme().accentGlow=v;saveCtheme();}
function setCardTint(v){ctheme().cardTint=v;saveCtheme();}
function setCardBorder(v){ctheme().cardBorderStyle=v;saveCtheme();}
function setCardShadow(v){ctheme().cardShadowSize=v;saveCtheme();}
function setCardBgOpacity(v){ctheme().cardBgOpacity=v;saveCtheme();}
function setVibeMode(v){S.vibeMode=v;saveData();applyVibeMode();const jp=S.lang==='jp';toast(jp?`バイブ: ${t('vm_'+v)}`:`vibe: ${t('vm_'+v)}`,'ok');}
function applyVibeMode(){
  const hr=document.getElementById('hr');if(!hr)return;
  hr.setAttribute('data-vibe',S.vibeMode||'clean');
  document.querySelectorAll('[data-vm]').forEach(b=>b.classList.toggle('bp',b.dataset.vm===(S.vibeMode||'clean')));
}


/* ═══════════════════════════════════════════════════════════════════
   DEPENDENCY INTEGRATIONS
   ═══════════════════════════════════════════════════════════════════ */

/* ── CANVAS-CONFETTI ─────────────────────────────────────────────── */
const _origConfetti = confetti;
confetti = function(x, y) {
  if (typeof window.confetti === 'function') {
    window.confetti({
      particleCount: 90, spread: 65,
      origin: { x: x / window.innerWidth, y: y / window.innerHeight },
      colors: ['#F0196E','#A855F7','#06C79A','#FF6DAF','#FFAA2A','#2ECFDC'],
      disableForReducedMotion: true
    });
    return;
  }
  _origConfetti(x, y);
}

/* ── CHROMA — smart palette from colour picks ────────────────────── */
function applyColour(prop, val) {
  const r = document.documentElement.style;
  r.setProperty(prop, val);
  if (typeof chroma !== 'undefined') {
    try {
      const c = chroma(val);
      if (prop === '--p') {
        r.setProperty('--pd', c.darken(1.8).hex());
        r.setProperty('--pm', c.brighten(1.1).saturate(0.2).hex());
        r.setProperty('--pl', c.alpha(0.12).css());
        r.setProperty('--br', c.alpha(0.13).css());
        r.setProperty('--brm', c.alpha(0.28).css());
      } else if (prop === '--a') {
        r.setProperty('--al', c.alpha(0.12).css());
        r.setProperty('--ad', c.darken(1.8).hex());
      }
    } catch(e) {}
  }
  S.theme = 'custom';
  if (prop === '--p') ctheme()._cp = val; else ctheme()._ca = val;
  saveData();
  _syncPickr(prop, val);
}
function syncColour(prop, val) {
  if (/^#[0-9a-fA-F]{6}$/.test(val)) {
    applyColour(prop, val);
    const tid = prop === '--p' ? 'cc-p-t' : 'cc-a-t';
    const t = document.getElementById(tid); if (t) t.value = val;
  }
}

/* ── PICKR ───────────────────────────────────────────────────────── */
let _pickrP = null, _pickrA = null;
function _syncPickr(prop, val) {
  try {
    const pk = prop === '--p' ? _pickrP : _pickrA;
    if (pk && pk.getColor()?.toHEXA().toString() !== val.toUpperCase()) pk.setColor(val, true);
    const tid = prop === '--p' ? 'cc-p-t' : 'cc-a-t';
    const t = document.getElementById(tid); if (t) t.value = val;
  } catch(e) {}
}
function _initPickr() {
  if (typeof Pickr === 'undefined') return;
  const shared = {
    theme: 'nano',
    swatches: ['#C4126A','#8B5CF6','#C026D3','#0891B2','#E11D48','#D97706','#0284C7','#F43F5E','#C084FC','#EC4899'],
    components: { preview: true, opacity: false, hue: true, interaction: { hex: true, input: true, save: true } }
  };
  const pEl = document.getElementById('pickr-p');
  const aEl = document.getElementById('pickr-a');
  if (pEl) {
    _pickrP = Pickr.create({...shared, el: pEl, default: ctheme()._cp || '#C4126A'});
    _pickrP.on('save', c => { if(c){applyColour('--p', c.toHEXA().toString()); _pickrP.hide();}});
    _pickrP.on('change', c => { if(c){const v=c.toHEXA().toString();const t=document.getElementById('cc-p-t');if(t)t.value=v;}});
  }
  if (aEl) {
    _pickrA = Pickr.create({...shared, el: aEl, default: ctheme()._ca || '#7B2FD8'});
    _pickrA.on('save', c => { if(c){applyColour('--a', c.toHEXA().toString()); _pickrA.hide();}});
    _pickrA.on('change', c => { if(c){const v=c.toHEXA().toString();const t=document.getElementById('cc-a-t');if(t)t.value=v;}});
  }
}

/* ── FUSE.JS — upgrade search functions ─────────────────────────── */
function _fuseSearch(items, query, keys) {
  if (!query) return items;
  if (typeof Fuse !== 'undefined') {
    return new Fuse(items, { keys, threshold: 0.36, minMatchCharLength: 2, ignoreLocation: true })
      .search(query).map(r => r.item);
  }
  return items.filter(i => keys.some(k => (i[k]||'').toLowerCase().includes(query.toLowerCase())));
}

/* ── AUTOSIZE ────────────────────────────────────────────────────── */
function _autosizeAll() {
  if (typeof autosize !== 'undefined') autosize(document.querySelectorAll('textarea'));
}
function _autosizeUpdate() {
  if (typeof autosize !== 'undefined') autosize.update(document.querySelectorAll('textarea'));
}

/* ── FLATPICKR MODAL HELPERS ─────────────────────────────────────── */
function _fpDate(id, opts) {
  if (typeof flatpickr !== 'undefined') {
    flatpickr('#' + id, { dateFormat: 'Y-m-d', disableMobile: true, ...opts });
  } else {
    const el = document.getElementById(id);
    if (el) { el.type = 'date'; el.readOnly = false; }
  }
}
function _fpTime(id, opts) {
  if (typeof flatpickr !== 'undefined') {
    flatpickr('#' + id, { enableTime: true, noCalendar: true, dateFormat: 'H:i', time_24hr: true, disableMobile: true, ...opts });
  } else {
    const el = document.getElementById(id);
    if (el) { el.type = 'time'; el.readOnly = false; }
  }
}

/* ── MARKED — markdown render ────────────────────────────────────── */
function _md(raw) {
  if (!raw) return '';
  if (typeof marked !== 'undefined') {
    try {
      marked.setOptions({ breaks: true, gfm: true, mangle: false, headerIds: false });
      return marked.parse(raw);
    } catch(e) {}
  }
  return escH(raw).replace(/\n/g, '<br>');
}

/* ── TIPPY ───────────────────────────────────────────────────────── */
function _tippyInit() {
  if (typeof tippy === 'undefined') return;
  tippy('[title]', {
    theme: 'translucent', placement: 'top', arrow: true, delay: [280, 0], duration: [150, 100],
    onShow(i) { const t = i.reference.getAttribute('title'); if(t){ i.setContent(t); i.reference.removeAttribute('title'); }}
  });
}
function _tippyRefresh() {
  if (typeof tippy === 'undefined') return;
  setTimeout(() => tippy('[title]', {
    theme: 'translucent', placement: 'top', arrow: true, delay: [280, 0], duration: [150, 100],
    onShow(i) { const t = i.reference.getAttribute('title'); if(t){ i.setContent(t); i.reference.removeAttribute('title'); }}
  }), 100);
}

/* ── NPROGRESS ───────────────────────────────────────────────────── */
function _initNProgress() {
  if (typeof NProgress === 'undefined') return;
  NProgress.configure({ showSpinner: false, trickleSpeed: 200, minimum: 0.08, easing: 'ease', speed: 200, parent: 'body' });
}

function _initGSAP() {
  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });
}

function _gsapPageIn(viewId) {
  if (typeof gsap === 'undefined' || S.viewAnim === 'off') return;
  const el = document.getElementById('view-' + viewId);
  if (!el) return;
  const s = S.viewAnim === 'subtle' ? 0.4 : 1;
  gsap.fromTo(el, { opacity: 0, y: 8 * s }, { opacity: 1, y: 0, duration: 0.22, ease: 'power2.out', clearProps: 'all' });
}

/* ── SORTABLE ────────────────────────────────────────────────────── */
function _makeSortable(wrap, uid) {
  if (typeof Sortable === 'undefined' || !wrap) return;
  Sortable.create(wrap, {
    animation: 160, ghostClass: 'sortable-ghost', dragClass: 'sortable-drag',
    onEnd(evt) {
      const pending = S.tasks.filter(t => t.unitId === uid && !t.done);
      const moved = pending[evt.oldIndex]; if (!moved) return;
      pending.splice(evt.oldIndex, 1); pending.splice(evt.newIndex, 0, moved);
      S.tasks = [...S.tasks.filter(t => !(t.unitId === uid && !t.done)), ...pending];
      saveData();
    }
  });
}

/* ── ANIME.JS ────────────────────────────────────────────────────── */
function _animIn(selector, opts) {
  if (S.viewAnim === 'off') return;
  const els = document.querySelectorAll(selector);
  if (!els.length) return;
  const s = S.viewAnim === 'subtle' ? 0.5 : 1;
  if (typeof gsap !== 'undefined') {
    gsap.fromTo(els,
      {opacity:0, y:10*s, scale:0.97},
      {opacity:1, y:0, scale:1, duration:0.28, ease:'back.out(1.4)', stagger:0.04, clearProps:'transform', ...opts}
    );
    return;
  }
  if (typeof anime !== 'undefined') {
    anime({ targets: els, opacity: [0, 1], translateY: [12 * s, 0], scale: [0.96, 1],
      delay: anime.stagger(45, { start: 40 }), duration: 280, easing: 'easeOutBack', ...opts });
  }
}
function _animCounter(selector) {
  if (S.viewAnim === 'off') return;
  document.querySelectorAll(selector).forEach(el => {
    const raw = el.textContent.trim();
    const num = parseFloat(raw);
    if (isNaN(num) || num === 0) return;
    const isH = raw.endsWith('h');
    if (typeof gsap !== 'undefined') {
      const obj = {val:0};
      gsap.to(obj, {val:num, duration:0.9, ease:'power3.out',
        onUpdate:()=>{ el.textContent=isH?(obj.val).toFixed(1)+'h':Math.round(obj.val); }});
      return;
    }
    if (typeof anime !== 'undefined') {
      const obj = { val: 0 };
      anime({ targets: obj, val: num, round: isH ? 10 : 1, duration: 900, easing: 'easeOutExpo',
        update: () => { el.textContent = isH ? (obj.val / 10).toFixed(1) + 'h' : Math.round(obj.val); }
      });
    }
  });
}
function _animGreeting() {
  if (typeof Splitting === 'undefined' || typeof anime === 'undefined') return;
  const el = document.getElementById('tg'); if (!el) return;
  Splitting({ target: el, by: 'chars' });
  setTimeout(() => {
    anime({ targets: el.querySelectorAll('.char'), translateY: [-14, 0], opacity: [0, 1],
      delay: anime.stagger(24, { start: 0 }), duration: 360, easing: 'easeOutBack' });
  }, 50);
}
function setViewAnim(v) {
  ctheme().viewAnim = v; S.viewAnim = v; saveCtheme();
  document.querySelectorAll('[data-va]').forEach(b => b.classList.toggle('bp', b.dataset.va === v));
}

/* ── VANILLA TILT ────────────────────────────────────────────────── */
function _tiltApply() {
  if (typeof VanillaTilt === 'undefined' || !S.tilt) return;
  VanillaTilt.init(document.querySelectorAll('.stat:not([data-tilt])'), { max: 7, speed: 400, glare: true, 'max-glare': 0.1, perspective: 900, scale: 1.03 });
  VanillaTilt.init(document.querySelectorAll('.tsw:not([data-tilt])'), { max: 14, speed: 300, glare: true, 'max-glare': 0.22, perspective: 600, scale: 1.06 });
}
function _tiltDestroy() {
  document.querySelectorAll('[data-tilt]').forEach(el => { if (el._vanillaTilt) el._vanillaTilt.destroy(); });
}
function setTilt(on) {
  S.tilt = on; saveData();
  const t = document.getElementById('tilt-tog'); if (t) t.checked = on;
  on ? _tiltApply() : _tiltDestroy();
}

function _maybeAutoTour() {}

/* ── COLOR THIEF ─────────────────────────────────────────────────── */
function extractThemeFromImage() {
  const url = (document.getElementById('ct-url')?.value || '').trim();
  if (!url) { toast(S.lang === 'jp' ? '画像URLを貼り付けてね' : 'Paste an image URL first', 'err'); return; }
  if (typeof ColorThief === 'undefined') { toast(t('t_ct_not_loaded'), 'err'); return; }
  const img = new Image(); img.crossOrigin = 'Anonymous';
  img.onload = () => {
    try {
      const ct = new ColorThief();
      const palette = ct.getPalette(img, 8);
      if (!palette?.length) { toast(t('t_ct_empty'), 'err'); return; }
      const toHex = ([r,g,b]) => '#' + [r,g,b].map(x => x.toString(16).padStart(2,'0')).join('');
      const sorted = [...palette].sort((a, b) => {
        const satA = Math.max(...a) - Math.min(...a), satB = Math.max(...b) - Math.min(...b);
        return satB - satA;
      });
      const primary = toHex(sorted[0]), accent = toHex(sorted[1] || sorted[0]);
      const prev = document.getElementById('ct-preview');
      if (prev) {
        prev.style.display = 'block';
        prev.innerHTML = `<div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:10px">
          ${palette.map(c => `<div style="width:30px;height:30px;border-radius:7px;background:${toHex(c)};cursor:pointer;border:2px solid rgba(255,255,255,.2);transition:transform .1s" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform=''" onclick="applyColour('--p','${toHex(c)}')" title="Set as primary"></div>`).join('')}
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <button class="btn bp bsm" onclick="applyColour('--p','${primary}');applyColour('--a','${accent}');toast(t('t_theme_applied'),'ok')">✦ Apply palette</button>
          <button class="btn bsm" onclick="applyColour('--p','${primary}')">Set primary</button>
          <button class="btn bsm" onclick="applyColour('--a','${accent}')">Set accent</button>
        </div>`;
      }
      toast(t('t_theme_applied'), 'ok');
    } catch(e) { toast(t('t_ct_failed'), 'err'); }
  };
  img.onerror = () => toast(t('t_ct_bad_url'), 'err');
  img.src = url;
}

/* ── SOUNDS ──────────────────────────────────────────────────────── */
const SFX = {
  task:   [[523,0],[659,.08],[784,.16],[1047,.24]],
  habit:  [[392,0],[523,.08],[659,.16]],
  save:   [[659,0],[784,.09]],
  timer:  [[523,0],[659,.1],[784,.2],[1047,.3],[1319,.4]],
  streak: [[523,0],[659,.07],[784,.14],[1047,.21],[1319,.28],[1568,.35]],
  diary:  [[440,0],[554,.1],[659,.2]],
  nav:    [[523,0],[415,.1]],
  error:  [[330,0],[277,.14]],
};
function _sfx(type) {
  if (!S.sounds) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    (SFX[type] || SFX.save).forEach(([freq, t]) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.frequency.value = freq;
      o.type = type === 'error' ? 'sawtooth' : type === 'streak' ? 'triangle' : 'sine';
      const vol = type === 'streak' ? .16 : type === 'timer' ? .13 : .09;
      g.gain.setValueAtTime(vol, ctx.currentTime + t);
      g.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + t + .36);
      o.start(ctx.currentTime + t); o.stop(ctx.currentTime + t + .52);
    });
  } catch(e) {}
}
function setSounds(on) {
  S.sounds = on; saveData();
  const t = document.getElementById('sounds-tog'); if (t) t.checked = on;
  const b = document.getElementById('sound-btn'); if (b) b.textContent = on ? '🔔' : '🔕';
  if (on) setTimeout(() => _sfx('save'), 80);
}
function toggleSounds() { setSounds(!S.sounds); }

/* ── MILESTONE CONFETTI ──────────────────────────────────────────── */
function _checkMilestone() {
  const str = streak();
  if ([3,7,14,21,30,60,100].includes(str)) {
    _sfx('streak');
    if (typeof window.confetti === 'function') {
      window.confetti({ particleCount: 180, spread: 90, origin: { y: .6 }, colors: ['#F0196E','#A855F7','#FFD700','#06C79A','#FF6DAF'], disableForReducedMotion: true });
      setTimeout(() => window.confetti({ particleCount: 80, angle: 60, spread: 55, origin: { x: 0 }, disableForReducedMotion: true }), 350);
      setTimeout(() => window.confetti({ particleCount: 80, angle: 120, spread: 55, origin: { x: 1 }, disableForReducedMotion: true }), 350);
    }
    reward('🔥', t('str_milestone_' + str));
  }
}



/* ═══════════════════════════════════════════════════════════════════
   PAGE STICKER SYSTEM — freely draggable stickers on the canvas
   ═══════════════════════════════════════════════════════════════════ */
let _stickerMode=false;
let _selectedStkId=null;
let _dragStkEl=null,_dragStkOffX=0,_dragStkOffY=0;
function _selectSticker(id){
  _selectedStkId=id;
  document.querySelectorAll('.page-sticker').forEach(el=>{
    const mine=el.dataset.id===id;
    el.classList.toggle('stk-selected',mine);
    const ctrl=el.querySelector('.stk-controls');
    if(ctrl)ctrl.style.display=mine?'flex':'none';
  });
}
function _deselectStickers(){
  _selectedStkId=null;
  document.querySelectorAll('.page-sticker').forEach(el=>{
    el.classList.remove('stk-selected');
    const ctrl=el.querySelector('.stk-controls');
    if(ctrl)ctrl.style.display='none';
  });
}
// Deselect only when clicking truly empty canvas space
document.addEventListener('mousedown',e=>{
  if(!_stickerMode)return;
  if(e.target.closest('.page-sticker'))return;
  if(e.target.closest('.stk-controls'))return;
  if(e.target.closest('.sticker-toolbar'))return;
  _deselectStickers();
});

function toggleStickerMode(){
  _stickerMode=!_stickerMode;
  const tb=document.getElementById('sticker-toolbar');
  const fab=document.getElementById('stk-edit-fab');
  const lbl=document.getElementById('stk-mode-lbl');
  const btn=document.getElementById('stk-mode-btn');
  const jp=S.lang==='jp';
  if(tb)tb.style.display=_stickerMode?'flex':'none';
  if(fab){
    fab.textContent=_stickerMode?'✓':'🧸';
    fab.classList.toggle('active',_stickerMode);
  }
  if(lbl)lbl.textContent=_stickerMode?(jp?'ステッカーモード終了':'exit sticker mode'):(jp?'ステッカーモードに入る':'enter sticker mode');
  if(btn)btn.textContent=_stickerMode?(jp?'🔒 完了':'🔒 done'):(jp?'✏️ 編集':'✏️ edit');
  document.getElementById('sticker-canvas').classList.toggle('editing',_stickerMode);
  const countEl=document.getElementById('stk-count-lbl');
  if(countEl)countEl.textContent=(S.pageStickers||[]).length+(jp?'個のステッカーが貼ってある':' stickers placed');
  if(_stickerMode)toast(jp?'好きな場所に貼ってね ✦':'tap anywhere or drag stickers ♡','ok');
}

function openStickerPicker(){
  const jp=S.lang==='jp';
  const emojis=[...ALL_STK,...ALL_PETALS,'🌙','⭐','💫','✨','🔮','🖤','🌹','🌸','🦋','🍄','🕸️','🌿','💎','🗝️','🕯️','🪷','🫧','🌊','💀','🧿','⚡','🌑','🎭','🩸','🔪','🌫','🦇','🐍','🖤','🌒','✦','✿'];
  const uniqueEmojis=[...new Set(emojis)];
  let h=`<div class="mt">${jp?'ステッカーを選ぶ ✦':'Pick a sticker ✦'}</div>`;
  h+=`<div style="display:grid;grid-template-columns:repeat(8,1fr);gap:4px;max-height:220px;overflow-y:auto;padding:4px;margin-bottom:10px">`;
  uniqueEmojis.forEach(e=>{
    h+=`<button onclick="placeSticker('${e}');closeModal()" style="font-size:22px;padding:6px;border-radius:10px;border:none;background:transparent;cursor:pointer;font-family:var(--ej);transition:all .12s" onmouseover="this.style.transform='scale(1.3)'" onmouseout="this.style.transform=''">${e}</button>`;
  });
  h+=`</div>`;

  // Custom image stickers — saved ones + quick add
  h+=`<div style="border-top:1.5px solid var(--br);padding-top:10px">`;
  h+=`<div class="ct" style="margin-bottom:8px">${jp?'🖼 画像ステッカー':'🖼 image stickers'}</div>`;
  if((S.customImgStickers||[]).length){
    h+=`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px">`;
    (S.customImgStickers||[]).forEach(s=>{
      h+=`<div style="position:relative;cursor:pointer" title="${jp?'クリックして貼る':'click to place'}" onclick="placeStickerImg('${s.id}');closeModal()">
        <img src="${s.url}" style="width:44px;height:44px;object-fit:cover;border-radius:10px;border:2px solid var(--br);transition:all .12s;display:block" onmouseover="this.style.borderColor='var(--pm)';this.style.transform='scale(1.1)'" onmouseout="this.style.borderColor='var(--br)';this.style.transform=''">
      </div>`;
    });
    h+=`</div>`;
  }
  // Quick add — URL or upload
  h+=`<div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
    <input type="text" id="spkr-url" placeholder="${jp?'URLを貼り付け…':'paste image URL…'}" style="flex:1;min-width:120px;font-size:12px">
    <button class="btn bsm bp" onclick="_pickerAddUrl()">${jp?'+ URL':'+ URL'}</button>
    <label class="btn bsm" style="cursor:pointer">${jp?'📁 アップロード':'📁 upload'}<input type="file" accept="image/*,.gif" multiple style="display:none" onchange="_pickerUpload(this)"></label>
  </div>`;
  h+=`</div>`;
  h+=`<div style="margin-top:8px;font-size:11px;color:var(--fa)">${jp?'クリックして貼るよ — ドラッグして動かせる':'click to place — drag to move ♡'}</div>`;
  openModal(h);
}

function _pickerAddUrl(){
  const url=(document.getElementById('spkr-url')?.value||'').trim();
  if(!url){toast(S.lang==='jp'?'URLを入れてね':'paste a URL first');return;}
  if(!S.customImgStickers)S.customImgStickers=[];
  const id=gid();
  S.customImgStickers.push({id,url,type:'url'});
  saveData();buildImgStickerSettings();
  closeModal();
  placeStickerImg(id);
  toast(S.lang==='jp'?'追加して貼った ✦':'added & placed ✦','ok');
}

function _pickerUpload(inp){
  const files=Array.from(inp.files||[]);
  if(!files.length)return;
  if(!S.customImgStickers)S.customImgStickers=[];
  let done=0;
  const newIds=[];
  files.forEach(file=>{
    const reader=new FileReader();
    reader.onload=ev=>{
      const id=gid();
      newIds.push(id);
      S.customImgStickers.push({id,url:ev.target.result,type:'upload',name:file.name});
      done++;
      if(done===files.length){
        saveData();buildImgStickerSettings();
        closeModal();
        newIds.forEach(nid=>placeStickerImg(nid));
        toast(S.lang==='jp'?`${done}枚追加して貼った ✦`:`${done} sticker${done>1?'s':''} added & placed ✦`,'ok');
      }
    };
    reader.readAsDataURL(file);
  });
  inp.value='';
}

function placeSticker(emoji,x,y){
  if(!S.pageStickers)S.pageStickers=[];
  const main=document.querySelector('.main');
  let px,py;
  if(x!=null&&y!=null){
    px=x;py=y;
  } else {
    // Place in the currently visible portion of the scrollable area
    const scrollTop=main?main.scrollTop:0;
    const scrollH=main?main.scrollHeight:window.innerHeight;
    const visH=main?main.clientHeight:window.innerHeight;
    const visibleTopPct=(scrollTop/scrollH)*100;
    const visibleHPct=(visH/scrollH)*100;
    px=10+Math.random()*80;
    py=visibleTopPct+4+Math.random()*(visibleHPct*0.88);
  }
  const id=gid();
  const rot=(Math.random()*30-15).toFixed(1);
  const size=32+Math.floor(Math.random()*24);
  const z=100+(S.pageStickers.length);
  S.pageStickers.push({id,type:'emoji',content:emoji,x:px,y:py,rot:parseFloat(rot),size,z});
  saveData();
  renderPageStickers();
  if(!_stickerMode)toggleStickerMode();
}

function placeStickerImg(imgId,x,y){
  const img=(S.customImgStickers||[]).find(s=>s.id===imgId);
  if(!img)return;
  if(!S.pageStickers)S.pageStickers=[];
  const main=document.querySelector('.main');
  let px,py;
  if(x!=null&&y!=null){
    px=x;py=y;
  } else {
    const scrollTop=main?main.scrollTop:0;
    const scrollH=main?main.scrollHeight:window.innerHeight;
    const visH=main?main.clientHeight:window.innerHeight;
    const visibleTopPct=(scrollTop/scrollH)*100;
    const visibleHPct=(visH/scrollH)*100;
    px=10+Math.random()*80;
    py=visibleTopPct+4+Math.random()*(visibleHPct*0.88);
  }
  const id=gid();
  const rot=(Math.random()*20-10).toFixed(1);
  const z=100+(S.pageStickers.length);
  S.pageStickers.push({id,type:'img',content:img.url,x:px,y:py,rot:parseFloat(rot),size:64,z});
  saveData();
  renderPageStickers();
  if(!_stickerMode)toggleStickerMode();
}

function renderPageStickers(){
  const canvas=document.getElementById('sticker-canvas');
  if(!canvas)return;
  canvas.innerHTML='';
  (S.pageStickers||[]).forEach(stk=>_createStickerEl(canvas,stk));
  const countEl=document.getElementById('stk-count-lbl');
  if(countEl){const jp=S.lang==='jp';countEl.textContent=(S.pageStickers||[]).length+(jp?'個':'  placed');}
}

function _createStickerEl(canvas,stk){
  const el=document.createElement('div');
  el.className='page-sticker';
  el.dataset.id=stk.id;
  el.style.cssText=`left:${stk.x}%;top:${stk.y}%;transform:rotate(${stk.rot||0}deg);z-index:${stk.z||100};font-size:${stk.size||32}px;`;
  if(stk.type==='img'){
    const img=document.createElement('img');
    img.src=stk.content;
    img.style.cssText=`max-width:${stk.size||120}px;width:auto;height:auto;max-height:${Math.round((stk.size||120)*1.8)}px;display:block;pointer-events:none;border-radius:6px;`;
    img.onerror=()=>el.style.display='none';
    el.appendChild(img);
  } else {
    el.textContent=stk.content;
    el.style.fontFamily='var(--ej)';
  }
  const controls=document.createElement('div');
  controls.className='stk-controls';
  controls.style.display='none';
  controls.innerHTML=`
    <button onmousedown="event.stopPropagation();_stkHold('${stk.id}','rotate',-15)" onmouseup="_stkHoldStop()" onmouseleave="_stkHoldStop()" title="rotate left">↺</button>
    <button onmousedown="event.stopPropagation();_stkHold('${stk.id}','rotate',15)" onmouseup="_stkHoldStop()" onmouseleave="_stkHoldStop()" title="rotate right">↻</button>
    <button onmousedown="event.stopPropagation();_stkHold('${stk.id}','size',24)" onmouseup="_stkHoldStop()" onmouseleave="_stkHoldStop()" title="bigger" style="font-size:16px;font-weight:900">＋</button>
    <button onmousedown="event.stopPropagation();_stkHold('${stk.id}','size',-24)" onmouseup="_stkHoldStop()" onmouseleave="_stkHoldStop()" title="smaller" style="font-size:16px;font-weight:900">－</button>
    <button onmousedown="event.stopPropagation()" onclick="event.stopPropagation();stickerLayer('${stk.id}',1)" title="forward">↑</button>
    <button onmousedown="event.stopPropagation()" onclick="event.stopPropagation();stickerLayer('${stk.id}',-1)" title="back">↓</button>
    <button onmousedown="event.stopPropagation()" onclick="event.stopPropagation();deleteStickerById('${stk.id}')" title="remove" style="color:#ef4444">✕</button>`;
  el.appendChild(controls);
  el.addEventListener('click',e=>{
    if(!_stickerMode)return;
    if(e.target.closest('.stk-controls'))return;
    e.stopPropagation();
    e.preventDefault();
    _selectSticker(stk.id);
  });
  el.addEventListener('mousedown',e=>{
    if(e.target.closest('.stk-controls'))return;
    _stkMouseDown(e);
  });
  el.addEventListener('touchstart',e=>{
    if(e.target.closest('.stk-controls'))return;
    _stkTouchStart(e);
  },{passive:false});
  canvas.appendChild(el);
}

function deleteStickerById(id){
  S.pageStickers=(S.pageStickers||[]).filter(s=>s.id!==id);
  saveData();renderPageStickers();
}

function stickerLayer(id,dir){
  const stk=(S.pageStickers||[]).find(s=>s.id===id);
  if(!stk)return;
  stk.z=(stk.z||100)+dir*10;
  saveData();renderPageStickers();
  setTimeout(()=>_selectSticker(id),10);
}

function stickerRotate(id,deg){
  const stk=(S.pageStickers||[]).find(s=>s.id===id);
  if(!stk)return;
  stk.rot=((stk.rot||0)+deg+360)%360;
  saveData();renderPageStickers();
  setTimeout(()=>_selectSticker(id),10);
}

function stickerResize(id,delta){
  const stk=(S.pageStickers||[]).find(s=>s.id===id);
  if(!stk)return;
  stk.size=Math.max(24,Math.min(300,(stk.size||64)+delta));
  saveData();renderPageStickers();
  setTimeout(()=>_selectSticker(id),10);
}

/* Hold-to-repeat for resize/rotate buttons */
let _stkHoldTimer=null;
function _stkHold(id,type,delta){
  const _apply=()=>{
    if(type==='size') stickerResize(id,delta);
    else if(type==='rotate') stickerRotate(id,delta);
  };
  _apply();
  _stkHoldTimer=setTimeout(()=>{
    _stkHoldTimer=setInterval(_apply,80);
  },400);
}
function _stkHoldStop(){
  clearTimeout(_stkHoldTimer);
  clearInterval(_stkHoldTimer);
  _stkHoldTimer=null;
}

function clearPageStickers(){
  const jp=S.lang==='jp';
  if(!(S.pageStickers||[]).length){toast(jp?'ステッカーないよ':'no stickers to clear');return;}
  S.pageStickers=[];saveData();renderPageStickers();
  toast(jp?'全部消した ✦':'cleared all stickers ✦','ok');
}

function _stkMouseDown(e){
  if(!_stickerMode)return;
  if(e.target.closest('.stk-controls'))return;
  e.preventDefault();
  _dragStkEl=e.currentTarget;
  const er=_dragStkEl.getBoundingClientRect();
  _dragStkOffX=e.clientX-er.left;
  _dragStkOffY=e.clientY-er.top;
  _dragStkEl.classList.add('dragging');
  document.addEventListener('mousemove',_stkMouseMove);
  document.addEventListener('mouseup',_stkMouseUp);
}

function _stkMouseMove(e){
  if(!_dragStkEl)return;
  const canvas=document.getElementById('sticker-canvas');
  const cr=canvas.getBoundingClientRect();
  const main=document.querySelector('.main');
  const scrollTop=main?main.scrollTop:0;
  const totalH=main?main.scrollHeight:canvas.offsetHeight;
  // x is % of canvas width, y is % of total scrollable height
  const x=((e.clientX-_dragStkOffX-cr.left)/cr.width)*100;
  const yPx=(e.clientY-_dragStkOffY-cr.top)+scrollTop;
  const y=(yPx/totalH)*100;
  _dragStkEl.style.left=Math.max(0,Math.min(95,x))+'%';
  _dragStkEl.style.top=Math.max(0,Math.min(99,y))+'%';
}

function _stkMouseUp(){
  if(!_dragStkEl)return;
  const id=_dragStkEl.dataset.id;
  const stk=(S.pageStickers||[]).find(s=>s.id===id);
  if(stk){
    stk.x=parseFloat(_dragStkEl.style.left);
    stk.y=parseFloat(_dragStkEl.style.top);
    saveData();
  }
  _dragStkEl.classList.remove('dragging');
  _dragStkEl=null;
  document.removeEventListener('mousemove',_stkMouseMove);
  document.removeEventListener('mouseup',_stkMouseUp);
}

function _stkTouchStart(e){
  if(!_stickerMode)return;
  if(e.target.closest('.stk-controls'))return;
  e.preventDefault();
  const touch=e.touches[0];
  _dragStkEl=e.currentTarget;
  const er=_dragStkEl.getBoundingClientRect();
  _dragStkOffX=touch.clientX-er.left;
  _dragStkOffY=touch.clientY-er.top;
  _dragStkEl.classList.add('dragging');
  document.addEventListener('touchmove',_stkTouchMove,{passive:false});
  document.addEventListener('touchend',_stkTouchEnd);
}

function _stkTouchMove(e){
  if(!_dragStkEl)return;
  e.preventDefault();
  const touch=e.touches[0];
  const canvas=document.getElementById('sticker-canvas');
  const cr=canvas.getBoundingClientRect();
  const main=document.querySelector('.main');
  const scrollTop=main?main.scrollTop:0;
  const totalH=main?main.scrollHeight:canvas.offsetHeight;
  const x=((touch.clientX-_dragStkOffX-cr.left)/cr.width)*100;
  const yPx=(touch.clientY-_dragStkOffY-cr.top)+scrollTop;
  const y=(yPx/totalH)*100;
  _dragStkEl.style.left=Math.max(0,Math.min(95,x))+'%';
  _dragStkEl.style.top=Math.max(0,Math.min(99,y))+'%';
}

function _stkTouchEnd(){
  if(!_dragStkEl)return;
  const id=_dragStkEl.dataset.id;
  const stk=(S.pageStickers||[]).find(s=>s.id===id);
  if(stk){stk.x=parseFloat(_dragStkEl.style.left);stk.y=parseFloat(_dragStkEl.style.top);saveData();}
  _dragStkEl.classList.remove('dragging');
  _dragStkEl=null;
  document.removeEventListener('touchmove',_stkTouchMove);
  document.removeEventListener('touchend',_stkTouchEnd);
}
/* ═══════════════════════════════════════════════════════════════════
   NOW PLAYING — Media Session API passive listener
   ═══════════════════════════════════════════════════════════════════ */
function _initNowPlaying(){
  const bar=document.getElementById('sb-np');
  const titleEl=document.getElementById('np-title');
  if(!bar||!titleEl)return;
  const hint=document.getElementById('np-hint');
  if(hint){
    const jp=S.lang==='jp';
    hint.textContent=jp?'このブラウザで再生中の音楽を自動表示（Spotify Web・YouTube等）':'auto-shows whatever you\'re playing in this browser ✦';
  }
  if(!('mediaSession' in navigator))return;
  let _lastTitle='';
  function _updateNP(){
    try{
      const ms=navigator.mediaSession;
      const meta=ms&&ms.metadata;
      const playing=ms&&ms.playbackState==='playing';
      if(meta&&meta.title&&playing){
        const txt=meta.title+(meta.artist?' — '+meta.artist:'');
        if(txt!==_lastTitle){_lastTitle=txt;titleEl.textContent=txt;}
        bar.style.display='flex';
      } else if(meta&&meta.title&&_lastTitle){
        bar.style.display='flex';
      } else {
        bar.style.display='none';
        _lastTitle='';
      }
    }catch(e){bar.style.display='none';}
  }
  setInterval(_updateNP,2000);
  _updateNP();
}
/* ═══════════════════════════════════════════════════════════════════
   NEW DIARY FEATURES
   ═══════════════════════════════════════════════════════════════════ */

/* ── ENERGY ──────────────────────────────────────────────────────── */
function setEnergy(v) {
  const e = S.diary[dDate] || {}; e.energy = v; S.diary[dDate] = e; saveData();
  document.querySelectorAll('#energyrow .moji').forEach(x => x.classList.toggle('on', parseInt(x.dataset.ev) === v));
  if (typeof anime !== 'undefined') {
    const el = document.querySelector(`#energyrow [data-ev="${v}"]`);
    if (el) anime({ targets: el, scale: [1, 1.35, 1], duration: 380, easing: 'easeOutElastic(1,.5)' });
  }
}

/* ── DIARY TAGS ──────────────────────────────────────────────────── */
function addDiaryTag(raw) {
  const tag = (raw || '').trim().replace(/,/g, '').toLowerCase().slice(0, 28);
  if (!tag) return;
  const e = S.diary[dDate] || {};
  if (!e.tags) e.tags = [];
  if (!e.tags.includes(tag)) { e.tags.push(tag); S.diary[dDate] = e; saveData(); }
  _renderDiaryTagList(e.tags);
  dAuto();
}
function removeDiaryTag(tag) {
  const e = S.diary[dDate] || {};
  if (!e.tags) return;
  e.tags = e.tags.filter(t => t !== tag); S.diary[dDate] = e; saveData();
  _renderDiaryTagList(e.tags);
  dAuto();
}
function _renderDiaryTagList(tags) {
  const el = document.getElementById('d-tags-list'); if (!el) return;
  el.innerHTML = (tags || []).map(t => `<span style="display:inline-flex;align-items:center;gap:3px;background:var(--pl);color:var(--pd);border:1.5px solid var(--brm);border-radius:99px;padding:2px 9px;font-size:11px;font-weight:800;cursor:pointer" onclick="removeDiaryTag('${escH(t)}')" title="${S.lang==='jp'?'タップで削除':'remove'}">${escH(t)} ×</span>`).join('');
}

/* ── DIARY TEMPLATES ─────────────────────────────────────────────── */
const DIARY_TEMPLATES = {
  morning: {
    studied: '',
    good: '',
    struggle: '',
    grat: '',
    tom: '',
    free: "Morning pages — write whatever's in your head right now, no filter ♡\n"
  },
  study: {
    studied: '',
    good: 'What clicked today: ',
    struggle: 'Still fuzzy on: ',
    grat: '',
    tom: 'Before next session I want to: ',
    free: ''
  },
  night: {
    studied: '',
    good: '',
    struggle: '',
    grat: '1. \n2. \n3. ',
    tom: '',
    free: 'Today I felt... '
  },
  blank: { studied: '', good: '', struggle: '', grat: '', tom: '', free: '' }
};
function applyDiaryTemplate(name) {
  const t = DIARY_TEMPLATES[name]; if (!t) return;
  const jp = S.lang === 'jp';
  if (name === 'blank') {
    ['studied','good','struggle','grat','tom','free'].forEach(k => {
      const el = document.getElementById('ds-' + k);
      if (el) { el.value = ''; if (typeof autosize !== 'undefined') autosize.update(el); }
    });
    toast(jp ? 'クリアした ✦' : 'cleared ✦', 'ok');
    _updateDiaryWC(); return;
  }
  // Apply template — fill only empty fields so existing writing is preserved
  let applied = false;
  Object.keys(t).forEach(k => {
    if (!t[k]) return; // skip empty template values
    const el = document.getElementById('ds-' + k);
    if (el && !el.value.trim()) {
      el.value = t[k];
      if (typeof autosize !== 'undefined') autosize.update(el);
      applied = true;
    }
  });
  if (!applied) {
    // All fields already have content — ask to overwrite
    if (confirm(jp ? 'テンプレートで上書きしますか？' : 'Fields already have content — overwrite with template?')) {
      Object.keys(t).forEach(k => {
        if (!t[k]) return;
        const el = document.getElementById('ds-' + k);
        if (el) { el.value = t[k]; if (typeof autosize !== 'undefined') autosize.update(el); }
      });
      toast(jp ? 'テンプレートを適用した ✦' : 'template applied ✦', 'ok');
    }
  } else {
    toast(jp ? 'テンプレートを適用した ✦' : 'template applied ✦', 'ok');
  }
  _updateDiaryWC();
}

/* ── WORD COUNT ──────────────────────────────────────────────────── */
function _updateDiaryWC() {
  const fields = ['studied','good','struggle','grat','tom','free'];
  const total = fields.reduce((s, k) => {
    const el = document.getElementById('ds-' + k);
    return s + (el?.value || '').trim().split(/\s+/).filter(Boolean).length;
  }, 0);
  const goal = S.diaryWordGoal || 0;
  const wcEl = document.getElementById('d-wc'); if (!wcEl) return;
  const wcBar = document.getElementById('d-wc-bar'); 
  const txt = goal > 0 ? `${total}/${goal} words${total >= goal ? ' ✦' : ''}` : `${total} words`;
  wcEl.textContent = txt;
  if (wcBar) wcBar.textContent = txt;
  if (wcEl) wcEl.style.color = goal > 0 && total >= goal ? 'var(--g)' : 'var(--fa)';
}
function setDiaryWordGoal(v) {
  S.diaryWordGoal = parseInt(v) || 0; saveData();
  _updateDiaryWC();
}

/* ── LINKED TASKS ────────────────────────────────────────────────── */
function _buildLinkedTasks() {
  const card = document.getElementById('d-linked-tasks-card');
  const el = document.getElementById('d-linked-tasks'); if (!el || !card) return;
  const pending = S.tasks.filter(t => !t.done);
  if (!pending.length) { card.style.display = 'none'; return; }
  card.style.display = 'block';
  el.innerHTML = pending.slice(0, 8).map(tk => {
    const col = ucol(tk.unitId);
    return `<div class="rrow" style="padding:6px 0"><input type="checkbox" onchange="togTaskFromDiary('${tk.id}',event)"><span style="flex:1;font-size:13px">${pill(tk.unitId)} ${escH(tk.text)}</span></div>`;
  }).join('') + (pending.length > 8 ? `<p style="font-size:10px;color:var(--fa);margin-top:4px">+${pending.length-8} more in Tasks</p>` : '');
}
function togTaskFromDiary(id, e) {
  const tk = S.tasks.find(x => x.id === id); if (!tk) return;
  tk.done = !tk.done; saveData();
  if (tk.done) { confetti(e.target.getBoundingClientRect().left, e.target.getBoundingClientRect().top); _sfx('task'); }
  _buildLinkedTasks();
  rToday();
}

/* ── EXTEND loadDE to handle new fields ─────────────────────────── */
const _origLoadDE = loadDE;
loadDE = function(e) {
  _origLoadDE(e);
  const sleepEl = document.getElementById('ds-sleep'); if (sleepEl) sleepEl.value = e.sleep || '';
  const waterEl = document.getElementById('ds-water'); if (waterEl) waterEl.value = e.water || '';
  const privEl = document.getElementById('ds-private'); if (privEl) privEl.checked = !!e.private;
  document.querySelectorAll('#energyrow .moji').forEach(x => x.classList.toggle('on', parseInt(x.dataset.ev) === e.energy));
  _renderDiaryTagList(e.tags || []);
  _buildLinkedTasks();
  setTimeout(_updateDiaryWC, 80);
  const tagInput = document.getElementById('ds-tag-input');
  if (tagInput) tagInput.placeholder = t('l_tags_ph');
}

/* ── EXTEND saveDiary to persist new fields ──────────────────────── */
const _origSaveDiaryBase = saveDiary;
saveDiary = function(silent) {
  const e = S.diary[dDate] || {};
  const sleepEl = document.getElementById('ds-sleep'); if (sleepEl && sleepEl.value) e.sleep = parseFloat(sleepEl.value) || null;
  const waterEl = document.getElementById('ds-water'); if (waterEl && waterEl.value) e.water = parseInt(waterEl.value) || null;
  const privEl = document.getElementById('ds-private'); if (privEl) e.private = !!privEl.checked;
  S.diary[dDate] = e;
  _origSaveDiaryBase(silent);
  if (!silent) { _sfx('diary'); _checkMilestone(); }
}

/* ── EXTEND renderDiaryEntry with new fields ─────────────────────── */
renderDiaryEntry = function(e, date) {
  const jp = S.lang === 'jp';
  const viewEl = document.getElementById('d-view-mode'); if (!viewEl) return;
  const ENERGY_LABELS = ['','drained','low','okay','good','on fire 🚀'];
  const FIELD_LABELS = {
    studied: { icon:'📚', en:'what i studied', jp:'勉強したこと' },
    good:    { icon:'✨', en:'what went well', jp:'うまくいったこと' },
    struggle:{ icon:'💭', en:'working through', jp:'悩んでいること' },
    grat:    { icon:'🌸', en:'gratitude', jp:'感謝' },
    tom:     { icon:'🎯', en:"tomorrow's focus", jp:'明日の目標' },
    free:    { icon:'📝', en:'free write', jp:'自由記述' },
  };
  let h = `<div class="diary-entry-card">
    <div class="diary-entry-header">
      <div class="diary-entry-meta">
        <div class="diary-entry-date">${fmtDate(date, true)}</div>
        ${e.mood ? `<div class="diary-entry-mood-badge"><span style="font-family:var(--ej);font-size:18px">${MOODS[e.mood]}</span></div>` : ''}
        ${e.energy ? `<div class="diary-entry-mood-badge" title="Energy">${['','🪫','😴','😐','⚡','🚀'][e.energy]}</div>` : ''}
        ${e.hope != null ? `<div class="diary-entry-mood-badge">🌟 ${e.hope}/10</div>` : ''}
        ${e.sleep ? `<div class="diary-entry-mood-badge" title="${jp?'睡眠':'sleep'}">😴 ${e.sleep}${jp?'時間':'h'}</div>` : ''}
        ${e.water ? `<div class="diary-entry-mood-badge" title="${jp?'水分補給':'water'}">💧 ${e.water}${jp?'杯':'×'}</div>` : ''}
        ${e.private ? `<div class="diary-entry-mood-badge">🔒</div>` : ''}
      </div>`;
  if (e.tags?.length) {
    h += `<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px">` +
      e.tags.map(t => `<span style="background:var(--br);color:var(--mu);border-radius:99px;padding:2px 8px;font-size:10px;font-weight:800">#${escH(t)}</span>`).join('') + `</div>`;
  }
  if (S.trackers.length && e.trackers) {
    h += `<div class="diary-entry-trackers">`;
    S.trackers.forEach(tr => {
      const v = (e.trackers||{})[tr.id]; if (v == null) return;
      const pct = Math.round((v/tr.max)*100);
      const col = pct > 70 ? 'var(--g)' : pct > 40 ? 'var(--p)' : 'var(--y)';
      h += `<div class="diary-tracker-chip" style="border-color:${col}40;color:${col}"><span style="font-family:var(--ej)">${tr.e}</span> ${tr.n}: ${v}/${tr.max}</div>`;
    });
    h += `</div>`;
  }
  h += `</div><div class="diary-entry-body">`;
  ['studied','good','struggle','grat','tom','free'].forEach(f => {
    const txt = (e[f] || '').trim(); if (!txt) return;
    const lbl = FIELD_LABELS[f];
    h += `<div class="diary-section">
      <div class="diary-section-label"><span style="font-family:var(--ej)">${lbl.icon}</span> ${jp ? lbl.jp : lbl.en}</div>
      <div class="diary-section-text md-content">${_md(txt)}</div>
    </div>`;
  });
  if (!['studied','good','struggle','grat','tom','free'].some(f => (e[f]||'').trim())) {
    h += `<div style="text-align:center;padding:20px;color:var(--mu);font-size:13px;font-style:italic">${jp ? 'まだなにも ✦' : 'Nothing written yet ✦'}</div>`;
  }
  h += `</div>`;
  if (e.imgUrl) h += `<img class="diary-entry-img" src="${escH(e.imgUrl)}" alt="" onerror="this.style.display='none'">`;
  if (date === tstr()) h += `<button class="diary-edit-btn" onclick="toggleDiaryMode()"><span style="font-family:var(--ej)">✏️</span> ${jp ? '編集する' : 'Edit this entry'}</button>`;
  h += `</div>`;
  viewEl.innerHTML = h;
}

/* ═══════════════════════════════════════════════════════════════════
   ADVANCED SETTINGS FEATURES
   ═══════════════════════════════════════════════════════════════════ */

/* ── HEADING FONT ────────────────────────────────────────────────── */
function buildHeadingFontBtns() {
  const w = document.getElementById('heading-font-btns'); if (!w) return;
  const isJP = S.lang === 'jp';
  const visible = FONTS.filter(f => isJP ? f.jp : !f.jp);
  w.innerHTML = visible.map(f =>
    `<button class="btn bsm${S.headingFont === f.k ? ' bp' : ''}" style="font-family:${f.fnh}" onclick="setHeadingFont('${f.k}')" title="${f.l}">${f.l}</button>`
  ).join('');
}
function setHeadingFont(k) {
  S.headingFont = k;
  const fm = FONTS.find(x => x.k === k);
  if (fm) document.documentElement.style.setProperty('--fnh', fm.fnh);
  saveData();
  buildHeadingFontBtns();
}

/* ── LINE HEIGHT ─────────────────────────────────────────────────── */
const LINE_HEIGHTS = { tight: '1.45', normal: '1.75', relaxed: '2.0', loose: '2.3' };
function setLineHeight(v) {
  ctheme().lineHeight = v; saveCtheme();
  document.documentElement.style.setProperty('--lh', LINE_HEIGHTS[v] || '1.75');
  document.querySelectorAll('[data-lh]').forEach(b => b.classList.toggle('bp', b.dataset.lh === v));
}

/* ── RADIUS FINE CONTROL ─────────────────────────────────────────── */
function setRadiusFine(v) {
  const n = parseInt(v);
  const r = document.documentElement.style;
  r.setProperty('--r', n + 'px');
  r.setProperty('--rm', Math.max(0, n - 6) + 'px');
  r.setProperty('--rs', Math.max(0, n - 10) + 'px');
  const val = document.getElementById('radius-val'); if (val) val.textContent = n + 'px';
  ctheme().radiusFine = n; saveCtheme();
}

/* ── SIDEBAR BLUR & OPACITY ──────────────────────────────────────── */
function setSbOpacity(v) {
  const n = parseInt(v);
  const style = document.getElementById('_sb-opacity-style') || (() => {
    const s = document.createElement('style'); s.id = '_sb-opacity-style'; document.head.appendChild(s); return s;
  })();
  style.textContent = `.sb { opacity: ${n/100} !important; }`;
  const val = document.getElementById('sb-opacity-val'); if (val) val.textContent = n + '%';
  ctheme().sbOpacity = n; saveCtheme();
}
function setSbBlur(v) {
  const n = parseInt(v);
  const style = document.getElementById('_sb-blur-style') || (() => {
    const s = document.createElement('style'); s.id = '_sb-blur-style'; document.head.appendChild(s); return s;
  })();
  style.textContent = `.sb { backdrop-filter: blur(${n}px) !important; -webkit-backdrop-filter: blur(${n}px) !important; }`;
  const val = document.getElementById('sb-blur-val'); if (val) val.textContent = n + 'px';
  ctheme().sbBlur = n; saveCtheme();
}

/* ── SIDEBAR MODE (icon-only) ────────────────────────────────────── */
function setSbMode(m) {
  ctheme().sbMode = m; saveCtheme();
  const hr = document.getElementById('hr');
  hr.setAttribute('data-sbmode', m);
  document.querySelectorAll('[data-sm]').forEach(b => b.classList.toggle('bp', b.dataset.sm === m));
}

/* ── CUSTOM CSS ──────────────────────────────────────────────────── */
function liveCustomCSS(v) {
  let s = document.getElementById('_custom-css');
  if (!s) { s = document.createElement('style'); s.id = '_custom-css'; document.head.appendChild(s); }
  s.textContent = v;
}
function saveCustomCSS() {
  const v = (document.getElementById('custom-css-input')?.value || '').trim();
  liveCustomCSS(v); S.customCSS = v; saveData();
  toast(t('t_css_saved'), 'ok');
}
function clearCustomCSS() {
  const el = document.getElementById('custom-css-input'); if (el) el.value = '';
  liveCustomCSS(''); S.customCSS = ''; saveData();
  toast(t('t_css_cleared'), 'ok');
}
function _applyCustomCSS() {
  if (S.customCSS) liveCustomCSS(S.customCSS);
  const el = document.getElementById('custom-css-input'); if (el) el.value = S.customCSS || '';
}

/* ── OVERRIDE rSettings to populate new controls ────────────────── */
const _origRSettings = rSettings;
rSettings = function() {
  _origRSettings();
  buildHeadingFontBtns();
  const dw = document.getElementById('diary-wg'); if (dw) dw.value = S.diaryWordGoal || '';
  const tt = document.getElementById('tilt-tog'); if (tt) tt.checked = !!S.tilt;
  const st = document.getElementById('sounds-tog'); if (st) st.checked = !!S.sounds;
  document.querySelectorAll('[data-va]').forEach(b => b.classList.toggle('bp', b.dataset.va === (S.viewAnim || 'on')));
  document.querySelectorAll('[data-sm]').forEach(b => b.classList.toggle('bp', b.dataset.sm === (ctheme().sbMode || 'normal')));
  document.querySelectorAll('[data-lh]').forEach(b => b.classList.toggle('bp', b.dataset.lh === (ctheme().lineHeight || 'normal')));
  const rv = ctheme().radiusFine;
  if (rv != null) { const rs = document.getElementById('radius-slider'); if (rs) rs.value = rv; const rvv = document.getElementById('radius-val'); if (rvv) rvv.textContent = rv + 'px'; }
  const sbo = ctheme().sbOpacity;
  if (sbo != null) { const s = document.getElementById('sb-opacity-slider'); if (s) s.value = sbo; const sv = document.getElementById('sb-opacity-val'); if (sv) sv.textContent = sbo + '%'; }
  const sbb = ctheme().sbBlur;
  if (sbb != null) { const s = document.getElementById('sb-blur-slider'); if (s) s.value = sbb; const sv = document.getElementById('sb-blur-val'); if (sv) sv.textContent = sbb + 'px'; }
  _applyCustomCSS();
  _tippyRefresh();
}

/* ── NAV WITH NPROGRESS + SFX + ANIME ───────────────────────────── */
const _baseNav = nav;
nav = function(v) {
  if (typeof NProgress !== 'undefined') NProgress.start();
  _baseNav(v);
  if (typeof NProgress !== 'undefined') setTimeout(() => NProgress.done(), 100);
  _sfx('nav');
  _gsapPageIn(v);
  if (S.viewAnim !== 'off') {
    setTimeout(() => {
      _animIn(`#view-${v} .card`, {});
      _animIn(`#view-${v} .stat`, { delay: anime ? anime.stagger(50, {start:60}) : 0 });
      if (v === 'today' || v === 'stats') setTimeout(() => _animCounter(`#view-${v} .sval`), 150);
      if (v === 'today') _animGreeting();
    }, 80);
  }
  if (S.tilt) setTimeout(_tiltApply, 200);
  _tippyRefresh();
}

/* ── OPENMODAL WITH AUTOSIZE + TIPPY ─────────────────────────────── */
const _origOpenModal = openModal;
openModal = function(html) {
  _origOpenModal(html);
  if (typeof gsap !== 'undefined') {
    const m = document.getElementById('modal');
    if (m) gsap.fromTo(m, {scale:0.88, opacity:0, y:16}, {scale:1, opacity:1, y:0, duration:0.22, ease:'back.out(1.6)', clearProps:'transform,opacity'});
  }
  setTimeout(() => {
    _autosizeAll();
    _tippyRefresh();
    const fp = typeof flatpickr !== 'undefined';
    if (document.getElementById('m-td') && fp) _fpDate('m-td', { minDate: 'today' });
    if (document.getElementById('m-ad') && fp) _fpDate('m-ad', {});
    if (document.getElementById('m-dt') && fp) _fpDate('m-dt', {});
    if (document.getElementById('m-st') && fp) _fpTime('m-st', {});
    if (document.getElementById('m-et') && fp) _fpTime('m-et', {});
  }, 70);
}

/* ── TASK SEARCH WITH FUSE ───────────────────────────────────────── */
const _origRTasks = rTasks;
rTasks = function() {
  const jp = S.lang === 'jp';
  const q = (document.getElementById('task-search')?.value || '').toLowerCase().trim();
  if (!S.units.length) { document.getElementById('tasks-body').innerHTML = `<div class="empty"><span class="ei">⚙️</span>${jp ? '設定からユニットを追加してね' : 'add your units in Settings to get started'}</div>`; return; }
  let h = '';
  S.units.forEach(u => {
    const col = u.color || 'var(--p)';
    let ut = S.tasks.filter(tk => tk.unitId === u.id);
    if (q) ut = _fuseSearch(ut, q, ['text', 'due']);
    const pend = ut.filter(tk => !tk.done), done = ut.filter(tk => tk.done);
    if (!q && !ut.length) return;
    h += `<div class="card" style="margin-bottom:10px"><div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><span class="udot" style="background:${col};width:12px;height:12px"></span><span style="font-size:15px;font-weight:800">${u.n}</span><span style="font-size:12px;color:var(--mu)">${pend.length} ${jp ? '未完' : 'open'}</span><button class="btn bg_ bsm" onclick="openTaskModal('${u.id}')" style="margin-left:auto" title="${jp ? 'タスク追加' : 'Add task'}">+</button></div>`;
    const pr = ['', `<span class="task-pr task-pr-1">!</span>`, `<span class="task-pr task-pr-2">${'!!'}</span>`, `<span class="task-pr task-pr-3">·</span>`];
    if (!ut.length) h += `<div class="empty" style="padding:8px 0;font-size:12px">${jp ? 'なし ✦' : 'Nothing yet ✦'}</div>`;
    h += `<div class="task-sortable-wrap" data-uid="${u.id}">`;
    [...pend].sort((a,b) => (a.priority||3)-(b.priority||3)).forEach(tk => {
      h += `<div class="rrow" data-id="${tk.id}"><input type="checkbox" onchange="togTask('${tk.id}',event)">${pill(tk.unitId)}<span class="t-txt" style="flex:1;font-size:13px">${pr[tk.priority||3]||''} ${escH(tk.text)}${tk.due ? `<span style="font-size:11px;color:var(--mu);margin-left:5px" title="Due: ${fmtDate(tk.due)}">📅 ${fmtDate(tk.due)}</span>` : ''}</span><button class="btn bd" onclick="delTask('${tk.id}')" title="${jp ? '削除' : 'Delete'}">✕</button></div>`;
    });
    h += `</div>`;
    if (done.length) { h += `<details style="margin-top:4px"><summary style="font-size:11px;color:var(--fa);cursor:pointer;padding:4px 0">${done.length} ${jp ? '完了' : 'done'}</summary>`; done.forEach(tk => { h += `<div class="rrow done"><input type="checkbox" checked onchange="togTask('${tk.id}',event)"><span class="t-txt" style="flex:1;font-size:13px">${escH(tk.text)}</span><button class="btn bd" onclick="delTask('${tk.id}')">✕</button></div>`; }); h += '</details>'; }
    h += '</div>';
  });
  if (!h) h = `<div class="empty"><span class="ei">✅</span>${jp ? 'タスクなし' : 'No tasks found'}</div>`;
  document.getElementById('tasks-body').innerHTML = h;
  document.querySelectorAll('.task-sortable-wrap').forEach(wrap => _makeSortable(wrap, wrap.dataset.uid));
  _tippyRefresh();
}

/* ── BRAINDUMP SEARCH WITH FUSE ──────────────────────────────────── */
const _origRBrainDump = rBrainDump;
rBrainDump = function() {
  _origRBrainDump();
  const q = (document.getElementById('bd-search')?.value || '').toLowerCase().trim();
  if (q && typeof Fuse !== 'undefined') {
    const results = _fuseSearch(S.dumps, q, ['text']);
    const list = document.getElementById('bd-list'); if (!list) return;
    if (results.length === 0) { list.innerHTML = `<div class="empty"><span class="ei">🧠</span>No matches</div>`; return; }
  }
  _tippyRefresh();
}

/* ── DIARY WORD GOAL BOOT ────────────────────────────────────────── */
const _origRDiary = rDiary;
rDiary = function() {
  _origRDiary();
  setTimeout(() => { _updateDiaryWC(); _autosizeUpdate(); }, 100);
}

/* ── SOUND HOOKS ─────────────────────────────────────────────────── */
const _origTogTask = togTask;
togTask = function(id, e) { _origTogTask(id, e); if (S.tasks.find(x => x.id === id)?.done) _sfx('task'); }

const _origTogHabit = togHabit;
togHabit = function(hid, date) { _origTogHabit(hid, date); if ((S.habitLog[date]||{})[hid]) _sfx('habit'); }

const _origTmDone = tmDone;
tmDone = function() { _sfx('timer'); _origTmDone(); }

/* ── BOOT ────────────────────────────────────────────────────────── */
const _origBootApp = bootApp;
bootApp = function() {
  _origBootApp();
  _initPickr();
  _initNProgress();
  _initGSAP();
  _initTippy();
  _autosizeAll();
  _applyCustomCSS();
  if (S.headingFont) setHeadingFont(S.headingFont);
  if (ctheme().lineHeight) setLineHeight(ctheme().lineHeight);
  if (ctheme().radiusFine != null) setRadiusFine(ctheme().radiusFine);
  if (ctheme().sbOpacity != null) setSbOpacity(ctheme().sbOpacity);
  if (ctheme().sbBlur != null) setSbBlur(ctheme().sbBlur);
  if (ctheme().sbMode) setSbMode(ctheme().sbMode);
  S.viewAnim = ctheme().viewAnim || 'on';
  const sb = document.getElementById('sound-btn'); if (sb) sb.textContent = S.sounds ? '🔔' : '🔕';
  if (S.tilt) _tiltApply();
  setTimeout(_maybeAutoTour, 2200);
  if (typeof hotkeys !== 'undefined') {
    hotkeys.filter = e => !['INPUT','TEXTAREA','SELECT'].includes((e.target||{}).tagName);
    hotkeys('alt+t,alt+d,alt+h,alt+b,alt+i,alt+c,alt+w,alt+k,alt+a,alt+s,alt+n,alt+x,alt+g', (e, h) => {
      const m = {t:'today',d:'diary',h:'habits',b:'braindump',i:'timer',c:'cal',w:'week',k:'tasks',a:'ass',s:'stats',n:'notes',x:'archive',g:'settings'};
      const k = h.key.replace('alt+','');
      if (m[k]) { nav(m[k]); e.preventDefault(); }
    });
    hotkeys('+,=', () => openQuickAdd());
    hotkeys('esc', () => { closeModal(); closeFocus(); });
    hotkeys('ctrl+s,command+s', e => { e.preventDefault(); saveData(); toast(t('t_saved'),'ok'); _sfx('save'); });
    hotkeys('ctrl+shift+d,command+shift+d', () => toggleDark());
  }
}

/* ═══════════════════════════════════════════════════════════════════
   JAPANESE EXPERIENCE ENHANCEMENTS
   ═══════════════════════════════════════════════════════════════════ */

/* ── WANAKANA — romaji → kana input binding ──────────────────────── */
function _initWanakana() {
  if (typeof wanakana === 'undefined' || S.lang !== 'jp') return;
  const targets = [
    document.getElementById('ds-tag-input'),
    document.getElementById('bd-input'),
    document.getElementById('ds-free'),
    document.getElementById('ds-studied'),
    document.getElementById('ds-good'),
    document.getElementById('ds-struggle'),
    document.getElementById('ds-grat'),
    document.getElementById('ds-tom'),
  ];
  targets.forEach(el => {
    if (!el || el._wanakana) return;
    // Only bind if the user explicitly has JP font set (i.e. writing in Japanese)
    // We don't force-bind — just add the toggle button
    el._wanakana = false;
  });
}

let _wkBound = false;
function toggleWanakana() {
  if (typeof wanakana === 'undefined') { toast('WanaKana not loaded', 'err'); return; }
  if (S.lang !== 'jp') return;
  _wkBound = !_wkBound;
  const textareas = [
    document.getElementById('ds-free'),
    document.getElementById('ds-studied'),
    document.getElementById('ds-good'),
    document.getElementById('ds-struggle'),
    document.getElementById('ds-grat'),
    document.getElementById('ds-tom'),
    document.getElementById('ds-free'),
    document.getElementById('ds-tag-input'),
  ];
  textareas.forEach(el => {
    if (!el) return;
    if (_wkBound) {
      wanakana.bind(el, { IMEMode: true });
    } else {
      wanakana.unbind(el);
    }
  });
  const btn = document.getElementById('wk-toggle-btn');
  if (btn) {
    btn.textContent = _wkBound ? 'かな: オン' : 'かな: オフ';
    btn.classList.toggle('bp', _wkBound);
  }
  toast(_wkBound ? 'かな入力: オン ✦' : 'かな入力: オフ', 'ok');
}

/* ── INJECT WANAKANA TOGGLE BUTTON INTO DIARY TOOLBAR ────────────── */
function _injectWKButton() {
  if (S.lang !== 'jp' || typeof wanakana === 'undefined') return;
  const toolbar = document.querySelector('.diary-template-bar');
  if (!toolbar || document.getElementById('wk-toggle-btn')) return;
  const btn = document.createElement('button');
  btn.id = 'wk-toggle-btn';
  btn.className = 'btn bsm bg_';
  btn.textContent = 'かな OFF';
  btn.title = 'ローマ字でかな入力できるよ';
  btn.onclick = toggleWanakana;
  toolbar.appendChild(btn);
}

/* ── JP READING AIDS — furigana-style tooltips on difficulty words ── */
const JP_STUDY_TERMS = {
  '加重平均': 'かじゅうへいきん',
  '配点': 'はいてん',
  '締め切り': 'しめきり',
  '振り返り': 'ふりかえり',
  '習慣': 'しゅうかん',
  'ストリーク': null,
  '連続': 'れんぞく',
  'アーカイブ': null,
  'ターム': null,
};

/* ── JP RELATIVE DATE DISPLAY ────────────────────────────────────── */
function fmtRelDate(dateStr) {
  if (typeof dayjs !== 'undefined') {
    const d = dayjs(dateStr);
    const diff = d.diff(dayjs(), 'day');
    if (S.lang === 'jp') {
      if (diff === 0) return '今日';
      if (diff === 1) return '明日';
      if (diff === -1) return '昨日';
      if (diff > 0) return `${diff}日後`;
      return `${Math.abs(diff)}日前`;
    } else {
      if (diff === 0) return 'today';
      if (diff === 1) return 'tomorrow';
      if (diff === -1) return 'yesterday';
      if (diff > 0) return `in ${diff}d`;
      return `${Math.abs(diff)}d ago`;
    }
  }
  return dateStr;
}

/* ── OVERRIDE applyJP TO REINIT WANAKANA + INJECT BUTTON ────────── */
const _origApplyJP = applyJP;
applyJP = function() {
  _origApplyJP();
  if (S.lang === 'jp') {
    setTimeout(() => {
      _injectWKButton();
      _initWanakana();
    }, 300);
  } else {
    if (_wkBound) toggleWanakana();
    const btn = document.getElementById('wk-toggle-btn');
    if (btn) btn.remove();
    _wkBound = false;
  }
}

/* ── OVERRIDE bootApp TO INIT JP ENHANCEMENTS ────────────────────── */
const _origBootApp2 = bootApp;
bootApp = function() {
  _origBootApp2();
  if (S.lang === 'jp') {
    setTimeout(() => {
      _injectWKButton();
      _initWanakana();
    }, 400);
  }
}

/* ── JP DIARY PLACEHOLDER TEXT ───────────────────────────────────── */
function _setDiaryPlaceholders() {
  const jp = S.lang === 'jp';
  const phs = {
    'ds-studied': jp ? '今日やったこと、授業とか…' : 'what did you work on today…',
    'ds-good':    jp ? '小さいことでも ✦' : 'even the small stuff counts',
    'ds-struggle':jp ? '書いとくと、ちょっと楽になるよ ♡' : "it's okay if today was hard",
    'ds-grat':    jp ? 'ほんの些細なことでも' : 'anything — coffee, a good song, a moment',
    'ds-tom':     jp ? '明日の自分に残す言葉…' : 'what matters tomorrow…',
    'ds-free':    jp ? 'なんでも。ここはあなただけの場所 ♡' : 'this is just for you. write whatever.',
  };
  Object.entries(phs).forEach(([id, ph]) => {
    const el = document.getElementById(id);
    if (el) el.placeholder = ph;
  });
  const tagInput = document.getElementById('ds-tag-input');
  if (tagInput) tagInput.placeholder = jp ? '入力してEnter…' : 'type + enter…';
}

/* ── HOOK INTO rDiary TO SET PLACEHOLDERS ────────────────────────── */
const _origRDiaryJP = rDiary;
rDiary = function() {
  _origRDiaryJP();
  setTimeout(_setDiaryPlaceholders, 60);
}
