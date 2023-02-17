function Calculator() {
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">0</div>

        <div className="operators">
          <button type="button" className="ope Divide">
            ÷
          </button>
          <button type="button" className="ope Multiply">
            x
          </button>
          <button type="button" className="ope Minus">
            -
          </button>
          <button type="button" className="ope Plus">
            +
          </button>
          <button type="button" className="ope Equal">
            =
          </button>
        </div>

        <div className="digits">
          <button type="button" className="delete delete">
            AC
          </button>
          <button type="button" className="delete clear">
            +/-
          </button>
          <button type="button" className="percentage">
            %
          </button>
          <button type="button" className="seven">
            7
          </button>
          <button type="button" className="eight">
            8
          </button>
          <button type="button" className="nine">
            9
          </button>
          <button type="button" className="four">
            4
          </button>
          <button type="button" className="five">
            5
          </button>
          <button type="button" className="six">
            6
          </button>
          <button type="button" className="one">
            1
          </button>
          <button type="button" className="two">
            2
          </button>
          <button type="button" className="three">
            3
          </button>
          <button type="button" className="zero">
            0
          </button>
          <button type="button" className="decimal">
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
