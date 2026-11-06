# シフト管理システム（Shift Manager）

## 制作に至った経緯
　親戚に居酒屋経営者がいて、スタッフのシフト制作をExcelで行なっていたが、考慮することが多く
作成に時間がかかっていたため、条件を入れればシフトを自動で生成してくれるアプリを開発して業務効率化を図りたいと思ったのがきっかけ。

## 作品紹介
スタッフの勤務希望提出から管理者のシフト作成までを支援するWebアプリです。

スマートフォンやタブレットからも利用できるよう、カレンダー形式の画面を採用しました。
Firebaseによるログイン認証とクラウドデータ保存にも対応しています。

Firebase Hostingでポートフォリオ用で公開しています。（管理者機能は使えません。管理者機能はデモ版から操作できます。）
　　　https://shift-manager-app-b6015.web.app/
・デモアカウントのメールアドレス/パスワードは別途案内します。


ローカルデモ版URL
　　　https://takayama557.github.io/shift-manager/

<img width="1056" height="931" alt="スクリーンショット 2026-11-02 173750" src="https://github.com/user-attachments/assets/1d0e0ee0-03fd-4cf6-8afc-b5cf6cdb3f43" />
<img width="1041" height="591" alt="スクリーンショット 2026-11-02 173800" src="https://github.com/user-attachments/assets/e130fd93-22a9-496c-bcb5-d0d44262731b" />
<img width="711" height="813" alt="スクリーンショット 2026-11-02 173818" src="https://github.com/user-attachments/assets/22fa8255-5f77-45ca-8e8b-9cf95cd2f48a" />
<img width="716" height="716" alt="スクリーンショット 2026-11-02 173825" src="https://github.com/user-attachments/assets/583793a1-2aa0-4448-8331-71b204a05ee3" />

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




