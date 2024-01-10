import './App.scss';
import { MaxRectsPacker } from 'maxrects-packer';

function App() {
    const options = {
        smart: false,
        pot: false,
        square: false,
        allowRotation: false,
        tag: false,
        border: 0,
    };

    let packer = new MaxRectsPacker(200, 400, 0, options);

    let block5x7 = [];
    for (let i = 0; i < 50; i++) {
        block5x7.push({ width: 50, height: 70, id: '5"x7"' });
    }
    let block3x4_5 = [];
    for (let i = 0; i < 70; i++) {
        block3x4_5.push({ width: 30, height: 45, id: '3"x4.5"' });
    }
    let block9x2 = [];
    for (let i = 0; i < 50; i++) {
        block9x2.push({ width: 90, height: 20, id: '9"x2"' });
    }

    let blockArr = [...block5x7, ...block3x4_5, ...block9x2];

    packer.addArray(blockArr);

    let pages = packer.bins.map((binsItem, i) => {
        let blockArr = binsItem.rects.map((rectsItem, i) => {
            return (
                <div
                    style={{
                        width: rectsItem.width,
                        height: rectsItem.height,
                        top: rectsItem.y,
                        left: rectsItem.x,
                    }}
                    className='border-[1px] border-black absolute bg-slate-400 text-[8px]/[8px] flex justify-center items-center'
                    key={i}
                >
                    {rectsItem.id}
                </div>
            );
        });

        return (
            <div
                className={` w-[200px] h-[400px] border-[1px] border-black relative mx-auto mb-5`}
                key={i}
            >
                {blockArr}
            </div>
        );
    });

    return <div className={` flex flex-wrap justify-end pt-[50px]`}>{pages}</div>;
}

export default App;
