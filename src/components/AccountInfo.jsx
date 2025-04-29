import { useState } from "react";
import useCopyClipboard from "../hooks/useCopyClipboard";

function AccountInfo() {
    const groomCopy = useCopyClipboard();
    const brideCopy = useCopyClipboard();

    const groomAccount = {
        name: "이석민",
        bank: "세봉은행",
        number: "1975-0218-0814"
    };

    const brideAccount = {
        name: "김서연",
        bank: "세봉은행",
        number: "2007-0814-0218"
    };

    const [copiedName, setCopiedName] = useState('');
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (who, text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopiedName(who);
                setCopied(true);

                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            })
            .catch(() => {
                alert('복사에 실패했습니다.');
            });
    };

    return (
        <section>
            <h2>마음 전하실 곳</h2>
            <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                <p><strong>신랑 {groomAccount.name}</strong></p>
                <p>{groomAccount.bank} {groomAccount.number}</p>
                <button onClick={() => groomCopy.copy(groomAccount.number)}>복사하기</button>
                {groomCopy.copied && (
                    <p style={{ color: 'green' }}>계좌번호가 복사되었습니다.</p>
                )}
            </div>
            <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                <p><strong>신부 {brideAccount.name}</strong></p>
                <p>{brideAccount.bank} {brideAccount.number}</p>
                <button onClick={() => brideCopy.copy(brideAccount.number)}>복사하기</button>
                {brideCopy.copied && (
                    <p style={{ color: 'green' }}>계좌번호가 복사되었습니다.</p>
                )}
            </div>
        </section>
    );
}

export default AccountInfo;