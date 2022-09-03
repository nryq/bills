<template>
	<v-card>
		<v-card-title>
			Servicios
		</v-card-title>
		<v-card-text>
			<v-data-table
				:headers="headers"
				:items="bills.list"
			>
				<template v-slot:item.actions="{ item }">
					<v-icon
						small
						class="mr-2"
						@click="editItem(item)"
					>
						mdi-pencil
					</v-icon>
					<v-icon
						small
						@click="deleteItem(item)"
					>
						mdi-delete
					</v-icon>
				</template>
			</v-data-table>
		</v-card-text>
		<v-card-actions>

		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	computed:{
		headers(){
			return [
				{
					text: 'Service name',
					align: 'start',
					sortable: true,
					value: 'service',
				},
				{
					text: 'Date',
					align: 'center',
					sortable: true,
					value: 'date',
				},
				{
					text: 'Date due',
					align: 'center',
					sortable: true,
					value: 'date_due',
				},
				{
					text: 'Actions',
					align: 'center',
					sortable: false,
					value: 'actions',
				},
			]
		}
	},
	data() {
		return {
			bills:{
				list:[
					{
						id: 1,
						service: 'test',
						date: 'sadsada',
						date_due: 'sadasdasd'
					}
				],
				loading: false
			}
		}
	},
	methods: {
		async editItem(item){

		}
		,async deleteItem(item){

		}
	},
	mounted() {
		console.log( 'this.$fire.auth', this.$fire.auth )
	},
}
</script>

<style>

</style>