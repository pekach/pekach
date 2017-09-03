import { StreamReq } from '../../../../shared/models/goodgameru';

const STREAMS_JSON = '{"game":false,"channels":{"0":{"id":1657,"title":"XCOM 2: War of the Chosen - Legend - Iroman","link":"https://goodgame.ru/channel/eSnQ_Duke/","streamer":"eSnQ_Duke","viewers":96,"preview":"//hls.goodgame.ru/previews/1657_240.jpg","poster":"https://goodgame.ru/files/logotypes/ch_1657_9NkK_logo.png","premium":true,"streamkey":"1657","channelkey":"eSnQ_Duke","status":true},"1":{"id":2022,"title":"2по100 или рег. на турнир от HyperX","link":"https://goodgame.ru/channel/AhiLpnz/","streamer":"AhiLpnz","viewers":84,"preview":"//hls.goodgame.ru/previews/2022_240.jpg","poster":"https://goodgame.ru/files/logotypes/ch_2022_3jRm_logo.jpg","premium":true,"streamkey":"2022","channelkey":"AhiLpnz","status":true},"2":{"id":5469,"title":"Совы не в разговаривают","link":"https://goodgame.ru/channel/OwlsDontTalk/","streamer":"OwlsDontTalk","viewers":62,"preview":"//hls.goodgame.ru/previews/5469_240.jpg","poster":"https://goodgame.ru/files/logotypes/ch_5469_CuKg_logo.png","premium":true,"streamkey":"5469","channelkey":"OwlsDontTalk","status":true}}}'

export const RAW_STREAMS: StreamReq = JSON.parse(STREAMS_JSON);
