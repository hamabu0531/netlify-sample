// netlify/functions/getTouristSpots.js
const db = require('../../firestore/firestore.js');

exports.handler = async (event, context) => {
    const { prefecture } = event.queryStringParameters;

    try {
        const snapshot = await db.collection(prefecture).get();
        const spots = snapshot.docs.map(doc => doc.data());

        // 最適ルートを計算する仮の関数
        const optimalRoute = calculateOptimalRoute(spots);

        return {
            statusCode: 200,
            body: JSON.stringify({
                spots: spots,
                route: optimalRoute
            }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'データの取得に失敗しました' }),
        };
    }
};

// 最適ルート計算の仮実装
function calculateOptimalRoute(spots) {
    // 仮のルート計算。ここに経路探索アルゴリズムを実装
    return spots;  // 仮にそのまま順番に並べる
}
