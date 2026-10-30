# シフト管理システム（Shift Manager）

スタッフの勤務希望提出から管理者のシフト作成までを支援するWebアプリです。

スマートフォンやタブレットからも利用できるよう、カレンダー形式の画面を採用しました。
Firebaseによるログイン認証とクラウドデータ保存にも対応しています。

Firebase Hostingでポートフォリオ用で公開しています。（管理者機能は使えません。管理者機能はデモ版から操作できます。）
　　　https://shift-manager-app-b6015.web.app/
・デモアカウントのメールアドレス/パスワードは別途案内します。


ローカルデモ版URL
　　　https://takayama557.github.io/shift-manager/

<img width="983" height="945" alt="スクリーンショット 2026-10-29 163512" src="https://github.com/user-attachments/assets/78c18584-8113-4ec6-a724-da7da4762a64" />
<img width="952" height="885" alt="スクリーンショット 2026-10-29 163522" src="https://github.com/user-attachments/assets/5f16a049-ad6b-43e4-9cd0-a366317590f7" />


## 主な機能

* ログイン認証： Firebase Authenticationを利用したユーザー認証
* シフト自動生成： 設定した条件に基づくシフトの自動生成
* スタッフ管理： スタッフ情報の管理
* 権限管理： 管理者と一般利用者で利用可能な機能を制御
* データ共有： Cloud Firestoreを利用したシフト情報の共有
* バックアップ・復元： JSON形式によるデータのエクスポート・インポート


## 使用技術

| 技術 | 用途 |
|---|---|
| HTML / CSS | 画面構成・デザイン |
| JavaScript | 画面操作・データ処理・シフト自動生成 |
| Firebase Authentication | ログイン認証 |
| Cloud Firestore | データ保存・共有 |
| Firebase Hosting | Webアプリの公開 |
| Node.js / Express | ローカル開発用サーバー |
| Git / GitHub | ソースコード管理 |

## 権限設計

| 操作 | 管理者 | 一般利用者 |
|---|:---:|:---:|
| スタッフ情報の閲覧・編集 | ○ | ○ |
| 勤務希望の提出・編集 | ○ | ○ |
| シフトの閲覧 | ○ | ○ |
| シフトの自動生成 | ○ | × |
| 生成条件・休業日の設定 | ○ | × |

管理者と一般利用者で利用できる機能を分け、業務に応じた操作ができるようにしています。

※ 現在は一般利用者同士でデータを共有する設計です。個人ごとの編集権限は今後の改善課題としています。


## システム構成

```text
利用者のブラウザ
       |
       v
 Firebase Hosting
  HTML / CSS / JavaScript
       |
       +----------------------+
       |                      |
       v                      v
Firebase Authentication  Cloud Firestore
    ログイン認証             データ保存
```

## 制作で工夫したこと

- 既存のシフト管理機能を維持しながら、Firebaseによるログイン・データ共有機能を追加
- 管理者と一般利用者の役割に合わせて機能を制御
- シフト自動生成後も手動で調整できるように設計
- JSON形式のバックアップ・復元機能を実装

## 今後の改善予定


- 利用者ごとの個別アカウント・編集権限の実装
- Java / Spring Bootを利用したバックエンド開発への発展




