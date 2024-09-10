import React from 'react';

function Profile() {
  const dataArray = [
    { name: '田中', age: 25, city: '東京' },
    { name: '高橋', age: 30, city: '大阪' },
    { name: '佐藤', age: 35, city: '北海道' },
  ];
  return (
    <div>
      <h1>わたしです、はじめまして。</h1>
      <p>プロフィールテストページです。</p>
      <p>プロフィールテストページです。</p>
      <p>プロフィールテストページです。</p>
      <img src="./images/i_400x400.jpg" alt='My face'></img>

      <table>
        <tbody>
          {dataArray.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <table width="90%" cellpadding="6" bgcolor="#E1F0F0" cellspacing="5">
        <tbody>
          <tr>
            <td colspan="2" bgcolor="#feefda" width="100" nowrap="">名前</td>
            <td bgcolor="#FFFFEE">デリバード</td>
          </tr>
          <tr>
            <td colspan="2" bgcolor="#feefda">年齢</td>
            <td bgcolor="#FFFFEE">２９歳</td>
          </tr>
          <tr>
            <td colspan="2" bgcolor="#feefda">居住地</td>
            <td bgcolor="#FFFFEE">大阪</td>
          </tr>
          <tr>
            <td colspan="2" bgcolor="#feefda">職業</td>
            <td bgcolor="#FFFFEE">システムエンジニア</td>
          </tr>
          <tr>
            <td colspan="2" bgcolor="#feefda">経歴</td>
            <td bgcolor="#FFFFEE">システムエンジニア歴４年目</td>
          </tr>
          <tr>
            <td colspan="2" bgcolor="#feefda">言語</td>
            <td bgcolor="#FFFFEE">Java, JavaScript, TypeScript, OracleSql</td>
          </tr>
          <tr>
            <td colspan="2" bgcolor="#feefda">フレームワーク</td>
            <td bgcolor="#FFFFEE">Spring boot, Vue.js, Express.js, React</td>
          </tr>

          <tr>
            <td colspan="2" bgcolor="#feefda">特技</td>
            <td bgcolor="#FFFFEE">アマチュア無線４級</td>
          </tr>
          <tr>
            <td colspan="2" bgcolor="#feefda">尊敬する人</td>
            <td bgcolor="#FFFFEE">藤田田（デンと発音してください）</td>
          </tr>
          <tr>
            <td colspan="2" bgcolor="#feefda">理想の男性</td>
            <td bgcolor="#FFFFEE">キバヤシ</td>
          </tr>
          <tr>
            <td colspan="2" bgcolor="#feefda">好きな漫画</td>
            <td bgcolor="#FFFFEE">漂流教室</td>
          </tr>
          <tr>
            <td colspan="2" bgcolor="#feefda">好きなにおい</td>
            <td bgcolor="#FFFFEE">スルメが焼けるにおい</td>
          </tr>
          <tr>
            <td colspan="2" bgcolor="#feefda">好きな歌</td>
            <td bgcolor="#FFFFEE">死ね死ね団のテーマ</td>
          </tr>
          <tr>
            <td colspan="2" bgcolor="#feefda">座右の銘</td>
            <td bgcolor="#FFFFEE">「せっかくだから」 </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Profile;
