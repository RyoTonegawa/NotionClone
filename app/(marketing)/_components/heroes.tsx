import Image from "next/image";

const Heroes = () => {
    return ( 
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
                    <Image
                    src='/typeScript.png'
                    // 画像が親要素の幅と高さに合わせて自動的にサイズ調整されます。object-fitスタイルを使用して画像の表示方法を制御することが多い
                    fill
                    // CSSのobject-fit: contain;を適用し、画像が親要素のサイズに収まるように表示されることを意味
                    className="object-contain"
                    alt="sawaratuki typescript Image"
                    />
                </div>
                <div className="relative h-[400px] w-[400px] hidden md:block">
                <Image
                    src='/typeScript.png'
                    fill
                    className="object-contain"
                    alt="sawaratuki typescript Image"
                    />
                </div>
            </div>
        </div>
     );
}

export default Heroes;