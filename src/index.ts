import { BN, Idl, IdlAccounts, Program } from '@coral-xyz/anchor';
import idl from './idl/make_now.json'
import { Connection, Keypair, PublicKey, SystemProgram, clusterApiUrl, sendAndConfirmTransaction } from '@solana/web3.js';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  getMint,
  getOrCreateAssociatedTokenAccount,
} from '@solana/spl-token';
import { bs58 } from '@coral-xyz/anchor/dist/cjs/utils/bytes';

let rpcEndpoint: string;

const args = process.argv.slice(2);

const networkIndex = args.indexOf('--network');
if (networkIndex !== -1 && args[networkIndex + 1]) {
  const network = args[networkIndex + 1];
  if (network == 'devnet') {
    rpcEndpoint = clusterApiUrl('devnet');
  } else {
    rpcEndpoint = clusterApiUrl('mainnet-beta');
  }
} else {
  rpcEndpoint = clusterApiUrl('mainnet-beta');
}

const connection = new Connection(rpcEndpoint, 'confirmed');
const programId = new PublicKey('G8Jeqq2C7vkvCEAsz2K3vymzcPFJNxUsQ5YN9eLBLRud');


//TODO Set private key
const signerPubkey = new PublicKey("GFbPHKqcqSxUtPkPrRKLecEYVmijELD4ibEsxN7typJs");
const signerPrivatekey = bs58.decode("");

export const signer = new Keypair({
  publicKey: signerPubkey.toBytes(),
  secretKey: signerPrivatekey,
});

//TODO: change to correct master 
const master = new PublicKey('CcAM6pfUszTPNXTRfAfZLgBmfr7BsGEX4QKQsntuEh6e');

//TODO: change to correct leader 
const leader = new PublicKey('ADoyoTdJKauKNSjNwARDeK698DsHNLNZagtGYXURcUsF');

//TODO: change to correct referral 
const referral = new PublicKey('6RrM41YjBdpjXmf5QHzLTyu67udXZH2SbLQadtVRgPf');

const makeNowProgram = new Program(idl as any, programId, { connection: connection });

async function main() {
  
  const mint = new PublicKey('GmP16fX78ca4QUXLgME4nZVjEYq5k3yUNFnn39L94x3H');

  const mintDecimal = await getMintDecimal(mint);

  //TODO Set amount
  const amount = new BN(10 * 10 ** mintDecimal);

  const buyTx = await buy(amount, signer.publicKey, mint);

  const tx = await sendAndConfirmTransaction(connection, buyTx, [signer]);
  console.log('Buy coin at tx: ', tx);

}

async function getMintDecimal( mint: PublicKey) {
  const mintInfo = await getMint(connection, mint);
  
  return mintInfo.decimals

}

async function buy(amount: BN, buyer: PublicKey, mint: PublicKey) {

  const configAccount = new PublicKey('3b7ZaViXj6entcRC3o3dz9ZmGSPGrFGaEx5y9fBmaqi7');
  const bondingCurve = new PublicKey('98ZaoxWkgXTKP5EUFpnpSUHdkSuGjXgYXYaUYaHXSuQF');
  const associateBondingCurve = new PublicKey('AYFKdkzGCFzMkrBkcmG8E1asH8Vjxd2SnMox2gcHCvwN');
  const feeReceiver = new PublicKey('8tA49tvPiTCkeVfuTms1F2nwVg6FWpQsQ8eNZ4g9vVQF');
  const fund = new PublicKey('AEBoqzQU3fDYzhVmaRedcNeVcQQSMEqCAuQ2A7pYNEd7');

  const associateUser = await getOrCreateAssociatedTokenAccount(connection, signer, mint, buyer, true );

  const buyTx = await makeNowProgram.methods.buy(amount).accounts({
    buyer: buyer,
    config: configAccount,
    mint: mint,
    bondingCurve: bondingCurve,
    associateBondingCurve: associateBondingCurve,
    associateUser: associateUser.address, 
    feeReceiver: feeReceiver,
    fund: fund,
    master: master,
    leader: leader,
    referral: referral,
    token: TOKEN_PROGRAM_ID,
    associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
    systemProgram: SystemProgram.programId
  }).transaction();
  
  return buyTx
}

main()