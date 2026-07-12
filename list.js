// =====================================================
// 苦手要素リスト データファイル
// このファイルは editor.html（リスト編集ツール）で生成できます。
// 手動で編集する場合も、id は絶対に変更・再利用しないでください。
// =====================================================
window.NIGATE_LIST = {
  version: 2,
  updated: "2026-07-12",
  categories: [
    {
      id: "vio", name: "暴力・身体損壊", tags: true,
      items: [
        { id: "vio01", label: "流血・出血", since: 1 },
        { id: "vio02", label: "グロテスク（身体損壊・臓器など）", since: 1 },
        { id: "vio03", label: "拷問・虐待", since: 1 },
        { id: "vio04", label: "身体欠損・後遺症が残る展開", since: 1 },
        { id: "vio05", label: "死体（生々しい・詳細なもの）", since: 1 },
        { id: "vio06", label: "カニバリズム（人肉食）", since: 1 }
      ]
    },
    {
      id: "los", name: "死・喪失", tags: true,
      items: [
        { id: "los01", label: "担当キャラクターの死亡（ロスト）の可能性がある", since: 1 },
        { id: "los02", label: "担当キャラクターの死亡が確定・前提のシナリオ", since: 1 },
        { id: "los03", label: "NPCの死亡", since: 1 },
        { id: "los04", label: "親しい間柄のNPC（仲間・恩人等）の死", since: 1 },
        { id: "los05", label: "自殺・自傷", since: 1 },
        { id: "los06", label: "看取り・死別", since: 1 },
        { id: "los07", label: "他プレイヤーのキャラクターの確定ロスト", since: 1 }
      ]
    },
    {
      id: "men", name: "精神的苦痛・追い詰め", tags: true,
      items: [
        { id: "men01", label: "精神的に追い詰められる展開", since: 1 },
        { id: "men02", label: "洗脳・精神支配", since: 1 },
        { id: "men03", label: "記憶の喪失・改竄", since: 1 },
        { id: "men04", label: "発狂・人格の変化（SANチェック起因等）", since: 1 },
        { id: "men05", label: "救いのない結末（バッドエンド固定）", since: 1 },
        { id: "men06", label: "選択で回避できない理不尽な悲劇", since: 1 },
        { id: "men07", label: "どちらかを見捨てる等、重い選択の強制", since: 1 }
      ]
    },
    {
      id: "pvp", name: "対人・対立（PvP等）", tags: true,
      items: [
        { id: "pvp01", label: "キャラクター同士の対立・戦闘", since: 1 },
        { id: "pvp02", label: "裏切り・裏切る役割の存在", since: 1 },
        { id: "pvp03", label: "秘匿ハンドアウトによる対立構造", since: 1 },
        { id: "pvp04", label: "投票・処刑等でキャラクターが排除される展開", since: 1 },
        { id: "pvp05", label: "嘘をつくことを強制される役割", since: 1 },
        { id: "pvp06", label: "疑心暗鬼を誘発する構造（全員が容疑者等）", since: 1 }
      ]
    },
    {
      id: "rom", name: "恋愛・性的要素", tags: true,
      items: [
        { id: "rom01", label: "恋愛要素（回避可能）", since: 1 },
        { id: "rom02", label: "恋愛要素（担当キャラクターに固定・強制）", since: 1 },
        { id: "rom03", label: "性的な内容・示唆", since: 1 },
        { id: "rom04", label: "性暴力の示唆", since: 1 },
        { id: "rom05", label: "NPCからの過度な好意・執着・ストーカー的言動", since: 1 }
      ]
    },
    {
      id: "pho", name: "恐怖・生理的嫌悪", tags: false,
      items: [
        { id: "pho01", label: "虫", since: 1 },
        { id: "pho02", label: "蜘蛛", since: 1 },
        { id: "pho03", label: "蛇・爬虫類", since: 1 },
        { id: "pho04", label: "閉所", since: 1 },
        { id: "pho05", label: "暗所", since: 1 },
        { id: "pho06", label: "高所", since: 1 },
        { id: "pho07", label: "水・溺れる場面", since: 1 },
        { id: "pho08", label: "火災・焼死", since: 1 },
        { id: "pho09", label: "人形・マネキン", since: 1 },
        { id: "pho10", label: "集合体", since: 1 },
        { id: "pho11", label: "目・眼球", since: 1 },
        { id: "pho12", label: "歯・口腔", since: 1 },
        { id: "pho13", label: "注射・針・医療器具", since: 1 },
        { id: "pho14", label: "びっくり演出（急な大音量・画像）", since: 1 },
        { id: "pho15", label: "追跡・逃走劇（追われる恐怖）", since: 1 }
      ]
    },
    {
      id: "soc", name: "差別・社会的テーマ", tags: true,
      items: [
        { id: "soc01", label: "差別・偏見", since: 1 },
        { id: "soc02", label: "いじめ", since: 1 },
        { id: "soc03", label: "宗教・カルト", since: 1 },
        { id: "soc04", label: "戦争・虐殺", since: 1 },
        { id: "soc05", label: "貧困・格差", since: 1 },
        { id: "soc06", label: "実在の事件・事故・災害を想起させる題材", since: 1 }
      ]
    },
    {
      id: "fam", name: "家族・子ども・動物", tags: true,
      items: [
        { id: "fam01", label: "子どもへの危害・死亡", since: 1 },
        { id: "fam02", label: "動物への危害・死亡", since: 1 },
        { id: "fam03", label: "家庭内の虐待・ネグレクト", since: 1 },
        { id: "fam04", label: "妊娠・出産に関わる題材", since: 1 },
        { id: "fam05", label: "親子関係・家族関係の重い題材", since: 1 }
      ]
    },
    {
      id: "med", name: "医療・身体・依存", tags: true,
      items: [
        { id: "med01", label: "病気・闘病", since: 1 },
        { id: "med02", label: "精神疾患", since: 1 },
        { id: "med03", label: "手術・医療行為（詳細なもの）", since: 1 },
        { id: "med04", label: "薬物・アルコール等の依存症", since: 1 },
        { id: "med05", label: "嘔吐・排泄など", since: 1 }
      ]
    },
    {
      id: "sys", name: "進行・演出由来", tags: false,
      items: [
        { id: "sys01", label: "時間制限・リアルタイム進行のプレッシャー", since: 1 },
        { id: "sys02", label: "選択ミスによる「詰み」があり得る構造", since: 1 },
        { id: "sys03", label: "メタ演出（第四の壁越え・プレイヤーへの直接干渉）", since: 1 },
        { id: "sys04", label: "長時間の重い空気が続く進行", since: 1 },
        { id: "sys05", label: "アドリブ・ロールプレイ力を強く要求される場面", since: 1 },
        { id: "sys06", label: "生成AI画像の使用", since: 2 }
      ]
    }
  ]
};
