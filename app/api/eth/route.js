import { ethers } from 'ethers';

const RPC_URL = 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID';

export async function GET(request) {
    try {
        const provider = new ethers.JsonRpcProvider(RPC_URL);

        const blockNumber = await provider.getPermission();
        

        return new Response(JSON.stringify({ blockNumber }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Đã xảy ra lỗi khi gọi RPC' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
