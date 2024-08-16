from datetime import datetime, date
import pandas as pd
from airflow.operators.bash import BashOperator
from airflow.operators.python import PythonOperator
from airflow import DAG

default_args = {
    'owner': 'Dave',
    'depends_on_past': False,
    'email_on_failure': False,
    'email_on_retry': False,
    'retries': 0,
    'catchup': False,
    'start_date': datetime(2024, 8, 15)
}

with DAG(
    dag_id = 'transform_dag',
    description='transform dag',
    schedule_interval=None,
    default_args=default_args
) as dag:

    def transform_data():
        today=date.today()
        df = pd.read_csv('/workspaces/hands-on-introduction-data-engineering-4395021/lab/orchestrated/airflow-extract-data.csv')
        generic_type_df = df[df['Type'] == 'generic']
        generic_type_df['Date'] = today.strftime('%Y-%m-%d')
        generic_type_df.to_csv('/workspaces/hands-on-introduction-data-engineering-4395021/lab/orchestrated/airflow-modified-data.csv', index=False)
     
    task1 = BashOperator(
        task_id='extract_task',
        bash_command='wget -c https://raw.githubusercontent.com/LinkedInLearning/hands-on-introduction-data-engineering-4395021/main/data/top-level-domain-names.csv -O /workspaces/hands-on-introduction-data-engineering-4395021/lab/orchestrated/airflow-extract-data.csv'
    )
   
    task2 = PythonOperator(
         task_id='transform_task',
         python_callable=transform_data,
         dag=dag
   )

    task1 >> task2