import { useState } from 'react';
import { Icon } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';

const DatePicker = () => {

	const [date, setDate] = useState('');

	return(
		<View style={styles.container}>
			<View style={styles.centerized}
				<View style={styles.authBox}>
					<View style={styles.logoBox}>
						<Icon color='#fff' 
							name='comments' 
							type='font-awesome' 
							size={40}/>
					</View>
					<DatePicker
						style={{ width: '100%' }}
						date={date}
						placeholder='Seleccionar Fecha'
						format='DD-MM-YYYY'
						confirmBtnText='Confirmar'
						cancelBtnText='Cancelar'
						onDateChange={(d) => setDate(d)}
					/>
				</View
			</View>
		</View>
	);
}
export default DatePicker;

const styles = Stylesheet.create({
	container: {
		flex: 1,
		position: 'relative',
		backgroundColor: '#66C3FE',
	},
	centerizedView: {
		width: '100%',
		top: '15%',
	},
	authBox: {
		width: '80%',
		backgroundColor: '#fafafa',
		borderRadius: 20,
		alignSelf: 'center',
		paddingHorizontal: 14,
		paddingBottom: 30,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	logoBox: {
		width: 80,
		height: 80,
		backgroundColor: '#eb4d4b',
		borderRadius: 1000,
		alignSelf: 'center',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		top: -50,
		marginBottom: -50,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
	},
});