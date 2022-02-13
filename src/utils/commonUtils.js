import { ElMessage } from 'element-plus'


export default class utils {
  static printMessage(result) {
    if (result?.message !== '' && result?.message !== undefined) {
      let formated_msg = '';
      if (typeof result.message === 'string' || result.message instanceof String) {
        formated_msg = result.message;
      } else {
        formated_msg = (
          <div>
            {Object.values(result.message).map((item, index) => {
              if (Array.isArray(item)) {
                return item.map((i, key) => <div key={key}>{i}</div>);
              }
              return <div key={index}>{item}</div>;
            })}
          </div>
        );
      }
      ElMessage(formated_msg);
    } else {
      ElMessage(result.message);
    }
  }
}
